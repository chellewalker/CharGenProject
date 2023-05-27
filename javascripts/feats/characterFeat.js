export function characterFeat(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size) {
    let feat = "";
    while (feat == "") {
        let randomNum = Math.floor(Math.random() * 61);
        if (randomNum == 0 && skills.includes("Acrobatics")) {
            feat = "Acrobatic Strike";
        }
        else if (randomNum == 1 && available.includes("CR")) {
            feat = "Armor Proficiency (Light)";
        }
        else if (randomNum == 2 && available.includes("CR") && feats.includes("Armor Proficiency (Light)")) {
            feat = "Armor Proficiency (Medium)";
        }
        else if (randomNum == 3 && available.includes("CR") && skills.includes("Armor Proficiency (Medium)")) {
            feat = "Armor Proficiency (Heavy)";
        }
        else if (randomNum == 4 && available.includes("CR") && str > 12 && BAB >= 1) {
            feat = "Bantha Rush";
        }
        else if (randomNum == 5 && available.includes("CR") && feats.includes("Weapon Proficiency (Heavy Weapons)") ||
                randomNum == 5 && available.includes("CR") && feats.includes("Vehicular Combat")) {
            feat = "Burst Fire";
        }
        else if (randomNum == 6 && available.includes("CR") && feats.includes("Point-Blank Shot") && BAB >= 2) {
            feat = "Careful Shot";
        }
        else if (randomNum == 7 && available.includes("CR") && BAB >= 4) {
            feat = "Charging Fire";
        }
        else if (randomNum == 8 && available.includes("CR") && feats.includes("Power Attack") && str >= 13) {
            feat = "Cleave";
        }
        else if (randomNum == 9 && available.includes("CR")) {
            feat = "Combat Reflexes";
        }
        else if (randomNum == 10 && available.includes("CR") && BAB >= 2) {
            feat = "Coordinated Attack";
        }
        else if (randomNum == 11 && available.includes("CR") && feats.includes("Pin") && BAB >= 1) {
            feat = "Crush";
        }
        else if (randomNum == 12 && available.includes("CR") && skills.includes("Treat Injury")) {
            feat = "Cybernetic Surgery";
        }
        else if (randomNum == 13 && available.includes("CR") && feats.includes("Point-Blank Shot") && feats.includes("Precise Shot") && BAB >= 4) {
            feat = "Deadeye";
        }
        else if (randomNum == 14 && available.includes("CR") && dex >= 13) {
            feat = "Dodge";
        }
        else if (randomNum == 15 && available.includes("CR") && BAB >= 6) {
            let check = 0;
            while (check == 0) {
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
        else if (randomNum == 16 && available.includes("CR") && speciesTraits.includes("Rage") && BAB >= 1) {
            feat = "Dreadful Rage";
        }
        else if (randomNum == 17 && available.includes("CR") && dex >= 13 && BAB >= 1) {
            feat = "Dual Weapon Mastery I";
        }
        else if (randomNum == 18 && available.includes("CR") && feats.includes("Dual Weapon Mastery I") && dex >= 15 && BAB >= 6) {
            feat = "Dual Weapon Mastery II";
        }
        else if (randomNum == 19 && available.includes("CR") && feats.includes("Dual Weapon Mastery II") && dex >= 17 && BAB >= 11) {
            feat = "Dual Weapon Mastery III";
        }
        else if (randomNum == 20 && BAB >= 1) {
            let randomNum = Math.floor(Math.random() * 5);
                if (randomNum == 0 && available.includes("CR")) {
                    feat = "Exotic Weapon Proficiency (Atlatl)";
                }
                else if (randomNum == 1 && available.includes("LECG")) {
                    feat = "Exotic Weapon Proficiency (Amphistaff)";
                }
                else if (randomNum == 2 && available.includes("CR")) {
                    feat = "Exotic Weapon Proficiency (Cesta)";
                }
                else if (randomNum == 3 && available.includes("CR")) {
                    feat = "Exotic Weapon Proficiency (Flamethrower)";
                }
                else if (randomNum == 4 && available.includes("CR")) {
                    feat = "Exotic Weapon Proficiency (Bowcaster)";
                }
        }
        else if (randomNum == 21 && available.includes("CR") && speciesTraits.includes("Rage")) {
            feat = "Extra Rage";
        }
        else if (randomNum == 22 && available.includes("CR") && skills.includes("Endurance")) {
            feat = "Extra Second Wind";
        }
        else if (randomNum == 23 && available.includes("CR") && feats.includes("Point-Blank Shot")) {
            feat = "Far Shot";
        }
        else if (randomNum == 24 && available.includes("CR") && feats.includes("Force Sensitivity")) {
            feat = "Force Boon";
        }
        else if (randomNum == 25 && available.includes("CR")) {
            feat = "Force Sensitivity";
        }
        else if (randomNum == 26  && skills.includes("Use the Force") ||
                    randomNum == 27  && skills.includes("Use the Force") ||
                    randomNum == 28  && skills.includes("Use the Force") ||
                    randomNum == 29  && skills.includes("Use the Force") ||
                    randomNum == 30  && skills.includes("Use the Force") ||
                    randomNum == 31  && skills.includes("Use the Force")) {
            feat = "Force Training";
        }
        else if (randomNum == 32 && available.includes("CR")  && feats.includes("Power Attack")  && feats.includes("Cleave") && str >= 13 && BAB >= 4) {
            feat = "Great Cleave";
        }
        else if (randomNum == 33 && available.includes("CR")  && feats.includes("Dodge")  && feats.includes("Mobility") && dex >= 13) {
            feat = "Improved Charge";
        }
        else if (randomNum == 34 && available.includes("CR")) {
            feat = "Improved Defenses";
        }
        else if (randomNum == 35 && available.includes("CR")  && feats.includes("Melee Defense") && int >= 13) {
            feat = "Improved Disarm";
        }
        else if (randomNum == 36 && available.includes("CR")) {
            feat = "Improved Damage Threshold";
        }
        else if (randomNum == 37 && available.includes("CR") && int >= 13) {
            feat = "Linguist";
        }
        else if (randomNum == 38 && available.includes("CR")) {
            feat = "Martial Arts I";
        }
        else if (randomNum == 39 && available.includes("CR")  && feats.includes("Martial Arts I") && BAB >= 3) {
            feat = "Martial Arts II";
        }
        else if (randomNum == 40 && available.includes("CR")  && feats.includes("Martial Arts I") && feats.includes("Martial Arts II") && BAB >= 6) {
            feat = "Martial Arts III";
        }
        else if (randomNum == 41 && available.includes("CR") && int >= 13) {
            feat = "Melee Defense";
        }
        else if (randomNum == 42 && available.includes("CR") && str >= 13) {
            feat = "Mighty Swing";
        }
        else if (randomNum == 43 && available.includes("CR") && feats.includes("Dodge") && dex >= 13) {
            feat = "Mobility";
        }
        else if (randomNum == 44 && available.includes("CR") && BAB >= 1) {
            feat = "Pin";
        }
        else if (randomNum == 45 && available.includes("CR")) {
            feat = "Point-Blank Shot";
        }
        else if (randomNum == 46 && available.includes("CR") && str >= 13) {
            feat = "Power Attack";
        }
        else if (randomNum == 47 && available.includes("CR") && BAB >= 1 && size != "Small") {
            feat = "Powerful Charge";
        }
        else if (randomNum == 48 && available.includes("CR") && feats.includes("Point-Blank Shot")) {
            feat = "Precise Shot";
        }
        else if (randomNum == 49 && available.includes("CR") && BAB >= 1) {
            feat = "Quick Draw";
        }
        else if (randomNum == 50 && available.includes("CR") && BAB >= 1) {
            feat = "Rapid Shot";
        }
        else if (randomNum == 51 && available.includes("CR") && BAB >= 1) {
            feat = "Rapid Strike";
        }
        else if (randomNum == 52 && available.includes("CR") && dex >= 13) {
            feat = "Running Attack";
        }
        else if (randomNum == 53 && available.includes("CR") && con >= 13 && skills.includes("Endurance")) {
            feat = "Shake It Off";
        }
        else if (randomNum == 54 && available.includes("CR") || 
                    randomNum == 55 && available.includes("CR") || 
                    randomNum == 56 && available.includes("CR") || 
                    randomNum == 57 && available.includes("CR") || 
                    randomNum == 58 && available.includes("CR") || 
                    randomNum == 59 && available.includes("CR") || 
                    randomNum == 60 && available.includes("CR")) {
                let randomNum2 = Math.floor(Math.random() * skills.length);
                feat = "Skill Focus ("+skills[randomNum2]+")";
        }
        if (feats.includes(feat) && feat != "Linguist" && feat != "Force Training") {
            feat = "";
        }
    }

    return feat;
}