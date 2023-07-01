export function jediFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel) {
    let feat = "";
    let count2 = 0;
    while (feat == "") {
        count2++;
        let randomNum = Math.floor(Math.random() * 76);
        if (randomNum == 0 && available.includes("CR") && skills.includes("Acrobatics")) {
            feat = "Acrobatic Strike";
        }
        else if (randomNum == 1 && available.includes("CR") && feats.includes("Power Attack") && str >= 13) {
            feat = "Cleave";
        }
        else if (randomNum == 2 && available.includes("CR")) {
            feat = "Combat Reflexes";
        }
        else if (randomNum == 3 && available.includes("CR") && dex >= 13) {
            feat = "Dodge";
        }
        else if (randomNum == 4 && available.includes("CR") && BAB >= 6 ||
                    randomNum == 5 && available.includes("CR") && BAB >= 6 ||
                    randomNum == 6 && available.includes("CR") && BAB >= 6 ||
                    randomNum == 7 && available.includes("CR") && BAB >= 6) {
            let check = 0;
            let count = 0;
            while (check == 0 && count < 20) {
                let randomNum = Math.floor(Math.random() * 6);
                if (randomNum == 0 && feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
                    feat = "Double Attack (Advanced Melee Weapons)";
                    check = 1;
                }
                else if (randomNum == 1 && feats.includes("Weapon Proficiency (Heavy Weapons)")) {
                    feat = "Double Attack (Heavy Weapons)";
                    check = 1;
                }
                else if (randomNum == 2 && feats.includes("Weapon Proficiency (Lightsabers)")) {
                    feat = "Double Attack (Lightsabers)";
                    check = 1;
                }
                else if (randomNum == 3 && feats.includes("Weapon Proficiency (Pistols)")) {
                    feat = "Double Attack (Pistols)";
                    check = 1;
                }
                else if (randomNum == 4 && feats.includes("Weapon Proficiency (Rifles)")) {
                    feat = "Double Attack (Rifles)";
                    check = 1;
                }
                else if (randomNum == 5 && feats.includes("Weapon Proficiency (Simple Weapons)")) {
                    feat = "Double Attack (Simple Weapons)";
                    check = 1;
                }
            }
        }
        else if (randomNum == 8 && available.includes("CR") && speciesTraits.includes("Rage") && BAB >= 1) {
            feat = "Dreadful Rage";
        }
        else if (randomNum == 9 && available.includes("CR") && dex >= 13 && BAB >= 1 ||
                    randomNum == 10 && available.includes("CR") && dex >= 13 && BAB >= 1 ||
                    randomNum == 11 && available.includes("CR") && dex >= 13 && BAB >= 1) {
            feat = "Dual Weapon Mastery I";
        }
        else if (randomNum == 12 && available.includes("CR") && feats.includes("Dual Weapon Mastery I") && dex >= 15 && BAB >= 6 ||
                    randomNum == 13 && available.includes("CR") && feats.includes("Dual Weapon Mastery I") && dex >= 15 && BAB >= 6) {
            feat = "Dual Weapon Mastery II";
        }
        else if (randomNum == 14 && available.includes("CR") && feats.includes("Dual Weapon Mastery II") && dex >= 17 && BAB >= 11) {
            feat = "Dual Weapon Mastery III";
        }
        else if (randomNum == 15 && available.includes("CR")) {
            if (speciesTraits.includes("Force Blind")) {
            }
            else {
                feat = "Force Sensitivity";
            }
        }
        else if (randomNum == 16 && available.includes("CR")  && feats.includes("Power Attack")  && feats.includes("Cleave") && str >= 13 && BAB >= 4) {
            feat = "Great Cleave";
        }
        else if (randomNum == 17 && available.includes("CR")  && feats.includes("Dodge")  && feats.includes("Mobility") && dex >= 13) {
            feat = "Improved Charge";
        }
        else if (randomNum == 18 && available.includes("CR")  && feats.includes("Melee Defense") && int >= 13) {
            feat = "Improved Disarm";
        }
        else if (randomNum == 19 && available.includes("CR")) {
            feat = "Martial Arts I";
        }
        else if (randomNum == 20 && available.includes("CR")  && feats.includes("Martial Arts I") && BAB >= 3) {
            feat = "Martial Arts II";
        }
        else if (randomNum == 21 && available.includes("CR")  && feats.includes("Martial Arts I") && feats.includes("Martial Arts II") && BAB >= 6) {
            feat = "Martial Arts III";
        }
        else if (randomNum == 22 && available.includes("CR") && int >= 13) {
            feat = "Melee Defense";
        }
        else if (randomNum == 23 && available.includes("CR") && feats.includes("Dodge") && dex >= 13) {
            feat = "Mobility";
        }
        else if (randomNum == 24 && available.includes("CR") && str >= 13) {
            feat = "Power Attack";
        }
        else if (randomNum == 25 && available.includes("CR") && BAB >= 1) {
            feat = "Quick Draw";
        }
        else if (randomNum == 26 && available.includes("CR") && BAB >= 1) {
            feat = "Rapid Strike";
        }
        else if (randomNum == 27 && available.includes("CR") && dex >= 13) {
            feat = "Running Attack";
        }
        else if (randomNum == 28 && available.includes("CR") || 
                    randomNum == 29 && available.includes("CR") || 
                    randomNum == 30 && available.includes("CR") || 
                    randomNum == 31 && available.includes("CR") || 
                    randomNum == 32 && available.includes("CR") || 
                    randomNum == 33 && available.includes("CR") || 
                    randomNum == 34 && available.includes("CR") || 
                    randomNum == 35 && available.includes("CR") || 
                    randomNum == 36 && available.includes("CR")) {
                let randomNum2 = Math.floor(Math.random() * skills.length);
                feat = "Skill Focus ("+skills[randomNum2]+")";
        }
        else if (randomNum == 37 && available.includes("CR") || 
                    randomNum == 38 && available.includes("CR") ||
                    randomNum == 39 && available.includes("CR") ||
                    randomNum == 40 && available.includes("CR") ||
                    randomNum == 41 && available.includes("CR")) {
            feat = "Skill Training";
        }
        else if (randomNum == 42 && available.includes("CR")) {
            feat = "Strong in the Force";
        }
        else if (randomNum == 43 && available.includes("CR") && feats.includes("Double Attack (Advanced Melee Weapons)") && BAB >= 11 ||
                    randomNum == 44 && available.includes("CR") && feats.includes("Double Attack (Advanced Melee Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Advanced Melee Weapons)";
        }
        else if (randomNum == 43 && available.includes("CR") && feats.includes("Double Attack (Heavy Weapons)") && BAB >= 11 ||
                    randomNum == 44 && available.includes("CR") && feats.includes("Double Attack (Advanced Melee Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Heavy Weapons)";
        }
        else if (randomNum == 43 && available.includes("CR") && feats.includes("Double Attack (Lightsabers)") && BAB >= 11 ||
                    randomNum == 44 && available.includes("CR") && feats.includes("Double Attack (Advanced Melee Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Lightsabers)";
        }
        else if (randomNum == 43 && available.includes("CR") && feats.includes("Double Attack (Pistols)") && BAB >= 11 ||
                    randomNum == 44 && available.includes("CR") && feats.includes("Double Attack (Advanced Melee Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Pistols)";
        }
        else if (randomNum == 43 && available.includes("CR") && feats.includes("Double Attack (Rifles)") && BAB >= 11 ||
                    randomNum == 44 && available.includes("CR") && feats.includes("Double Attack (Advanced Melee Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Rifles)";
        }
        else if (randomNum == 43 && available.includes("CR") && feats.includes("Double Attack (Simple Weapons)") && BAB >= 11 ||
                    randomNum == 44 && available.includes("CR") && feats.includes("Double Attack (Advanced Melee Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Simple Weapons)";
        }
        else if (randomNum == 45 && available.includes("CR") && BAB >= 8 ||
                    randomNum == 46 && available.includes("CR") && BAB >= 8) {
            let check = 0;
            let count = 0;
            while (check == 0 && count < 20) {
                let randomNum = Math.floor(Math.random() * 6);
                if (randomNum == 0 && feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
                    feat = "Triple Crit (Advanced Melee Weapons)";
                    check = 1;
                }
                else if (randomNum == 1 && feats.includes("Weapon Proficiency (Heavy Weapons)")) {
                    feat = "Triple Crit (Heavy Weapons)";
                    check = 1;
                }
                else if (randomNum == 2 && feats.includes("Weapon Proficiency (Lightsabers)")) {
                    feat = "Triple Crit (Lightsabers)";
                    check = 1;
                }
                else if (randomNum == 3 && feats.includes("Weapon Proficiency (Pistols)")) {
                    feat = "Triple Crit (Pistols)";
                    check = 1;
                }
                else if (randomNum == 4 && feats.includes("Weapon Proficiency (Rifles)")) {
                    feat = "Triple Crit (Rifles)";
                    check = 1;
                }
                else if (randomNum == 5 && feats.includes("Weapon Proficiency (Simple Weapons)")) {
                    feat = "Triple Crit (Simple Weapons)";
                    check = 1;
                }
            }
        }
        else if (randomNum == 47 && available.includes("CR") && BAB >= 1 && dex >= str ||
                    randomNum == 48 && available.includes("CR") && BAB >= 1 && dex >= str) {
            feat = "Weapon Finesse";
        }
        else if (randomNum == 49 && available.includes("CR") &&  feats.includes("Weapon Proficiency (Lightsabers)")||
                    randomNum == 50 && available.includes("CR") && feats.includes("Weapon Proficiency (Lightsabers)") ||
                    randomNum == 51 && available.includes("CR") && feats.includes("Weapon Proficiency (Lightsabers)")) {
            feat = "Weapon Focus (Lightsabers)";
        }
        else if (randomNum == 52) {
            feat = "Weapon Proficiency (Lightsabers)";
        }
        else if (randomNum == 53 && available.includes("KotORCG") && BAB >= 6) {
            feat = "Accelerated Strike";
        }
        else if (randomNum == 54 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Advanced Melee Weapons)") ||
                    randomNum == 54 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Heavy Weapons)") ||
                    randomNum == 54 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Lightsabers)") ||
                    randomNum == 54 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Pistols)") ||
                    randomNum == 54 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Rifles)") ||
                    randomNum == 54 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Simple Weapons)")) {
            feat = "Critical Strike";
        }
        else if (randomNum == 55 && available.includes("KotORCG") && dex >= 13) {
            feat = "Flurry";
        }
        else if (randomNum == 56 && available.includes("KotORCG")) {
            feat = "Force Readiness";
        }
        else if (randomNum == 57 && available.includes("KotORCG") && feats.includes("Rapid Strike")) {
            feat = "Improved Rapid Strike";
        }
        else if (randomNum == 58 && available.includes("KotORCG")) {
            feat = "Tumble Defense";
        }
        else if (randomNum == 59 && available.includes("KotORCG") && BAB >= 5) {
            feat = "Withdrawal Strike";
        }
        else if (randomNum == 60 && available.includes("FUCG")) {
            if (feats.includes("Double Attack (Simple Weapons)")) {
                feat = "Savage Attack (Simple Weapons)";
            }
            if (feats.includes("Double Attack (Advanced Melee Weapons)")) {
                feat = "Savage Attack (Advanced Melee Weapons)";
            }
            if (feats.includes("Double Attack (Heavy Weapons)")) {
                feat = "Savage Attack (Heavy Weapons)";
            }
            if (feats.includes("Double Attack (Lightsabers)")) {
                feat = "Savage Attack (Lightsabers)";
            }
            if (feats.includes("Double Attack (Pistols)")) {
                feat = "Savage Attack (Pistols)";
            }
            if (feats.includes("Double Attack (Rifles)")) {
                feat = "Savage Attack (Rifles)";
            }
        }
        else if (randomNum == 61 && available.includes("FUCG") && feats.includes("Coordinated Attack")) {
            feat = "Swarm";
        }
        else if (randomNum == 62 && available.includes("SaV") && skills.includes("Endurance")) {
            feat = "Burst of Speed";
        }
        else if (randomNum == 63 && available.includes("SaV") && skills.includes("Acrobatics")) {
            feat = "Close Combat Escape";
        }
        else if (randomNum == 64 && available.includes("SaV") && con >= 13) {
            feat = "Impetuous Move";
        }
        else if (randomNum == 65 && available.includes("SaV")) {
            feat = "Impulsive Flight";
        }
        else if (randomNum == 66 && available.includes("SaV") && feats.includes("Quick Draw")) {
            feat = "Lightning Draw";
        }
        else if (randomNum == 67 && available.includes("SaV") && feats.includes("Combat Reflexes")) {
            feat = "Opportunistic Retreat";
        }
        else if (randomNum == 68 && available.includes("SaV") && skills.includes("Endurance")) {
            feat = "Resurgence";
        }
        else if (randomNum == 69 && available.includes("SaV") && feats.includes("Dodge")) {
            feat = "Slippery Maneuver";
        }
        else if (randomNum == 70 && available.includes("SaV") && skills.includes("Endurance")) {
            feat = "Stay Up";
        }
        else if (randomNum == 71 && available.includes("SaV") && feats.includes("Combat Reflexes")) {
            feat = "Tactical Advantage";
        }
        else if (randomNum == 72 && available.includes("SaV") && feats.includes("Rapid Strike")) {
            feat = "Wicked Strike";
        }
        else if (randomNum == 73 && available.includes("CWCG")) {
            feat = "Unstoppable Force";
        }
        else if (randomNum == 74 && available.includes("CWCG") && skills.includes("Perception")) {
            feat = "Unwavering Resolve";
        }
        else if (randomNum == 75 && available.includes("CWCG")) {
            feat = "Wary Defender";
        }
        if (feats.includes(feat) && feat != "Linguist" && feat != "Skill Training" ||
            feat == "Skill Focus (undefined)") {
            feat = "";
        }
        if (count2 == 500) {
            alert ("jediFeats");
            feat = "ValidJediFeatNotFound";
        }
    }

    return feat;
}