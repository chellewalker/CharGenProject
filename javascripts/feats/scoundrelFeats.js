export function scoundrelFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size) {
    let feat = "";
    let count2 = 0;
    while (feat == "") {
        count2++;
        let randomNum = Math.floor(Math.random() * 23);
        if (randomNum == 0 && available.includes("CR") && feats.includes("Point-Blank Shot") && feats.includes("Precise Shot") && BAB >= 4) {
            feat = "Deadeye";
        }
        else if (randomNum == 1 && available.includes("CR") && dex >= 13) {
            feat = "Dodge";
        }
        else if (randomNum == 2 && available.includes("CR") && int >= 13) {
            feat = "Melee Defense";
        }
        else if (randomNum == 3 && available.includes("CR") && feats.includes("Dodge") && dex >= 13) {
            feat = "Mobility";
        }
        else if (randomNum == 4 && available.includes("CR")) {
            feat = "Point-Blank Shot";
        }
        else if (randomNum == 5 && available.includes("CR") && feats.includes("Point-Blank Shot")) {
            feat = "Precise Shot";
        }
        else if (randomNum == 6 && available.includes("CR") && BAB >= 1) {
            feat = "Quick Draw";
        }
        else if (randomNum == 7 && available.includes("CR") && BAB >= 1) {
            feat = "Rapid Shot";
        }
        else if (randomNum == 8 && available.includes("CR") && dex >= 13) {
            feat = "Running Attack";
        }
        else if (randomNum == 9 && available.includes("CR") || 
                    randomNum == 10 && available.includes("CR") || 
                    randomNum == 11 && available.includes("CR") || 
                    randomNum == 12 && available.includes("CR") || 
                    randomNum == 13 && available.includes("CR") || 
                    randomNum == 14 && available.includes("CR") || 
                    randomNum == 15 && available.includes("CR")) {
                let randomNum2 = Math.floor(Math.random() * skills.length);
                feat = "Skill Focus ("+skills[randomNum2]+")";
        }
        else if (randomNum == 16 && available.includes("CR") || 
                    randomNum == 17 && available.includes("CR")) {
            feat = "Skill Training";
        }
        else if (randomNum == 18 && available.includes("CR") && skills.includes("Pilot")) {
            feat = "Vehicular Combat";
        }
        else if (randomNum == 19 || randomNum == 20 || randomNum == 21) {
            feat = "Weapon Proficiency (Advanced Melee Weapons)";
        }
        else if (randomNum == 22) {
            feat = "Weapon Proficiency (Pistols)";
        }
        if (feats.includes(feat) && feat != "Linguist" && feat != "Force Training" && feat != "Force Training") {
            feat = "";
        }
        if (count2 == 500) {
            feat = "ValidScoundrelFeatNotFound";
        }
    }

    return feat;
}