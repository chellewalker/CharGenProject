export function jediTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let count = 0;
    let talent = "";
    while (talent == "") {
        count++;
        let randomNum = Math.floor(Math.random() * 4);
    if (randomNum == 0) {
        talent = consularTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 1) {
        talent = guardianTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 2 && light == 1) {
        talent = sentinelTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 3 && feats.includes("Weapon Proficiency (Lightsabers)")) {
        talent = lightsaberTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function consularTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 20);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Adept Negotiator";
    }
    else if (randomNum == 1 && available.includes("CR") && talents.includes("Adept Negotiator")) {
        if (skills.includes("Persuasion")) {}
        else {
            talent = "Force Persuasion";
    }}
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
    else if (randomNum == 7 && available.includes("KotORCG") && forcePowers.includes("Farseeing")) {
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
    else if (randomNum == 16 && available.includes("KotORCG") && forcePowers.includes("Farseeing")) {
        talent = "Renew Vision";
    }
    else if (randomNum == 17 && available.includes("KotORCG") && talents.includes("WatchCircle Initiate") && forcePowers.includes("Farseeing")) {
        talent = "Visionary Attack";
    }
    else if (randomNum == 18 && available.includes("KotORCG") && talents.includes("WatchCircle Initiate") && forcePowers.includes("Farseeing")) {
        talent = "Visionary Defense";
    }
    else if (randomNum == 19 && available.includes("KotORCG") && forcePowers.includes("Farseeing")) {
        talent = "WatchCircle Initiate";
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

export function guardianTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 16);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Acrobatic Recovery";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Battle Meditation";
    }
    else if (randomNum == 2 && available.includes("CR")) {
        talent = "Elusive Target";
    }
    else if (randomNum == 3 && available.includes("CR")) {
        talent = "Force Intuition";
    }
    else if (randomNum == 4 && available.includes("CR")) {
        talent = "Resilience";
    }
    else if (randomNum == 5 && available.includes("RECG")) {
        talent = "Close Maneuvering";
    }
    else if (randomNum == 6 && available.includes("GaW") && talents.includes("Block") ||
                randomNum == 6 && available.includes("GaW") && talents.includes("Deflect")) {
        talent = "Cover Escape";
    }
    else if (randomNum == 7 && available.includes("LECG")) {
        talent = "Defensive Acuity";
    }
    else if (randomNum == 8 && available.includes("CWCG")) {
        talent = "Exposing Strike";
    }
    else if (randomNum == 9 && available.includes("FUCG")) {
        talent = "Forceful Warrior";
    }
    else if (randomNum == 10 && available.includes("JATM")) {
        talent = "Grenade Defense";
    }
    else if (randomNum == 11 && available.includes("CWCG")) {
        talent = "Guardian Strike";
    }
    else if (randomNum == 12 && available.includes("JATM")) {
        talent = "Hold the Line";
    }
    else if (randomNum == 13 && available.includes("RECG")) {
        talent = "Immovable";
    }
    else if (randomNum == 14 && available.includes("KotORCG") && talents.includes("Battle Meditation")) {
        talent = "Improved Battle Meditation";
    }
    else if (randomNum == 15 && available.includes("FUCG")) {
        talent = "Mobile Combatant";
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

export function sentinelTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 19);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Clear Mind";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Dark Side Sense";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Dark Side Sense")) {
        talent = "Dark Side Scourge";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Clear Mind")) {
        talent = "Force Haze";
    }
    else if (randomNum == 4 && available.includes("CR") && talents.includes("Dark Side Sense")) {
        talent = "Resist the Dark Side";
    }
    else if (randomNum == 5 && available.includes("FUCG")) {
        talent = "Dampen Presence";
    }
    else if (randomNum == 6 && available.includes("KotORCG") && talents.includes("Sentinel Strike")) {
        talent = "Dark Retaliation";
    }
    else if (randomNum == 7 && available.includes("LECG") && talents.includes("Dark Side Sense")) {
        talent = "Dark Side Bane";
    }
    else if (randomNum == 8 && available.includes("RECG")) {
        talent = "Gradual Resistance";
    }
    else if (randomNum == 9 && available.includes("JATM")) {
        talent = "Master of the Great Hunt";
    }
    else if (randomNum == 10 && available.includes("SaV") && talents.includes("Clear Mind") && talents.includes("Force Haze")) {
        talent = "Persistent Haze";
    }
    else if (randomNum == 11 && available.includes("GaW")) {
        talent = "Prime Targets";
    }
    else if (randomNum == 12 && available.includes("RECG")) {
        talent = "Reap Retribution";
    }
    else if (randomNum == 13 && available.includes("UR")) {
        talent = "Sense Primal Force";
    }
    else if (randomNum == 14 && available.includes("KotORCG")) {
        talent = "Sentinel Strike";
    }
    else if (randomNum == 15 && available.includes("KotORCG")) {
        talent = "Sentinel's Gambit";
    }
    else if (randomNum == 16 && available.includes("CWCG")) {
        talent = "Sentinel's Observation";
    }
    else if (randomNum == 17 && available.includes("FUCG")) {
        talent = "Steel Resolve";
    }
    else if (randomNum == 18 && available.includes("CWCG") && talents.includes("Clear Mind") && talents.includes("Force Haze")) {
        talent = "Unseen Eyes";
    }
    if (talents.includes(talent) && talent != "Sentinel Strike") {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function lightsaberTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 11);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Block";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Deflect";
    }
    else if (randomNum == 2 && available.includes("CR")) {
        talent = "Lightsaber Defense";
    }
    else if (randomNum == 3 && available.includes("CR") && feats.includes("Weapon Focus (Lightsabers)")) {
        talent = "Weapon Specialization (Lightsabers)";
    }
    else if (randomNum == 4 && available.includes("CR")) {
        talent = "Lightsaber Throw";
    }
    else if (randomNum == 5 && available.includes("CR") && talents.includes("Deflect") && BAB >= 5) {
        talent = "Redirect Shot";
    }
    else if (randomNum == 6 && available.includes("LECG") && feats.includes("Armor Proficiency (Light)") && feats.includes("Armor Proficiency (Medium)")) {
        talent = "Cortosis Gauntlet Block";
    }
    else if (randomNum == 7 && available.includes("RECG") && talents.includes("Redirect Shot")) {
        talent = "Precise Redirect";
    }
    else if (randomNum == 8 && available.includes("LECG")) {
        talent = "Precision";
    }
    else if (randomNum == 9 && available.includes("KotORCG") && talents.includes("Block") && BAB >= 5) {
        talent = "Riposte";
    }
    else if (randomNum == 10 && available.includes("JATM")) {
        talent = "Shoto Focus";
    }
    if (talents.includes(talent) && talent != "Lightsaber Defense") {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}