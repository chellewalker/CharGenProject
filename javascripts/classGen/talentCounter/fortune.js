export function fortuneCounter(talents) {
    let count = 0;

    if (talents.includes("Fool's Luck")) {
        count++;
    }
    if (talents.includes("Fortune's Favor")) {
        count++;
    }
    if (talents.includes("Gambler")) {
        count++;
    }
    if (talents.includes("Knack")) {
        count++;
    }
    if (talents.includes("Lucky Shot")) {
        count++;
    }
    if (talents.includes("Avert Disaster")) {
        count++;
    }
    if (talents.includes("Better Lucky than Dead")) {
        count++;
    }
    if (talents.includes("Dumb Luck")) {
        count++;
    }
    if (talents.includes("Labyrinthine Mind")) {
        count++;
    }
    if (talents.includes("Lucky Stop")) {
        count++;
    }
    if (talents.includes("Ricochet Shot")) {
        count++;
    }
    if (talents.includes("Uncanny Luck")) {
        count++;
    }
    if (talents.includes("Unlikely Shot")) {
        count++;
    }

    return count;
}