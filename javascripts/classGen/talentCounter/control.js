export function controlCounter(talents) {
    let count = 0;

    if (talents.includes("Damage Reduction 10")) {
        count++;
    }
    if (talents.includes("Equilibrium")) {
        count++;
    }
    if (talents.includes("Force Focus")) {
        count++;
    }
    if (talents.includes("Force Recovery")) {
        count++;
    }
    if (talents.includes("Beast Trick")) {
        count++;
    }
    if (talents.includes("Channel Energy")) {
        count++;
    }
    if (talents.includes("Force Exertion")) {
        count++;
    }
    if (talents.includes("Force Harmony")) {
        count++;
    }
    if (talents.includes("Force Suppression")) {
        count++;
    }
    if (talents.includes("Indomitable Will")) {
        count++;
    }
    if (talents.includes("The Will to Resist")) {
        count++;
    }
    if (talents.includes("Telekinetic Stability")) {
        count++;
    }

    return count;
}