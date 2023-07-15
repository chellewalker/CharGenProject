export function adeptCounter(talents) {
    let count = 0;

    if (talents.includes("Force Power Adept")) {
        let count2;
        for (count2 = 0; count2 < talents.length; count2++) {
            if (talents[count2].includes("Force Power Adept")) {
                count++;
            }
    }}
    if (talents.includes("Force Treatment")) {
        count++;
    }
    if (talents.includes("Fortified Body")) {
        count++;
    }
    if (talents.includes("Instrument of the Force")) {
        count++;
    }
    if (talents.includes("Long Call")) {
        count++;
    }
    if (talents.includes("Mystical Link")) {
        count++;
    }

    return count;
}