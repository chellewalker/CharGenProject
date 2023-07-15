export function itemCounter(talents) {
    let count = 0;

    if (talents.includes("Attune Weapon")) {
        count++;
    }
    if (talents.includes("Empower Weapon")) {
        count++;
    }
    if (talents.includes("Force Talisman")) {
        count++;
    }
    if (talents.includes("Greater Force Talisman")) {
        count++;
    }
    if (talents.includes("Focused Force Talisman")) {
        count++;
    }
    if (talents.includes("Force Throw")) {
        count++;
    }
    if (talents.includes("Greater Focused Force Talisman")) {
        count++;
    }
    if (talents.includes("Primitive Block")) {
        count++;
    }
    

    return count;
}