export function traditionTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,tradition) {
    let count = 0;
    let talent = "";
    while (talent == "") {
        count++;
    if (tradition == 2 && available.includes("CR")) {
        talent = jensaaraiTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 3 && available.includes("CR")) {
        talent = dathomiriTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 4 && available.includes("KotORCG")) {
        talent = jalsheyTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 5 && available.includes("KotORCG")) {
        talent = keetaelTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 6 && available.includes("KotORCG")) {
        talent = krathTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 7 && available.includes("KotORCG")) {
        talent = lukaseneTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 8 && available.includes("KotORCG")) {
        talent = shasaTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 9 && available.includes("FUCG")) {
        talent = agentsTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 10 && available.includes("FUCG")) {
        talent = felucianTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 12 && available.includes("FUCG")) {
        talent = bandoGoraTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 13 && available.includes("FUCG")) {
        talent = believersTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
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

export function jalsheyTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0 && talents.includes("Force Delay")) {
        talent = "Action Exchange";
    }
    else if (randomNum == 1 && skills.includes("Persuasion")) {
        talent = "Force Delay";
    }
    else if (randomNum == 2) {
        talent = "Imbue Item";
    }
    else if (randomNum == 3) {
        talent = "Knowledge of the Force";
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

export function keetaelTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0) {
        talent = "Conceal Force Use";
    }
    else if (randomNum == 1) {
        talent = "Force Direction";
    }
    else if (randomNum == 2) {
        talent = "Force Momentum";
    }
    else if (randomNum == 3 && talents.includes("Visions")) {
        talent = "Past Visions";
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

export function krathTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0) {
        talent = "Dark Side Manipulation";
    }
    else if (randomNum == 1 && talents.includes("Illusion")) {
        talent = "Krath Illusions";
    }
    else if (randomNum == 2) {
        talent = "Krath Intuition";
    }
    else if (randomNum == 3) {
        talent = "Krath Surge";
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

export function lukaseneTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0 && skills.includes("Use the Force")) {
        talent = "Field Detection";
    }
    else if (randomNum == 1 && species == "Miraluka" && skills.includes("Use the Force")) {
        talent = "Improved Force Sight";
    }
    else if (randomNum == 2 && talents.includes("Field Detection") && forcePowers.includes("Farseeing")) {
        talent = "Luka Sene Master";
    }
    else if (randomNum == 3 && forcePowers.includes("Farseeing") && skills.includes("Use the Force")) {
        talent = "Quickseeing";
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

export function shasaTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Deception Awareness";
    }
    else if (randomNum == 1 && talents.includes("Fira Mastery")) {
        talent = "Greater Weapon Focus (Fira)";
    }
    else if (randomNum == 2) {
        talent = "Progenitor's Call";
    }
    else if (randomNum == 3) {
        talent = "Waveform";
    }
    else if (randomNum == 4 && available.includes("HC")) {
        talent = "Fira Mastery";
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

export function agentsTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0) {
        talent = "Buried Presence";
    }
    else if (randomNum == 1 && talents.includes("Buried Presence")) {
        talent = "Conceal Other";
    }
    else if (randomNum == 2 && feats.includes("Weapon Proficiency (Pistols)") ||
                randomNum == 2 && feats.includes("Weapon Proficiency (Rifles)")) {
        talent = "Insightful Aim";
    }
    else if (randomNum == 3) {
        talent = "Vanish";
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

export function felucianTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 7);

    if (randomNum == 0) {
        talent = "Charm Beast";
    }
    else if (randomNum == 1 && talents.includes("Charm Beast")) {
        talent = "Command Beast";
    }
    else if (randomNum == 2 && forcePowers.includes("Force Blast")) {
        talent = "Detonate";
    }
    else if (randomNum == 3) {
        talent = "Hive Mind";
    }
    else if (randomNum == 4) {
        talent = "Infuse Weapon";
    }
    else if (randomNum == 5 && forcePowers.includes("Force Blast")) {
        talent = "Sickening Blast";
    }
    else if (randomNum == 6 && available.includes("HC")) {
        talent = "Skullblade Mastery";
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

export function bandoGoraTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0) {
        talent = "Bando Gora Surge";
    }
    else if (randomNum == 1) {
        talent = "Force Fighter";
    }
    else if (randomNum == 2) {
        talent = "Resist Enervation";
    }
    else if (randomNum == 3 && feats.includes("Force Training")) {
        talent = "Victorious Force Mastery";
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

export function believersTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Believer Intuition";
    }
    else if (randomNum == 1) {
        talent = "Defense Boost";
    }
    else if (randomNum == 2) {
        talent = "Hardiness";
    }
    else if (randomNum == 3) {
        talent = "High Impact";
    }
    else if (randomNum == 4) {
        talent = "Sith Reverence";
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