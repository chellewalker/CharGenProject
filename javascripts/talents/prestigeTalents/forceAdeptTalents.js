export function forceAdeptTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities,dark,tradition,forcePowers) {
    let count = 0;
    let talent = "";
    alert(forcePowers);
    while (talent == "") {
        count++;
        let randomNum = Math.floor(Math.random() * 7);
        randomNum = 1;
    if (randomNum == 0 && dark == 1) {
        talent = darkSideDevoteeTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 1) {
        talent = adeptTalents(talents,available,skills,feats,BAB,forcePowers);
    }
    else if (randomNum == 2) {
        talent = forceItemTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 3 && available.includes("FUCG") && tradition == 11) {
        talent = imperialInquisitorTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 4 && available.includes("JATM")) {
        talent = beastwardenTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 5 && available.includes("JATM")) {
        talent = mysticTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 6 && available.includes("JATM")) {
        talent = telepathTalents(talents,available,skills,feats,BAB);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function darkSideDevoteeTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Channel Aggression";
    }
    else if (randomNum == 1 && available.includes("CR") && talents.includes("Channel Aggression")) {
        talent = "Channel Anger";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Channel Aggression")) {
        talent = "Crippling Strike";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Channel Anger")) {
        talent = "Embrace the Dark Side";
    }
    else if (randomNum == 4 && available.includes("JATM")) {
        talent = "Dark Side Talisman";
    }
    else if (randomNum == 5 && available.includes("JATM") && talents.includes("Dark Side Talisman")) {
        talent = "Greater Dark Side Talisman";
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

export function adeptTalents(talents,available,skills,feats,BAB,forcePowers) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);
    randomNum = 0;

    if (randomNum == 0 && available.includes("CR") && forcePowers.length > 0) {
        let randomNum2 = Math.floor(Math.random() * forcePowers.length);
        talent = "Force Power Adept" + " (" + forcePowers[randomNum2] + ")";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Force Treatment";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Equilibrium")) {
        talent = "Fortified Body";
    }
    else if (randomNum == 3 && available.includes("UR")) {
        talent = "Instrument of the Force";
    }
    else if (randomNum == 4 && available.includes("UR") && talents.includes("Mystical Link")) {
        talent = "Long Call";
    }
    else if (randomNum == 5 && available.includes("UR")) {
        talent = "Mystical Link";
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

export function forceItemTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 8);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Attune Weapon";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Empower Weapon";
    }
    else if (randomNum == 2 && available.includes("CR")) {
        talent = "Force Talisman";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Force Talisman")) {
        talent = "Greater Force Talisman";
    }
    else if (randomNum == 4 && available.includes("JATM")) {
        talent = "Focused Force Talisman";
    }
    else if (randomNum == 5 && available.includes("JATM")) {
        talent = "Force Throw";
    }
    else if (randomNum == 6 && available.includes("JATM") && talents.includes("Focused Force Talisman")) {
        talent = "Greater Focused Force Talisman";
    }
    else if (randomNum == 7 && available.includes("JATM") && talents.includes("Empower Weapon")) {
        talent = "Primitive Block";
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

export function imperialInquisitorTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0 && talents.includes("Force Interrogation")) {
        talent = "Cower Enemies";
    }
    else if (randomNum == 1) {
        talent = "Force Interrogation";
    }
    else if (randomNum == 2) {
        talent = "Inquisition";
    }
    else if (randomNum == 3 && talents.includes("Force Interrogation")) {
        talent = "Unsettling Presence";
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

export function beastwardenTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Charm Beast";
    }
    else if (randomNum == 1 && talents.includes("Charm Beast")) {
        talent = "Bonded Mount";
    }
    else if (randomNum == 2 && talents.includes("Charm Beast")) {
        talent = "Entreat Beast";
    }
    else if (randomNum == 3 && talents.includes("Charm Beast")) {
        talent = "Soothing Presence";
    }
    else if (randomNum == 4 && talents.includes("Charm Beast")) {
        talent = "Wild Sense";
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

export function mysticTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Channel Vitality";
    }
    else if (randomNum == 1) {
        talent = "Closed Mind";
    }
    else if (randomNum == 2) {
        talent = "Esoteric Technique";
    }
    else if (randomNum == 3) {
        talent = "Mystic Mastery";
    }
    else if (randomNum == 4 && feats.includes("Force Regimen Mastery")) {
        talent = "Regimen Mastery";
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

export function telepathTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Mind Probe";
    }
    else if (randomNum == 1) {
        talent = "Perfect Telepathy";
    }
    else if (randomNum == 2) {
        talent = "Psychic Citadel";
    }
    else if (randomNum == 3 && talents.includes("Psychic Citadel")) {
        talent = "Psychic Defenses";
    }
    else if (randomNum == 4) {
        talent = "Telepathic Intruder";
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