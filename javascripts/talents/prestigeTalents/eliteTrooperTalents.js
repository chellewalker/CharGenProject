export function eliteTrooperTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities) {
    let count = 0;
    let talent = "";
    while (talent == "") {
        count++;
        let randomNum = Math.floor(Math.random() * 10);
    if (randomNum == 0) {
        talent = camouflageTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 1) {
        talent = commandoTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 2) {
        talent = weaponMasterTalents(talents,available,skills,feats,BAB,wis,cha,qualities);
    }
    else if (randomNum == 3 && available.includes("TotG")) {
        talent = terasKasiTalents(talents,available,skills,feats,BAB,wis,cha,qualities);
    }
    else if (randomNum == 4 && available.includes("KotORCG")) {
        talent = mandalorianTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities);
    }
    else if (randomNum == 5 && available.includes("FUCG")) {
        talent = criticalMasterTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities);
    }
    else if (randomNum == 6 && available.includes("CWCG")) {
        talent = meleeSpecialistTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities);
    }
    else if (randomNum == 7 && available.includes("CWCG")) {
        talent = republicCommandoTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities);
    }
    else if (randomNum == 8 && available.includes("LECG")) {
        talent = protectionTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities);
    }
    else if (randomNum == 9 && cha >= 13 && available.includes("GaW")) {
        talent = squadLeaderTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function camouflageTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 10);

    if (randomNum == 0 && available.includes("CR") && talents.includes("Improved Stealth")) {
        talent = "Hidden Movement";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Improved Stealth";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Hidden Movement") && talents.includes("Improved Stealth")) {
        talent = "Total Concealment";
    }
    else if (randomNum == 3 && available.includes("GaW")) {
        talent = "Dig In";
    }
    else if (randomNum == 4 && available.includes("UR") && talents.includes("Improved Stealth")) {
        talent = "Extended Ambush";
    }
    else if (randomNum == 5 && available.includes("GaW")) {
        talent = "Ghost Assailant";
    }
    else if (randomNum == 6 && available.includes("SaV") && talents.includes("Hidden Movement") && talents.includes("Improved Stealth")) {
        talent = "Hide in Plain Sight";
    }
    else if (randomNum == 7 && available.includes("SaV")) {
        talent = "Hunker Down";
    }
    else if (randomNum == 8 && available.includes("SaV") && talents.includes("Hidden Movement") && talents.includes("Improved Stealth")) {
        talent = "Shadow Striker";
    }
    else if (randomNum == 9 && available.includes("GaW")) {
        talent = "Slip By";
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

export function commandoTalents(talents,available,skills,feats,BAB) {
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

export function weaponMasterTalents(talents,available,skills,feats,BAB,wis,cha,qualities) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 10);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Controlled Burst";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Exotic Weapon Mastery";
    }
    else if (randomNum == 2 && talents.includes("Greater Weapon Focus (Advanced Melee Weapons)") && talents.includes("Devastating Attack (Advanced Melee Weapons)") && available.includes("CR")) {
        talent = "Greater Devastating Attack (Advanced Melee Weapons)";
    }
    else if (randomNum == 2 && talents.includes("Greater Weapon Focus (Heavy Weapons)") && talents.includes("Devastating Attack (Heavy Weapons)") && available.includes("CR")) {
        talent = "Greater Devastating Attack (Heavy Weapons)";
    }
    else if (randomNum == 2 && talents.includes("Greater Weapon Focus (Lightsabers)") && talents.includes("Devastating Attack (Lightsabers)") && available.includes("CR")) {
        talent = "Greater Devastating Attack (Lightsabers)";
    }
    else if (randomNum == 2 && talents.includes("Greater Weapon Focus (Pistols)") && talents.includes("Devastating Attack (Pistols)") && available.includes("CR")) {
        talent = "Greater Devastating Attack (Pistols)";
    }
    else if (randomNum == 2 && talents.includes("Greater Weapon Focus (Rifles)") && talents.includes("Devastating Attack (Rifles)") && available.includes("CR")) {
        talent = "Greater Devastating Attack (Rifles)";
    }
    else if (randomNum == 2 && talents.includes("Greater Weapon Focus (Simple Weapons)") && talents.includes("Devastating Attack (Simple Weapons)") && available.includes("CR")) {
        talent = "Greater Devastating Attack (Simple Weapons)";
    }
    else if (randomNum == 3 && talents.includes("Greater Weapon Focus (Advanced Melee Weapons)") && talents.includes("Penetrating Attack (Advanced Melee Weapons)") && available.includes("CR")) {
        talent = "Greater Penetrating Attack (Advanced Melee Weapons)";
    }
    else if (randomNum == 3 && talents.includes("Greater Weapon Focus (Heavy Weapons)") && talents.includes("Penetrating Attack (Heavy Weapons)") && available.includes("CR")) {
        talent = "Greater Penetrating Attack (Heavy Weapons)";
    }
    else if (randomNum == 3 && talents.includes("Greater Weapon Focus (Lightsabers)") && talents.includes("Penetrating Attack (Lightsabers)") && available.includes("CR")) {
        talent = "Greater Penetrating Attack (Lightsabers)";
    }
    else if (randomNum == 3 && talents.includes("Greater Weapon Focus (Pistols)") && talents.includes("Penetrating Attack (Pistols)") && available.includes("CR")) {
        talent = "Greater Penetrating Attack (Pistols)";
    }
    else if (randomNum == 3 && talents.includes("Greater Weapon Focus (Rifles)") && talents.includes("Penetrating Attack (Rifles)") && available.includes("CR")) {
        talent = "Greater Penetrating Attack (Rifles)";
    }
    else if (randomNum == 3 && talents.includes("Greater Weapon Focus (Simple Weapons)") && talents.includes("Penetrating Attack (Simple Weapons)") && available.includes("CR")) {
        talent = "Greater Penetrating Attack (Simple Weapons)";
    }
    else if (randomNum == 4 && feats.includes("Weapon Focus (Simple Weapons)") && available.includes("CR")) {
        talent = "Greater Weapon Focus (Simple Weapons)";
    }
    else if (randomNum == 4 && feats.includes("Weapon Focus (Advanced Melee Weapons)") && available.includes("CR")) {
        talent = "Greater Weapon Focus (Advanced Melee Weapons)";
    }
    else if (randomNum == 4 && feats.includes("Weapon Focus (Heavy Weapons)") && available.includes("CR")) {
        talent = "Greater Weapon Focus (Heavy Weapons)";
    }
    else if (randomNum == 4 && feats.includes("Weapon Focus (Lightsabers)") && available.includes("CR")) {
        talent = "Greater Weapon Focus (Lightsabers)";
    }
    else if (randomNum == 4 && feats.includes("Weapon Focus (Pistols)") && available.includes("CR")) {
        talent = "Greater Weapon Focus (Pistols)";
    }
    else if (randomNum == 4 && feats.includes("Weapon Focus (Rifles)") && available.includes("CR")) {
        talent = "Greater Weapon Focus (Rifles)";
    }
    else if (randomNum == 5 && talents.includes("Greater Weapon Focus (Advanced Melee Weapons)") && talents.includes("Weapon Specialization (Advanced Melee Weapons)") && available.includes("CR")) {
        talent = "Greater Weapon Specialization (Advanced Melee Weapons)";
    }
    else if (randomNum == 5 && talents.includes("Greater Weapon Focus (Heavy Weapons)") && talents.includes("Weapon Specialization (Heavy Weapons)") && available.includes("CR")) {
        talent = "Greater Weapon Specialization (Heavy Weapons)";
    }
    else if (randomNum == 5 && talents.includes("Greater Weapon Focus (Lightsabers)") && talents.includes("Weapon Specialization (Lightsabers)") && available.includes("CR")) {
        talent = "Greater Weapon Specialization (Lightsabers)";
    }
    else if (randomNum == 5 && talents.includes("Greater Weapon Focus (Pistols)") && talents.includes("Weapon Specialization (Pistols)") && available.includes("CR")) {
        talent = "Greater Weapon Specialization (Pistols)";
    }
    else if (randomNum == 5 && talents.includes("Greater Weapon Focus (Rifles)") && talents.includes("Weapon Specialization (Rifles)") && available.includes("CR")) {
        talent = "Greater Weapon Specialization (Rifles)";
    }
    else if (randomNum == 5 && talents.includes("Greater Weapon Focus (Simple Weapons)") && talents.includes("Weapon Specialization (Simple Weapons)") && available.includes("CR")) {
        talent = "Greater Weapon Specialization (Simple Weapons)";
    }
    else if (randomNum == 6 && feats.includes("Weapon Proficiency (Heavy Weapons") && available.includes("CR")) {
        talent = "Multiattack Proficiency (Heavy Weapons)";
    }
    else if (randomNum == 6 && feats.includes("Weapon Proficiency (Rifles") && available.includes("CR")) {
        talent = "Multiattack Proficiency (Rifles)";
    }
    else if (randomNum == 6 && feats.includes("Weapon Focus (Simple Weapons") && available.includes("UR")) {
        talent = "Multiattack Proficiency (Simple Weapons)";
    }
    else if (randomNum == 7 && available.includes("UR") && feats.includes("Weapon Focus (Advanced Melee Weapons)") ||
            randomNum == 7 && available.includes("UR") && feats.includes("Weapon Focus (Heavy Weapons)") ||
            randomNum == 7 && available.includes("UR") && feats.includes("Weapon Focus (Lightsabers)") ||
            randomNum == 7 && available.includes("UR") && feats.includes("Weapon Focus (Pistols)") ||
            randomNum == 7 && available.includes("UR") && feats.includes("Weapon Focus (Rifles)") ||
            randomNum == 7 && available.includes("UR") && feats.includes("Weapon Focus (Simple Weapons)")) {
        talent = "Extended Threat";
    }
    else if (randomNum == 8 && talents.includes("Controlled Burst") && BAB >= 12 && available.includes("GaW")) {
        talent = "Ferocious Assault";
    }
    else if (randomNum == 9 && feats.includes("Weapon Focus (Simple Weapons") && available.includes("UR")) {
        talent = "Two-For-One Throw";
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

export function terasKasiTalents(talents,available,skills,feats,BAB,wis,cha,qualities) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0 && talents.includes("Teräs Käsi Basics")) {
        talent = "Ignore Damage Reduction";
    }
    else if (randomNum == 1 && feats.includes("Martial Arts I")) {
        talent = "Teräs Käsi Basics";
    }
    else if (randomNum == 2 && talents.includes("Teräs Käsi Basics") && feats.includes("Martial Arts III")) {
        talent = "Teräs Käsi Mastery";
    }
    else if (randomNum == 3 && talents.includes("Unarmed Parry")) {
        talent = "Unarmed Counterstrike";
    }
    else if (randomNum == 4 && talents.includes("Teräs Käsi Basics") && feats.includes("Martial Arts II")) {
        talent = "Unarmed Parry";
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

export function mandalorianTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0 && dex >= 13 && talents.includes("Armored Defense") && talents.includes("Mandalorian Glory")) {
        talent = "Armored Mandalorian";
    }
    else if (randomNum == 1) {
        talent = "Mandalorian Advance";
    }
    else if (randomNum == 2 && dex >= 13) {
        let check = 0;
            let count2 = 0;
            while (check == 0 && count2 < 20) {
                count2++;
                let randomNum = Math.floor(Math.random() * 6);
                if (randomNum == 0 && feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
                    talent = "Mandalorian Ferocity (Advanced Melee Weapons)";
                    check = 1;
                }
                else if (randomNum == 1 && feats.includes("Weapon Proficiency (Heavy Weapons)")) {
                    talent = "Mandalorian Ferocity (Heavy Weapons)";
                    check = 1;
                }
                else if (randomNum == 2 && feats.includes("Weapon Proficiency (Lightsabers)")) {
                    talent = "Mandalorian Ferocity (Lightsabers)";
                    check = 1;
                }
                else if (randomNum == 3 && feats.includes("Weapon Proficiency (Pistols)")) {
                    talent = "Mandalorian Ferocity (Pistols)";
                    check = 1;
                }
                else if (randomNum == 4 && feats.includes("Weapon Proficiency (Rifles)")) {
                    talent = "Mandalorian Ferocity (Rifles)";
                    check = 1;
                }
                else if (randomNum == 5 && feats.includes("Weapon Proficiency (Simple Weapons)")) {
                    talent = "Mandalorian Ferocity (Simple Weapons)";
                    check = 1;
                }
                if (count == 20) {
                    check = 1;
                }
            }
    }
    else if (randomNum == 3) {
        talent = "Mandalorian Glory";
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

export function criticalMasterTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0 && talents.includes("Reduce Mobility")) {
        talent = "Deny Move";
    }
    else if (randomNum == 1 && BAB >= 10 && feats.includes("Weapon Proficiency (Heavy Weapons)")) {
        talent = "Extended Critical Range (Heavy Weapons)";
    }
    else if (randomNum == 1 && BAB >= 10 && feats.includes("Weapon Proficiency (Rifles)")) {
        talent = "Extended Critical Range (Rifles)";
    }
    else if (randomNum == 1 && BAB >= 10 && feats.includes("Weapon Focus (Simple Weapons)") && available.includes("UR")) {
        talent = "Extended Critical Range (Simple Weapons)";
    }
    else if (randomNum == 2) {
        let check = 0;
            let count2 = 0;
            while (check == 0 && count2 < 20) {
                count2++;
                let randomNum = Math.floor(Math.random() * 6);
                if (randomNum == 0 && feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
                    talent = "Flurry Attack (Advanced Melee Weapons)";
                    check = 1;
                }
                else if (randomNum == 1 && feats.includes("Weapon Proficiency (Heavy Weapons)")) {
                    talent = "Flurry Attack (Heavy Weapons)";
                    check = 1;
                }
                else if (randomNum == 2 && feats.includes("Weapon Proficiency (Lightsabers)")) {
                    talent = "Flurry Attack (Lightsabers)";
                    check = 1;
                }
                else if (randomNum == 3 && feats.includes("Weapon Proficiency (Pistols)")) {
                    talent = "Flurry Attack (Pistols)";
                    check = 1;
                }
                else if (randomNum == 4 && feats.includes("Weapon Proficiency (Rifles)")) {
                    talent = "Flurry Attack (Rifles)";
                    check = 1;
                }
                else if (randomNum == 5 && feats.includes("Weapon Focus (Simple Weapons)")) {
                    talent = "Flurry Attack (Simple Weapons)";
                    check = 1;
                }
                if (count == 20) {
                    check = 1;
                }
            }
    }
    else if (randomNum == 3) {
        talent = "Knockback";
    }
    else if (randomNum == 4) {
        talent = "Reduce Defense";
    }
    else if (randomNum == 5) {
        talent = "Reduce Mobility";
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

export function meleeSpecialistTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        let check = 0;
            let count2 = 0;
            while (check == 0 && count2 < 20) {
                count2++;
                let randomNum = Math.floor(Math.random() * 3);
                if (randomNum == 0 && feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
                    talent = "Flurry Attack (Advanced Melee Weapons)";
                    check = 1;
                }
                else if (randomNum == 1 && feats.includes("Weapon Proficiency (Lightsabers)")) {
                    talent = "Flurry Attack (Lightsabers)";
                    check = 1;
                }
                else if (randomNum == 2 && feats.includes("Weapon Focus (Simple Weapons)")) {
                    talent = "Flurry Attack (Simple Weapons)";
                    check = 1;
                }
                if (count == 20) {
                    check = 1;
                }
            }
    }
    else if (randomNum == 1) {
        talent = "Close-Quarters Fighter";
    }
    else if (randomNum == 2) {
        talent = "Ignore Armor";
    }
    else if (randomNum == 3 && talents.includes("Stunning Strike")) {
        talent = "Improved Stunning Strike";
    }
    else if (randomNum == 4 && talents.includes("Melee Smash") && talents.includes("Unrelenting Assault")) {
        talent = "Whirling Death";
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

export function republicCommandoTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum == 0) {
        talent = "Ambush";
    }
    else if (randomNum == 1 && skills.includes("Mechanics")) {
        talent = "Higher Yield";
    }
    else if (randomNum == 2) {
        talent = "Rapid Reload";
    }
    else if (randomNum == 3) {
        talent = "Shoulder to Shoulder";
    }
    else if (randomNum == 4) {
        talent = "Strength in Numbers";
    }
    else if (randomNum == 5 && talents.includes("Gun Club")) {
        talent = "Weapon Shift";
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

export function protectionTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 8);

    if (randomNum == 0 && talents.includes("Ward")) {
        talent = "Armored Guard";
    }
    else if (randomNum == 1) {
        talent = "Bodyguard's Sacrifice";
    }
    else if (randomNum == 2 && talents.includes("Ward")) {
        talent = "Guard's Endurance";
    }
    else if (randomNum == 3 && talents.includes("Bodyguard's Sacrifice")) {
        talent = "Lifesaver";
    }
    else if (randomNum == 4) {
        talent = "Out of Harm's Way";
    }
    else if (randomNum == 5 && talents.includes("Take the Hit")) {
        talent = "Roll With It";
    }
    else if (randomNum == 6 && talents.includes("Bodyguard's Sacrifice")) {
        talent = "Take the Hit";
    }
    else if (randomNum == 7) {
        talent = "Ward";
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

export function squadLeaderTalents(talents,available,skills,feats,BAB,dex,wis,cha,qualities) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Fall Back";
    }
    else if (randomNum == 1) {
        talent = "Form Up";
    }
    else if (randomNum == 2) {
        talent = "Full Advance";
    }
    else if (randomNum == 3) {
        talent = "Hold Steady";
    }
    else if (randomNum == 4) {
        talent = "Search and Destroy";
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