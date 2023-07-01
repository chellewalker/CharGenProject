export function characterFeat(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel) {
    let feat = "";
    let count2 = 0;
    let randomNumForce = Math.floor(Math.random() * 2);
    if (randomNumForce == 0 && skills.includes("Use the Force") && feats.includes("Force Sensitivity")) {
        feat = "Force Training";
    }
    let randomNumStarship = Math.floor(Math.random() * 4);
    if (randomNumStarship == 0 && available.includes("SotG") && feats.includes("Vehicular Combat") && skills.includes("Pilot")) {
        feat = "Starship Tactics";
    }
    while (feat == "") {
        count2++;
        let randomNum = Math.floor(Math.random() * 312);
        if (randomNum == 0 && available.includes("CR") && skills.includes("Acrobatics")) {
            feat = "Acrobatic Strike";
        }
        else if (randomNum == 1 && available.includes("CR")) {
            feat = "Armor Proficiency (Light)";
        }
        else if (randomNum == 2 && available.includes("CR") && feats.includes("Armor Proficiency (Light)")) {
            feat = "Armor Proficiency (Medium)";
        }
        else if (randomNum == 3 && available.includes("CR") && skills.includes("Armor Proficiency (Medium)")) {
            feat = "Armor Proficiency (Heavy)";
        }
        else if (randomNum == 4 && available.includes("CR") && str > 12 && BAB >= 1) {
            feat = "Bantha Rush";
        }
        else if (randomNum == 5 && available.includes("CR") && feats.includes("Weapon Proficiency (Heavy Weapons)") ||
                    randomNum == 5 && available.includes("CR") && feats.includes("Vehicular Combat") ||
                    randomNum == 5 && available.includes("CR") && talents.includes("Spacehound") ||
                    randomNum == 6 && available.includes("CR") && feats.includes("Weapon Proficiency (Heavy Weapons)") ||
                    randomNum == 6 && available.includes("CR") && feats.includes("Vehicular Combat") ||
                    randomNum == 6 && available.includes("CR") && talents.includes("Spacehound") ||
                    randomNum == 7 && available.includes("CR") && feats.includes("Weapon Proficiency (Heavy Weapons)") ||
                    randomNum == 7 && available.includes("CR") && feats.includes("Vehicular Combat") ||
                    randomNum == 7 && available.includes("CR") && talents.includes("Spacehound")) {
            feat = "Burst Fire";
        }
        else if (randomNum == 8 && available.includes("CR") && feats.includes("Point-Blank Shot") && BAB >= 2 ||
                    randomNum == 9 && available.includes("CR") && feats.includes("Point-Blank Shot") && BAB >= 2 ||
                    randomNum == 10 && available.includes("CR") && feats.includes("Point-Blank Shot") && BAB >= 2) {
            feat = "Careful Shot";
        }
        else if (randomNum == 11 && available.includes("CR") && BAB >= 4) {
            feat = "Charging Fire";
        }
        else if (randomNum == 12 && available.includes("CR") && feats.includes("Power Attack") && str >= 13) {
            feat = "Cleave";
        }
        else if (randomNum == 13 && available.includes("CR") ||
                    randomNum == 14 && available.includes("CR") ||
                    randomNum == 15 && available.includes("CR") ||
                    randomNum == 16 && available.includes("CR") ||
                    randomNum == 17 && available.includes("CR")) {
            feat = "Combat Reflexes";
        }
        else if (randomNum == 18 && available.includes("CR") && BAB >= 2 ||
                    randomNum == 19 && available.includes("CR") && BAB >= 2 ||
                    randomNum == 20 && available.includes("CR") && BAB >= 2 ||
                    randomNum == 21 && available.includes("CR") && BAB >= 2) {
            feat = "Coordinated Attack";
        }
        else if (randomNum == 22 && available.includes("CR") && feats.includes("Pin") && BAB >= 1) {
            feat = "Crush";
        }
        else if (randomNum == 23 && available.includes("CR") && skills.includes("Treat Injury")) {
            feat = "Cybernetic Surgery";
        }
        else if (randomNum == 24 && available.includes("CR") && feats.includes("Point-Blank Shot") && feats.includes("Precise Shot") && BAB >= 4) {
            feat = "Deadeye";
        }
        else if (randomNum == 25 && available.includes("CR") && dex >= 13 ||
                    randomNum == 26 && available.includes("CR") && dex >= 13 ||
                    randomNum == 27 && available.includes("CR") && dex >= 13 ||
                    randomNum == 28 && available.includes("CR") && dex >= 13 ||
                    randomNum == 29 && available.includes("CR") && dex >= 13) {
            feat = "Dodge";
        }
        else if (randomNum == 30 && available.includes("CR") && BAB >= 6 ||
                    randomNum == 31 && available.includes("CR") && BAB >= 6 ||
                    randomNum == 32 && available.includes("CR") && BAB >= 6 ||
                    randomNum == 33 && available.includes("CR") && BAB >= 6 ||
                    randomNum == 34 && available.includes("CR") && BAB >= 6) {
            let check = 0;
            let count = 0;
            while (check == 0 && count < 20) {
                let randomNum = Math.floor(Math.random() * 6);
                if (randomNum == 0 && feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
                    feat = "Double Attack (Advanced Melee Weapons)";
                    check = 1;
                }
                else if (randomNum == 1 && feats.includes("Weapon Proficiency (Heavy Weapons)")) {
                    feat = "Double Attack (Heavy Weapons)";
                    check = 1;
                }
                else if (randomNum == 2 && feats.includes("Weapon Proficiency (Lightsabers)")) {
                    feat = "Double Attack (Lightsabers)";
                    check = 1;
                }
                else if (randomNum == 3 && feats.includes("Weapon Proficiency (Pistols)")) {
                    feat = "Double Attack (Pistols)";
                    check = 1;
                }
                else if (randomNum == 4 && feats.includes("Weapon Proficiency (Rifles)")) {
                    feat = "Double Attack (Rifles)";
                    check = 1;
                }
                else if (randomNum == 5 && feats.includes("Weapon Proficiency (Simple Weapons)")) {
                    feat = "Double Attack (Simple Weapons)";
                    check = 1;
                }
            }
        }
        else if (randomNum == 35 && available.includes("CR") && speciesTraits.includes("Rage") && BAB >= 1) {
            feat = "Dreadful Rage";
        }
        else if (randomNum == 36 && available.includes("CR") && dex >= 13 && BAB >= 1) {
            feat = "Dual Weapon Mastery I";
        }
        else if (randomNum == 37 && available.includes("CR") && feats.includes("Dual Weapon Mastery I") && dex >= 15 && BAB >= 6) {
            feat = "Dual Weapon Mastery II";
        }
        else if (randomNum == 38 && available.includes("CR") && feats.includes("Dual Weapon Mastery II") && dex >= 17 && BAB >= 11) {
            feat = "Dual Weapon Mastery III";
        }
        else if (randomNum == 39 && BAB >= 1) {
            let randomNum2 = Math.floor(Math.random() * 17);
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
        }
        else if (randomNum == 40 && available.includes("CR") && speciesTraits.includes("Rage")) {
            feat = "Extra Rage";
        }
        else if (randomNum == 41 && available.includes("CR") && skills.includes("Endurance") ||
                    randomNum == 42 && available.includes("CR") && skills.includes("Endurance") ||
                    randomNum == 43 && available.includes("CR") && skills.includes("Endurance")) {
            feat = "Extra Second Wind";
        }
        else if (randomNum == 44 && available.includes("CR") && feats.includes("Point-Blank Shot") ||
                    randomNum == 45 && available.includes("CR") && feats.includes("Point-Blank Shot") ||
                    randomNum == 46 && available.includes("CR") && feats.includes("Point-Blank Shot")) {
            feat = "Far Shot";
        }
        else if (randomNum == 47 && available.includes("CR") && feats.includes("Force Sensitivity")) {
            feat = "Force Boon";
        }
        else if (randomNum == 48 && available.includes("CR")) {
            if (speciesTraits.includes("Force Blind")) {
            }
            else {
                feat = "Force Sensitivity";
            }
        }
        else if (randomNum == 49  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 50  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 51  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 52  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 53  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 54  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 55  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 56  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 57  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 179  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 180  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 181  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 182  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 183  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 184  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 185  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 186  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 187  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 188  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 189  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 190  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 191  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 192  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 193  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 194  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 195  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 196  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 197  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 198  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 199  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 200  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 201  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 202  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 203  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 204  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 205  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 206  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 207  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 208  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 209  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 210  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 211  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 212  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 213  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 214  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 215  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 216  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 217  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 218  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 219  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 220  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 221  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 222  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 223  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 224  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 225  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 226  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 227  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 228  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 229  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 230  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 231  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 232  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 233  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 234  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 235  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 236  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 237  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 238  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 239  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 240  && skills.includes("Use the Force") && feats.includes("Force Sensitivity") ||
                    randomNum == 241  && skills.includes("Use the Force") && feats.includes("Force Sensitivity")) {
            feat = "Force Training";
        }
        else if (randomNum == 58 && available.includes("CR")  && feats.includes("Power Attack")  && feats.includes("Cleave") && str >= 13 && BAB >= 4) {
            feat = "Great Cleave";
        }
        else if (randomNum == 59 && available.includes("CR")  && feats.includes("Dodge")  && feats.includes("Mobility") && dex >= 13 ||
                    randomNum == 60 && available.includes("CR")  && feats.includes("Dodge")  && feats.includes("Mobility") && dex >= 13 ||
                    randomNum == 61 && available.includes("CR")  && feats.includes("Dodge")  && feats.includes("Mobility") && dex >= 13) {
            feat = "Improved Charge";
        }
        else if (randomNum == 62 && available.includes("CR") ||
                    randomNum == 63 && available.includes("CR") ||
                    randomNum == 64 && available.includes("CR") ||
                    randomNum == 65 && available.includes("CR") ||
                    randomNum == 66 && available.includes("CR")) {
            feat = "Improved Defenses";
        }
        else if (randomNum == 67 && available.includes("CR")  && feats.includes("Melee Defense") && int >= 13 ||
                    randomNum == 68 && available.includes("CR")  && feats.includes("Melee Defense") && int >= 13 ||
                    randomNum == 69 && available.includes("CR")  && feats.includes("Melee Defense") && int >= 13) {
            feat = "Improved Disarm";
        }
        else if (randomNum == 70 && available.includes("CR") ||
                    randomNum == 71 && available.includes("CR") ||
                    randomNum == 72 && available.includes("CR") ||
                    randomNum == 73 && available.includes("CR") ||
                    randomNum == 74 && available.includes("CR")) {
            feat = "Improved Damage Threshold";
        }
        else if (randomNum == 75 && available.includes("CR") && int >= 13) {
            feat = "Linguist";
        }
        else if (randomNum == 76 && available.includes("CR") ||
                    randomNum == 77 && available.includes("CR") ||
                    randomNum == 78 && available.includes("CR")) {
            feat = "Martial Arts I";
        }
        else if (randomNum == 79 && available.includes("CR")  && feats.includes("Martial Arts I") && BAB >= 3) {
            feat = "Martial Arts II";
        }
        else if (randomNum == 80 && available.includes("CR")  && feats.includes("Martial Arts I") && feats.includes("Martial Arts II") && BAB >= 6) {
            feat = "Martial Arts III";
        }
        else if (randomNum == 81 && available.includes("CR") && int >= 13 ||
                    randomNum == 82 && available.includes("CR") && int >= 13 ||
                    randomNum == 83 && available.includes("CR") && int >= 13) {
            feat = "Melee Defense";
        }
        else if (randomNum == 84 && available.includes("CR") && str >= 13) {
            feat = "Mighty Swing";
        }
        else if (randomNum == 85 && available.includes("CR") && feats.includes("Dodge") && dex >= 13 ||
                    randomNum == 86 && available.includes("CR") && feats.includes("Dodge") && dex >= 13 ||
                    randomNum == 87 && available.includes("CR") && feats.includes("Dodge") && dex >= 13 ||
                    randomNum == 88 && available.includes("CR") && feats.includes("Dodge") && dex >= 13) {
            feat = "Mobility";
        }
        else if (randomNum == 89 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 90 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 91 && available.includes("CR") && BAB >= 1) {
            feat = "Pin";
        }
        else if (randomNum == 92 && available.includes("CR") ||
                    randomNum == 93 && available.includes("CR") ||
                    randomNum == 94 && available.includes("CR") ||
                    randomNum == 95 && available.includes("CR") ||
                    randomNum == 96 && available.includes("CR")) {
            feat = "Point-Blank Shot";
        }
        else if (randomNum == 97 && available.includes("CR") && str >= 13 ||
                    randomNum == 98 && available.includes("CR") && str >= 13 ||
                    randomNum == 99 && available.includes("CR") && str >= 13) {
            feat = "Power Attack";
        }
        else if (randomNum == 100 && available.includes("CR") && BAB >= 1 && size != "Small") {
            feat = "Powerful Charge";
        }
        else if (randomNum == 101 && available.includes("CR") && feats.includes("Point-Blank Shot") ||
                    randomNum == 102 && available.includes("CR") && feats.includes("Point-Blank Shot") ||
                    randomNum == 103 && available.includes("CR") && feats.includes("Point-Blank Shot") ||
                    randomNum == 104 && available.includes("CR") && feats.includes("Point-Blank Shot")) {
            feat = "Precise Shot";
        }
        else if (randomNum == 105 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 106 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 107 && available.includes("CR") && BAB >= 1) {
            feat = "Quick Draw";
        }
        else if (randomNum == 108 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 109 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 110 && available.includes("CR") && BAB >= 1) {
            feat = "Rapid Shot";
        }
        else if (randomNum == 111 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 112 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 113 && available.includes("CR") && BAB >= 1) {
            feat = "Rapid Strike";
        }
        else if (randomNum == 114 && available.includes("CR") && dex >= 13 ||
                    randomNum == 115 && available.includes("CR") && dex >= 13 ||
                    randomNum == 116 && available.includes("CR") && dex >= 13 ||
                    randomNum == 117 && available.includes("CR") && dex >= 13 ||
                    randomNum == 118 && available.includes("CR") && dex >= 13) {
            feat = "Running Attack";
        }
        else if (randomNum == 119 && available.includes("CR") && con >= 13 && skills.includes("Endurance")) {
            feat = "Shake It Off";
        }
        else if (randomNum == 120 && available.includes("CR") || 
                    randomNum == 121 && available.includes("CR") || 
                    randomNum == 122 && available.includes("CR") || 
                    randomNum == 123 && available.includes("CR") || 
                    randomNum == 124 && available.includes("CR") || 
                    randomNum == 125 && available.includes("CR") || 
                    randomNum == 126 && available.includes("CR")) {
                let randomNum2 = Math.floor(Math.random() * skills.length);
                feat = "Skill Focus ("+skills[randomNum2]+")";
        }
        else if (randomNum == 127 && available.includes("CR") || 
                    randomNum == 128 && available.includes("CR") || 
                    randomNum == 129 && available.includes("CR") || 
                    randomNum == 130 && available.includes("CR")) {
            feat = "Skill Training";
        }
        else if (randomNum == 131 && available.includes("CR") && feats.includes("Point-Blank Shot") && feats.includes("Precise Shot") && BAB >= 4) {
            feat = "Sniper";
        }
        else if (randomNum == 132 && available.includes("CR")) {
            feat = "Strong in the Force";
        }
        else if (randomNum == 133 && available.includes("CR") && skills.includes("Treat Injury")) {
            feat = "Surgical Expertise";
        }
        else if (randomNum == 134 && available.includes("CR") && feats.includes("Trip") && BAB >= 1) {
            feat = "Throw";
        }
        else if (randomNum == 135 && available.includes("CR") ||
                    randomNum == 136 && available.includes("CR") ||
                    randomNum == 137 && available.includes("CR")) {
            feat = "Toughness";
        }
        else if (randomNum == 138 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 139 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 140 && available.includes("CR") && BAB >= 1) {
            feat = "Trip";
        }
        else if (randomNum == 141 && available.includes("CR") && feats.includes("Double Attack (Advanced Melee Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Advanced Melee Weapons)";
        }
        else if (randomNum == 141 && available.includes("CR") && feats.includes("Double Attack (Heavy Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Heavy Weapons)";
        }
        else if (randomNum == 141 && available.includes("CR") && feats.includes("Double Attack (Lightsabers)") && BAB >= 11) {
            feat = "Triple Attack (Lightsabers)";
        }
        else if (randomNum == 141 && available.includes("CR") && feats.includes("Double Attack (Pistols)") && BAB >= 11) {
            feat = "Triple Attack (Pistols)";
        }
        else if (randomNum == 141 && available.includes("CR") && feats.includes("Double Attack (Rifles)") && BAB >= 11) {
            feat = "Triple Attack (Rifles)";
        }
        else if (randomNum == 141 && available.includes("CR") && feats.includes("Double Attack (Simple Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Simple Weapons)";
        }
        else if (randomNum == 142 && available.includes("CR") && BAB >= 8) {
            let check = 0;
            let count = 0;
            while (check == 0 && count < 20) {
                let randomNum = Math.floor(Math.random() * 6);
                if (randomNum == 0 && feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
                    feat = "Triple Crit (Advanced Melee Weapons)";
                    check = 1;
                }
                else if (randomNum == 1 && feats.includes("Weapon Proficiency (Heavy Weapons)")) {
                    feat = "Triple Crit (Heavy Weapons)";
                    check = 1;
                }
                else if (randomNum == 2 && feats.includes("Weapon Proficiency (Lightsabers)")) {
                    feat = "Triple Crit (Lightsabers)";
                    check = 1;
                }
                else if (randomNum == 3 && feats.includes("Weapon Proficiency (Pistols)")) {
                    feat = "Triple Crit (Pistols)";
                    check = 1;
                }
                else if (randomNum == 4 && feats.includes("Weapon Proficiency (Rifles)")) {
                    feat = "Triple Crit (Rifles)";
                    check = 1;
                }
                else if (randomNum == 5 && feats.includes("Weapon Proficiency (Simple Weapons)")) {
                    feat = "Triple Crit (Simple Weapons)";
                    check = 1;
                }
            }
        }
        else if (randomNum == 143 && available.includes("CR") && skills.includes("Pilot") ||
                    randomNum == 144 && available.includes("CR") && skills.includes("Pilot") ||
                    randomNum == 145 && available.includes("CR") && skills.includes("Pilot")) {
            feat = "Vehicular Combat";
        }
        else if (randomNum == 146 && available.includes("CR") && BAB >= 1 && dex >= str ||
                    randomNum == 147 && available.includes("CR") && BAB >= 1 && dex >= str ||
                    randomNum == 148 && available.includes("CR") && BAB >= 1 && dex >= str) {
            feat = "Weapon Finesse";
        }
        else if (randomNum == 149 && available.includes("CR") ||
                    randomNum == 150 && available.includes("CR") ||
                    randomNum == 151 && available.includes("CR") ||
                    randomNum == 152 && available.includes("CR") ||
                    randomNum == 153 && available.includes("CR")) {
            let check = 0;
            let count = 0;
            while (check == 0 && count < 20) {
                let randomNum = Math.floor(Math.random() * 6);
                if (randomNum == 0 && feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
                    feat = "Weapon Focus (Advanced Melee Weapons)";
                    check = 1;
                }
                else if (randomNum == 1 && feats.includes("Weapon Proficiency (Heavy Weapons)")) {
                    feat = "Weapon Focus (Heavy Weapons)";
                    check = 1;
                }
                else if (randomNum == 2 && feats.includes("Weapon Proficiency (Lightsabers)")) {
                    feat = "Weapon Focus (Lightsabers)";
                    check = 1;
                }
                else if (randomNum == 3 && feats.includes("Weapon Proficiency (Pistols)")) {
                    feat = "Weapon Focus (Pistols)";
                    check = 1;
                }
                else if (randomNum == 4 && feats.includes("Weapon Proficiency (Rifles)")) {
                    feat = "Weapon Focus (Rifles)";
                    check = 1;
                }
                else if (randomNum == 5 && feats.includes("Weapon Proficiency (Simple Weapons)")) {
                    feat = "Weapon Focus (Simple Weapons)";
                    check = 1;
                }
            }
        }
        else if (randomNum == 154) {
            feat = "Weapon Proficiency (Advanced Melee Weapons)";
        }
        else if (randomNum == 155 || randomNum == 156 || randomNum == 157
            || randomNum == 158) {
            feat = "Weapon Proficiency (Heavy Weapons)";
        }
        else if (randomNum == 159) {
            feat = "Weapon Proficiency (Lightsabers)";
        }
        else if (randomNum == 160) {
            feat = "Weapon Proficiency (Pistols)";
        }
        else if (randomNum == 161) {
            feat = "Weapon Proficiency (Rifles)";
        }
        else if (randomNum == 162 && available.includes("CR") && feats.includes("Melee Defense") 
                    && BAB >= 4 && dex >= 13 && int >= 13) {
            feat = "Whirlwind Attack";
        }
        else if (randomNum == 163 && available.includes("SotG") && feats.includes("Tech Specialist") && skills.includes("Mechanics")) {
            feat = "Starship Designer";
        }
        else if (randomNum == 164 && available.includes("SotG") && feats.includes("Vehicular Combat") && skills.includes("Pilot") ||
                    randomNum == 165 && available.includes("SotG") && feats.includes("Vehicular Combat") && skills.includes("Pilot") ||
                    randomNum == 166 && available.includes("SotG") && feats.includes("Vehicular Combat") && skills.includes("Pilot") ||
                    randomNum == 167 && available.includes("SotG") && feats.includes("Vehicular Combat") && skills.includes("Pilot") ||
                    randomNum == 168 && available.includes("SotG") && feats.includes("Vehicular Combat") && skills.includes("Pilot") ||
                    randomNum == 261 && available.includes("SotG") && feats.includes("Vehicular Combat") && skills.includes("Pilot") ||
                    randomNum == 262 && available.includes("SotG") && feats.includes("Vehicular Combat") && skills.includes("Pilot") ||
                    randomNum == 263 && available.includes("SotG") && feats.includes("Vehicular Combat") && skills.includes("Pilot") ||
                    randomNum == 264 && available.includes("SotG") && feats.includes("Vehicular Combat") && skills.includes("Pilot") ||
                    randomNum == 265 && available.includes("SotG") && feats.includes("Vehicular Combat") && skills.includes("Pilot")) {
            feat = "Starship Tactics";
        }
        else if (randomNum == 169 && available.includes("SotG") && feats.includes("Starship Tactics") && feats.includes("Tech Specialist") && skills.includes("Mechanics")) {
            feat = "Tactical Genius";
        }
        else if (randomNum == 170 && available.includes("SotG") && skills.includes("Mechanics") ||
                    randomNum == 171 && available.includes("SotG") && skills.includes("Mechanics") ||
                    randomNum == 172 && available.includes("SotG") && skills.includes("Mechanics") ||
                    randomNum == 173 && available.includes("SotG") && skills.includes("Mechanics") ||
                    randomNum == 174 && available.includes("SotG") && skills.includes("Mechanics")) {
            feat = "Tech Specialist";
        }
        else if (randomNum == 175 && available.includes("TotG") && feats.includes("Dodge") && feats.includes("Vehicular Combat")) {
            feat = "A Few Maneuvers";
        }
        else if (randomNum == 176 && available.includes("TotG") && skills.includes("Pilot") ||
                    randomNum == 176 && available.includes("TotG") && skills.includes("Ride")) {
            feat = "Momentum Strike";
        }
        else if (randomNum == 177 && available.includes("TotG") && skills.includes("Pilot") ||
                    randomNum == 177 && available.includes("TotG") && skills.includes("Ride")) {
            feat = "Mounted Defense";
        }
        else if (randomNum == 178 && available.includes("TotG") && str >= 13 && feats.includes("Burst Fire") && feats.includes("Weapon Proficiency (Heavy Weapons)")) {
            feat = "Suppression Fire";
        }
        else if (randomNum == 242 && available.includes("KotORCG") && BAB >= 6) {
            feat = "Accelerated Strike";
        }
        else if (randomNum == 243 && available.includes("KotORCG") && str >= 13 && con >= 13) {
            feat = "Conditioning";
        }
        else if (randomNum == 244 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Advanced Melee Weapons)") ||
                    randomNum == 244 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Heavy Weapons)") ||
                    randomNum == 244 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Lightsabers)") ||
                    randomNum == 244 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Pistols)") ||
                    randomNum == 244 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Rifles)") ||
                    randomNum == 244 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Simple Weapons)")) {
            feat = "Critical Strike";
        }
        else if (randomNum == 245 && available.includes("KotORCG") && feats.includes("Martial Arts I") && dex >= 13) {
            feat = "Echani Training";
        }
        else if (randomNum == 246 && available.includes("KotORCG") && dex >= 13) {
            feat = "Flurry";
        }
        else if (randomNum == 247 && available.includes("KotORCG")) {
            feat = "Force Readiness";
        }
        else if (randomNum == 248 && available.includes("KotORCG")) {
            feat = "Gearhead";
        }
        else if (randomNum == 249 && available.includes("KotORCG")) {
            feat = "Implant Training";
        }
        else if (randomNum == 250 && available.includes("KotORCG") && feats.includes("Rapid Strike")) {
            feat = "Improved Rapid Strike";
        }
        else if (randomNum == 251 && available.includes("KotORCG") && feats.includes("Conditioning")) {
            feat = "Increased Agility";
        }
        else if (randomNum == 252 && available.includes("KotORCG") && feats.includes("Charging Fire")) {
            feat = "Mandalorian Training";
        }
        else if (randomNum == 253 && available.includes("KotORCG") && con >= 13) {
            feat = "Poison Resistance";
        }
        else if (randomNum == 254 && available.includes("KotORCG") && dex >= 13) {
            feat = "Power Blast";
        }
        else if (randomNum == 255 && available.includes("KotORCG")) {
            feat = "Quick Skill";
        }
        else if (randomNum == 256 && available.includes("KotORCG")) {
            feat = "Republic Military Training";
        }
        else if (randomNum == 257 && available.includes("KotORCG")) {
            feat = "Sith Military Training";
        }
        else if (randomNum == 258 && available.includes("KotORCG")) {
            feat = "Sniper Shot";
        }
        else if (randomNum == 259 && available.includes("KotORCG")) {
            feat = "Tumble Defense";
        }
        else if (randomNum == 260 && available.includes("KotORCG")) {
            feat = "Withdrawal Strike";
        }
        else if (randomNum == 266 && available.includes("FUCG") && BAB >= 1) {
            feat = "Advantageous Attack";
        }
        else if (randomNum == 267 && available.includes("FUCG") && skills.includes("Stealth")) {
            feat = "Advantageous Cover";
        }
        else if (randomNum == 268 && available.includes("FUCG") && dex >= 13) {
            feat = "Angled Throw";
        }
        else if (randomNum == 269 && available.includes("FUCG")) {
            feat = "Bad Feeling";
        }
        else if (randomNum == 270 && available.includes("FUCG") && feats.includes("Coordinated Attack")) {
            feat = "Blaster Barrage";
        }
        else if (randomNum == 271 && available.includes("FUCG") && speciesTraits.includes("Rage")) {
            feat = "Controlled Rage";
        }
        else if (randomNum == 272 && available.includes("FUCG") && feats.includes("Precise Shot") && BAB >= 6) {
            feat = "Crossfire";
        }
        else if (randomNum == 273 && available.includes("FUCG")) {
            feat = "Cunning Attack";
        }
        else if (randomNum == 274 && available.includes("FUCG") && speciesTraits.includes("Rage") && feats.includes("Controlled Rage")) {
            feat = "Focused Rage";
        }
        else if (randomNum == 275 && available.includes("FUCG") && feats.includes("Bantha Rush") && str >= 15 && BAB >= 1) {
            feat = "Improved Bantha Rush";
        }
        else if (randomNum == 276 && available.includes("FUCG") && skills.includes("Perception")) {
            feat = "Informer";
        }
        else if (randomNum == 277 && available.includes("FUCG") && str >= 13) {
            feat = "Mighty Throw";
        }
        else if (randomNum == 278 && available.includes("FUCG") && speciesTraits.includes("Rage")) {
            feat = "Powerful Rage";
        }
        else if (randomNum == 279 && available.includes("FUCG") && wis >= 13) {
            feat = "Rapport";
        }
        else if (randomNum == 280 && available.includes("FUCG") && skills.includes("Knowledge (Bureaucracy)") ||
                    randomNum == 280 && available.includes("FUCG") && skills.includes("Knowledge (Galactic Lore)") ||
                    randomNum == 280 && available.includes("FUCG") && skills.includes("Knowledge (Life Sciences)") ||
                    randomNum == 280 && available.includes("FUCG") && skills.includes("Knowledge (Physical Sciences)") ||
                    randomNum == 280 && available.includes("FUCG") && skills.includes("Knowledge (Social Sciences)") ||
                    randomNum == 280 && available.includes("FUCG") && skills.includes("Knowledge (Tactics)") ||
                    randomNum == 280 && available.includes("FUCG") && skills.includes("Knowledge (Technology)")) {
            feat = "Recall";
        }
        else if (randomNum == 281 && available.includes("FUCG")) {
            if (feats.includes("Double Attack (Simple Weapons)")) {
                feat = "Savage Attack (Simple Weapons)";
            }
            if (feats.includes("Double Attack (Advanced Melee Weapons)")) {
                feat = "Savage Attack (Advanced Melee Weapons)";
            }
            if (feats.includes("Double Attack (Heavy Weapons)")) {
                feat = "Savage Attack (Heavy Weapons)";
            }
            if (feats.includes("Double Attack (Lightsabers)")) {
                feat = "Savage Attack (Lightsabers)";
            }
            if (feats.includes("Double Attack (Pistols)")) {
                feat = "Savage Attack (Pistols)";
            }
            if (feats.includes("Double Attack (Rifles)")) {
                feat = "Savage Attack (Rifles)";
            }
        }
        else if (randomNum == 282 && available.includes("FUCG")) {
            feat = "Scavenger";
        }
        else if (randomNum == 283 && available.includes("FUCG") && BAB >= 1) {
            feat = "Strafe";
        }
        else if (randomNum == 284 && available.includes("FUCG") && feats.includes("Coordinated Attack")) {
            feat = "Swarm";
        }
        else if (randomNum == 285 && available.includes("SaV") && skills.includes("Endurance")) {
            feat = "Burst of Speed";
        }
        else if (randomNum == 286 && available.includes("SaV") && skills.includes("Acrobatics")) {
            feat = "Close Combat Escape";
        }
        else if (randomNum == 287 && available.includes("SaV") && feats.includes("Rapid Shot") && BAB >= 6) {
            feat = "Collateral Damage";
        }
        else if (randomNum == 288 && available.includes("SaV")) {
            feat = "Cornered";
        }
        else if (randomNum == 289 && available.includes("SaV") && feats.includes("Sniper") && skills.includes("Stealth") && BAB >= 9) {
            feat = "Deadly Sniper";
        }
        else if (randomNum == 290 && available.includes("SaV") && skills.includes("Initiative")) {
            feat = "Deceptive Drop";
        }
        else if (randomNum == 291 && available.includes("SaV")) {
            feat = "Desperate Gambit";
        }
        else if (randomNum == 292 && available.includes("SaV") && skills.includes("Stealth")) {
            feat = "Duck and Cover";
        }
        else if (randomNum == 293 && available.includes("SaV") && feats.includes("Running Attack")) {
            feat = "Fleet-Footed";
        }
        else if (randomNum == 294 && available.includes("SaV") && skills.includes("Gather Information")) {
            feat = "Friends in Low Places";
        }
        else if (randomNum == 295 && available.includes("SaV") && feats.includes("Tech Specialist")) {
            feat = "Hasty Modification";
        }
        else if (randomNum == 296 && available.includes("SaV") && speciesTraits.includes("Shapeshift")) {
            feat = "Hideous Visage";
        }
        else if (randomNum == 297 && available.includes("SaV") && speciesTraits.includes("Shapeshift") && feats.includes("Skill Focus (Deception)")) {
            feat = "Impersonate";
        }
        else if (randomNum == 298 && available.includes("SaV") && con >= 13) {
            feat = "Impetuous Move";
        }
        else if (randomNum == 299 && available.includes("SaV")) {
            feat = "Impulsive Flight";
        }
        else if (randomNum == 300 && available.includes("SaV") && skills.includes("Stealth") && feats.includes("Lightning Draw")) {
            feat = "Knife Trick";
        }
        else if (randomNum == 301 && available.includes("SaV") && feats.includes("Quick Draw")) {
            feat = "Lightning Draw";
        }
        else if (randomNum == 302 && available.includes("SaV") && speciesTraits.includes("Shapeshift") && skills.includes("Deception") && con >= 13) {
            feat = "Metamorph";
        }
        else if (randomNum == 303 && available.includes("SaV") && feats.includes("Combat Reflexes")) {
            feat = "Opportunistic Retreat";
        }
        else if (randomNum == 304 && available.includes("SaV") && skills.includes("Endurance")) {
            feat = "Resurgence";
        }
        else if (randomNum == 305 && available.includes("SaV") && feats.includes("Tech Specialist")) {
            feat = "Signature Device";
        }
        else if (randomNum == 306 && available.includes("SaV") && feats.includes("Dodge")) {
            feat = "Slippery Maneuver";
        }
        else if (randomNum == 307 && available.includes("SaV") && talents.includes("Sneak Attack") ||
                    randomNum == 307 && available.includes("SaV") && feats.includes("Rapid Shot") ||
                    randomNum == 307 && available.includes("SaV") && feats.includes("Rapid Strike")) {
            feat = "Staggering Attack";
        }
        else if (randomNum == 308 && available.includes("SaV") && skills.includes("Endurance")) {
            feat = "Stay Up";
        }
        else if (randomNum == 309 && available.includes("SaV") && feats.includes("Tech Specialist") && int >= 17 && curLevel >= 9) {
            feat = "Superior Tech";
        }
        else if (randomNum == 310 && available.includes("SaV") && feats.includes("Combat Reflexes")) {
            feat = "Tactical Advantage";
        }
        else if (randomNum == 311 && available.includes("SaV") && feats.includes("Rapid Strike")) {
            feat = "Wicked Strike";
        }
        if (feats.includes(feat) && feat != "Linguist" && feat != "Force Training" && feat != "Skill Training" && feat != "Starship Tactics" ||
                feat == "Skill Focus (undefined)") {
            feat = "";
        }
        if (count2 == 500) {
            alert("Character");
            feat = "ValidFeatNotFound";
        }
    }

    return feat;
}