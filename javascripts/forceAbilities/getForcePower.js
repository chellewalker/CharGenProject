export function getForcePower(available,wis,light,dark) {
    let forcePower = [];
    let temp;
    let count;
    let avail = 1 + Math.max(0,Math.floor((wis-10)/2));
    
    for (count = 0; count < avail; count++) {
        temp = "";
    while (temp == "") {
        let randomNum = Math.floor(Math.random() * 20);
        if (randomNum == 0 && available.includes("CR")) {
            temp = "Battle Strike";
        }
        if (randomNum == 1 && available.includes("CR") && dark == 1) {
            temp = "Dark Rage";
        }
        if (randomNum == 2 && available.includes("CR")) {
            temp = "Farseeing";
        }
        if (randomNum == 3 && available.includes("CR")) {
            temp = "Force Disarm";
        }
        if (randomNum == 4 && available.includes("CR")) {
            temp = "Force Grip";
        }
        if (randomNum == 5 && available.includes("CR") && dark == 1) {
            temp = "Force Lightning";
        }
        if (randomNum == 6 && available.includes("CR")) {
            temp = "Force Slam";
        }
        if (randomNum == 7 && available.includes("CR")) {
            temp = "Force Stun";
        }
        if (randomNum == 8 && available.includes("CR")) {
            temp = "Force Thrust";
        }
        if (randomNum == 9 && available.includes("CR")) {
            temp = "Mind Trick";
        }
        if (randomNum == 10 && available.includes("CR")) {
            temp = "Move Object";
        }
        if (randomNum == 11 && available.includes("CR")) {
            temp = "Negate Energy";
        }
        if (randomNum == 12 && available.includes("CR")) {
            temp = "Rebuke";
        }
        if (randomNum == 13 && available.includes("CR") && light == 1) {
            temp = "Sever Force";
        }
        if (randomNum == 14 && available.includes("CR")) {
            temp = "Surge";
        }
        if (randomNum == 15 && available.includes("CR") && light == 1) {
            temp = "Vital Transfer";
        }
        if (count == 25) {
            temp = "ValidForcePowerNotFound";
        }
    }
    forcePower.push(temp);
}
    return forcePower;
}

export function compressForcePowers(forcePowers) {

    return forcePowers;
}