export function darkCounter(talents) {
    let count = 0;

    if (talents.includes("Power of the Dark Side")) {
        count++;
    }
    if (talents.includes("Dark Presence")) {
        count++;
    }
    if (talents.includes("Revenge")) {
        count++;
    }
    if (talents.includes("Swift Power")) {
        count++;
    }
    if (talents.includes("Consumed by Darkness")) {
        count++;
    }
    if (talents.includes("Dark Preservation")) {
        count++;
    }
    if (talents.includes("Dark Side Savant")) {
        count++;
    }
    if (talents.includes("Drain Knowledge")) {
        count++;
    }
    if (talents.includes("Transfer Essence")) {
        count++;
    }
    if (talents.includes("Wrath of the Dark Side")) {
        count++;
    }

    return count;
}