export function classFeats(firstClass,classes,int,con,skills,speciesTraits) {
    let feats = [];
    if (firstClass == 0) {
        feats.push("Force Sensitivity");
        feats.push("Weapon Proficiency (Lightsabers)");
        feats.push("Weapon Proficiency (Simple Weapons)");
    }
    if (firstClass == 1) {
        if (int > 12) {
            feats.push("Linguist");
        }
        if (speciesTraits.split(", ").includes("Primitive")) {
            feats.push("Weapon Proficiency (Simple Weapons)");
        }
        else {
        feats.push("Weapon Proficiency (Pistols)");
        feats.push("Weapon Proficiency (Simple Weapons)");
    }}
    if (firstClass == 2) {
        if (speciesTraits.split(", ").includes("Primitive")) {
            feats.push("Point-Blank Shot");
            feats.push("Weapon Proficiency (Simple Weapons)");
        }
        else {
        feats.push("Point-Blank Shot");
        feats.push("Weapon Proficiency (Pistols)");
        feats.push("Weapon Proficiency (Simple Weapons)");
    }}
    if (firstClass == 3) {
        if (con > 12 && skills.includes("Endurance")) {
            feats.push("Shake It Off");
        }
        if (speciesTraits.split(", ").includes("Primitive")) {
            feats.push("Weapon Proficiency (Simple Weapons)");
        }
        else {
        feats.push("Weapon Proficiency (Pistols)");
        feats.push("Weapon Proficiency (Rifles)");
        feats.push("Weapon Proficiency (Simple Weapons)");
    }}
    if (firstClass == 4) {
        if (speciesTraits.split(", ").includes("Primitive")) {
            feats.push("Armor Proficiency (Light)");
            feats.push("Armor Proficiency (Medium)");
            feats.push("Weapon Proficiency (Simple Weapons)");
        }
        else {
        feats.push("Armor Proficiency (Light)");
        feats.push("Armor Proficiency (Medium)");
        feats.push("Weapon Proficiency (Pistols)");
        feats.push("Weapon Proficiency (Rifles)");
        feats.push("Weapon Proficiency (Simple Weapons)");
    }}

    if (classes[0] > 0 && firstClass != 0) {
        if (skills.includes("Use the Force")) {
            feats.push("Force Sensitivity");
        }
        else {
        let check = 0;
        while (check == 0) {
            let avail = 2;
        let multiclass = ["Force Sensitivity","Weapon Proficiency (Lightsabers)"]

        let randomNum = Math.floor(Math.random() * avail);
        if (feats.includes(multiclass[randomNum])) {
            if (feats.includes("Force Sensitivity") && feats.includes("Weapon Proficiency (Lightsabers)")) {
            check = 1;
        }}
        else {
        feats.push(multiclass[randomNum]);
        check = 1;
        }
    }}}
    if (classes[1] > 0 && firstClass != 1) {
        let check = 0;
        while (check == 0) {
            let avail = 1;
        let multiclass = ["Weapon Proficiency (Pistols)"]
        if (int > 12) {
            multiclass.push("Linguist");
            avail++;
        }
        let randomNum = Math.floor(Math.random() * avail);
        if (feats.includes(multiclass[randomNum])) {
            if (feats.includes("Weapon Proficiency (Pistols)") && feats.includes("Linguist") ||
            feats.includes("Weapon Proficiency (Pistols)") && int < 13) {
            check = 1;
        }}
        else {
        feats.push(multiclass[randomNum]);
        check = 1;
        }
    }}
    if (classes[2] > 0 && firstClass != 2) {
        let check = 0;
        while (check == 0) {
            let avail = 2;
        let multiclass = ["Point-Blank Shot","Weapon Proficiency (Pistols)"]

        let randomNum = Math.floor(Math.random() * avail);
        if (feats.includes(multiclass[randomNum])) {
            if (feats.includes("Point-Blank Shot") && feats.includes("Weapon Proficiency (Pistols)")) {
            check = 1;
        }}
        else {
        feats.push(multiclass[randomNum]);
        check = 1;
        }
    }}
    if (classes[3] > 0 && firstClass != 3) {
        let check = 0;
        while (check == 0) {
            let avail = 2;
        let multiclass = ["Weapon Proficiency (Pistols)","Weapon Proficiency (Rifles)"]
        if (con > 12 && skills.includes("Endurance")) {
            multiclass.push("Shake It Off");
            avail++;
        }
        let randomNum = Math.floor(Math.random() * avail);
        if (feats.includes(multiclass[randomNum])) {
            if (feats.includes("Weapon Proficiency (Pistols)") && feats.includes("Weapon Proficiency (Rifles)") && feats.includes("Shake It Off") ||
            feats.includes("Weapon Proficiency (Pistols)") && feats.includes("Weapon Proficiency (Rifles)") && con < 13 || 
            feats.includes("Weapon Proficiency (Pistols)") && feats.includes("Weapon Proficiency (Rifles)") && skills.includes("Endurance")) {
            check = 1;
        }}
        else {
        feats.push(multiclass[randomNum]);
        check = 1;
        }
    }}
    if (classes[4] > 0 && firstClass != 4) {
        let check = 0;
        while (check == 0) {
        let avail = 3;
        let multiclass = ["Armor Proficiency (Light)","Weapon Proficiency (Pistols)","Weapon Proficiency (Rifles)"]
        if (feats.includes("Armor Proficiency (Light)")) {
            multiclass.push("Armor Proficiency (Medium)");
            avail++;
        }
        let randomNum = Math.floor(Math.random() * avail);
        if (feats.includes(multiclass[randomNum])) {
            if (feats.includes("Armor Proficiency (Light)") && feats.includes("Armor Proficiency (Medium)")
                && feats.includes("Weapon Proficiency (Pistols)") && feats.includes("Weapon Proficiency (Rifles)")) {
                check = 1;
        }}
        else {
        feats.push(multiclass[randomNum]);
        check = 1;
        }
    }}

    feats.sort();

    return feats;
}

export function speciesFeats(feats,speciesTraits,skills) {
    if (speciesTraits.split(", ").includes("Bonus Feat (Improved Damage Threshold)")) {
        feats.push("Improved Damage Threshold");
    }
    if (speciesTraits.split(", ").includes("Bonus Feat (Toughness)")) {
        feats.push("Toughness");
    }
    if (speciesTraits.split(", ").includes("Bonus Feat (Skill Focus)")) {
        let check = 0;
        let check2 = 0;
        while (check == 0) {
            check2++;
        let randomNum = Math.round(Math.random() * 5);
        if (randomNum == 0) {
            if (skills.includes("Endurance")) {
                feats.push("Skill Focus (Endurance)");
                check = 1;
            }
        }
        if (randomNum == 1) {
            if (skills.includes("Mechanics")) {
                feats.push("Skill Focus (Mechanics)");
                check = 1;
            }
        }
        if (randomNum == 2) {
            if (skills.includes("Pilot")) {
                feats.push("Skill Focus (Pilot)");
                check = 1;
            }
        }
        if (randomNum == 3) {
            if (skills.includes("Survival")) {
                feats.push("Skill Focus (Survival)");
                check = 1;
            }
        }
        if (randomNum == 4) {
            if (skills.includes("Treat Injury")) {
                feats.push("Skill Focus (Treat Injury)");
                check = 1;
            }
        }
        if (check2 > 10) {
            check = 1;
        }
        }
    }
    if (speciesTraits.split(", ").includes("Conditional Bonus Feat (Skill Focus (Gather Information))") && 
        skills.includes("Gather Information")) {
        feats.push("Skill Focus (Gather Information)");
    }
    if (speciesTraits.split(", ").includes("Conditional Bonus Feat (Skill Focus (Initiative))") && 
        skills.includes("Initiative")) {
        feats.push("Skill Focus (Initiative)");
    }
    if (speciesTraits.split(", ").includes("Conditional Bonus Feat (Skill Focus (Knowledge (Life Sciences)))") && 
        skills.includes("Knowledge (Life Sciences)")) {
        feats.push("Skill Focus (Knowledge (Life Sciences))");
    }
    if (speciesTraits.split(", ").includes("Conditional Bonus Feat (Skill Focus (Perception))") && 
        skills.includes("Perception")) {
        feats.push("Skill Focus (Perception)");
    }
    if (speciesTraits.split(", ").includes("Conditional Bonus Feat (Skill Focus (Persuasion))") && 
        skills.includes("Persuasion")) {
        feats.push("Skill Focus (Persuasion)");
    }
    if (speciesTraits.split(", ").includes("Conditional Bonus Feat (Skill Focus (Survival))") && 
        skills.includes("Survival")) {
        feats.push("Skill Focus (Survival)");
    }
    
    feats.sort();
    return feats;
}

export function listFeats(feats) {
    let count;
    let featList = "";
    for (count = 0; count < feats.length; count++) {
        if (count != 0) {
            featList += ", ";
        }
        featList += feats[count];
    }
    
    return featList;
}

export function getFeats(available,characterFeats,jediFeats,nobleFeats,scoundrelFeats,scoutFeats,soldierFeats,feats,skills,str,dex,con,int,wis,cha,BAB,speciesTraits) {
    let count;

        for (count = 0; count < characterFeats; count++) {
            feats.push(findFeat(available,feats,skills,"character",str,dex,con,int,wis,cha,BAB,speciesTraits));
        }

    return feats;
}

export function findFeat(available,feats,skills,type,str,dex,con,int,wis,cha,BAB,speciesTraits) {
    let feat = "";
    while (feat == "") {
        let randomNum = Math.floor(Math.random() * 23);
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
        else if (randomNum == 16 && available.includes("CR") && speciesTraits.split(", ").includes("Rage") && BAB >= 1) {
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
        else if (randomNum == 20 && available.includes("CR") && BAB >= 1) {
            let randomNum = Math.floor(Math.random() * 5);
                if (randomNum == 0) {
                    feat = "Exotic Weapon Proficiency (Atlatl)";
                }
                else if (randomNum == 1) {
                    feat = "Exotic Weapon Proficiency (Amphistaff)";
                }
                else if (randomNum == 2) {
                    feat = "Exotic Weapon Proficiency (Cesta)";
                }
                else if (randomNum == 3) {
                    feat = "Exotic Weapon Proficiency (Flamethrower)";
                }
                else if (randomNum == 4) {
                    feat = "Exotic Weapon Proficiency (Bowcaster)";
                }
        }
        else if (randomNum == 21 && available.includes("CR") && speciesTraits.split(", ").includes("Rage")) {
            feat = "Extra Rage";
        }
        else if (randomNum == 22 && available.includes("CR") && skills.includes("Endurance")) {
            feat = "Extra Second Wind";
        }
        if (feats.includes(feat)) {
            feat = "";
        }
    }

    return feat;
}

export function displayFeats(feats) {
    let featDisplay = "";
    let count;
    for (count = 0; count < feats.length; count++) {
        if (count != 0) {
            featDisplay += ", ";
        }
        featDisplay += feats[count];
    }

    return featDisplay;
}