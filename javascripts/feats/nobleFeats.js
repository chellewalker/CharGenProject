export function nobleFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel) {
    let feat = "";
    let count2 = 0;
    while (feat == "") {
        count2++;
        let randomNum = Math.floor(Math.random() * 51);
        if (randomNum == 0 && available.includes("CR")) {
            feat = "Armor Proficiency (Light)";
        }
        else if (randomNum == 1 && available.includes("CR") && skills.includes("Treat Injury")) {
            feat = "Cybernetic Surgery";
        }
        else if (randomNum == 2 && BAB >= 1) {
            let randomNum2 = Math.floor(Math.random() * 19);
                if (randomNum2 == 0 && available.includes("CR")) {
                    feat = "Exotic Weapon Proficiency (Atlatl)";
                }
                else if (randomNum2 == 1 && available.includes("LECG") && size != "Small") {
                    feat = "Exotic Weapon Proficiency (Amphistaff)";
                }
                else if (randomNum2 == 2 && available.includes("CR") && size != "Small") {
                    feat = "Exotic Weapon Proficiency (Cesta)";
                }
                else if (randomNum2 == 3 && available.includes("CR")) {
                    feat = "Exotic Weapon Proficiency (Flamethrower)";
                }
                else if (randomNum2 == 4 && available.includes("CR") && size != "Small") {
                    feat = "Exotic Weapon Proficiency (Bowcaster)";
                }
                else if (randomNum2 == 5 && available.includes("KotORCG") && size != "Small") {
                    feat = "Exotic Weapon Proficiency (Arg'garok)";
                }
                else if (randomNum2 == 6 && available.includes("KotORCG")) {
                    feat = "Exotic Weapon Proficiency (Fira)";
                }
                else if (randomNum2 == 7 && available.includes("KotORCG")) {
                    feat = "Exotic Weapon Proficiency (Shyarn)";
                }
                else if (randomNum2 == 8 && available.includes("KotORCG") && size != "Small") {
                    feat = "Exotic Weapon Proficiency (Zhaboka)";
                }
                else if (randomNum2 == 9 && available.includes("KotORCG")) {
                    feat = "Exotic Weapon Proficiency (Aurial Blaster)";
                }
                else if (randomNum2 == 10 && available.includes("KotORCG") && size != "Small") {
                    feat = "Exotic Weapon Proficiency (Massassi Lanvarok)";
                }
                else if (randomNum2 == 11 && available.includes("KotORCG")) {
                    feat = "Exotic Weapon Proficiency (Sith Lanvarok)";
                }
                else if (randomNum2 == 12 && available.includes("FUCG")) {
                    feat = "Exotic Weapon Proficiency (Felucian Skullblade)";
                }
                else if (randomNum2 == 13 && available.includes("FUCG")) {
                    feat = "Exotic Weapon Proficiency (Ryyk Blade)";
                }
                else if (randomNum2 == 14 && available.includes("SaV")) {
                    feat = "Exotic Weapon Proficiency (Deck Sweeper)";
                }
                else if (randomNum2 == 15 && available.includes("SaV")) {
                    feat = "Exotic Weapon Proficiency (Neural Inhibitor)";
                }
                else if (randomNum2 == 16 && available.includes("SaV")) {
                    feat = "Exotic Weapon Proficiency (Pulse Rifle)";
                }
                else if (randomNum2 == 17 && available.includes("CWCG")) {
                    feat = "Exotic Weapon Proficiency (Garrote)";
                }
                else if (randomNum2 == 18 && available.includes("CWCG")) {
                    feat = "Exotic Weapon Proficiency (Wrist Rocket Launcher)";
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
        else if (randomNum == 28 && available.includes("SotG") && skills.includes("Mechanics") ||
                    randomNum == 29 && available.includes("SotG") && skills.includes("Mechanics") ||
                    randomNum == 30 && available.includes("SotG") && skills.includes("Mechanics") ||
                    randomNum == 31 && available.includes("SotG") && skills.includes("Mechanics") ||
                    randomNum == 32 && available.includes("SotG") && skills.includes("Mechanics")) {
            feat = "Tech Specialist";
        }
        else if (randomNum == 33 && available.includes("KotORCG") && dex >= 13) {
            feat = "Flurry";
        }
        else if (randomNum == 34 && available.includes("KotORCG")) {
            feat = "Quick Skill";
        }
        else if (randomNum == 35 && available.includes("FUCG") && skills.includes("Perception")) {
            feat = "Informer";
        }
        else if (randomNum == 36 && available.includes("FUCG") && wis >= 13) {
            feat = "Rapport";
        }
        else if (randomNum == 37 && available.includes("FUCG") && skills.includes("Knowledge (Bureaucracy)") ||
                    randomNum == 37 && available.includes("FUCG") && skills.includes("Knowledge (Galactic Lore)") ||
                    randomNum == 37 && available.includes("FUCG") && skills.includes("Knowledge (Life Sciences)") ||
                    randomNum == 37 && available.includes("FUCG") && skills.includes("Knowledge (Physical Sciences)") ||
                    randomNum == 37 && available.includes("FUCG") && skills.includes("Knowledge (Social Sciences)") ||
                    randomNum == 37 && available.includes("FUCG") && skills.includes("Knowledge (Tactics)") ||
                    randomNum == 37 && available.includes("FUCG") && skills.includes("Knowledge (Technology)")) {
            feat = "Recall";
        }
        else if (randomNum == 38 && available.includes("SaV")) {
            feat = "Cornered";
        }
        else if (randomNum == 39 && available.includes("SaV") && skills.includes("Gather Information")) {
            feat = "Friends in Low Places";
        }
        else if (randomNum == 40 && available.includes("SaV") && feats.includes("Tech Specialist")) {
            feat = "Hasty Modification";
        }
        else if (randomNum == 41 && available.includes("SaV")) {
            feat = "Impulsive Flight";
        }
        else if (randomNum == 42 && available.includes("SaV") && feats.includes("Combat Reflexes")) {
            feat = "Opportunistic Retreat";
        }
        else if (randomNum == 43 && available.includes("SaV") && feats.includes("Tech Specialist")) {
            feat = "Signature Device";
        }
        else if (randomNum == 44 && available.includes("SaV") && feats.includes("Tech Specialist") && int >= 17 && curLevel >= 9) {
            feat = "Superior Tech";
        }
        else if (randomNum == 45 && available.includes("SaV") && feats.includes("Combat Reflexes")) {
            feat = "Tactical Advantage";
        }
        else if (randomNum == 46 && available.includes("SaV") && feats.includes("Rapid Strike")) {
            feat = "Wicked Strike";
        }
        else if (randomNum == 47 && available.includes("CWCG") && skills.includes("Treat Injury")) {
            feat = "Experienced Medic";
        }
        else if (randomNum == 48 && available.includes("CWCG")) {
            feat = "Leader of Droids";
        }
        else if (randomNum == 49 && available.includes("CWCG") && skills.includes("Perception")) {
            feat = "Unwavering Resolve";
        }
        else if (randomNum == 50 && available.includes("CWCG")) {
            feat = "Wary Defender";
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