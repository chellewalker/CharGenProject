export function displayFeats(feats) {
    let featDisplay = "";
    let skillFocus = [];
    let armorProficiency = [];
    let weaponProficiency = [];
    let focusSplit1;
    let weaponSplit1;
    let focusSplit2;
    let weaponSplit2;
    let hasFocus = 0;
    let focusTemp = "";
    let weaponTemp = "";
    let count;
    let count2;
    feats.sort();
    
    for (count = 0; count < feats.length; count++) {
        if (feats[count].includes("Skill Focus")) {
            hasFocus = 1;
            focusSplit1 = feats[count].split("Skill Focus (");
            focusSplit2 = String(focusSplit1[1].substring(0, focusSplit1[1].length - 1));
            skillFocus.push(focusSplit2);
            feats.splice(count,1);
            count--;
        }
    }
    if (hasFocus == 1) {
        for (count = 0; count < skillFocus.length; count++) {
            if (count != 0) {
                focusTemp += ", ";
            }
            else {
                focusTemp += "Skill Focus (";
            }
            focusTemp += skillFocus[count];
        }
        focusTemp += ")";
        feats.push(focusTemp);
        feats.sort();
    }


    for (count = 0; count < feats.length; count++) {
        if (feats[count].includes("Exotic Weapon Proficiency")) {
        }
        else if (feats[count].includes("Weapon Proficiency")) {
            weaponSplit1 = feats[count].split("Weapon Proficiency (");
            weaponSplit2 = String(weaponSplit1[1].substring(0, weaponSplit1[1].length - 1));
            weaponProficiency.push(weaponSplit2);
            feats.splice(count,1);
            count--;
        }
    }
        for (count = 0; count < weaponProficiency.length; count++) {
            if (count != 0) {
                weaponTemp += ", ";
            }
            else {
                weaponTemp += "Weapon Proficiency (";
            }
            weaponTemp += weaponProficiency[count];
        }
        weaponTemp += ")";
        feats.push(weaponTemp);
        feats.sort();
        weaponTemp = "";
        hasFocus = 0;

        for (count = 0; count < feats.length; count++) {
            if (feats[count].includes("Armor Proficiency")) {
                hasFocus = 1;
                weaponSplit1 = feats[count].split("Armor Proficiency (");
                weaponSplit2 = String(weaponSplit1[1].substring(0, weaponSplit1[1].length - 1));
                armorProficiency.push(weaponSplit2);
                feats.splice(count,1);
                count--;
            }
        }
        if (hasFocus == 1) {
            for (count = 0; count < armorProficiency.length; count++) {
                if (count != 0) {
                    weaponTemp += ", ";
                }
                else {
                    weaponTemp += "Armor Proficiency (";
                }
                weaponTemp += armorProficiency[count];
            }
            weaponTemp += ")";
            feats.push(weaponTemp);
            feats.sort();
        }
    
    for (count = 0; count < feats.length; count++) {
        if (count != 0) {
            featDisplay += ", ";
        }
        if (feats[count].includes(" (")) {
            let temp = feats[count].split(" (");
            featDisplay += "<a href='https://swse.fandom.com/wiki/"+temp[0]+"'>"+temp[0]+"</a>";
            for (count2 = 1; count2 < temp.length; count2++) {
                featDisplay += " ("+temp[count2];
            }
        }
        else {
            featDisplay += "<a href='https://swse.fandom.com/wiki/"+feats[count]+"' target='_blank' rel='noopener noreferrer'>"+feats[count]+"</a>";
        }
    }

    return featDisplay;
}

export function displayRawFeats(feats) {
    let featDisplay = "";
    let skillFocus = [];
    let armorProficiency = [];
    let weaponProficiency = [];
    let focusSplit1;
    let weaponSplit1;
    let focusSplit2;
    let weaponSplit2;
    let hasFocus = 0;
    let focusTemp = "";
    let weaponTemp = "";
    let count;
    let count2;
    feats.sort();
    
    for (count = 0; count < feats.length; count++) {
        if (feats[count].includes("Skill Focus")) {
            hasFocus = 1;
            focusSplit1 = feats[count].split("Skill Focus (");
            focusSplit2 = String(focusSplit1[1].substring(0, focusSplit1[1].length - 1));
            skillFocus.push(focusSplit2);
            feats.splice(count,1);
            count--;
        }
    }
    if (hasFocus == 1) {
        for (count = 0; count < skillFocus.length; count++) {
            if (count != 0) {
                focusTemp += ", ";
            }
            else {
                focusTemp += "Skill Focus (";
            }
            focusTemp += skillFocus[count];
        }
        focusTemp += ")";
        feats.push(focusTemp);
        feats.sort();
    }


    for (count = 0; count < feats.length; count++) {
        if (feats[count].includes("Exotic Weapon Proficiency")) {
        }
        else if (feats[count].includes("Weapon Proficiency")) {
            weaponSplit1 = feats[count].split("Weapon Proficiency (");
            weaponSplit2 = String(weaponSplit1[1].substring(0, weaponSplit1[1].length - 1));
            weaponProficiency.push(weaponSplit2);
            feats.splice(count,1);
            count--;
        }
    }
        for (count = 0; count < weaponProficiency.length; count++) {
            if (count != 0) {
                weaponTemp += ", ";
            }
            else {
                weaponTemp += "Weapon Proficiency (";
            }
            weaponTemp += weaponProficiency[count];
        }
        weaponTemp += ")";
        feats.push(weaponTemp);
        feats.sort();
        weaponTemp = "";
        hasFocus = 0;

        for (count = 0; count < feats.length; count++) {
            if (feats[count].includes("Armor Proficiency")) {
                hasFocus = 1;
                weaponSplit1 = feats[count].split("Armor Proficiency (");
                weaponSplit2 = String(weaponSplit1[1].substring(0, weaponSplit1[1].length - 1));
                armorProficiency.push(weaponSplit2);
                feats.splice(count,1);
                count--;
            }
        }
        if (hasFocus == 1) {
            for (count = 0; count < armorProficiency.length; count++) {
                if (count != 0) {
                    weaponTemp += ", ";
                }
                else {
                    weaponTemp += "Armor Proficiency (";
                }
                weaponTemp += armorProficiency[count];
            }
            weaponTemp += ")";
            feats.push(weaponTemp);
            feats.sort();
        }
        
    for (count = 0; count < feats.length; count++) {
        if (count != 0) {
            featDisplay += ", ";
        }
        featDisplay += feats[count];
    }

    return featDisplay;
}