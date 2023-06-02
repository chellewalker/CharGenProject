export function nobleFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size) {
    let feat = "";
    let count2 = 0;
    while (feat == "") {
        count2++;
        let randomNum = Math.floor(Math.random() * 28);
        if (randomNum == 0 && available.includes("CR")) {
            feat = "Armor Proficiency (Light)";
        }
        else if (randomNum == 1 && available.includes("CR") && skills.includes("Treat Injury")) {
            feat = "Cybernetic Surgery";
        }
        else if (randomNum == 2 && BAB >= 1) {
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
        else if (randomNum == 3 && available.includes("CR") && int >= 13 ||
                    randomNum == 4 && available.includes("CR") && int >= 13) {
            feat = "Linguist";
        }
        else if (randomNum == 5 && available.includes("CR") && int >= 13) {
            feat = "Melee Defense";
        }
        else if (randomNum == 6 && available.includes("CR") || 
                    randomNum == 7 && available.includes("CR") || 
                    randomNum == 8 && available.includes("CR") || 
                    randomNum == 9 && available.includes("CR") || 
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
                    randomNum == 17 && available.includes("CR") || 
                    randomNum == 18 && available.includes("CR") || 
                    randomNum == 19 && available.includes("CR") || 
                    randomNum == 20 && available.includes("CR")) {
            feat = "Skill Training";
        }
        else if (randomNum == 21 && available.includes("CR") && skills.includes("Treat Injury")) {
            feat = "Surgical Expertise";
        }
        else if (randomNum == 22 && available.includes("CR") && BAB >= 1 && dex >= str) {
            feat = "Weapon Finesse";
        }
        else if (randomNum == 23 || randomNum == 24 || randomNum == 25) {
            if (count2 % 2 == 0) {
                feat = "Weapon Proficiency (Advanced Melee Weapons)";
            }}
        else if (randomNum == 26) {
            feat = "Weapon Proficiency (Pistols)";
        }
        else if (randomNum == 27) {
            feat = "Weapon Proficiency (Rifles)";
        }
        if (feats.includes(feat) && feat != "Linguist" && feat != "Skill Training" ||
            feat == "Skill Focus (undefined)") {
            feat = "";
        }
        if (count2 == 500) {
            feat = "ValidNobleFeatNotFound";
        }
    }

    return feat;
}