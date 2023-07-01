export function scoundrelFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel) {
    let feat = "";
    let count2 = 0;
    while (feat == "") {
        count2++;
        let randomNum = Math.floor(Math.random() * 67);
        if (randomNum == 0 && available.includes("CR") && feats.includes("Point-Blank Shot") && feats.includes("Precise Shot") && BAB >= 4) {
            feat = "Deadeye";
        }
        else if (randomNum == 1 && available.includes("CR") && dex >= 13 ||
                    randomNum == 2 && available.includes("CR") && dex >= 13) {
            feat = "Dodge";
        }
        else if (randomNum == 3 && available.includes("CR") && int >= 13) {
            feat = "Melee Defense";
        }
        else if (randomNum == 4 && available.includes("CR") && feats.includes("Dodge") && dex >= 13) {
            feat = "Mobility";
        }
        else if (randomNum == 5 && available.includes("CR")) {
            feat = "Point-Blank Shot";
        }
        else if (randomNum == 6 && available.includes("CR") && feats.includes("Point-Blank Shot") ||
                    randomNum == 7 && available.includes("CR") && feats.includes("Point-Blank Shot") ||
                    randomNum == 8 && available.includes("CR") && feats.includes("Point-Blank Shot")) {
            feat = "Precise Shot";
        }
        else if (randomNum == 9 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 10 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 11 && available.includes("CR") && BAB >= 1) {
            feat = "Quick Draw";
        }
        else if (randomNum == 12 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 13 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 14 && available.includes("CR") && BAB >= 1) {
            feat = "Rapid Shot";
        }
        else if (randomNum == 15 && available.includes("CR") && dex >= 13) {
            feat = "Running Attack";
        }
        else if (randomNum == 16 && available.includes("CR") || 
                    randomNum == 17 && available.includes("CR") || 
                    randomNum == 18 && available.includes("CR") || 
                    randomNum == 19 && available.includes("CR") || 
                    randomNum == 20 && available.includes("CR") || 
                    randomNum == 21 && available.includes("CR") || 
                    randomNum == 22 && available.includes("CR")) {
                let randomNum2 = Math.floor(Math.random() * skills.length);
                feat = "Skill Focus ("+skills[randomNum2]+")";
        }
        else if (randomNum == 23 && available.includes("CR") || 
                    randomNum == 24 && available.includes("CR") || 
                    randomNum == 25 && available.includes("CR") || 
                    randomNum == 26 && available.includes("CR")) {
            feat = "Skill Training";
        }
        else if (randomNum == 27 && available.includes("CR") && skills.includes("Pilot") ||
                    randomNum == 28 && available.includes("CR") && skills.includes("Pilot") ||
                    randomNum == 29 && available.includes("CR") && skills.includes("Pilot") ||
                    randomNum == 30 && available.includes("CR") && skills.includes("Pilot") ||
                    randomNum == 31 && available.includes("CR") && skills.includes("Pilot") ||
                    randomNum == 32 && available.includes("CR") && skills.includes("Pilot")) {
            feat = "Vehicular Combat";
        }
        else if (randomNum == 33 || randomNum == 34 || randomNum == 35) {
            if (count2 % 2 == 0) {
            feat = "Weapon Proficiency (Advanced Melee Weapons)";
        }}
        else if (randomNum == 36) {
            feat = "Weapon Proficiency (Pistols)";
        }
        else if (randomNum == 37 && available.includes("SotG") && skills.includes("Mechanics") ||
                    randomNum == 38 && available.includes("SotG") && skills.includes("Mechanics") ||
                    randomNum == 39 && available.includes("SotG") && skills.includes("Mechanics") ||
                    randomNum == 40 && available.includes("SotG") && skills.includes("Mechanics") ||
                    randomNum == 41 && available.includes("SotG") && skills.includes("Mechanics")) {
            feat = "Tech Specialist";
        }
        else if (randomNum == 42 && available.includes("KotORCG")) {
            feat = "Gearhead";
        }
        else if (randomNum == 43 && available.includes("KotORCG")) {
            feat = "Implant Training";
        }
        else if (randomNum == 44 && available.includes("KotORCG") && con >= 13) {
            feat = "Poison Resistance";
        }
        else if (randomNum == 45 && available.includes("KotORCG")) {
            feat = "Quick Skill";
        }
        else if (randomNum == 46 && available.includes("KotORCG")) {
            feat = "Sniper Shot";
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
        else if (randomNum == 50 && available.includes("FUCG") && feats.includes("Precise Shot") && BAB >= 6) {
            feat = "Crossfire";
        }
        else if (randomNum == 51 && available.includes("FUCG")) {
            feat = "Scavenger";
        }
        else if (randomNum == 52 && available.includes("SaV") && skills.includes("Endurance")) {
            feat = "Burst of Speed";
        }
        else if (randomNum == 53 && available.includes("SaV") && skills.includes("Acrobatics")) {
            feat = "Close Combat Escape";
        }
        else if (randomNum == 54 && available.includes("SaV") && feats.includes("Rapid Shot") && BAB >= 6) {
            feat = "Collateral Damage";
        }
        else if (randomNum == 55 && available.includes("SaV")) {
            feat = "Cornered";
        }
        else if (randomNum == 56 && available.includes("SaV") && skills.includes("Initiative")) {
            feat = "Deceptive Drop";
        }
        else if (randomNum == 57 && available.includes("SaV")) {
            feat = "Desperate Gambit";
        }
        else if (randomNum == 58 && available.includes("SaV") && skills.includes("Stealth")) {
            feat = "Duck and Cover";
        }
        else if (randomNum == 59 && available.includes("SaV") && feats.includes("Running Attack")) {
            feat = "Fleet-Footed";
        }
        else if (randomNum == 60 && available.includes("SaV") && skills.includes("Gather Information")) {
            feat = "Friends in Low Places";
        }
        else if (randomNum == 61 && available.includes("SaV") && feats.includes("Tech Specialist")) {
            feat = "Hasty Modification";
        }
        else if (randomNum == 62 && available.includes("SaV")) {
            feat = "Impulsive Flight";
        }
        else if (randomNum == 63 && available.includes("SaV") && skills.includes("Stealth") && feats.includes("Lightning Draw")) {
            feat = "Knife Trick";
        }
        else if (randomNum == 64 && available.includes("SaV") && feats.includes("Quick Draw")) {
            feat = "Lightning Draw";
        }
        else if (randomNum == 65 && available.includes("SaV") && feats.includes("Tech Specialist")) {
            feat = "Signature Device";
        }
        else if (randomNum == 66 && available.includes("SaV") && feats.includes("Tech Specialist") && int >= 17 && curLevel >= 9) {
            feat = "Superior Tech";
        }
        if (feats.includes(feat) && feat != "Linguist" && feat != "Skill Training" ||
            feat == "Skill Focus (undefined)") {
            feat = "";
        }
        if (count2 == 500) {
            feat = "ValidScoundrelFeatNotFound";
        }
    }

    return feat;
}