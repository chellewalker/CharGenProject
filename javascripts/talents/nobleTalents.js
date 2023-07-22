export function nobleTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
    let count = 0;
    let talent = "";
    while (talent == "") {
        count++;
        let randomNum = Math.floor(Math.random() * 15);
    if (randomNum == 0) {
        talent = influenceTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 1) {
        talent = inspirationTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 2) {
        talent = leadershipTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 3) {
        talent = lineageTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 4 && available.includes("KotORCG")) {
        talent = fencingTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 5 && available.includes("FUCG")) {
        talent = ideologueTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 6 && available.includes("SaV")) {
        talent = disgraceTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 7 && available.includes("CWCG")) {
        talent = collaboratorTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 8 && available.includes("LECG")) {
        talent = provocateurTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 9 && available.includes("RECG")) {
        talent = gamblingTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 10 && available.includes("GaW")) {
        talent = anticipationTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 11 && available.includes("GoI")) {
        talent = masterTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 12 && available.includes("GoI")) {
        talent = skillTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 13 && available.includes("GoI")) {
        talent = superiorTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    else if (randomNum == 14 && available.includes("UR")) {
        talent = exileTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}
    return talent;
}

export function influenceTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
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

export function inspirationTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
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
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function leadershipTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 11);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Born Leader";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Coordinate";
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
    else if (randomNum == 5 && available.includes("CR") && talents.includes("Born Leader") && talents.includes("Coordinate")) {
        talent = "Trust";
    }
    else if (randomNum == 6 && available.includes("GaW") && talents.includes("Born Leader") && talents.includes("Tactical Savvy")) {
        talent = "Commanding Presence";
    }
    else if (randomNum == 7 && available.includes("UR") && talents.includes("Born Leader") && talents.includes("Coordinate")) {
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
    if (talents.includes(talent) && talent != "Coordinate") {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function lineageTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
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
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function fencingTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0 && skills.includes("Deception") && skills.includes("Persuasion")) {
        talent = "Noble Fencing Style";
    }
    else if (randomNum == 1 && talents.includes("Noble Fencing Style")) {
        talent = "Demoralizing Defense";
    }
    else if (randomNum == 2 && talents.includes("Noble Fencing Style")) {
        talent = "Leading Feint";
    }
    else if (randomNum == 3 && talents.includes("Noble Fencing Style") && BAB >= 5) {
        talent = "Personal Affront";
    }
    else if (randomNum == 4 && talents.includes("Noble Fencing Style") && BAB >= 5) {
        talent = "Transposing Strike";
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

export function ideologueTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Instruction";
    }
    else if (randomNum == 1 && cha >= 13) {
        talent = "Idealist";
    }
    else if (randomNum == 2) {
        talent = "Know Your Enemy";
    }
    else if (randomNum == 3 && talents.includes("Know Your Enemy")) {
        talent = "Known Dissident";
    }
    else if (randomNum == 4) {
        talent = "Lead by Example";
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

export function disgraceTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0 && talents.includes("Dirty Tactics")) {
        talent = "Ambush";
    }
    else if (randomNum == 1) {
        talent = "Castigate";
    }
    else if (randomNum == 2) {
        talent = "Dirty Tactics";
    }
    else if (randomNum == 3 && talents.includes("Dirty Tactics")) {
        talent = "Misplaced Loyalty";
    }
    else if (randomNum == 4 && talents.includes("Misplaced Loyalty")) {
        talent = "Two-Faced";
    }
    else if (randomNum == 5) {
        talent = "Unreadable";
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

export function collaboratorTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Double Agent";
    }
    else if (randomNum == 1) {
        talent = "Enemy Tactics";
    }
    else if (randomNum == 2) {
        talent = "Feed Information";
    }
    else if (randomNum == 3 && talents.includes("Enemy Tactics")) {
        talent = "Friendly Fire";
    }
    else if (randomNum == 4 && talents.includes("Double Agent")) {
        talent = "Protection";
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

export function provocateurTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0) {
        talent = "Cast Suspicion";
    }
    else if (randomNum == 1) {
        talent = "Distress to Discord";
    }
    else if (randomNum == 2 && talents.includes("Cast Suspicion")) {
        talent = "Friend or Foe";
    }
    else if (randomNum == 3 && talents.includes("Distress to Discord")) {
        talent = "Seize the Moment";
    }
    else if (randomNum == 4 && talents.includes("Cast Suspicion")) {
        talent = "Stolen Advantage";
    }
    else if (randomNum == 5 && talents.includes("Friend or Foe")) {
        talent = "True Betrayal";
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

export function gamblingTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Assault Gambit";
    }
    else if (randomNum == 1 && talents.includes("Assault Gambit")) {
        talent = "Direct Fire";
    }
    else if (randomNum == 2) {
        talent = "Face the Foe";
    }
    else if (randomNum == 3 && talents.includes("Face the Foe")) {
        talent = "Lead From the Front";
    }
    else if (randomNum == 4 && talents.includes("Face the Foe")) {
        talent = "Luck Favors the Bold";
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

export function anticipationTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Anticipate Movement";
    }
    else if (randomNum == 1) {
        talent = "Forewarn Allies";
    }
    else if (randomNum == 2) {
        talent = "Get Down";
    }
    else if (randomNum == 3 && talents.includes("Forewarn Allies")) {
        talent = "Heavy Fire Zone";
    }
    else if (randomNum == 4 && talents.includes("Get Down")) {
        talent = "Summon Aid";
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

export function masterTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Advanced Planning";
    }
    else if (randomNum == 1) {
        talent = "Blend In";
    }
    else if (randomNum == 2) {
        talent = "Get Into Position";
    }
    else if (randomNum == 3 && talents.includes("Advanced Planning") && talents.includes("Get Into Position")) {
        talent = "Master Manipulator";
    }
    else if (randomNum == 4 && talents.includes("Advanced Planning")) {
        talent = "Retaliation";
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

export function skillTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0) {
        talent = "Guaranteed Boon";
    }
    else if (randomNum == 1) {
        talent = "Leading Skill";
    }
    else if (randomNum == 2) {
        talent = "Learn from Mistakes";
    }
    else if (randomNum == 3) {
        talent = "Try Your Luck";
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

export function superiorTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 7);

    if (randomNum == 0) {
        let randomNum2 = Math.floor(Math.random() * skills.length);
        talent = "Assured Skill ("+skills[randomNum2]+")";
    }
    else if (randomNum == 1) {
        talent = "Critical Skill Success";
    }
    else if (randomNum == 2) {
        let randomNum2 = Math.floor(Math.random() * skills.length);
        talent = "Exceptional Skill ("+skills[randomNum2]+")";
    }
    else if (randomNum == 3) {
        talent = "Reliable Boon";
    }
    else if (randomNum == 4) {
        let randomNum2 = Math.floor(Math.random() * skills.length);
        talent = "Skill Boon ("+skills[randomNum2]+")";
    }
    else if (randomNum == 5 && talents.includes("Critical Skill Success")) {
        let randomNum2 = Math.floor(Math.random() * skills.length);
        talent = "Skill Confidence ("+skills[randomNum2]+")";
    }
    else if (randomNum == 6) {
        let randomNum2 = Math.floor(Math.random() * skills.length);
        talent = "Skillful Recovery ("+skills[randomNum2]+")";
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

export function exileTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0 && skills.includes("Persuasion")) {
        talent = "Arrogant Bluster";
    }
    else if (randomNum == 1 && talents.includes("Galactic Guidance") && talents.includes("Self-Reliant") && skills.includes("Persuasion")) {
        talent = "Band Together";
    }
    else if (randomNum == 2 && skills.includes("Knowledge (Galactic Lore)")) {
        talent = "Galactic Guidance";
    }
    else if (randomNum == 3 && skills.includes("Persuasion")) {
        talent = "Rant";
    }
    else if (randomNum == 4 && talents.includes("Bolster Ally") ||
            randomNum == 4 && talents.includes("Inspire Confidence") ||
            randomNum == 4 && talents.includes("Inspire Haste")) {
        talent = "Self-Reliant";
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