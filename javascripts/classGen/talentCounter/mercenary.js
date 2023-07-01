export function mercenaryCounter(talents) {
    let count = 0;

    if (talents.includes("Commanding Presence")) {
        count++;
    }
    if (talents.includes("Dirty Fighting")) {
        count++;
    }
    if (talents.includes("Feared Warrior")) {
        count++;
    }
    if (talents.includes("Focused Warrior")) {
        count++;
    }
    if (talents.includes("Ruthless")) {
        count++;
    }
    if (talents.includes("Combined Fire")) {
        count++;
    }
    if (talents.includes("Mercenary's Determination")) {
        count++;
    }
    if (talents.includes("Mercenary's Grit")) {
        count++;
    }
    if (talents.includes("Mercenary's Teamwork")) {
        count++;
    }

    return count;
}