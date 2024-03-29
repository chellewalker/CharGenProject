export function getForcePower(forcePowers,available,wis,light,dark,feats) {
    let temp;
    let count;
    let avail = 1 + Math.max(0,Math.floor((wis-10)/2));
    
    for (count = 0; count < avail; count++) {
        temp = "";
    while (temp == "") {
        let randomNum;
        if (feats.includes("Weapon Focus (Lightsabers)")) {
            randomNum = Math.floor(Math.random() * 76);
        }
        else {
            randomNum = Math.floor(Math.random() * 52);
        }
        if (randomNum == 0 && available.includes("CR")) {
            temp = "Battle Strike";
        }
        else if (randomNum == 1 && available.includes("CR") && dark == 1) {
            temp = "Dark Rage";
        }
        else if (randomNum == 2 && available.includes("CR")) {
            temp = "Farseeing";
        }
        else if (randomNum == 3 && available.includes("CR")) {
            temp = "Force Disarm";
        }
        else if (randomNum == 4 && available.includes("CR")) {
            temp = "Force Grip";
        }
        else if (randomNum == 5 && available.includes("CR") && dark == 1) {
            temp = "Force Lightning";
        }
        else if (randomNum == 6 && available.includes("CR")) {
            temp = "Force Slam";
        }
        else if (randomNum == 7 && available.includes("CR")) {
            temp = "Force Stun";
        }
        else if (randomNum == 8 && available.includes("CR")) {
            temp = "Force Thrust";
        }
        else if (randomNum == 9 && available.includes("CR")) {
            temp = "Mind Trick";
        }
        else if (randomNum == 10 && available.includes("CR")) {
            temp = "Move Object";
        }
        else if (randomNum == 11 && available.includes("CR")) {
            temp = "Negate Energy";
        }
        else if (randomNum == 12 && available.includes("CR")) {
            temp = "Rebuke";
        }
        else if (randomNum == 13 && available.includes("CR") && light == 1) {
            temp = "Sever Force";
        }
        else if (randomNum == 14 && available.includes("CR")) {
            temp = "Surge";
        }
        else if (randomNum == 15 && available.includes("CR") && light == 1) {
            temp = "Vital Transfer";
        }
        else if (randomNum == 16 && available.includes("KotORCG")) {
            temp = "Energy Resistance";
        }
        else if (randomNum == 17 && available.includes("KotORCG") && dark == 1) {
            temp = "Fear";
        }
        else if (randomNum == 18 && available.includes("KotORCG") && dark == 1) {
            temp = "Force Scream";
        }
        else if (randomNum == 19 && available.includes("KotORCG")) {
            temp = "Force Whirlwind";
        }
        else if (randomNum == 20 && available.includes("KotORCG")) {
            temp = "Ionize";
        }
        else if (randomNum == 21 && available.includes("KotORCG")) {
            temp = "Kinetic Combat";
        }
        else if (randomNum == 22 && available.includes("KotORCG")) {
            temp = "Resist Force";
        }
        else if (randomNum == 23 && available.includes("KotORCG")) {
            temp = "Slow";
        }
        else if (randomNum == 24 && available.includes("KotORCG") && light == 1) {
            temp = "Valor";
        }
        else if (randomNum == 25 && available.includes("KotORCG") && dark == 1) {
            temp = "Wound";
        }
        else if (randomNum == 25 && available.includes("FUCG") && dark == 1) {
            temp = "Corruption";
        }
        else if (randomNum == 25 && available.includes("FUCG")) {
            temp = "Force Blast";
        }
        else if (randomNum == 25 && available.includes("FUCG")) {
            temp = "Force Shield";
        }
        else if (randomNum == 25 && available.includes("FUCG") && dark == 1) {
            temp = "Force Storm";
        }
        else if (randomNum == 25 && available.includes("FUCG")) {
            temp = "Kinetic Combat";
        }
        else if (randomNum == 25 && available.includes("FUCG")) {
            temp = "Repulse";
        }
        else if (randomNum == 26 && available.includes("LECG")) {
            temp = "Ballistakinesis";
        }
        else if (randomNum == 27 && available.includes("LECG")) {
            temp = "Combustion";
        }
        else if (randomNum == 28 && available.includes("LECG") && dark == 1) {
            temp = "Dark Transfer";
        }
        else if (randomNum == 29 && available.includes("LECG")) {
            temp = "Detonate";
        }
        else if (randomNum == 30 && available.includes("LECG") && light == 1) {
            temp = "Enlighten";
        }
        else if (randomNum == 31 && available.includes("LECG") && dark == 1) {
            temp = "Lightning Burst";
        }
        else if (randomNum == 32 && available.includes("LECG")) {
            temp = "Obscure";
        }
        else if (randomNum == 33 && available.includes("LECG")) {
            temp = "Prescience";
        }
        else if (randomNum == 34 && available.includes("LECG")) {
            temp = "Stagger";
        }
        else if (randomNum == 35 && available.includes("JATM")) {
            temp = "Blind";
        }
        else if (randomNum == 36 && available.includes("JATM")) {
            temp = "Convection";
        }
        else if (randomNum == 37 && available.includes("JATM")) {
            temp = "Crucitorn";
        }
        else if (randomNum == 38 && available.includes("JATM")) {
            temp = "Cryokinesis";
        }
        else if (randomNum == 39 && available.includes("JATM")) {
            temp = "Drain Energy";
        }
        else if (randomNum == 40 && available.includes("JATM")) {
            temp = "Fold Space";
        }
        else if (randomNum == 41 && available.includes("JATM") && light == 1) {
            temp = "Force Light";
        }
        else if (randomNum == 42 && available.includes("JATM") && dark == 1) {
            temp = "Force Storm";
        }
        else if (randomNum == 43 && available.includes("JATM")) {
            temp = "Force Track";
        }
        else if (randomNum == 44 && available.includes("JATM") && dark == 1) {
            temp = "Hatred";
        }
        else if (randomNum == 45 && available.includes("JATM")) {
            temp = "Inertia";
        }
        else if (randomNum == 46 && available.includes("JATM") && light == 1) {
            temp = "Inspire";
        }
        else if (randomNum == 47 && available.includes("JATM")) {
            temp = "Intercept";
        }
        else if (randomNum == 48 && available.includes("JATM") && dark == 1) {
            temp = "Memory Walk";
        }
        else if (randomNum == 49 && available.includes("JATM")) {
            temp = "Mind Shard";
        }
        else if (randomNum == 50 && available.includes("JATM")) {
            temp = "Plant Surge";
        }
        else if (randomNum == 51 && available.includes("JATM")) {
            temp = "Thought Bomb";
        }
        else if (randomNum == 52 && available.includes("JATM")) {
            temp = "Assured Strike";
        }
        else if (randomNum == 53 && available.includes("JATM")) {
            temp = "Barrier of Blades";
        }
        else if (randomNum == 54 && available.includes("JATM")) {
            temp = "Circle of Shelter";
        }
        else if (randomNum == 55 && available.includes("JATM")) {
            temp = "Contentious Opportunity";
        }
        else if (randomNum == 56 && available.includes("JATM")) {
            temp = "Deflecting Slash";
        }
        else if (randomNum == 57 && available.includes("JATM")) {
            temp = "Disarming Slash";
        }
        else if (randomNum == 58 && available.includes("JATM")) {
            temp = "Draw Closer";
        }
        else if (randomNum == 59 && available.includes("JATM")) {
            temp = "Falling Avalanche";
        }
        else if (randomNum == 60 && available.includes("JATM")) {
            temp = "Fluid Riposte";
        }
        else if (randomNum == 61 && available.includes("JATM")) {
            temp = "Hawk-Bat Swoop";
        }
        else if (randomNum == 62 && available.includes("JATM")) {
            temp = "High Ground Defense";
        }
        else if (randomNum == 63 && available.includes("JATM")) {
            temp = "Makashi Riposte";
        }
        else if (randomNum == 64 && available.includes("JATM")) {
            temp = "Pass the Blade";
        }
        else if (randomNum == 65 && available.includes("JATM")) {
            temp = "Pushing Slash";
        }
        else if (randomNum == 66 && available.includes("JATM")) {
            temp = "Rising Whirlwind";
        }
        else if (randomNum == 67 && available.includes("JATM")) {
            temp = "Saber Swarm";
        }
        else if (randomNum == 68 && available.includes("JATM")) {
            temp = "Sarlacc Sweep";
        }
        else if (randomNum == 69 && available.includes("JATM")) {
            temp = "Shien Deflection";
        }
        else if (randomNum == 70 && available.includes("JATM")) {
            temp = "Swift Flank";
        }
        else if (randomNum == 71 && available.includes("JATM") && dark == 1) {
            temp = "Tempered Aggression";
        }
        else if (randomNum == 72 && available.includes("JATM")) {
            temp = "Twin Strike";
        }
        else if (randomNum == 73 && available.includes("JATM")) {
            temp = "Unbalancing Block";
        }
        else if (randomNum == 74 && available.includes("JATM")) {
            temp = "Unhindered Charge";
        }
        else if (randomNum == 75 && available.includes("JATM") && dark == 1) {
            temp = "Vornskr's Ferocity";
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
                powers += "<i><a href='https://swse.fandom.com/wiki/"+temp[0]+"' target='_blank' rel='noopener noreferrer'>"+temp[0]+"</a></i> ("+temp[1];
            }
            else {
                powers += "<i><a href='https://swse.fandom.com/wiki/"+forcePowers[count]+"' target='_blank' rel='noopener noreferrer'>"+forcePowers[count]+"</a></i>";
            }
        }
        else {
            if (forcePowers[count].includes(" (")) {
                let temp = forcePowers[count].split(" (");
                powers += ", <i><a href='https://swse.fandom.com/wiki/"+temp[0]+"' target='_blank' rel='noopener noreferrer'>"+temp[0]+"</a></i> ("+temp[1];
            }
            else {
                powers += ", <i><a href='https://swse.fandom.com/wiki/"+forcePowers[count]+"' target='_blank' rel='noopener noreferrer'>"+forcePowers[count]+"</a></i>";
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