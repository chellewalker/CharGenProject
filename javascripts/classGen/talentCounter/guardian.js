export function guardianCounter(talents) {
    let count = 0;

    if (talents.includes("Crucial Advice")) {
        count++;
    }
    if (talents.includes("Distracting Apparition")) {
        count++;
    }
    if (talents.includes("Guardian Spirit")) {
        count++;
    }
    if (talents.includes("Manifest Guardian Spirit")) {
        count++;
    }
    if (talents.includes("Vital Encouragement")) {
        count++;
    }

    return count;
}