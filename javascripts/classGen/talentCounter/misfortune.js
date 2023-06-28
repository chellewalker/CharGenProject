export function misfortuneCounter(talents) {
    let count = 0;
    let i;

    if (talents.includes("Dastardly Strike")) {
        count++;
    }
    if (talents.includes("Disruptive")) {
        count++;
    }
    if (talents.includes("Skirmisher")) {
        count++;
    }
    if (talents.includes("Sneak Attack")) {
        for (i = 0; i < talents.length; i++) {
            if (talents[i] == "Sneak Attack") {
                count++;
            }
          }
    }
    if (talents.includes("Walk the Line")) {
        count++;
    }
    if (talents.includes("Backstabber")) {
        count++;
    }
    if (talents.includes("Befuddle")) {
        count++;
    }
    if (talents.includes("Cunning Strategist")) {
        count++;
    }
    if (talents.includes("Hesitate")) {
        count++;
    }
    if (talents.includes("Improved Skirmisher")) {
        count++;
    }
    if (talents.includes("Improved Sneak Attack")) {
        count++;
    }
    if (talents.includes("Seducer")) {
        count++;
    }
    if (talents.includes("Seize Object")) {
        count++;
    }
    if (talents.includes("Sow Confusion")) {
        count++;
    }
    if (talents.includes("Stymie")) {
        count++;
    }
    if (talents.includes("Sudden Strike")) {
        count++;
    }
    if (talents.includes("Weakening Strike")) {
        count++;
    }

    return count;
}