export function lightCounter(talents) {
    let count = 0;

    if (talents.includes("At Peace")) {
        count++;
    }
    if (talents.includes("Attuned")) {
        count++;
    }
    if (talents.includes("Focused Attack")) {
        count++;
    }
    if (talents.includes("Surge of Light")) {
        count++;
    }

    return count;
}