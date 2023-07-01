export function scoutTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let count = 0;
    let talent = "";
    while (talent == "") {
        count++;
        //let randomNum = Math.floor(Math.random() * 14);
        let randomNum = Math.floor(Math.random() * 7);
    if (randomNum == 0 || randomNum == 1) {
        talent = awarenessTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 2) {
        talent = camouflageTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 3) {
        talent = fringerTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 4 && available.includes("CR")) {
        talent = survivorTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 5) {
        talent = hyperspaceTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 6 && available.includes("FUCG")) {
        talent = spyTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 7 && available.includes("CWCG")) {
        talent = surveillanceTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 8 && available.includes("LECG")) {
        talent = versatilityTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 9 && available.includes("RECG")) {
        talent = unpredictableTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 10 && available.includes("GaW")) {
        talent = patrolTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 11 && available.includes("GoI")) {
        talent = espionageTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 12 && available.includes("UR")) {
        talent = masterTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 13 && available.includes("UR")) {
        talent = mobileTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}
    return talent;
}

export function awarenessTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 8);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Acute Senses";
    }
    else if (randomNum == 1 && available.includes("CR") && talents.includes("Acute Senses")) {
        talent = "Expert Tracker";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Acute Senses")) {
        talent = "Improved Initiative";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Acute Senses")) {
        talent = "Keen Shot";
    }
    else if (randomNum == 4 && available.includes("CR") && talents.includes("Acute Senses") && talents.includes("Improved Initiative")) {
        talent = "Uncanny Dodge I";
    }
    else if (randomNum == 5 && available.includes("CR") && talents.includes("Acute Senses") && talents.includes("Improved Initiative") && talents.includes("Uncanny Dodge I")) {
        talent = "Uncanny Dodge II";
    }
    else if (randomNum == 6 && available.includes("FUCG") && talents.includes("Acute Senses") && talents.includes("Improved Initiative") && skills.includes("Initiative")) {
        talent = "Reset Initiative";
    }
    else if (randomNum == 7 && available.includes("SaV") && talents.includes("Acute Senses") && talents.includes("Keen Shot")) {
        talent = "Weak Point";
    }   
    if (talents.includes(talent)) {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function camouflageTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 10);

    if (randomNum == 0 && available.includes("CR") && talents.includes("Improved Stealth")) {
        talent = "Hidden Movement";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Improved Stealth";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Hidden Movement") && talents.includes("Improved Stealth")) {
        talent = "Total Concealment";
    }
    else if (randomNum == 3 && available.includes("GaW")) {
        talent = "Dig In";
    }
    else if (randomNum == 4 && available.includes("UR") && talents.includes("Improved Stealth")) {
        talent = "Extended Ambush";
    }
    else if (randomNum == 5 && available.includes("GaW")) {
        talent = "Ghost Assailant";
    }
    else if (randomNum == 6 && available.includes("SaV") && talents.includes("Hidden Movement") && talents.includes("Improved Stealth")) {
        talent = "Hide in Plain Sight";
    }
    else if (randomNum == 7 && available.includes("SaV")) {
        talent = "Hunker Down";
    }
    else if (randomNum == 8 && available.includes("SaV") && talents.includes("Hidden Movement") && talents.includes("Improved Stealth")) {
        talent = "Shadow Striker";
    }
    else if (randomNum == 9 && available.includes("GaW")) {
        talent = "Slip By";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function fringerTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 9);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Barter";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Fringe Savant";
    }
    else if (randomNum == 2 && available.includes("CR")) {
        talent = "Long Stride";
    }
    else if (randomNum == 3 && available.includes("CR")) {
        talent = "Jury-Rigger";
    }
    else if (randomNum == 4 && available.includes("SaV") && talents.includes("Long Stride")) {
        talent = "Flee";
    }
    else if (randomNum == 5 && available.includes("SaV") && talents.includes("Jury-Rigger")) {
        talent = "Keep it Together";
    }
    else if (randomNum == 6 && available.includes("SaV") && talents.includes("Long Stride")) {
        talent = "Sidestep";
    }
    else if (randomNum == 7 && available.includes("SaV") && talents.includes("Long Stride")) {
        talent = "Surge";
    }
    else if (randomNum == 8 && available.includes("SaV") && talents.includes("Long Stride") && talents.includes("Sidestep")) {
        talent = "Swift Strider";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function survivorTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Evasion";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Extreme Effort";
    }
    else if (randomNum == 2 && available.includes("CR")) {
        talent = "Sprint";
    }
    else if (randomNum == 3 && available.includes("CR")) {
        talent = "Surefooted";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function hyperspaceTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0 && available.includes("KotORCG")) {
        talent = "Deep-Space Gambit";
    }
    else if (randomNum == 1 && available.includes("KotORCG") && skills.includes("Perception")) {
        talent = "Guidance";
    }
    else if (randomNum == 2 && available.includes("KotORCG") && skills.includes("Stealth")) {
        talent = "Hidden Attacker";
    }
    else if (randomNum == 3 && available.includes("KotORCG") && skills.includes("Pilot")) {
        talent = "Hyperspace Savant";
    }
    else if (randomNum == 4 && available.includes("KotORCG") && skills.includes("Pilot")) {
        talent = "Vehicle Sneak";
    }
    else if (randomNum == 5 && available.includes("UR") && skills.includes("Stealth")) {
        talent = "Silent Movement";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function spyTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0) {
        talent = "Blend In";
    }
    else if (randomNum == 1 && talents.includes("Blend In")) {
        talent = "Incognito";
    }
    else if (randomNum == 2 && talents.includes("Surveillance")) {
        talent = "Improved Surveillance";
    }
    else if (randomNum == 3 && talents.includes("Surveillance")) {
        talent = "Intimate Knowledge";
    }
    else if (randomNum == 4 && skills.includes("Perception")) {
        talent = "Surveillance";
    }
    else if (randomNum == 5) {
        talent = "Traceless Tampering";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}