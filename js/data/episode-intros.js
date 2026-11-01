/**
 * episode-intros.js — Cinematic Data for Episode Introductions
 *
 * Pre-written cinematic beat sequences for all 7 Burgfall episodes.
 * Each entry is an array of beats consumed by the Cinematics system.
 */

export const EPISODE_INTROS = {
    1: [
        { type: 'fade', color: '#000', duration: 0.5 },
        { type: 'text', text: '1943', style: 'title', duration: 2 },
        { type: 'text', text: 'Burg Kaltenfels, deep in the Bavarian Alps.\nA medieval fortress, repurposed by the SS\nas a high-security prison.', style: 'narration', duration: 5 },
        { type: 'text', text: 'No one has ever escaped.', style: 'narration', duration: 3 },
        { type: 'pause', duration: 1 },
        { type: 'text', text: 'EPISODE 1', style: 'episode', duration: 2 },
        { type: 'text', text: 'Ausbruch', style: 'subtitle', duration: 3 },
        { type: 'fade', color: 'transparent', duration: 1 },
    ],
    2: [
        { type: 'fade', color: '#000', duration: 0.5 },
        { type: 'text', text: 'Allied intelligence has intercepted disturbing reports.\nA Dr. Vogel is conducting horrific experiments\nbeneath a secret laboratory.', style: 'narration', duration: 5 },
        { type: 'text', text: 'The dead are being made to walk again.', style: 'narration', duration: 3 },
        { type: 'pause', duration: 1 },
        { type: 'text', text: 'EPISODE 2', style: 'episode', duration: 2 },
        { type: 'text', text: 'Das Labor', style: 'subtitle', duration: 3 },
        { type: 'fade', color: 'transparent', duration: 1 },
    ],
    3: [
        { type: 'fade', color: '#000', duration: 0.5 },
        { type: 'text', text: 'The ultimate mission.\nInfiltrate the command bunker beneath the mountain.\nConfront Generaloberst Krieger himself.', style: 'narration', duration: 5 },
        { type: 'text', text: 'This is the mission that ends the war.', style: 'narration', duration: 3 },
        { type: 'pause', duration: 1 },
        { type: 'text', text: 'EPISODE 3', style: 'episode', duration: 2 },
        { type: 'text', text: 'Der Bunker', style: 'subtitle', duration: 3 },
        { type: 'fade', color: 'transparent', duration: 1 },
    ],
    4: [
        { type: 'fade', color: '#000', duration: 0.5 },
        { type: 'text', text: 'THREE WEEKS EARLIER', style: 'title', duration: 2 },
        { type: 'text', text: 'Before Burg Kaltenfels.\nBefore the prison cell.\nThis is how it began.', style: 'narration', duration: 5 },
        { type: 'text', text: 'Dr. Nebel runs\na chemical weapons program beneath the castle.\nThe Allies need it destroyed.', style: 'narration', duration: 5 },
        { type: 'pause', duration: 1 },
        { type: 'text', text: 'EPISODE 4', style: 'episode', duration: 2 },
        { type: 'text', text: 'Giftk\u00FCche', style: 'subtitle', duration: 3 },
        { type: 'fade', color: 'transparent', duration: 1 },
    ],
    5: [
        { type: 'fade', color: '#000', duration: 0.5 },
        { type: 'text', text: 'Kommandant Brandt is dead.\nBut his sister Ilse has sworn vengeance.\nShe is hunting you.', style: 'narration', duration: 5 },
        { type: 'text', text: 'Three Allied agents are already dead.\nShe knows you are coming.\nBurg Eschenau is a trap.', style: 'narration', duration: 5 },
        { type: 'text', text: '"Let\'s not disappoint her."', style: 'narration', duration: 3 },
        { type: 'pause', duration: 1 },
        { type: 'text', text: 'EPISODE 5', style: 'episode', duration: 2 },
        { type: 'text', text: 'Die J\u00E4gerin', style: 'subtitle', duration: 3 },
        { type: 'fade', color: 'transparent', duration: 1 },
    ],
    6: [
        { type: 'fade', color: '#000', duration: 0.5 },
        { type: 'text', text: 'Festung Haldern.\nThe mountain that swallowed an army.', style: 'narration', duration: 4 },
        { type: 'text', text: 'General von Haldern — the man behind the curtain.\nHe funded Vogel. He armed Brandt.\nHe mentored Ilse.', style: 'narration', duration: 5 },
        { type: 'text', text: 'Every nightmare traces back to this man.\nOne name left on the list.', style: 'narration', duration: 4 },
        { type: 'text', text: 'This ends now.', style: 'narration', duration: 2 },
        { type: 'pause', duration: 1 },
        { type: 'text', text: 'EPISODE 6', style: 'episode', duration: 2 },
        { type: 'text', text: 'Festung Haldern', style: 'subtitle', duration: 3 },
        { type: 'fade', color: 'transparent', duration: 1 },
    ],
    7: [
        { type: 'fade', color: '#000', duration: 0.5 },
        { type: 'text', text: 'You\'ve killed them all.\nEvery boss. Every soldier. Every abomination.', style: 'narration', duration: 4 },
        { type: 'text', text: 'But in the ruins of Festung Haldern,\nthe Allies found one more secret.\nProjekt Golem.', style: 'narration', duration: 5 },
        { type: 'text', text: 'The perfect soldier.\nEvery weapon. Every tactic.\nEvery nightmare — combined into one.', style: 'narration', duration: 5 },
        { type: 'pause', duration: 1 },
        { type: 'text', text: 'BONUS EPISODE', style: 'episode', duration: 2 },
        { type: 'text', text: 'Golem', style: 'subtitle', duration: 3 },
        { type: 'fade', color: 'transparent', duration: 1 },
    ],
};
