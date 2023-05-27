export function scoutFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size) {
    let feat = "";
    let count2 = 0;
    while (feat == "") {
        count2++;
        let randomNum = Math.floor(Math.random() * 30);
        if (randomNum == 0 && available.includes("CR")) {
            feat = "Armor Proficiency (Light)";
        }
        else if (randomNum == 1 && available.includes("CR") && feats.includes("Armor Proficiency (Light)")) {
            feat = "Armor Proficiency (Medium)";
        }
        else if (randomNum == 2 && available.includes("CR") && skills.includes("Armor Proficiency (Medium)")) {
            feat = "Armor Proficiency (Heavy)";
        }
        else if (randomNum == 3 && available.includes("CR") && feats.includes("Point-Blank Shot") && BAB >= 2) {
            feat = "Careful Shot";
        }
        else if (randomNum == 4 && available.includes("CR") && feats.includes("Point-Blank Shot") && feats.includes("Precise Shot") && BAB >= 4) {
            feat = "Deadeye";
        }
        else if (randomNum == 5 && available.includes("CR") && dex >= 13) {
            feat = "Dodge";
        }
        else if (randomNum == 6 && available.includes("CR") && feats.includes("Point-Blank Shot")) {
            feat = "Far Shot";
        }
        else if (randomNum == 7 && available.includes("CR") && int >= 13) {
            feat = "Linguist";
        }
        else if (randomNum == 8 && available.includes("CR") && feats.includes("Dodge") && dex >= 13) {
            feat = "Mobility";
        }
        else if (randomNum == 9 && available.includes("CR")) {
            feat = "Point-Blank Shot";
        }
        else if (randomNum == 10 && available.includes("CR") && feats.includes("Point-Blank Shot")) {
            feat = "Precise Shot";
        }
        else if (randomNum == 11 && available.includes("CR") && BAB >= 1) {
            feat = "Rapid Shot";
        }
        else if (randomNum == 12 && available.includes("CR") && dex >= 13) {
            feat = "Running Attack";
        }
        else if (randomNum == 13 && available.includes("CR") && con >= 13 && skills.includes("Endurance")) {
            feat = "Shake It Off";
        }
        else if (randomNum == 14 && available.includes("CR") || 
                    randomNum == 15 && available.includes("CR") || 
                    randomNum == 16 && available.includes("CR") || 
                    randomNum == 17 && available.includes("CR") || 
                    randomNum == 18 && available.includes("CR") || 
                    randomNum == 19 && available.includes("CR") || 
                    randomNum == 20 && available.includes("CR")) {
                let randomNum2 = Math.floor(Math.random() * skills.length);
                feat = "Skill Focus ("+skills[randomNum2]+")";
        }
        else if (randomNum == 21 && available.includes("CR") || 
                    randomNum == 22 && available.includes("CR")) {
            feat = "Skill Training";
        }
        else if (randomNum == 23 && available.includes("CR") && feats.includes("Point-Blank Shot") && feats.includes("Precise Shot") && BAB >= 4) {
            feat = "Sniper";
        }
        else if (randomNum == 24 && available.includes("CR") && skills.includes("Pilot")) {
            feat = "Vehicular Combat";
        }
        else if (randomNum == 25 || randomNum == 26 || randomNum == 27) {
            feat = "Weapon Proficiency (Advanced Melee Weapons)";
        }
        else if (randomNum == 28) {
            feat = "Weapon Proficiency (Pistols)";
        }
        else if (randomNum == 29) {
            feat = "Weapon Proficiency (Rifles)";
        }
        if (feats.includes(feat) && feat != "Linguist" && feat != "Skill Training") {
            feat = "";
        }
        if (count2 == 500) {
            feat = "ValidScoutFeatNotFound";
        }
    }

    return feat;
}