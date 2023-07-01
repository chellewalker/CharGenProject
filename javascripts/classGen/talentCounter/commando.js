export function commandoCounter(talents) {
    let count = 0;

    if (talents.includes("Battle Analysis")) {
        count++;
    }
    if (talents.includes("Cover Fire")) {
        count++;
    }
    if (talents.includes("Demolitionist")) {
        count++;
    }
    if (talents.includes("Draw Fire")) {
        count++;
    }
    if (talents.includes("Harm's Way")) {
        count++;
    }
    if (talents.includes("Indomitable")) {
        count++;
    }
    if (talents.includes("Tough as Nails")) {
        count++;
    }
    if (talents.includes("Coordinated Effort")) {
        count++;
    }
    if (talents.includes("Dedicated Guardian")) {
        count++;
    }
    if (talents.includes("Dedicated Protector")) {
        count++;
    }
    if (talents.includes("Defensive Position")) {
        count++;
    }
    if (talents.includes("Hard Target")) {
        count++;
    }
    if (talents.includes("Keep Them at Bay")) {
        count++;
    }
    if (talents.includes("Out of Harm's Way")) {
        count++;
    }

    return count;
}