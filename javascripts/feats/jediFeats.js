export function jediFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size) {
    let feat = "";
    let count2 = 0;
    while (feat == "") {
        count2++;
        let randomNum = Math.floor(Math.random() * 44);
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
        else if (randomNum == 4 && available.includes("CR") && BAB >= 6) {
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
        else if (randomNum == 5 && available.includes("CR") && speciesTraits.includes("Rage") && BAB >= 1) {
            feat = "Dreadful Rage";
        }
        else if (randomNum == 6 && available.includes("CR") && dex >= 13 && BAB >= 1) {
            feat = "Dual Weapon Mastery I";
        }
        else if (randomNum == 7 && available.includes("CR") && feats.includes("Dual Weapon Mastery I") && dex >= 15 && BAB >= 6) {
            feat = "Dual Weapon Mastery II";
        }
        else if (randomNum == 8 && available.includes("CR") && feats.includes("Dual Weapon Mastery II") && dex >= 17 && BAB >= 11) {
            feat = "Dual Weapon Mastery III";
        }
        else if (randomNum == 9 && available.includes("CR")) {
            feat = "Force Sensitivity";
        }
        else if (randomNum == 10  && skills.includes("Use the Force") ||
                    randomNum == 11  && skills.includes("Use the Force") ||
                    randomNum == 12  && skills.includes("Use the Force") ||
                    randomNum == 13  && skills.includes("Use the Force") ||
                    randomNum == 14  && skills.includes("Use the Force") ||
                    randomNum == 15  && skills.includes("Use the Force")) {
            feat = "Force Training";
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
                    randomNum == 34 && available.includes("CR")) {
                let randomNum2 = Math.floor(Math.random() * skills.length);
                feat = "Skill Focus ("+skills[randomNum2]+")";
        }
        else if (randomNum == 35 && available.includes("CR") || 
                    randomNum == 36 && available.includes("CR")) {
            feat = "Skill Training";
        }
        else if (randomNum == 37 && available.includes("CR")) {
            feat = "Strong in the Force";
        }
        else if (randomNum == 38 && available.includes("CR") && feats.includes("Double Attack (Advanced Melee Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Advanced Melee Weapons)";
        }
        else if (randomNum == 38 && available.includes("CR") && feats.includes("Double Attack (Heavy Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Heavy Weapons)";
        }
        else if (randomNum == 38 && available.includes("CR") && feats.includes("Double Attack (Lightsabers)") && BAB >= 11) {
            feat = "Triple Attack (Lightsabers)";
        }
        else if (randomNum == 38 && available.includes("CR") && feats.includes("Double Attack (Pistols)") && BAB >= 11) {
            feat = "Triple Attack (Pistols)";
        }
        else if (randomNum == 38 && available.includes("CR") && feats.includes("Double Attack (Rifles)") && BAB >= 11) {
            feat = "Triple Attack (Rifles)";
        }
        else if (randomNum == 38 && available.includes("CR") && feats.includes("Double Attack (Simple Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Simple Weapons)";
        }
        else if (randomNum == 39 && available.includes("CR") && BAB >= 8) {
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
        else if (randomNum == 40 && available.includes("CR") && BAB >= 1) {
            feat = "Weapon Finesse";
        }
        else if (randomNum == 41 && available.includes("CR") &&  feats.includes("Weapon Proficiency (Lightsabers)")||
                    randomNum == 42 && available.includes("CR") && feats.includes("Weapon Proficiency (Lightsabers)")) {
            feat = "Weapon Focus (Lightsabers)";
        }
        else if (randomNum == 43) {
            feat = "Weapon Proficiency (Lightsabers)";
        }
        if (feats.includes(feat) && feat != "Linguist" && feat != "Force Training" && feat != "Force Training") {
            feat = "";
        }
        if (count2 == 500) {
            alert ("jediFeats");
            feat = "ValidJediFeatNotFound";
        }
    }

    return feat;
}