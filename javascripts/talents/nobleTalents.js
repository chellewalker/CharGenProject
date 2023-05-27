export function nobleTalents(talents,available,skills,feats,BAB) {
    let count = 0;
    let talent = "";
    while (talent == "") {
        count++;
        //let randomNum = Math.floor(Math.random() * 16);
        let randomNum = Math.floor(Math.random() * 4);
    if (randomNum == 0) {
        talent = influenceTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 1) {
        talent = inspirationTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 2) {
        talent = leadershipTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 3) {
        talent = lineageTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 4 && available.includes("KotORCG")) {
        talent = fencingTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 5 && available.includes("FUCG")) {
        talent = ideologueTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 6 && available.includes("SaV")) {
        talent = disgraceTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 7 && available.includes("CWCG")) {
        talent = collaboratorTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 8 && available.includes("CWCG")) {
        talent = loyalTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 9 && available.includes("LECG")) {
        talent = provocateurTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 10 && available.includes("RECG")) {
        talent = gamblingTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 11 && available.includes("GaW")) {
        talent = anticipationTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 12 && available.includes("GoI")) {
        talent = masterTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 13 && available.includes("GoI")) {
        talent = skillTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 14 && available.includes("GoI")) {
        talent = superiorTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 15 && available.includes("UR")) {
        talent = exileTalents(talents,available,skills,feats,BAB);
    }
    if (count == 20) {
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
    else if (randomNum == 1 && available.includes("CR") && talents.includes("Presence") && talents.includes("Improved Weaken Resolve")) {
        talent = "Demand Surrender";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Presence")) {
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
}

    return talent;
}

export function inspirationTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 7);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Bolster Ally";
    }
    else if (randomNum == 1 && available.includes("CR") && talents.includes("Bolster Ally") && talents.includes("Inspire Confidence")) {
        talent = "Ignite Fervor";
    }
    else if (randomNum == 2 && available.includes("CR")) {
        talent = "Inspire Confidence";
    }
    else if (randomNum == 3 && available.includes("CR")) {
        talent = "Inspire Haste";
    }
    else if (randomNum == 4 && available.includes("CR") && talents.includes("Bolster Ally") && talents.includes("Inspire Confidence") && talents.includes("Ignite Fervor")) {
        talent = "Inspire Zeal";
    }
    else if (randomNum == 5 && available.includes("SaV") && talents.includes("Bolster Ally") && talents.includes("Inspire Confidence")) {
        talent = "Beloved";
    }
    else if (randomNum == 6 && available.includes("FUCG") && talents.includes("Inspire Confidence")) {
        talent = "Willpower";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
}

    return talent;
}

export function leadershipTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 11);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Born Leader";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Coordinate (+1)";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Born Leader")) {
        talent = "Distant Command";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Born Leader")) {
        talent = "Fearless Leader";
    }
    else if (randomNum == 4 && available.includes("CR") && talents.includes("Born Leader") && talents.includes("Distant Command")) {
        talent = "Rally";
    }
    else if (randomNum == 5 && available.includes("CR") && talents.includes("Born Leader") && talents.includes("Coordinate (+1)")) {
        talent = "Trust";
    }
    else if (randomNum == 6 && available.includes("GaW") && talents.includes("Born Leader") && talents.includes("Tactical Savvy")) {
        talent = "Commanding Presence";
    }
    else if (randomNum == 7 && available.includes("UR") && talents.includes("Born Leader") && talents.includes("Coordinate (+1)")) {
        talent = "Coordinated Leadership";
    }
    else if (randomNum == 8 && available.includes("KotORCG") && talents.includes("Born Leader") && skills.includes("Persuasion")) {
        talent = "Reactionary Attack";
    }
    else if (randomNum == 9 && available.includes("GaW") && talents.includes("Born Leader")) {
        talent = "Tactical Savvy";
    }
    else if (randomNum == 10 && available.includes("RECG")) {
        talent = "Unwavering Ally";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
}

    return talent;
}

export function lineageTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 7);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Connections";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Educated";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Educated")) {
        talent = "Spontaneous Skill";
    }
    else if (randomNum == 3 && available.includes("CR")) {
        talent = "Wealth";
    }
    else if (randomNum == 4 && available.includes("SotG") && talents.includes("Educated") && skills.includes("Knowledge (Technology)")) {
        talent = "Engineer";
    }
    else if (randomNum == 5 && available.includes("FUCG") && talents.includes("Connections")) {
        talent = "Influential Friends";
    }
    else if (randomNum == 6 && available.includes("FUCG") && talents.includes("Connections") && talents.includes("Influential Friends")) {
        talent = "Powerful Friends";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
}

    return talent;
}