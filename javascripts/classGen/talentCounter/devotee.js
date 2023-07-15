export function devoteeCounter(talents) {
    let count = 0;

    if (talents.includes("Channel Aggression")) {
        count++;
    }
    if (talents.includes("Channel Anger")) {
        count++;
    }
    if (talents.includes("Crippling Strike")) {
        count++;
    }
    if (talents.includes("Embrace the Dark Side")) {
        count++;
    }
    if (talents.includes("Dark Side Talisman")) {
        count++;
    }
    if (talents.includes("Greater Dark Side Talisman")) {
        count++;
    }

    return count;
}