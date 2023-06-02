export function getForcePower(light,dark) {
    let forcePower = "";
    let count = 0;
    while (forcePower == "") {
        count++;
        let randomNum = Math.floor(Math.random() * 20);
        if (randomNum == 0 && available.includes("CR")) {
            forcePower = "Battle Strike";
        }
        if (randomNum == 1 && available.includes("CR") && dark == 1) {
            forcePower = "Dark Rage";
        }
        if (randomNum == 2 && available.includes("CR")) {
            forcePower = "Farseeing";
        }
        if (randomNum == 3 && available.includes("CR")) {
            forcePower = "Force Disarm";
        }
        if (randomNum == 4 && available.includes("CR")) {
            forcePower = "Force Grip";
        }
        if (randomNum == 5 && available.includes("CR") && dark == 1) {
            forcePower = "Force Lightning";
        }
        if (randomNum == 6 && available.includes("CR")) {
            forcePower = "Force Slam";
        }
        if (randomNum == 7 && available.includes("CR")) {
            forcePower = "Force Stun";
        }
        if (randomNum == 8 && available.includes("CR")) {
            forcePower = "Force Thrust";
        }
        if (randomNum == 9 && available.includes("CR")) {
            forcePower = "Mind Trick";
        }
        if (randomNum == 10 && available.includes("CR")) {
            forcePower = "Move Object";
        }
        if (randomNum == 11 && available.includes("CR")) {
            forcePower = "Negate Energy";
        }
        if (randomNum == 12 && available.includes("CR")) {
            forcePower = "Rebuke";
        }
        if (randomNum == 13 && available.includes("CR") && light == 1) {
            forcePower = "Sever Force";
        }
        if (randomNum == 14 && available.includes("CR")) {
            forcePower = "Surge";
        }
        if (randomNum == 15 && available.includes("CR") && light == 1) {
            forcePower = "Vital Transfer";
        }
        if (count == 25) {
            forcePower = "ValidForcePowerNotFound";
        }
    }
    return forcePower;
}

export function compressForcePowers(forcePowers) {

    return forcePowers;
}