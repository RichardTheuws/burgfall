// Boss wiring: every boss a level asks for must exist in BOSS_TYPES and have
// its model and voice line on disk. An unknown type silently falls back to the
// first boss as a placeholder box (that shipped live for episodes 2 and 3).
// boss.js imports three from a CDN, so its BOSS_TYPES block is read as text.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';

const root = new URL('..', import.meta.url).pathname;
const src = readFileSync(`${root}js/game/boss.js`, 'utf8');
const block = src.slice(src.indexOf('export const BOSS_TYPES'), src.indexOf('// ── Boss AI States'));

const types = {};
for (const m of block.matchAll(/^ {4}(\w+): \{([\s\S]*?)^ {4}\},/gm)) {
    const body = m[2];
    types[m[1]] = {
        voice: body.match(/voice: '(\w+)'/)?.[1] ?? null,
        nextPhase: body.match(/nextPhase: '(\w+)'/)?.[1] ?? null,
    };
}

const bossLevels = readdirSync(`${root}assets/levels`)
    .filter((f) => /^e\d+m\d+\.json$/.test(f))
    .map((f) => ({ f, data: JSON.parse(readFileSync(`${root}assets/levels/${f}`, 'utf8')) }))
    .filter(({ data }) => data.isBossLevel && data.boss);

test('BOSS_TYPES parsed', () => {
    assert.ok(Object.keys(types).length >= 8, `found ${Object.keys(types)}`);
});

test('every boss level references a known boss type', () => {
    assert.equal(bossLevels.length, 7);
    for (const { f, data } of bossLevels) {
        assert.ok(types[data.boss.type], `${f}: unknown boss type "${data.boss.type}"`);
        if (data.bossType) assert.equal(data.bossType, data.boss.type, `${f}: bossType mismatch`);
    }
});

test('every boss type has a model, its voice line and a valid next phase', () => {
    for (const [key, t] of Object.entries(types)) {
        assert.ok(existsSync(`${root}assets/models/animated/${key}.glb`), `missing model for ${key}`);
        if (t.voice) assert.ok(existsSync(`${root}assets/audio/voices/${t.voice}.mp3`), `missing voice ${t.voice}`);
        if (t.nextPhase) assert.ok(types[t.nextPhase], `${key}: unknown nextPhase ${t.nextPhase}`);
    }
});

test('main.js preloads a model and a voice for every boss', () => {
    const main = readFileSync(`${root}js/main.js`, 'utf8');
    for (const [key, t] of Object.entries(types)) {
        assert.match(main, new RegExp(`\\b${key}: '${key}'`), `bossModelMap lacks ${key}`);
        if (t.voice) assert.match(main, new RegExp(`'${t.voice}'`), `voiceFiles lacks ${t.voice}`);
    }
});
