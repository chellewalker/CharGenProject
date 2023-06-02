export function traditionTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,tradition) {
    let count = 0;
    let talent = "";
    while (talent == "") {
        count++;
    if (tradition == 2) {
        talent = jensaaraiTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 3) {
        talent = dathomiriTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function jensaaraiTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0) {
        talent = "Attune Armor";
    }
    else if (randomNum == 1) {
        talent = "Force Cloak";
    }
    else if (randomNum == 2 && talents.includes("Force Cloak")) {
        talent = "Force Cloak Mastery";
    }
    else if (randomNum == 3) {
        talent = "Linked Defense";
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

export function dathomiriTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0) {
        talent = "Adept Spellcaster";
    }
    else if (randomNum == 1) {
        talent = "Charm Beast";
    }
    else if (randomNum == 2 && talents.includes("Charm Beast")) {
        talent = "Command Beast";
    }
    else if (randomNum == 3) {
        talent = "Flight";
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