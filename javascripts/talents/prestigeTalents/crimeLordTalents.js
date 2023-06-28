export function crimeLordTalents(talents,available,skills,feats,BAB,wis,cha,qualities) {
    let count = 0;
    let talent = "";
    while (talent == "") {
        count++;
        let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
        talent = infamyTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 1) {
        talent = influenceTalents(talents,available,skills,feats,BAB,wis,cha,qualities);
    }
    else if (randomNum == 2) {
        talent = mastermindTalents(talents,available,skills,feats,BAB);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function infamyTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 11);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Inspire Fear I";
    }
    else if (randomNum == 1 && available.includes("CR") && talents.includes("Inspire Fear I")) {
        talent = "Inspire Fear II";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Inspire Fear II")) {
        talent = "Inspire Fear III";
    }
    else if (randomNum == 3 && available.includes("CR")) {
        talent = "Notorious";
    }
    else if (randomNum == 4 && available.includes("CR") && talents.includes("Notorious")) {
        talent = "Shared Notoriety";
    }
    else if (randomNum == 5 && available.includes("SaV") && talents.includes("Attract Minion") && talents.includes("Inspire Fear II")) {
        talent = "Fear Me";
    }
    else if (randomNum == 6 && available.includes("SaV") && talents.includes("Attract Minion") && talents.includes("Inspire Fear I")) {
        talent = "Frighten";
    }
    else if (randomNum == 7 && available.includes("UR") && talents.includes("Notorious") && feats.includes("Skill Focus (Persuasion)")) {
        talent = "Master Manipulator";
    } 
    else if (randomNum == 8 && available.includes("UR") && talents.includes("Notorious") && skills.includes("Persuasion")) {
        talent = "Small Favor";
    } 
    else if (randomNum == 9 && available.includes("SaV") && talents.includes("Frighten") && talents.includes("Inspire Fear II")) {
        talent = "Terrify";
    } 
    else if (randomNum == 10 && available.includes("SaV") && talents.includes("Notorious") && talents.includes("Inspire Fear III")) {
        talent = "Unsavory Reputation";
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

export function influenceTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Presence";
    }
    else if (randomNum == 1 && available.includes("CR") && talents.includes("Presence")) {
        talent = "Demand Surrender";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Presence") && talents.includes("Weaken Resolve")) {
        talent = "Improved Weaken Resolve";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Presence")) {
        talent = "Weaken Resolve";
    }
    else if (randomNum == 4 && available.includes("KorORCG") && talents.includes("Presence")  && skills.includes("Persuasion")) {
        talent = "Fluster";
    }
    else if (randomNum == 5 && available.includes("KotORCG") && talents.includes("Presence")  && skills.includes("Persuasion")) {
        talent = "Intimidating Defense";
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

export function mastermindTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 16);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Attract Minion";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Impel Ally I";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Impel Ally I")) {
        talent = "Impel Ally II";
    }
    else if (randomNum == 3 && available.includes("GoI") && talents.includes("Attract Minion") && talents.includes("Impel Ally II")) {
        talent = "Attract Superior Minion";
    }
    else if (randomNum == 4 && available.includes("SaV") && talents.includes("Attract Minion")) {
        talent = "Bodyguard I";
    }
    else if (randomNum == 5 && available.includes("SaV") && talents.includes("Bodyguard I")) {
        talent = "Bodyguard II";
    }
    else if (randomNum == 6 && available.includes("SaV") && talents.includes("Bodyguard II")) {
        talent = "Bodyguard III";
    }
    else if (randomNum == 7 && available.includes("GoI")) {
        talent = "Contingency Plan";
    }
    else if (randomNum == 8 && available.includes("SaV") && talents.includes("Impel Ally II")) {
        talent = "Impel Ally III";
    }
    else if (randomNum == 9 && available.includes("SaV") && talents.includes("Impel Ally II")) {
        talent = "Inspire Wrath";
    }
    else if (randomNum == 10 && available.includes("UR") && talents.includes("Impel Ally II")) {
        talent = "Master's Orders";
    }
    else if (randomNum == 11 && available.includes("SaV") && talents.includes("Attract Minion")) {
        talent = "Shelter";
    }
    else if (randomNum == 12 && available.includes("SaV")) {
        talent = "Tactical Superiority";
    }
    else if (randomNum == 13 && available.includes("SaV")) {
        talent = "Tactical Withdraw";
    }
    else if (randomNum == 14 && available.includes("SaV") && talents.includes("Impel Ally II")) {
        talent = "Urgency";
    }
    else if (randomNum == 15 && available.includes("SaV") && talents.includes("Attract Minion")) {
        talent = "Wealth of Allies";
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