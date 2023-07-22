export function soldierTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,speciesTraits) {
    let count = 0;
    let talent = "";
    while (talent == "") {
        count++;
        let randomNum = Math.floor(Math.random() * 12);
    if (randomNum == 0) {
        talent = armorTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 1) {
        talent = brawlerTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 2) {
        talent = commandoTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 3) {
        talent = weaponTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,speciesTraits);
    }
    else if (randomNum == 4 && available.includes("KotORCG")) {
        talent = rocketTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 5) {
        talent = mercenaryTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 6 && available.includes("CWCG")) {
        talent = trooperTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 7 && available.includes("LECG")) {
        talent = bruteTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 8 && available.includes("RECG")) {
        talent = ambusherTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 9 && available.includes("GaW")) {
        talent = shockboxerTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 10 && available.includes("GaW")) {
        talent = veteranTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (randomNum == 11 && available.includes("UR")) {
        talent = warriorTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}
    return talent;
}

export function armorTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
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
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function brawlerTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
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
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function commandoTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
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
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function weaponTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,speciesTraits) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 9);

    if (randomNum == 0 && available.includes("CR")) {
        let check = 0;
            let count2 = 0;
            while (check == 0 && count2 < 20) {
                count2++;
                let randomNum = Math.floor(Math.random() * 6);
                if (randomNum == 0 && feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
                    talent = "Devastating Attack (Advanced Melee Weapons)";
                    check = 1;
                }
                else if (randomNum == 1 && feats.includes("Weapon Proficiency (Heavy Weapons)")) {
                    talent = "Devastating Attack (Heavy Weapons)";
                    check = 1;
                }
                else if (randomNum == 2 && feats.includes("Weapon Proficiency (Lightsabers)")) {
                    talent = "Devastating Attack (Lightsabers)";
                    check = 1;
                }
                else if (randomNum == 3 && feats.includes("Weapon Proficiency (Pistols)")) {
                    talent = "Devastating Attack (Pistols)";
                    check = 1;
                }
                else if (randomNum == 4 && feats.includes("Weapon Proficiency (Rifles)")) {
                    talent = "Devastating Attack (Rifles)";
                    check = 1;
                }
                else if (randomNum == 5) {
                    if (feats.includes("Weapon Focus (Simple Weapons)") ||
                        feats.includes("Martial Arts I") ||
                        speciesTraits.includes("Primitive")) {
                    talent = "Devastating Attack (Simple Weapons)";
                    check = 1;
                }}
                if (count == 20) {
                    check = 1;
                }
            }
    }
    else if (randomNum == 1 && available.includes("CR")) {
        let check = 0;
            let count2 = 0;
            while (check == 0 && count2 < 20) {
                count2++;
                let randomNum = Math.floor(Math.random() * 6);
                if (randomNum == 0 && feats.includes("Weapon Focus (Advanced Melee Weapons)")) {
                    talent = "Penetrating Attack (Advanced Melee Weapons)";
                    check = 1;
                }
                else if (randomNum == 1 && feats.includes("Weapon Focus (Heavy Weapons)")) {
                    talent = "Penetrating Attack (Heavy Weapons)";
                    check = 1;
                }
                else if (randomNum == 2 && feats.includes("Weapon Focus (Lightsabers)")) {
                    talent = "Penetrating Attack (Lightsabers)";
                    check = 1;
                }
                else if (randomNum == 3 && feats.includes("Weapon Focus (Pistols)")) {
                    talent = "Penetrating Attack (Pistols)";
                    check = 1;
                }
                else if (randomNum == 4 && feats.includes("Weapon Focus (Rifles)")) {
                    talent = "Penetrating Attack (Rifles)";
                    check = 1;
                }
                else if (randomNum == 5) {
                    if (feats.includes("Weapon Focus (Simple Weapons)") ||
                        feats.includes("Martial Arts I") ||
                        speciesTraits.includes("Primitive")) {
                    talent = "Penetrating Attack (Simple Weapons)";
                    check = 1;
                }}
                if (count == 20) {
                    check = 1;
                }
            }
    }
    else if (randomNum == 2 && available.includes("CR")) {
        let check = 0;
            let count2 = 0;
            while (check == 0 && count2 < 20) {
                count2++;
                let randomNum = Math.floor(Math.random() * 6);
                if (randomNum == 0 && feats.includes("Weapon Focus (Advanced Melee Weapons)")) {
                    talent = "Weapon Specialization (Advanced Melee Weapons)";
                    check = 1;
                }
                else if (randomNum == 1 && feats.includes("Weapon Focus (Heavy Weapons)")) {
                    talent = "Weapon Specialization (Heavy Weapons)";
                    check = 1;
                }
                else if (randomNum == 2 && feats.includes("Weapon Focus (Lightsabers)")) {
                    talent = "Weapon Specialization (Lightsabers)";
                    check = 1;
                }
                else if (randomNum == 3 && feats.includes("Weapon Focus (Pistols)")) {
                    talent = "Weapon Specialization (Pistols)";
                    check = 1;
                }
                else if (randomNum == 4 && feats.includes("Weapon Focus (Rifles)")) {
                    talent = "Weapon Specialization (Rifles)";
                    check = 1;
                }
                else if (randomNum == 5) {
                    if (feats.includes("Weapon Focus (Simple Weapons)") ||
                        feats.includes("Martial Arts I") ||
                        speciesTraits.includes("Primitive")) {
                    talent = "Weapon Specialization (Simple Weapons)";
                    check = 1;
                }}
                if (count == 20) {
                    check = 1;
                }
            }
    }
    else if (randomNum == 3 && available.includes("GaW") && feats.includes("Weapon Proficiency (Heavy Weapons)")) {
        talent = "Autofire Assault";
    }
    else if (randomNum == 4 && available.includes("SaW") && feats.includes("Weapon Specialization (Advanced Melee Weapons)") ||
                randomNum == 4 && available.includes("SaW") && feats.includes("Weapon Specialization (Heavy Weapons)") ||
                randomNum == 4 && available.includes("SaW") && feats.includes("Weapon Specialization (Lightsabers)") ||
                randomNum == 4 && available.includes("SaW") && feats.includes("Weapon Specialization (Pistols)") ||
                randomNum == 4 && available.includes("SaW") && feats.includes("Weapon Specialization (Rifles)") ||
                randomNum == 4 && available.includes("SaW") && feats.includes("Weapon Specialization (Simple Weapons)")) {
        talent = "Crushing Assault";
    }
    else if (randomNum == 5 && available.includes("KotORCG") && feats.includes("Weapon Specialization (Advanced Melee Weapons)") && int >= 13 && feats.includes("Improved Disarm") ||
                randomNum == 5 && available.includes("KotORCG") && feats.includes("Weapon Specialization (Heavy Weapons)")  && int >= 13 && feats.includes("Improved Disarm") ||
                randomNum == 5 && available.includes("KotORCG") && feats.includes("Weapon Specialization (Lightsabers)")  && int >= 13 && feats.includes("Improved Disarm") ||
                randomNum == 5 && available.includes("KotORCG") && feats.includes("Weapon Specialization (Pistols)")  && int >= 13 && feats.includes("Improved Disarm") ||
                randomNum == 5 && available.includes("KotORCG") && feats.includes("Weapon Specialization (Rifles)")  && int >= 13 && feats.includes("Improved Disarm") ||
                randomNum == 5 && available.includes("KotORCG") && feats.includes("Weapon Specialization (Simple Weapons)")  && int >= 13 && feats.includes("Improved Disarm")) {
        if (talents.includes("Weapon Specialization (Advanced Melee Weapons)")) {
            talent = "Disarming Attack (Advanced Melee Weapons)";
        }
        if (talents.includes("Weapon Specialization (Heavy Weapons)")) {
            talent = "Disarming Attack (Heavy Weapons)";
        }
        if (talents.includes("Weapon Specialization (Lightsabers)")) {
            talent = "Disarming Attack (Lightsabers)";
        }
        if (talents.includes("Weapon Specialization (Pistols)")) {
            talent = "Disarming Attack (Pistols)";
        }
        if (talents.includes("Weapon Specialization (Rifles)")) {
            talent = "Disarming Attack (Rifles)";
        }
        if (talents.includes("Weapon Specialization (Simple Weapons)")) {
            talent = "Disarming Attack (Simple Weapons)";
        }
    }
    else if (randomNum == 6 && available.includes("SaW") && feats.includes("Weapon Specialization (Advanced Melee Weapons)") ||
                randomNum == 6 && available.includes("SaW") && feats.includes("Weapon Specialization (Heavy Weapons)") ||
                randomNum == 6 && available.includes("SaW") && feats.includes("Weapon Specialization (Lightsabers)") ||
                randomNum == 6 && available.includes("SaW") && feats.includes("Weapon Specialization (Pistols)") ||
                randomNum == 6 && available.includes("SaW") && feats.includes("Weapon Specialization (Rifles)") ||
                randomNum == 6 && available.includes("SaW") && feats.includes("Weapon Specialization (Simple Weapons)")) {
        talent = "Impaling Assault";
    }
    else if (randomNum == 7 && available.includes("LECG")) {
        talent = "Improved Suppression Fire";
    }
    else if (randomNum == 8 && available.includes("SaW") && feats.includes("Weapon Specialization (Advanced Melee Weapons)") ||
            randomNum == 8 && available.includes("SaW") && feats.includes("Weapon Specialization (Heavy Weapons)") ||
            randomNum == 8 && available.includes("SaW") && feats.includes("Weapon Specialization (Lightsabers)") ||
            randomNum == 8 && available.includes("SaW") && feats.includes("Weapon Specialization (Pistols)") ||
            randomNum == 8 && available.includes("SaW") && feats.includes("Weapon Specialization (Rifles)") ||
            randomNum == 8 && available.includes("SaW") && feats.includes("Weapon Specialization (Simple Weapons)")) {
        talent = "Stinging Assault";
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

export function rocketTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0) {
        talent = "Jet Pack Training";
    }
    else if (randomNum == 1 && talents.includes("Jet Pack Training")) {
        talent = "Burning Assault";
    }
    else if (randomNum == 2 && talents.includes("Jet Pack Training")) {
        talent = "Improved Trajectory";
    }
    else if (randomNum == 3 && talents.includes("Jet Pack Training")) {
        talent = "Jet Pack Withdraw";
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

export function mercenaryTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 9);

    if (randomNum == 0 && available.includes("FUCG")) {
        talent = "Commanding Presence";
    }
    else if (randomNum == 1 && available.includes("FUCG")) {
        talent = "Dirty Fighting";
    }
    else if (randomNum == 2 && available.includes("FUCG") && talents.includes("Commanding Presence")) {
        talent = "Feared Warrior";
    }
    else if (randomNum == 3 && available.includes("FUCG")) {
        talent = "Focused Warrior";
    }
    else if (randomNum == 4 && available.includes("FUCG") && talents.includes("Dirty Fighting")) {
        talent = "Ruthless";
    }
    else if (randomNum == 5 && available.includes("TotG") && feats.includes("Coordinated Attack")) {
        talent = "Combined Fire";
    }
    else if (randomNum == 6 && available.includes("TotG") && talents.includes("Mercenary's Grit")) {
        talent = "Mercenary's Determination";
    }
    else if (randomNum == 7 && available.includes("TotG")) {
        talent = "Mercenary's Grit";
    }
    else if (randomNum == 8 && available.includes("TotG") && talents.includes("Combined Fire")) {
        talent = "Mercenary's Teamwork";
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

export function trooperTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Comrades in Arms";
    }
    else if (randomNum == 1 && talents.includes("Comrades in Arms")) {
        talent = "Focused Targeting";
    }
    else if (randomNum == 2 && talents.includes("Watch Your Back")) {
        talent = "Phalanx";
    }
    else if (randomNum == 3 && talents.includes("Comrades in Arms")) {
        talent = "Stick Together";
    }
    else if (randomNum == 4) {
        talent = "Watch Your Back";
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

export function bruteTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0) {
        talent = "Gang Leader";
    }
    else if (randomNum == 1) {
        talent = "Melee Assault";
    }
    else if (randomNum == 2) {
        talent = "Melee Brute";
    }
    else if (randomNum == 3) {
        talent = "Melee Opportunist";
    }
    else if (randomNum == 4) {
        talent = "Squad Brutality";
    }
    else if (randomNum == 5) {
        talent = "Squad Superiority";
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

export function ambusherTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0) {
        talent = "Ambush Specialist";
    }
    else if (randomNum == 1 && talents.includes("Ambush Specialist")) {
        talent = "Destructive Ambusher";
    }
    else if (randomNum == 2 && talents.includes("Ambush Specialist")) {
        talent = "Keep It Going";
    }
    else if (randomNum == 3 && talents.includes("Ambush Specialist")) {
        talent = "Keep Them Reeling";
    }
    else if (randomNum == 4 && talents.includes("Ambush Specialist")) {
        talent = "Perceptive Ambusher";
    }
    else if (randomNum == 5) {
        talent = "Spring the Trap";
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

export function shockboxerTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0 && talents.includes("Retaliation Jab")) {
        talent = "Defensive Jab";
    }
    else if (randomNum == 1) {
        talent = "Nimble Dodge";
    }
    else if (randomNum == 2) {
        talent = "Retaliation Jab";
    }
    else if (randomNum == 3) {
        talent = "Stinging Jab";
    }
    else if (randomNum == 4 && talents.includes("Stinging Jab")) {
        talent = "Stunning Shockboxer";
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

export function veteranTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0 && skills.includes("Treat Injury")) {
        talent = "Battlefield Remedy";
    }
    else if (randomNum == 1 && talents.includes("Seen It All")) {
        talent = "Grizzled Warrior";
    }
    else if (randomNum == 2 && talents.includes("Tested in Battle")) {
        talent = "Reckless ";
    }
    else if (randomNum == 3 && talents.includes("Tested in Battle") && skills.includes("Initiative")) {
        talent = "Seen It All";
    }
    else if (randomNum == 4) {
        talent = "Tested in Battle";
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

export function warriorTalents(talents,available,skills,feats,BAB,forcePowers,light,dark) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0 && talents.includes("Warrior's Awareness") && talents.includes("Warrior's Determination")) {
        talent = "Champion";
    }
    else if (randomNum == 1 && talents.includes("Warrior's Awareness")) {
        talent = "Quick Study";
    }
    else if (randomNum == 2) {
        talent = "Simple Opportunity ";
    }
    else if (randomNum == 3) {
        talent = "Warrior's Awareness";
    }
    else if (randomNum == 4) {
        talent = "Warrior's Determination";
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