export function forceTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,tradition,cha) {
    let count = 0;
    let talent = "";
    while (talent == "") {
        count++;
        let randomNum = Math.floor(Math.random() * 6);
    if (randomNum == 0) {
        talent = alterTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 1) {
        talent = controlTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 2 && dark == 1) {
        talent = darkTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 3) {
        talent = senseTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 4 && available.includes("CWCG") && light == 1) {
        talent = lightTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 5 && available.includes("JATM")) {
        talent = spiritTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function alterTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 15);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Disciplined Strike";
    }
    else if (randomNum == 1 && available.includes("CR") && talents.includes("Adept Negotiator")) {
        talent = "Telekinetic Power";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Adept Negotiator")) {
        talent = "Telekinetic Savant";
    }
    else if (randomNum == 3 && available.includes("CWCG")) {
        talent = "Aversion";
    }
    else if (randomNum == 4 && available.includes("KotORCG")) {
        talent = "Force Flow";
    }
    else if (randomNum == 5 && available.includes("KotORCG") && forcePowers.includes("Mind Trick")) {
        talent = "Illusion";
    }
    else if (randomNum == 6 && available.includes("JATM") && talents.includes("Illusion")) {
        talent = "Illusion Bond";
    }
    else if (randomNum == 7 && available.includes("JATM")) {
        talent = "Influence Savant";
    }
    else if (randomNum == 8 && available.includes("JATM")) {
        talent = "Link";
    }
    else if (randomNum == 9 && available.includes("JATM") && talents.includes("Illusion")) {
        talent = "Masquerade";
    }
    else if (randomNum == 10 && available.includes("LECG") && talents.includes("Telekinetic Power") && forcePowers.includes("Move Object")) {
        talent = "Move Massive Object";
    }
    else if (randomNum == 11 && available.includes("JATM") && talents.includes("Influence Savant") && forcePowers.includes("Mind Trick")) {
        talent = "Suppress Force";
    }
    else if (randomNum == 12 && available.includes("FUCG") && talents.includes("Telekinetic Savant")) {
        talent = "Telekinetic Prodigy";
    }
    else if (randomNum == 13 && available.includes("KotORCG") && talents.includes("Telepathic Link")) {
        talent = "Telepathic Influence";
    }
    else if (randomNum == 14 && available.includes("KotORCG")) {
        talent = "Telepathic Link";
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

export function controlTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 12);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Damage Reduction 10";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Equilibrium";
    }
    else if (randomNum == 2 && available.includes("CR")) {
        talent = "Force Focus";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Equilibrium")) {
        talent = "Force Recovery";
    }
    else if (randomNum == 4 && available.includes("KotORCG") && forcePowers.includes("Mind Trick")) {
        talent = "Beast Trick";
    }
    else if (randomNum == 5 && available.includes("JATM") && forcePowers.includes("Negate Energy")) {
        talent = "Channel Energy";
    }
    else if (randomNum == 6 && available.includes("FUCG") && feats.includes("Force Training")) {
        talent = "Force Exertion";
    }
    else if (randomNum == 7 && available.includes("JATM")) {
        talent = "Force Harmony";
    }
    else if (randomNum == 8 && available.includes("KotORCG") && forcePowers.includes("Rebuke")) {
        talent = "Force Suppression";
    }
    else if (randomNum == 9 && available.includes("FUCG")) {
        talent = "Indomitable Will";
    }
    else if (randomNum == 10 && available.includes("CWCG")) {
        talent = "The Will to Resist";
    }
    else if (randomNum == 11 && available.includes("LECG")) {
        talent = "Telekinetic Stability";
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

export function darkTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 10);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Power of the Dark Side";
    }
    else if (randomNum == 1 && available.includes("CR") && talents.includes("Power of the Dark Side") && cha >= 13) {
        talent = "Dark Presence";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Power of the Dark Side") && talents.includes("Dark Presence")) {
        talent = "Revenge";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Power of the Dark Side")) {
        talent = "Swift Power";
    }
    else if (randomNum == 4 && available.includes("CWCG")) {
        talent = "Consumed by Darkness";
    }
    else if (randomNum == 5 && available.includes("LECG") && talents.includes("Power of the Dark Side")) {
        talent = "Dark Preservation";
    }
    else if (randomNum == 6 && available.includes("JATM")) {
        talent = "Dark Side Savant";
    }
    else if (randomNum == 7 && available.includes("TotG")) {
        talent = "Drain Knowledge";
    }
    else if (randomNum == 8 && available.includes("JATM")) {
        talent = "Transfer Essence";
    }
    else if (randomNum == 9 && available.includes("FUCG") && talents.includes("Power of the Dark Side")) {
        talent = "Wrath of the Dark Side";
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

export function senseTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 12);

    if (randomNum == 0 && available.includes("CR")) {
        if (skills.includes("Perception")) {}
        else {
        talent = "Force Perception";
    }}
    else if (randomNum == 1 && available.includes("CR")) {
        if (skills.includes("Pilot")) {}
        else {
        talent = "Force Pilot";
    }}
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Force Perception")) {
        talent = "Foresight";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Force Perception")) {
        talent = "Gauge Force Potential";
    }
    else if (randomNum == 4 && available.includes("CR") && talents.includes("Force Perception") && forcePowers.includes("Farseeing")) {
        talent = "Visions";
    }
    else if (randomNum == 5 && available.includes("FUCG")) {
        talent = "Feel the Force";
    }
    else if (randomNum == 6 && available.includes("SotG") && talents.includes("Force Pilot") && feats.includes("Starship Tactics")) {
        talent = "Force Reflexes";
    }
    else if (randomNum == 7 && available.includes("CWCG")) {
        talent = "Heightened Awareness";
    }
    else if (randomNum == 8 && available.includes("JATM") && talents.includes("Force Pilot")) {
        talent = "Instinctive Navigation";
    }
    else if (randomNum == 9 && available.includes("JATM") && talents.includes("Force Perception") && forcePowers.includes("Farseeing")) {
        talent = "Motion of the Future";
    }
    else if (randomNum == 10 && available.includes("CWCG") && talents.includes("Force Perception") && forcePowers.includes("Farseeing")) {
        talent = "Psychometry";
    }
    else if (randomNum == 11 && available.includes("CWCG")) {
        talent = "Shift Sense";
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

export function lightTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0) {
        talent = "At Peace";
    }
    else if (randomNum == 1 && talents.includes("Focused Attack")) {
        talent = "Attuned";
    }
    else if (randomNum == 2) {
        talent = "Focused Attack";
    }
    else if (randomNum == 3) {
        talent = "Surge of Light";
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

export function spiritTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0) {
        talent = "Crucial Advice";
    }
    else if (randomNum == 1 && talents.includes("Manifest Guardian Spirit")) {
        talent = "Distracting Apparition";
    }
    else if (randomNum == 2) {
        talent = "Guardian Spirit";
    }
    else if (randomNum == 3) {
        talent = "Manifest Guardian Spirit";
    }
    else if (randomNum == 4) {
        talent = "Vital Encouragement";
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