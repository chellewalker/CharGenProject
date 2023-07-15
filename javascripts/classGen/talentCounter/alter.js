export function alterCounter(talents) {
    let count = 0;

    if (talents.includes("Disciplined Strike")) {
        count++;
    }
    if (talents.includes("Telekinetic Power")) {
        count++;
    }
    if (talents.includes("Telekinetic Savant")) {
        count++;
    }
    if (talents.includes("Aversion")) {
        count++;
    }
    if (talents.includes("Force Flow")) {
        count++;
    }
    if (talents.includes("Illusion")) {
        count++;
    }
    if (talents.includes("Illusion Bond")) {
        count++;
    }
    if (talents.includes("Influence Savant")) {
        count++;
    }
    if (talents.includes("Link")) {
        count++;
    }
    if (talents.includes("Masquerade")) {
        count++;
    }
    if (talents.includes("Move Massive Object")) {
        count++;
    }
    if (talents.includes("Suppress Force")) {
        count++;
    }
    if (talents.includes("Telekinetic Prodigy")) {
        count++;
    }
    if (talents.includes("Telepathic Influence")) {
        count++;
    }
    if (talents.includes("Telepathic Link")) {
        count++;
    }

    return count;
}