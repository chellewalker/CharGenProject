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
    else if (tradition == 12 && available.includes("CWCG")) {
        talent = bandoGoraTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 13 && available.includes("CWCG")) {
        talent = believersTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 14 && available.includes("LECG")) {
        talent = twilightTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 15 && available.includes("LECG")) {
        talent = vahlTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 16 && available.includes("JATM")) {
        talent = aingTiiTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 17 && available.includes("JATM")) {
        talent = baranDoTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 18 && available.includes("JATM")) {
        talent = matukaiTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 19 && available.includes("JATM")) {
        talent = seyugiDervishTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 20 && available.includes("JATM")) {
        talent = kroVarTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 21 && available.includes("JATM")) {
        talent = tyiaTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 22 && available.includes("JATM")) {
        talent = wardenTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 23 && available.includes("JATM")) {
        talent = whiteCurrentTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 24 && available.includes("JATM")) {
        talent = zeisonShaTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 25 && available.includes("RECG")) {
        talent = kilianRangerTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (tradition == 26 && available.includes("UR")) {
        talent = blazingChainTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
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

export function twilightTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Cloak of Shadows";
    }
    else if (randomNum == 1) {
        talent = "Phantasm";
    }
    else if (randomNum == 2) {
        talent = "Revelation";
    }
    else if (randomNum == 3 && talents.includes("Cloak of Shadows")) {
        talent = "Shadow Armor";
    }
    else if (randomNum == 4) {
        talent = "Shadow Vision";
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

export function vahlTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Initiate of Vahl";
    }
    else if (randomNum == 1 && talents.includes("Initiate of Vahl")) {
        talent = "Reading the Flame";
    }
    else if (randomNum == 2 && talents.includes("Initiate of Vahl")) {
        talent = "Sword of Vahl";
    }
    else if (randomNum == 3 && talents.includes("Empower Weapon")) {
        talent = "Vahl's Brand";
    }
    else if (randomNum == 4) {
        talent = "Vahl's Flame";
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

export function aingTiiTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Aura of Freedom";
    }
    else if (randomNum == 1 && forcePowers.includes("Fold Space")) {
        talent = "Folded Space Mastery";
    }
    else if (randomNum == 2 && talents.includes("Aura of Freedom")) {
        talent = "Liberate";
    }
    else if (randomNum == 3 && feats.includes("Force Training")) {
        talent = "Many Shades of the Force";
    }
    else if (randomNum == 4) {
        talent = "Spatial Integrity";
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

export function baranDoTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Enhanced Danger Sense";
    }
    else if (randomNum == 1) {
        talent = "Expanded Horizon";
    }
    else if (randomNum == 2 && talents.includes("Enhanced Danger Sense")) {
        talent = "Knowledge and Defense";
    }
    else if (randomNum == 3) {
        talent = "Planetary Attunement";
    }
    else if (randomNum == 4) {
        talent = "Precognitive Meditation";
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

export function matukaiTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0) {
        talent = "Body Control";
    }
    else if (randomNum == 1) {
        talent = "Physical Surge";
    }
    else if (randomNum == 2) {
        talent = "Soft to Solid";
    }
    else if (randomNum == 3) {
        talent = "Wan-Shen Defense";
    }
    else if (randomNum == 4) {
        talent = "Wan-Shen Kata";
    }
    else if (randomNum == 5 && BAB >= 5 && talents.includes("Wan-Shen Kata")) {
        talent = "Wan-Shen Mastery";
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

export function seyugiDervishTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Seyugi Cyclone";
    }
    else if (randomNum == 1 && talents.includes("Seyugi Cyclone")) {
        talent = "Mobile Whirlwind";
    }
    else if (randomNum == 2 && talents.includes("Seyugi Cyclone")) {
        talent = "Repelling Whirlwind";
    }
    else if (randomNum == 3 && talents.includes("Seyugi Cyclone")) {
        talent = "Sudden Storm";
    }
    else if (randomNum == 4 && talents.includes("Seyugi Cyclone")) {
        talent = "Tempest Tossed";
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

export function kroVarTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0 && feats.includes("Force Training")) {
        talent = "Combustion";
    }
    else if (randomNum == 1) {
        talent = "Earth Buckle";
    }
    else if (randomNum == 2) {
        if (skills.includes("Acrobatics")) {}
        else {
        talent = "Fluidity";
    }}
    else if (randomNum == 3 && feats.includes("Force Training") && feats.includes("Bantha Rush")) {
        talent = "Thunderclap";
    }
    else if (randomNum == 4) {
        talent = "Wind Vortex";
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

export function tyiaTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0 && talents.includes("Tyia Adept")) {
        talent = "Cycle of Harmony";
    }
    else if (randomNum == 1 && talents.includes("Tyia Adept")) {
        talent = "Force Stabilize";
    }
    else if (randomNum == 2) {
        talent = "Repel Discord";
    }
    else if (randomNum == 3) {
        talent = "Stifle Conflict";
    }
    else if (randomNum == 4) {
        talent = "Tyia Adept";
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

export function wardenTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0 && talents.includes("Telekinetic Strike")) {
        talent = "Brutal Unarmed Strike";
    }
    else if (randomNum == 1) {
        talent = "Martial Resurgence";
    }
    else if (randomNum == 2) {
        talent = "Rebound Leap";
    }
    else if (randomNum == 3 && BAB >= 5) {
        talent = "Simultaneous Strike";
    }
    else if (randomNum == 4) {
        talent = "Telekinetic Strike";
    }
    else if (randomNum == 5 && feats.includes("Throw")) {
        talent = "Telekinetic Throw";
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

export function whiteCurrentTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0 && talents.includes("White Current Adept") && skills.includes("Stealth")) {
        talent = "Force Immersion";
    }
    else if (randomNum == 1 && talents.includes("White Current Adept") && skills.includes("Stealth")) {
        talent = "Immerse Another";
    }
    else if (randomNum == 2) {
        talent = "Ride the Current";
    }
    else if (randomNum == 3) {
        talent = "Surrender to the Current";
    }
    else if (randomNum == 4) {
        if (skills.includes("Stealth")) {}
        else {
        talent = "White Current Adept";
    }}
    if (talents.includes(talent)) {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function zeisonShaTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0 && feats.includes("Exotic Weapon Proficiency (Discblade)") ||
                randomNum == 0 && talents.includes("Discblade Mastery")) {
        talent = "Discblade Arc";
    }
    else if (randomNum == 1 && feats.includes("Exotic Weapon Proficiency (Discblade)") ||
                randomNum == 1 && talents.includes("Discblade Mastery")) {
        talent = "Distant Discblade Throw";
    }
    else if (randomNum == 2 && feats.includes("Exotic Weapon Proficiency (Discblade)") ||
                randomNum == 2 && talents.includes("Discblade Mastery")) {
        talent = "Recall Discblade";
    }
    else if (randomNum == 3 && forcePowers.includes("Intercept")) {
        talent = "Telekinetic Vigilance";
    }
    else if (randomNum == 4 && talents.includes("Discblade Mastery")) {
        talent = "Weapon Specialization (Discblade)";
    }
    else if (randomNum == 5 && available.includes("HC")) {
        talent = "Discblade Mastery";
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

export function kilianRangerTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0 && BAB >= 7 && talents.includes("Siang Lance Mastery")) {
        talent = "Empower Siang Lance";
    }
    else if (randomNum == 1) {
        talent = "Shield Gauntlet Defense";
    }
    else if (randomNum == 2 && talents.includes("Shield Gauntlet Defense")) {
        talent = "Shield Gauntlet Deflect";
    }
    else if (randomNum == 3 && BAB >= 5 && talents.includes("Shield Gauntlet Deflect")) {
        talent = "Shield Gauntlet Redirect";
    }
    else if (randomNum == 4) {
        talent = "Siang Lance Mastery";
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

export function blazingChainTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0 && skills.includes("Use the Force")) {
        talent = "Force Directed Shot";
    }
    else if (randomNum == 1 && forcePowers.includes("Negate Energy")) {
        talent = "Negate and Redirect";
    }
    else if (randomNum == 2 && dark == 1) {
        talent = "Rising Anger";
    }
    else if (randomNum == 3 && dark == 1) {
        talent = "Rising Panic";
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