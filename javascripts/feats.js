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