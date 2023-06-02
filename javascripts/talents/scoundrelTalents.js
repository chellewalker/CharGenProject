export function scoundrelTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let count = 0;
    let talent = "";
    while (talent == "") {
        count++;
        //let randomNum = Math.floor(Math.random() * 14);
        let randomNum = Math.floor(Math.random() * 4);
    if (randomNum == 0) {
        talent = fortuneTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 1) {
        talent = misfortuneTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 2) {
        talent = slicerTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 3) {
        talent = spacerTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 4 && available.includes("SotG")) {
        talent = outlawTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 5 && available.includes("TotG")) {
        talent = malkiteTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 6 && available.includes("KotORCG")) {
        talent = runTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 7 && available.includes("FUCG")) {
        talent = smugglingTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 8 && available.includes("CWCG")) {
        talent = opportunistTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 9 && available.includes("LECG")) {
        talent = biotechTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 10 && available.includes("RECG")) {
        talent = recklessnessTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 11 && available.includes("GaW")) {
        talent = brigandTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 12 && available.includes("GoI")) {
        talent = revolutionaryTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 13 && available.includes("UR")) {
        talent = outsiderTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}
    return talent;
}

export function fortuneTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 13);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Fool's Luck";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Fortune's Favor";
    }
    else if (randomNum == 2 && available.includes("CR")) {
        talent = "Gambler";
    }
    else if (randomNum == 3 && available.includes("CR")) {
        talent = "Knack";
    }
    else if (randomNum == 4 && available.includes("CR") && talents.includes("Knack")) {
        talent = "Lucky Shot";
    }
    else if (randomNum == 5 && available.includes("SaV") && talents.includes("Fool's Luck")) {
        talent = "Avert Disaster";
    }
    else if (randomNum == 6 && available.includes("SaV") && talents.includes("Fool's Luck")) {
        talent = "Better Lucky than Dead";
    }
    else if (randomNum == 7 && available.includes("SaV") && talents.includes("Knack") && talents.includes("Lucky Shot")) {
        talent = "Dumb Luck";
    }
    else if (randomNum == 8 && available.includes("SaV")) {
        talent = "Labyrinthine Mind";
    }
    else if (randomNum == 9 && available.includes("KotORCG") && talents.includes("Knack")) {
        talent = "Lucky Stop";
    }
    else if (randomNum == 10 && available.includes("SaV") && talents.includes("Knack") && talents.includes("Lucky Shot")) {
        talent = "Ricochet Shot";
    }
    else if (randomNum == 11 && available.includes("SaV") && talents.includes("Knack") && talents.includes("Lucky Shot")) {
        talent = "Uncanny Luck";
    }
    else if (randomNum == 12 && available.includes("SaV") && talents.includes("Knack") && talents.includes("Lucky Shot")) {
        talent = "Unlikely Shot";
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

export function misfortuneTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 16);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Dastardly Strike";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Disruptive";
    }
    else if (randomNum == 2 && available.includes("CR")) {
        talent = "Sneak Attack";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Disruptive")) {
        talent = "Walk the Line";
    }
    else if (randomNum == 4 && available.includes("GaW") && talents.includes("Sneak Attack")) {
        talent = "Backstabber";
    }
    else if (randomNum == 5 && available.includes("SaV")) {
        talent = "Befuddle";
    }
    else if (randomNum == 6 && available.includes("SaV") && talents.includes("Disruptive") && talents.includes("Walk the Line")) {
        talent = "Cunning Strategist";
    }
    else if (randomNum == 7 && available.includes("SaV")) {
        talent = "Hesitate";
    }
    else if (randomNum == 8 && available.includes("SaV") && talents.includes("Skirmisher")) {
        talent = "Improved Skirmisher";
    }
    else if (randomNum == 9 && available.includes("GaW") && talents.includes("Sneak Attack") && feats.includes("Point-Blank Shot")) {
        talent = "Improved Sneak Attack";
    }
    else if (randomNum == 10 && available.includes("LECG")) {
        talent = "Seducer";
    }
    else if (randomNum == 11 && available.includes("LECG")) {
        talent = "Seize Object";
    }
    else if (randomNum == 12 && available.includes("SaV") && talents.includes("Hesitate")) {
        talent = "Sow Confusion";
    }
    else if (randomNum == 13 && available.includes("CWCG")) {
        talent = "Stymie";
    }
    else if (randomNum == 14 && available.includes("SaV") && talents.includes("Skirmisher") && talents.includes("Sneak Attack")) {
        talent = "Sudden Strike";
    }
    else if (randomNum == 15 && available.includes("SaV") && talents.includes("Dastardly Strike")) {
        talent = "Weakening Strike";
    }
    if (talents.includes(talent) && talent != "Sneak Attack") {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function slicerTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 7);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Gimmick";
    }
    else if (randomNum == 1 && available.includes("CR") && talents.includes("Gimmick")) {
        talent = "Master Slicer";
    }
    else if (randomNum == 2 && available.includes("CR")) {
        talent = "Trace";
    }
    else if (randomNum == 3 && available.includes("FUCG") && skills.includes("Use Computer")) {
        talent = "Electronic Forgery";
    }
    else if (randomNum == 4 && available.includes("FUCG") && skills.includes("Use Computer")) {
        talent = "Electronic Sabotage";
    }
    else if (randomNum == 5 && available.includes("FUCG") && skills.includes("Mechanics")) {
        talent = "Security Slicer";
    }
    else if (randomNum == 6 && available.includes("SaV") && talents.includes("Electronic Sabotage") && skills.includes("Use Computer")) {
        talent = "Virus";
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

export function spacerTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 7);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Hyperdriven";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Spacehound";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Spacehound")) {
        talent = "Starship Raider";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Spacehound")) {
        talent = "Stellar Warrior";
    }
    else if (randomNum == 4 && available.includes("SaV") && talents.includes("Spacehound") && talents.includes("Starship Raider")) {
        talent = "Cramped Quarters Fighting";
    }
    else if (randomNum == 5 && available.includes("UR") && talents.includes("Spacehound") && talents.includes("Starship Raider")) {
        talent = "Deep Space Raider";
    }
    else if (randomNum == 6 && available.includes("SaV") && talents.includes("Spacehound") && talents.includes("Stellar Warrior")) {
        talent = "Make a Break for It";
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