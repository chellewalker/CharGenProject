export function soldierTalents(talents,available,skills,feats) {
    
    let talent = "";
    while (talent == "") {
        //let randomNum = Math.floor(Math.random() * 13);
        let randomNum = 0;

    if (randomNum == 0) {
        talent = armorTalents(talents,available,skills,feats);
    }
    else if (randomNum == 1) {
        talent = brawlerTalents(talents,available,skills,feats);
    }
    else if (randomNum == 2) {
        talent = commandoTalents(talents,available,skills,feats);
    }
    else if (randomNum == 3) {
        talent = weaponTalents(talents,available,skills,feats);
    }
    else if (randomNum == 4 && available.includes("KotORCG")) {
        talent = rocketTalents(talents,available,skills,feats);
    }
    else if (randomNum == 5 && available.includes("FUCG")) {
        talent = mercenaryTalents(talents,available,skills,feats);
    }
    else if (randomNum == 6 && available.includes("CWCG")) {
        talent = squadTalents(talents,available,skills,feats);
    }
    else if (randomNum == 7 && available.includes("CWCG")) {
        talent = trooperTalents(talents,available,skills,feats);
    }
    else if (randomNum == 8 && available.includes("LECG")) {
        talent = bruteTalents(talents,available,skills,feats);
    }
    else if (randomNum == 9 && available.includes("RECG")) {
        talent = ambusherTalents(talents,available,skills,feats);
    }
    else if (randomNum == 10 && available.includes("GaW")) {
        talent = shockboxerTalents(talents,available,skills,feats);
    }
    else if (randomNum == 11 && available.includes("GaW")) {
        talent = veteranTalents(talents,available,skills,feats);
    }
    else if (randomNum == 12 && available.includes("UR")) {
        talent = warriorTalents(talents,available,skills,feats);
    }
    }
    return talent;
}

export function armorTalents(talents,available,skills,feats) {
    let talent = "";
    while (talent == "") {
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0 && available.includes("CR") && talents.includes("Armored Defense")) {
        talent = "Armor Mastery";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Armored Defense";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Armored Defense")) {
        talent = "Improved Armored Defense";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Armored Defense")) {
        talent = "Juggernaut";
    }
    else if (randomNum == 4 && available.includes("CR") && talents.includes("Armored Defense")) {
        talent = "Second Skin";
    }
    else if (randomNum == 5 && available.includes("KotORCG") && feats.includes("Armor Proficiency (Light)")) {
        talent = "Shield Expert";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
}

    return talent;
}