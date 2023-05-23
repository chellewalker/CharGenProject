export function soldierTalents(talents,available,skills,feats) {
    
    let talent = "";
    while (talent == "") {
        //let randomNum = Math.floor(Math.random() * 13);
        let randomNum = Math.floor(Math.random() * 3);

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

export function brawlerTalents(talents,available,skills,feats) {
    let talent = "";
    while (talent == "") {
    let randomNum = Math.floor(Math.random() * 22);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Expert Grappler";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Gun Club";
    }
    else if (randomNum == 2 && available.includes("CR")) {
        talent = "Melee Smash";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Melee Smash")) {
        talent = "Stunning Strike";
    }
    else if (randomNum == 4 && available.includes("CR") && talents.includes("Expert Grappler")) {
        talent = "Unbalance Opponent";
    }
    else if (randomNum == 5 && available.includes("CWCG") && talents.includes("Gun Club")) {
        talent = "Bayonet Master";
    }
    else if (randomNum == 6 && available.includes("SaV")) {
        talent = "Cantina Brawler";
    }
    else if (randomNum == 7 && available.includes("SaV")) {
        talent = "Counterpunch";
    }
    else if (randomNum == 8 && available.includes("GoI") && talents.includes("Entangler")) {
        talent = "Crowd Control";
    }
    else if (randomNum == 9 && available.includes("KotORCG") && talents.includes("Melee Smash")) {
        talent = "Devastating Melee Smash";
    }
    else if (randomNum == 10 && available.includes("GoI")) {
        talent = "Disarm and Engage";
    }
    else if (randomNum == 11 && available.includes("GoI")) {
        talent = "Entangler";
    }
    else if (randomNum == 12 && available.includes("SaV") && talents.includes("Melee Smash") && talents.includes("Stunning Strike")) {
        talent = "Experienced Brawler";
    }
    else if (randomNum == 13 && available.includes("LECG")) {
        talent = "Grabber";
    }
    else if (randomNum == 14 && available.includes("LECG")) {
        talent = "Hammerblow";
    }
    else if (randomNum == 15 && available.includes("SaV")) {
        talent = "Make Do";
    }
    else if (randomNum == 16 && available.includes("SaV")) {
        talent = "Man Down";
    }
    else if (randomNum == 17 && available.includes("SaV") && talents.includes("Cantina Brawler")) {
        talent = "Pick a Fight";
    }
    else if (randomNum == 18 && available.includes("GoI")) {
        talent = "Reverse Strength";
    }
    else if (randomNum == 19 && available.includes("LECG")) {
        talent = "Strong Grab";
    }
    else if (randomNum == 20 && available.includes("SaV")) {
        talent = "Sucker Punch";
    }
    else if (randomNum == 21 && available.includes("CWCG") && talents.includes("Melee Smash")) {
        talent = "Unrelenting Assault";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
}

    return talent;
}

export function commandoTalents(talents,available,skills,feats) {
    let talent = "";
    while (talent == "") {
    let randomNum = Math.floor(Math.random() * 14);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Battle Analysis";
    }
    else if (randomNum == 1 && available.includes("CR") && talents.includes("Battle Analysis")) {
        talent = "Cover Fire";
    }
    else if (randomNum == 2 && available.includes("CR")) {
        talent = "Demolitionist";
    }
    else if (randomNum == 3 && available.includes("CR")) {
        talent = "Draw Fire";
    }
    else if (randomNum == 4 && available.includes("CR") && skills.includes("Initiative")) {
        talent = "Harm's Way";
    }
    else if (randomNum == 5 && available.includes("CR")) {
        talent = "Indomitable";
    }
    else if (randomNum == 6 && available.includes("CR")) {
        talent = "Tough as Nails";
    }
    else if (randomNum == 7 && available.includes("GoI") && talents.includes("Dedicated Protector") && talents.includes("Harm's Way")) {
        talent = "Coordinated Effort";
    }
    else if (randomNum == 8 && available.includes("GoI") && talents.includes("Dedicated Protector") && talents.includes("Harm's Way")) {
        talent = "Dedicated Guardian";
    }
    else if (randomNum == 9 && available.includes("GoI") && talents.includes("Harm's Way")) {
        talent = "Dedicated Protector";
    }
    else if (randomNum == 10 && available.includes("GaW") && talents.includes("Battle Analysis")) {
        talent = "Defensive Position";
    }
    else if (randomNum == 11 && available.includes("TotG") && talents.includes("Tough as Nails")) {
        talent = "Hard Target";
    }
    else if (randomNum == 12 && available.includes("CWCG")) {
        talent = "Keep Them at Bay";
    }
    else if (randomNum == 13 && available.includes("UR") && talents.includes("Harm's Way") && skills.includes("Initiative")) {
        talent = "Out of Harm's Way";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
}

    return talent;
}