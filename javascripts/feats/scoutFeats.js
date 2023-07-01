export function scoutFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel) {
    let feat = "";
    let count2 = 0;
    while (feat == "") {
        count2++;
        let randomNum = Math.floor(Math.random() * 55);
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
        else if (randomNum == 5 && available.includes("CR") && dex >= 13 ||
                    randomNum == 6 && available.includes("CR") && dex >= 13 ||
                    randomNum == 7 && available.includes("CR") && dex >= 13 ||
                    randomNum == 8 && available.includes("CR") && dex >= 13) {
            feat = "Dodge";
        }
        else if (randomNum == 9 && available.includes("CR") && feats.includes("Point-Blank Shot")) {
            feat = "Far Shot";
        }
        else if (randomNum == 10 && available.includes("CR") && int >= 13) {
            feat = "Linguist";
        }
        else if (randomNum == 11 && available.includes("CR") && feats.includes("Dodge") && dex >= 13 ||
                    randomNum == 12 && available.includes("CR") && feats.includes("Dodge") && dex >= 13 ||
                    randomNum == 13 && available.includes("CR") && feats.includes("Dodge") && dex >= 13) {
            feat = "Mobility";
        }
        else if (randomNum == 14 && available.includes("CR")) {
            feat = "Point-Blank Shot";
        }
        else if (randomNum == 15 && available.includes("CR") && feats.includes("Point-Blank Shot") ||
                    randomNum == 16 && available.includes("CR") && feats.includes("Point-Blank Shot") ||
                    randomNum == 17 && available.includes("CR") && feats.includes("Point-Blank Shot")) {
            feat = "Precise Shot";
        }
        else if (randomNum == 18 && available.includes("CR") && BAB >= 1) {
            feat = "Rapid Shot";
        }
        else if (randomNum == 19 && available.includes("CR") && dex >= 13 ||
                    randomNum == 20 && available.includes("CR") && dex >= 13 ||
                    randomNum == 21 && available.includes("CR") && dex >= 13) {
            feat = "Running Attack";
        }
        else if (randomNum == 22 && available.includes("CR") && con >= 13 && skills.includes("Endurance")) {
            feat = "Shake It Off";
        }
        else if (randomNum == 23 && available.includes("CR") || 
                    randomNum == 24 && available.includes("CR") || 
                    randomNum == 25 && available.includes("CR") || 
                    randomNum == 26 && available.includes("CR") || 
                    randomNum == 27 && available.includes("CR") || 
                    randomNum == 28 && available.includes("CR") || 
                    randomNum == 29 && available.includes("CR")) {
                let randomNum2 = Math.floor(Math.random() * skills.length);
                feat = "Skill Focus ("+skills[randomNum2]+")";
        }
        else if (randomNum == 30 && available.includes("CR") || 
                    randomNum == 31 && available.includes("CR") || 
                    randomNum == 32 && available.includes("CR") || 
                    randomNum == 33 && available.includes("CR")) {
            feat = "Skill Training";
        }
        else if (randomNum == 34 && available.includes("CR") && feats.includes("Point-Blank Shot") && feats.includes("Precise Shot") && BAB >= 4) {
            feat = "Sniper";
        }
        else if (randomNum == 35 && available.includes("CR") && skills.includes("Pilot") ||
                    randomNum == 36 && available.includes("CR") && skills.includes("Pilot") ||
                    randomNum == 37 && available.includes("CR") && skills.includes("Pilot")) {
            feat = "Vehicular Combat";
        }
        else if (randomNum == 38 || randomNum == 39 || randomNum == 40) {
            if (count2 % 2 == 0) {
                feat = "Weapon Proficiency (Advanced Melee Weapons)";
            }}
        else if (randomNum == 41) {
            feat = "Weapon Proficiency (Pistols)";
        }
        else if (randomNum == 42) {
            feat = "Weapon Proficiency (Rifles)";
        }
        else if (randomNum == 43 && available.includes("KotORCG") && str >= 13 && con >= 13) {
            feat = "Conditioning";
        }
        else if (randomNum == 44 && available.includes("KotORCG")) {
            feat = "Gearhead";
        }
        else if (randomNum == 45 && available.includes("KotORCG") && feats.includes("Conditioning")) {
            feat = "Increased Agility";
        }
        else if (randomNum == 46 && available.includes("KotORCG") && con >= 13) {
            feat = "Poison Resistance";
        }
        else if (randomNum == 47 && available.includes("FUCG") && BAB >= 1) {
            feat = "Advantageous Attack";
        }
        else if (randomNum == 48 && available.includes("FUCG") && skills.includes("Stealth")) {
            feat = "Advantageous Cover";
        }
        else if (randomNum == 49 && available.includes("FUCG")) {
            feat = "Bad Feeling";
        }
        else if (randomNum == 50 && available.includes("FUCG")) {
            feat = "Cunning Attack";
        }
        else if (randomNum == 51 && available.includes("CWCG") && skills.includes("Mechanics")) {
            feat = "Droidcraft";
        }
        else if (randomNum == 52 && available.includes("CWCG")) {
            feat = "Droid Hunter";
        }
        else if (randomNum == 53 && available.includes("CWCG") && skills.includes("Mechanics")) {
            feat = "Expert Droid Repair";
        }
        else if (randomNum == 54 && available.includes("CWCG")) {
            feat = "Flash and Clear";
        }
        if (feats.includes(feat) && feat != "Linguist" && feat != "Skill Training" ||
            feat == "Skill Focus (undefined)") {
            feat = "";
        }
        if (count2 == 500) {
            feat = "ValidScoutFeatNotFound";
        }
    }

    return feat;
}