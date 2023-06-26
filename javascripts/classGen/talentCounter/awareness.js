export function awarenessCounter(talents) {
    let count = 0;

    if (talents.includes("Acute Senses")) {
        count++;
    }
    if (talents.includes("Expert Tracker")) {
        count++;
    }
    if (talents.includes("Improved Initiative")) {
        count++;
    }
    if (talents.includes("Keen Shot")) {
        count++;
    }
    if (talents.includes("Uncanny Dodge I")) {
        count++;
    }
    if (talents.includes("Uncanny Dodge II")) {
        count++;
    }
    if (talents.includes("Reset Initiative")) {
        count++;
    }
    if (talents.includes("Weak Point")) {
        count++;
    }

    return count;
}