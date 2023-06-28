export function lineageCounter(talents) {
    let count = 0;

    if (talents.includes("Connections")) {
        count++;
    }
    if (talents.includes("Educated")) {
        count++;
    }
    if (talents.includes("Spontaneous Skill")) {
        count++;
    }
    if (talents.includes("Wealth")) {
        count++;
    }
    if (talents.includes("Engineer")) {
        count++;
    }
    if (talents.includes("Influential Friends")) {
        count++;
    }
    if (talents.includes("Powerful Friends")) {
        count++;
    }

    return count;
}