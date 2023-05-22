export function nobleTalents(talents,available,skills,feats) {
    
    let talent = "";
    while (talent == "") {
        //let randomNum = Math.floor(Math.random() * 16);
        let randomNum = 0;

    if (randomNum == 0) {
        talent = influenceTalents(talents,available,skills,feats);
    }
    else if (randomNum == 1) {
        talent = inspirationTalents(talents,available,skills,feats);
    }
    else if (randomNum == 2) {
        talent = leadershipTalents(talents,available,skills,feats);
    }
    else if (randomNum == 3) {
        talent = lineageTalents(talents,available,skills,feats);
    }
    else if (randomNum == 4 && available.includes("KotORCG")) {
        talent = fencingTalents(talents,available,skills,feats);
    }
    else if (randomNum == 5 && available.includes("FUCG")) {
        talent = ideologueTalents(talents,available,skills,feats);
    }
    else if (randomNum == 6 && available.includes("SaV")) {
        talent = disgraceTalents(talents,available,skills,feats);
    }
    else if (randomNum == 7 && available.includes("CWCG")) {
        talent = collaboratorTalents(talents,available,skills,feats);
    }
    else if (randomNum == 8 && available.includes("CWCG")) {
        talent = loyalTalents(talents,available,skills,feats);
    }
    else if (randomNum == 9 && available.includes("LECG")) {
        talent = provocateurTalents(talents,available,skills,feats);
    }
    else if (randomNum == 10 && available.includes("RECG")) {
        talent = gamblingTalents(talents,available,skills,feats);
    }
    else if (randomNum == 11 && available.includes("GaW")) {
        talent = anticipationTalents(talents,available,skills,feats);
    }
    else if (randomNum == 12 && available.includes("GoI")) {
        talent = masterTalents(talents,available,skills,feats);
    }
    else if (randomNum == 13 && available.includes("GoI")) {
        talent = skillTalents(talents,available,skills,feats);
    }
    else if (randomNum == 14 && available.includes("GoI")) {
        talent = superiorTalents(talents,available,skills,feats);
    }
    else if (randomNum == 15 && available.includes("UR")) {
        talent = exileTalents(talents,available,skills,feats);
    }
    }
    return talent;
}

export function influenceTalents(talents,available,skills,feats) {
    let talent = "";
    while (talent == "") {
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