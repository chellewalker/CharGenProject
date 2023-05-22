export function jediTalents(talents,available,skills,feats) {
    //let randomNum = Math.floor(Math.random() * 4);
    let randomNum = 0;
    let talent;
    if (randomNum == 0) {
        talent = consularTalents(talents,available,skills,feats);
    }
    else if (randomNum == 1) {
        talent = guardianTalents(talents,available,skills,feats);
    }
    else if (randomNum == 2) {
        talent = sentinelTalents(talents,available,skills,feats);
    }
    else if (randomNum == 3) {
        talent = lightsaberTalents(talents,available,skills,feats);
    }

    return talent;
}

export function consularTalents(talents,available,skills,feats) {
    let talent = "";
    while (talent == "") {
    let randomNum = Math.floor(Math.random() * 20);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Adept Negotiator";
    }
    else if (randomNum == 1 && available.includes("CR") && talents.includes("Adept Negotiator")) {
        talent = "Force Persuasion";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Adept Negotiator")) {
        talent = "Master Negotiator";
    }
    else if (randomNum == 3 && available.includes("CR")) {
        talent = "Skilled Advisor";
    }
    else if (randomNum == 4 && available.includes("JATM")) {
        talent = "Adversary Lore";
    }
    else if (randomNum == 5 && available.includes("LECG") && talents.includes("Adept Negotiator")) {
        talent = "Aggressive Negotiator";
    }
    else if (randomNum == 6 && available.includes("FUCG")) {
        talent = "Cleanse Mind";
    }
    else if (randomNum == 7 && available.includes("KotORCG")) {
        talent = "Collective Visions";
    }
    else if (randomNum == 8 && available.includes("CWCG")) {
        talent = "Consular's Vitality";
    }
    else if (randomNum == 9 && available.includes("LECG") && talents.includes("Adept Negotiator")) {
        talent = "Consular's Wisdom";
    }
    else if (randomNum == 10 && available.includes("LECG")) {
        talent = "Entreat Aid";
    }
    else if (randomNum == 11 && available.includes("FUCG")) {
        talent = "Force of Will";
    }
    else if (randomNum == 12 && available.includes("RECG")) {
        talent = "Guiding Strikes";
    }
    else if (randomNum == 13 && available.includes("CWCG") && talents.includes("Consular's Vitality")) {
        talent = "Improved Consular's Vitality";
    }
    else if (randomNum == 14 && available.includes("JATM") && talents.includes("Adversary Lore")) {
        talent = "Know Weakness";
    }
    else if (randomNum == 15 && available.includes("RECG")) {
        talent = "Recall";
    }
    else if (randomNum == 16 && available.includes("KotORCG")) {
        talent = "Renew Vision";
    }
    else if (randomNum == 17 && available.includes("KotORCG") && talents.includes("WatchCircle Initiate")) {
        talent = "Visionary Attack";
    }
    else if (randomNum == 18 && available.includes("KotORCG") && talents.includes("WatchCircle Initiate")) {
        talent = "Visionary Defense";
    }
    else if (randomNum == 19 && available.includes("KotORCG")) {
        talent = "WatchCircle Initiate";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
}

    return talent;
}