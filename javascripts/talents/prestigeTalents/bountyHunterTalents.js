export function bountyHunterTalents(talents,available,skills,feats,BAB,wis,cha,qualities) {
    let count = 0;
    let talent = "";
    while (talent == "") {
        count++;
        let randomNum = Math.floor(Math.random() * 5);
    if (randomNum == 0) {
        talent = awarenessTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 1) {
        talent = bountyTalents(talents,available,skills,feats,BAB,wis,cha,qualities);
    }
    else if (randomNum == 2) {
        talent = misfortuneTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 3 && feats.includes("Force Sensitivity") && available.includes("SaV")) {
        talent = gandFindsmanTalents(talents,available,skills,feats,BAB,wis,cha);
    }
    else if (randomNum == 4 && available.includes("LECG")) {
        talent = forceHunterTalents(talents,available,skills,feats,BAB,wis,cha);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function awarenessTalents(talents,available,skills,feats,BAB) {
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

export function bountyTalents(talents,available,skills,feats,BAB,wis,cha,qualities) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 18);

    if (randomNum == 0) {
        talent = "Hunter's Mark";
    }
    else if (randomNum == 1 && talents.includes("Hunter's Mark")) {
        talent = "Hunter's Target";
    }
    else if (randomNum == 2) {
        talent = "Notorious";
    }
    else if (randomNum == 3) {
        talent = "Nowhere to Hide";
    }
    else if (randomNum == 4 && talents.includes("Hunter's Target")) {
        talent = "Relentless";
    }
    else if (randomNum == 5 && talents.includes("Notorious")) {
        talent = "Ruthless Negotiator";
    }
    else if (randomNum == 6 && available.includes("GoI")) {
        talent = "Detective";
    }
    else if (randomNum == 7 && talents.includes("Hunter's Target") && available.includes("SaV")) {
        talent = "Dread";
    }
    else if (randomNum == 8 && talents.includes("Nowhere to Hide") && skills.includes("Use Computer") && available.includes("GoI")) {
        talent = "Electronic Trail";
    }
    else if (randomNum == 9 && qualities.includes("Familiar Foe") && available.includes("UR")) {
        talent = "Familiar Enemies";
    }
    else if (randomNum == 10 && qualities.includes("Familiar Foe") && available.includes("UR")) {
        talent = "Familiar Situation";
    }
    else if (randomNum == 11 && talents.includes("Notorious") && available.includes("FUCG")) {
        talent = "Fearsome";
    }
    else if (randomNum == 12 && available.includes("FUCG")) {
        talent = "Jedi Hunter";
    }
    else if (randomNum == 13 && talents.includes("Hunter's Target") && talents.includes("Nowhere to Hide") && available.includes("SaV")) {
        talent = "Nowhere to Run";
    }
    else if (randomNum == 14 && feats.includes("Quick Draw") && available.includes("UR")) {
        talent = "Quick Cuffs";
    }
    else if (randomNum == 15 && talents.includes("Detective") && available.includes("GoI")) {
        talent = "Revealing Secrets";
    }
    else if (randomNum == 16 && available.includes("FUCG")) {
        talent = "Signature Item";
    }
    else if (randomNum == 17 && talents.includes("Hunter's Target") && available.includes("SaV")) {
        talent = "Tag";
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

export function misfortuneTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 16);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Dastardly Strike";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Disruptive";
    }
    else if (randomNum == 2 && available.includes("CR")) {
        talent = "Sneak Attack";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Disruptive")) {
        talent = "Walk the Line";
    }
    else if (randomNum == 4 && available.includes("GaW") && talents.includes("Sneak Attack")) {
        talent = "Backstabber";
    }
    else if (randomNum == 5 && available.includes("SaV")) {
        talent = "Befuddle";
    }
    else if (randomNum == 6 && available.includes("SaV") && talents.includes("Disruptive") && talents.includes("Walk the Line")) {
        talent = "Cunning Strategist";
    }
    else if (randomNum == 7 && available.includes("SaV")) {
        talent = "Hesitate";
    }
    else if (randomNum == 8 && available.includes("SaV") && talents.includes("Skirmisher")) {
        talent = "Improved Skirmisher";
    }
    else if (randomNum == 9 && available.includes("GaW") && talents.includes("Sneak Attack") && feats.includes("Point-Blank Shot")) {
        talent = "Improved Sneak Attack";
    }
    else if (randomNum == 10 && available.includes("LECG")) {
        talent = "Seducer";
    }
    else if (randomNum == 11 && available.includes("LECG")) {
        talent = "Seize Object";
    }
    else if (randomNum == 12 && available.includes("SaV") && talents.includes("Hesitate")) {
        talent = "Sow Confusion";
    }
    else if (randomNum == 13 && available.includes("CWCG")) {
        talent = "Stymie";
    }
    else if (randomNum == 14 && available.includes("SaV") && talents.includes("Skirmisher") && talents.includes("Sneak Attack")) {
        talent = "Sudden Strike";
    }
    else if (randomNum == 15 && available.includes("SaV") && talents.includes("Dastardly Strike")) {
        talent = "Weakening Strike";
    }
    if (talents.includes(talent) && talent != "Sneak Attack") {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function gandFindsmanTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Findsman Ceremonies";
    }
    else if (randomNum == 1 && talents.includes("Findsman Ceremonies")) {
        talent = "Findsman's Foresight";
    }
    else if (randomNum == 2 && talents.includes("Findsman Ceremonies")) {
        talent = "Omens";
    }
    else if (randomNum == 3 && talents.includes("Findsman Ceremonies")) {
        talent = "Target Visions";
    }
    else if (randomNum == 4 && talents.includes("Findsman Ceremonies")) {
        talent = "Temporal Awareness";
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

export function forceHunterTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0) {
        talent = "Force Blank";
    }
    else if (randomNum == 1) {
        talent = "Lightsaber Evasion";
    }
    else if (randomNum == 2) {
        talent = "Precision Fire";
    }
    else if (randomNum == 3) {
        talent = "Steel Mind";
    }
    else if (randomNum == 4) {
        talent = "Strong-Willed";
    }
    else if (randomNum == 5) {
        talent = "Telekinetic Resistance";
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