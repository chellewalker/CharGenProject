export function classFeats(firstClass,classes,int,con,skills) {
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
        feats.push("Weapon Proficiency (Pistols)");
        feats.push("Weapon Proficiency (Simple Weapons)");
    }
    if (firstClass == 2) {
        feats.push("Point-Blank Shot");
        feats.push("Weapon Proficiency (Pistols)");
        feats.push("Weapon Proficiency (Simple Weapons)");
    }
    if (firstClass == 3) {
        if (con > 12 && skills.includes("Endurance")) {
            feats.push("Shake It Off");
        }
        feats.push("Weapon Proficiency (Pistols)");
        feats.push("Weapon Proficiency (Rifles)");
        feats.push("Weapon Proficiency (Simple Weapons)");
    }
    if (firstClass == 4) {
        feats.push("Armor Proficiency (Light)");
        feats.push("Armor Proficiency (Medium)");
        feats.push("Weapon Proficiency (Pistols)");
        feats.push("Weapon Proficiency (Rifles)");
        feats.push("Weapon Proficiency (Simple Weapons)");
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