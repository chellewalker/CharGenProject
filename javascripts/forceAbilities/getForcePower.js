export function getForcePower(forcePowers,available,wis,light,dark) {
    let temp;
    let count;
    let avail = 1 + Math.max(0,Math.floor((wis-10)/2));
    
    for (count = 0; count < avail; count++) {
        temp = "";
    while (temp == "") {
        let randomNum = Math.floor(Math.random() * 26);
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
        if (randomNum == 16 && available.includes("KotORCG")) {
            temp = "Energy Resistance";
        }
        if (randomNum == 17 && available.includes("KotORCG") && dark == 1) {
            temp = "Fear";
        }
        if (randomNum == 18 && available.includes("KotORCG") && dark == 1) {
            temp = "Force Scream";
        }
        if (randomNum == 19 && available.includes("KotORCG")) {
            temp = "Force Whirlwind";
        }
        if (randomNum == 20 && available.includes("KotORCG")) {
            temp = "Ionize";
        }
        if (randomNum == 21 && available.includes("KotORCG")) {
            temp = "Kinetic Combat";
        }
        if (randomNum == 22 && available.includes("KotORCG")) {
            temp = "Resist Force";
        }
        if (randomNum == 23 && available.includes("KotORCG")) {
            temp = "Slow";
        }
        if (randomNum == 24 && available.includes("KotORCG") && light == 1) {
            temp = "Valor";
        }
        if (randomNum == 25 && available.includes("KotORCG") && dark == 1) {
            temp = "Wound";
        }
        if (count == 25) {
            temp = "ValidForcePowerNotFound";
        }
    }
    forcePowers.push(temp);
}
    return forcePowers;
}

export function compressForcePowers(forcePowers) {
    let tempPowerCount;
    let tempForcePowers = [];
    let lastPower = "";
    let tempPower;
    let count;

    for (count = 0; count < forcePowers.length; count++) {

    tempPower = forcePowers[count];
    tempPowerCount = 0;
    let count2;

    for (count2 = 0; count2 < forcePowers.length; count2++) {

        if (forcePowers[count2] == tempPower) {
            tempPowerCount++;
        }
    }

    if (tempForcePowers.includes(tempPower+" ("+tempPowerCount+")")) {

    }
    else {
        if (tempPowerCount > 1) {
            tempForcePowers.push(tempPower+" ("+tempPowerCount+")");
            lastPower = tempPower+" ("+tempPowerCount+")";
        }
        else if (tempPowerCount == 1) {
            tempForcePowers.push(tempPower);
            lastPower= tempPower;
        }

}}

    tempForcePowers.sort();
    return tempForcePowers;
}

export function displayForcePowers(forcePowers) {
    let powers = "";
    let count;
    for (count = 0; count < forcePowers.length; count++) {
        if (count == 0) {
            if (forcePowers[count].includes(" (")) {
                let temp = forcePowers[count].split(" (");
                powers += "<i><a href='https://swse.fandom.com/wiki/"+temp[0]+"'>"+temp[0]+"</a></i> ("+temp[1];
            }
            else {
                powers += "<i><a href='https://swse.fandom.com/wiki/"+forcePowers[count]+"'>"+forcePowers[count]+"</a></i>";
            }
        }
        else {
            if (forcePowers[count].includes(" (")) {
                let temp = forcePowers[count].split(" (");
                powers += ", <i><a href='https://swse.fandom.com/wiki/"+temp[0]+"'>"+temp[0]+"</a></i> ("+temp[1];
            }
            else {
                powers += ", <i><a href='https://swse.fandom.com/wiki/"+forcePowers[count]+"'>"+forcePowers[count]+"</a></i>";
            }
        }
    }

    return powers;
}

export function displayRawForcePowers(forcePowers) {
    let rawPowers = "";
    let count;
    for (count = 0; count < forcePowers.length; count++) {
        if (count == 0) {
            rawPowers += forcePowers[count];
        }
        else {
            rawPowers += ", "+forcePowers[count];
        }
    }
    
    return rawPowers;
}