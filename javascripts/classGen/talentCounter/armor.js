export function armorCounter(talents) {
    let count = 0;

    if (talents.includes("Armor Mastery")) {
        count++;
    }
    if (talents.includes("Armored Defense")) {
        count++;
    }
    if (talents.includes("Improved Armored Defense")) {
        count++;
    }
    if (talents.includes("Juggernaut")) {
        count++;
    }
    if (talents.includes("Second Skin")) {
        count++;
    }
    if (talents.includes("Shield Expert")) {
        count++;
    }

    return count;
}