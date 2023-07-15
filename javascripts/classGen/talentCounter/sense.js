export function senseCounter(talents) {
    let count = 0;

    if (talents.includes("Force Perception")) {
        count++;
    }
    if (talents.includes("Force Pilot")) {
        count++;
    }
    if (talents.includes("Foresight")) {
        count++;
    }
    if (talents.includes("Gauge Force Potential")) {
        count++;
    }
    if (talents.includes("Visions")) {
        count++;
    }
    if (talents.includes("Feel the Force")) {
        count++;
    }
    if (talents.includes("Force Reflexes")) {
        count++;
    }
    if (talents.includes("Heightened Awareness")) {
        count++;
    }
    if (talents.includes("Instinctive Navigation")) {
        count++;
    }
    if (talents.includes("Motion of the Future")) {
        count++;
    }
    if (talents.includes("Psychometry")) {
        count++;
    }
    if (talents.includes("Shift Sense")) {
        count++;
    }

    return count;
}