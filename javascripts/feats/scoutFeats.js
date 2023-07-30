export function scoutFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel) {
    let feat = "";
    let count2 = 0;
    while (feat == "") {
        count2++;
        let randomNum = Math.floor(Math.random() * 95);
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
        else if (randomNum == 55 && available.includes("LECG") && BAB >= 3) {
            feat = "Attack Combo (Ranged)";
        }
        else if (randomNum == 56 && available.includes("LECG") && str >= 13 && dex >= 13) {
            feat = "Fatal Hit";
        }
        else if (randomNum == 57 && available.includes("LECG") && str >= 15) {
            feat = "Feat of Strength";
        }
        else if (randomNum == 58 && available.includes("LECG")) {
            feat = "Grapple Resistance";
        }
        else if (randomNum == 59 && available.includes("LECG") && dex >= 15 && feats.includes("Quick Draw")) {
            let check = 0;
            let count = 0;
            while (check == 0 && count < 20) {
                count++;
                let randomNum = Math.floor(Math.random() * 2);
                if (randomNum == 0 && feats.includes("Weapon Proficiency (Pistols)")) {
                    feat = "Return Fire (Pistols)";
                    check = 1;
                }
                else if (randomNum == 1 && feats.includes("Weapon Proficiency (Rifles)")) {
                    feat = "Return Fire (Rifles)";
                    check = 1;
                }
            }
        }
        else if (randomNum == 60 && available.includes("LECG") && feats.includes("Tech Specialist") && skills.includes("Mechanics")) {
            feat = "Vehicle Systems Expertise";
        }
        else if (randomNum == 61 && available.includes("RECG")) {
            feat = "Deft Charge";
        }
        else if (randomNum == 62 && available.includes("RECG")) {
            feat = "Fast Surge";
        }
        else if (randomNum == 63 && available.includes("RECG") && feats.includes("Dodge")) {
            feat = "Moving Target";
        }
        else if (randomNum == 64 && available.includes("RECG") && feats.includes("Point-Blank Shot")) {
            feat = "Prime Shot";
        }
        else if (randomNum == 65 && available.includes("RECG")) {
            feat = "Rapid Reaction";
        }
        else if (randomNum == 66 && available.includes("RECG") && feats.includes("Running Attack")) {
            feat = "Rebel Military Training";
        }
        else if (randomNum == 67 && available.includes("RECG")) {
            feat = "Recovering Surge";
        }
        else if (randomNum == 68 && available.includes("RECG") && skills.includes("Pilot")) {
            feat = "Vehicular Surge";
        }
        else if (randomNum == 69 && available.includes("GaW")) {
            feat = "Destructive Force";
        }
        else if (randomNum == 70 && available.includes("GaW")) {
            feat = "Disabler";
        }
        else if (randomNum == 71 && available.includes("GaW") && skills.includes("Jump")) {
            feat = "Dive for Cover";
        }
        else if (randomNum == 72 && available.includes("GaW") && BAB >= 1) {
            feat = "Forceful Blast";
        }
        else if (randomNum == 73 && available.includes("GaW") && con >= 13) {
            feat = "Fortifying Recovery";
        }
        else if (randomNum == 74 && available.includes("GaW")) {
            let randomNum2 = Math.floor(Math.random() * skills.length);
            feat = "Mission Specialist ("+skills[randomNum2]+")";
        }
        else if (randomNum == 75 && available.includes("GaW") && skills.includes("Endurance")) {
            feat = "Never Surrender";
        }
        else if (randomNum == 76 && available.includes("GaW")) {
            feat = "Opportunistic Shooter";
        }
        else if (randomNum == 77 && available.includes("GaW") && feats.includes("Weapon Proficiency (Pistols)")) {
            feat = "Pistoleer";
        }
        else if (randomNum == 78 && available.includes("GaW") && str >= 13) {
            feat = "Resilient Strength";
        }
        else if (randomNum == 79 && available.includes("GaW") && feats.includes("Weapon Proficiency (Rifles)")) {
            feat = "Riflemaster";
        }
        else if (randomNum == 80 && available.includes("GaW") && skills.includes("Climb") ||
                    randomNum == 80 && available.includes("GaW") && skills.includes("Jump")) {
            feat = "Risk Taker";
        }
        else if (randomNum == 81 && available.includes("GaW") && feats.includes("Weapon Proficiency (Pistols)") ||
                    randomNum == 81 && available.includes("GaW") && feats.includes("Weapon Proficiency (Rifles)")) {
            feat = "Sport Hunter";
        }
        else if (randomNum == 82 && available.includes("GaW") && feats.includes("Careful Shot")) {
            feat = "Steadying Position";
        }
        else if (randomNum == 83 && available.includes("GoI") && feats.includes("Point-Blank Shot")) {
            feat = "Grazing Shot";
        }
        else if (randomNum == 84 && available.includes("GoI") && talents.includes("Sneak Attack") ||
                    randomNum == 84 && available.includes("GoI") && feats.includes("Rapid Shot") ||
                    randomNum == 84 && available.includes("GoI") && feats.includes("Rapid Strike")) {
            feat = "Hobbling Strike";
        }
        else if (randomNum == 85 && available.includes("GoI") && BAB >= 4 && feats.includes("Precise Shot")) {
            feat = "Meat Shield";
        }
        else if (randomNum == 86 && available.includes("GoI")) {
            feat = "Stand Tall";
        }
        else if (randomNum == 87 && available.includes("UR") && skills.includes("Mechanics")) {
            feat = "Hold Together";
        }
        else if (randomNum == 88 && available.includes("UR") && skills.includes("Use Computer")) {
            feat = "Hyperblazer";
        }
        else if (randomNum == 89 && available.includes("UR")) {
            feat = "Improvised Weapon Mastery";
        }
        else if (randomNum == 90 && available.includes("UR")) {
            feat = "Maniacal Charge";
        }
        else if (randomNum == 91 && available.includes("UR") && skills.includes("Ride")) {
            feat = "Mounted Combat";
        }
        else if (randomNum == 92 && available.includes("UR") && BAB >= 5) {
            feat = "Targeted Area";
        }
        else if (randomNum == 93 && available.includes("UR") && skills.includes("Ride")) {
            feat = "Trample";
        }
        else if (randomNum == 94 && available.includes("UR") && skills.includes("Survival")) {
            feat = "Wilderness First Aid";
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