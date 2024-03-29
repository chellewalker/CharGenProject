export function characterFeat(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel,species,light,dark,tradition) {
    let feat = "";
    let count2 = 0;
    let randomNumForce = Math.floor(Math.random() * 2);
    if (randomNumForce == 0 && skills.includes("Use the Force") && feats.includes("Force Sensitivity")) {
        if (available.includes("CR") ||
                available.includes("KotORCG") ||
                available.includes("FUCG") ||
                available.includes("CWCG") ||
                available.includes("LECG") ||
                available.includes("JATM")) {
        feat = "Force Training";
    }}
    let randomNumStarship = Math.floor(Math.random() * 4);
    if (randomNumStarship == 0 && available.includes("SotG") && feats.includes("Vehicular Combat") && skills.includes("Pilot")) {
        feat = "Starship Tactics";
    }
    while (feat == "") {
        count2++;
        let randomNum = Math.floor(Math.random() * 438);
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
                    randomNum == 5 && available.includes("CR") && feats.includes("Gunnery Specialist") ||
                    randomNum == 6 && available.includes("CR") && feats.includes("Weapon Proficiency (Heavy Weapons)") ||
                    randomNum == 6 && available.includes("CR") && feats.includes("Vehicular Combat") ||
                    randomNum == 6 && available.includes("CR") && talents.includes("Spacehound") ||
                    randomNum == 6 && available.includes("CR") && feats.includes("Gunnery Specialist") ||
                    randomNum == 7 && available.includes("CR") && feats.includes("Weapon Proficiency (Heavy Weapons)") ||
                    randomNum == 7 && available.includes("CR") && feats.includes("Vehicular Combat") ||
                    randomNum == 7 && available.includes("CR") && talents.includes("Spacehound") ||
                    randomNum == 7 && available.includes("CR") && feats.includes("Gunnery Specialist")) {
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
                count++;
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
                else if (randomNum == 5) {
                    if (feats.includes("Weapon Focus (Simple Weapons)") ||
                        feats.includes("Martial Arts I") ||
                        speciesTraits.includes("Primitive")) {
                    feat = "Double Attack (Simple Weapons)";
                    check = 1;
                }}
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
            let randomNum2 = Math.floor(Math.random() * 32);
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
                else if (randomNum2 == 19 && available.includes("LECG")) {
                    feat = "Exotic Weapon Proficiency (Concealed Dart Launcher)";
                }
                else if (randomNum2 == 20 && available.includes("JATM")) {
                    feat = "Exotic Weapon Proficiency (Discblade)";
                }
                else if (randomNum2 == 21 && available.includes("RECG")) {
                    feat = "Exotic Weapon Proficiency (Siang Lance)";
                }
                else if (randomNum2 == 22 && available.includes("UR")) {
                    feat = "Exotic Weapon Proficiency (Magna Caster)";
                }
                else if (randomNum2 == 23 && available.includes("UR")) {
                    feat = "Exotic Weapon Proficiency (Squib Tensor Rifle)";
                }
                else if (randomNum2 == 24 && available.includes("UR")) {
                    feat = "Exotic Weapon Proficiency (Verpine Shattergun)";
                }
                else if (randomNum2 == 25 && available.includes("WE") && size != "Small") {
                    feat = "Exotic Weapon Proficiency (Blast Cannon)";
                }
                else if (randomNum2 == 26 && available.includes("HC")) {
                    feat = "Exotic Weapon Proficiency (Energy Bow)";
                }
                else if (randomNum2 == 27 && available.includes("LECG")) {
                    feat = "Exotic Weapon Proficiency (Tehk'la Blade)";
                }
                else if (randomNum2 == 28 && available.includes("GaW")) {
                    feat = "Exotic Weapon Proficiency (Darksticks)";
                }
                else if (randomNum2 == 29 && available.includes("UR")) {
                    feat = "Exotic Weapon Proficiency (Blastsword)";
                }
                else if (randomNum2 == 30 && available.includes("UR") && size != "Small") {
                    feat = "Exotic Weapon Proficiency (Vibro-Saw)";
                }
                else if (randomNum2 == 31 && available.includes("HC")) {
                    feat = "Exotic Weapon Proficiency (Bo-Rifle)";
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
            if (speciesTraits.includes("Force Blind") || speciesTraits.includes("Force Immunity")) {
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
            if (available.includes("CR") ||
                available.includes("KotORCG") ||
                available.includes("FUCG") ||
                available.includes("CWCG") ||
                available.includes("LECG") ||
                available.includes("JATM")) {
            feat = "Force Training";
        }}
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
                count++;
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
                else if (randomNum == 5) {
                    if (feats.includes("Weapon Focus (Simple Weapons)") ||
                        feats.includes("Martial Arts I") ||
                        speciesTraits.includes("Primitive")) {
                    feat = "Triple Crit (Simple Weapons)";
                    check = 1;
                }}
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
            let check = 0;
            let count = 0;
            while (check == 0 && count < 20) {
                count++;
                let randomNum = Math.floor(Math.random() * 3);
                if (randomNum == 0 && feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
                    feat = "Withdrawal Strike (Advanced Melee Weapons)";
                    check = 1;
                }
                else if (randomNum == 1 && feats.includes("Weapon Proficiency (Lightsabers)")) {
                    feat = "Withdrawal Strike (Lightsabers)";
                    check = 1;
                }
                else if (randomNum == 2) {
                    if (feats.includes("Weapon Focus (Simple Weapons)") ||
                        feats.includes("Martial Arts I") ||
                        speciesTraits.includes("Primitive")) {
                    feat = "Withdrawal Strike (Simple Weapons)";
                    check = 1;
                }}
            }
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
        else if (randomNum == 312 && available.includes("CWCG") && species == "Nelvaanian") {
            feat = "Anointed Hunter";
        }
        else if (randomNum == 313 && available.includes("CWCG")) {
            feat = "Artillery Shot";
        }
        else if (randomNum == 314 && available.includes("CWCG") && feats.includes("Coordinated Attack") && BAB >= 5) {
            feat = "Coordinated Barrage";
        }
        else if (randomNum == 315 && available.includes("CWCG") && skills.includes("Mechanics")) {
            feat = "Droidcraft";
        }
        else if (randomNum == 316 && available.includes("CWCG")) {
            feat = "Droid Hunter";
        }
        else if (randomNum == 317 && available.includes("CWCG") && skills.includes("Treat Injury")) {
            feat = "Experienced Medic";
        }
        else if (randomNum == 318 && available.includes("CWCG") && skills.includes("Mechanics")) {
            feat = "Expert Droid Repair";
        }
        else if (randomNum == 319 && available.includes("CWCG")) {
            feat = "Flash and Clear";
        }
        else if (randomNum == 320 && available.includes("CWCG")) {
            feat = "Flood of Fire";
        }
        else if (randomNum == 321 && available.includes("CWCG") && feats.includes("Armor Proficiency (Light)")) {
            feat = "Grand Army of the Republic Training";
        }
        else if (randomNum == 322 && available.includes("CWCG") && BAB >= 1) {
            feat = "Gunnery Specialist";
        }
        else if (randomNum == 323 && available.includes("CWCG")) {
            feat = "Jedi Familiarity";
        }
        else if (randomNum == 324 && available.includes("CWCG")) {
            feat = "Leader of Droids";
        }
        else if (randomNum == 325 && available.includes("CWCG")) {
            feat = "Overwhelming Attack";
        }
        else if (randomNum == 326 && available.includes("CWCG") && dark == 1) {
            feat = "Pall of the Dark Side";
        }
        else if (randomNum == 327 && available.includes("CWCG")) {
            feat = "Separatist Military Training";
        }
        else if (randomNum == 328 && available.includes("CWCG")) {
            feat = "Spray Shot";
        }
        else if (randomNum == 329 && available.includes("CWCG")) {
            feat = "Trench Warrior";
        }
        else if (randomNum == 330 && available.includes("CWCG")) {
            feat = "Unstoppable Force";
        }
        else if (randomNum == 331 && available.includes("CWCG") && skills.includes("Perception")) {
            feat = "Unwavering Resolve";
        }
        else if (randomNum == 332 && available.includes("CWCG")) {
            feat = "Wary Defender";
        }
        else if (randomNum == 333 && available.includes("LECG") && BAB >= 9 &&
                    feats.includes("Attack Combo (Melee)") && feats.includes("Attack Combo (Ranged)")) {
            feat = "Attack Combo (Fire and Strike)";
        }
        else if (randomNum == 334 && available.includes("LECG") && BAB >= 3) {
            feat = "Attack Combo (Melee)";
        }
        else if (randomNum == 335 && available.includes("LECG") && BAB >= 3) {
            feat = "Attack Combo (Ranged)";
        }
        else if (randomNum == 336 && available.includes("LECG") && feats.includes("Weapon Focus (Rifles)") ||
                    randomNum == 336 && available.includes("LECG") && feats.includes("Weapon Focus (Heavy Weapons)")) {
            feat = "Autofire Assault";
        }
        else if (randomNum == 337 && available.includes("LECG") && feats.includes("Weapon Focus (Rifles)") ||
                    randomNum == 337 && available.includes("LECG") && feats.includes("Weapon Focus (Heavy Weapons)")) {
            feat = "Autofire Sweep";
        }
        else if (randomNum == 338 && available.includes("LECG") && skills.includes("Mechanics")) {
            feat = "Biotech Specialist";
        }
        else if (randomNum == 339 && available.includes("LECG") && skills.includes("Treat Injury")) {
            feat = "Biotech Surgery";
        }
        else if (randomNum == 340 && available.includes("LECG")) {
            feat = "Brink of Death";
        }
        else if (randomNum == 341 && available.includes("LECG") && str >= 13 && dex >= 13) {
            feat = "Fatal Hit";
        }
        else if (randomNum == 342 && available.includes("LECG") && str >= 15) {
            feat = "Feat of Strength";
        }
        else if (randomNum == 343 && available.includes("LECG")) {
            feat = "Galactic Alliance Military Training";
        }
        else if (randomNum == 344 && available.includes("LECG")) {
            feat = "Grapple Resistance";
        }
        else if (randomNum == 345 && available.includes("LECG") && str >= 13 && feats.includes("Multi-Grab")) {
            feat = "Knock Heads";
        }
        else if (randomNum == 346 && available.includes("LECG") && dex >= 13) {
            feat = "Multi-Grab";
        }
        else if (randomNum == 347 && available.includes("LECG") && str >= 15 && feats.includes("Crush") && feats.includes("Pin")) {
            feat = "Rancor Crush";
        }
        else if (randomNum == 348 && available.includes("LECG") && dex >= 15 && feats.includes("Quick Draw")) {
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
        else if (randomNum == 349 && available.includes("LECG")) {
            feat = "Returning Bug";
        }
        else if (randomNum == 350 && available.includes("LECG") && feats.includes("Tech Specialist") && skills.includes("Mechanics")) {
            feat = "Vehicle Systems Expertise";
        }
        else if (randomNum == 351 && available.includes("LECG") && feats.includes("Point-Blank Shot")) {
            feat = "Zero Range";
        }
        else if (randomNum == 352 && available.includes("JATM")) {
            feat = "Follow Through";
        }
        else if (randomNum == 353 && available.includes("JATM") && skills.includes("Use the Force")) {
            feat = "Force Regimen Mastery";
        }
        else if (randomNum == 354 && available.includes("JATM")) {
            feat = "Long Haft Strike";
        }
        else if (randomNum == 355 && available.includes("JATM") && feats.includes("Double Attack (Advanced Melee Weapons)")) {
            feat = "Relentless Attack (Advanced Melee Weapons)";
        }
        else if (randomNum == 355 && available.includes("JATM") && feats.includes("Double Attack (Heavy Weapons)")) {
            feat = "Relentless Attack (Heavy Weapons)";
        }
        else if (randomNum == 355 && available.includes("JATM") && feats.includes("Double Attack (Lightsabers)")) {
            feat = "Relentless Attack (Lightsabers)";
        }
        else if (randomNum == 355 && available.includes("JATM") && feats.includes("Double Attack (Pistols)")) {
            feat = "Relentless Attack (Pistols)";
        }
        else if (randomNum == 355 && available.includes("JATM") && feats.includes("Double Attack (Rifles)")) {
            feat = "Relentless Attack (Rifles)";
        }
        else if (randomNum == 355 && available.includes("JATM") && feats.includes("Double Attack (Simple Weapons)")) {
            feat = "Relentless Attack (Simple Weapons)";
        }
        else if (randomNum == 356 && available.includes("JATM") && BAB >= 2) {
            feat = "Unswerving Resolve";
        }
        else if (randomNum == 357 && available.includes("RECG")) {
            feat = "Assured Attack";
        }
        else if (randomNum == 358 && available.includes("RECG")) {
            feat = "Deft Charge";
        }
        else if (randomNum == 359 && available.includes("RECG")) {
            feat = "Fast Surge";
        }
        else if (randomNum == 360 && available.includes("RECG")) {
            feat = "Imperial Military Training";
        }
        else if (randomNum == 361 && available.includes("RECG") && feats.includes("Dodge")) {
            feat = "Moving Target";
        }
        else if (randomNum == 362 && available.includes("RECG") && feats.includes("Point-Blank Shot")) {
            feat = "Prime Shot";
        }
        else if (randomNum == 363 && available.includes("RECG")) {
            feat = "Rapid Reaction";
        }
        else if (randomNum == 364 && available.includes("RECG") && feats.includes("Running Attack")) {
            feat = "Rebel Military Training";
        }
        else if (randomNum == 365 && available.includes("RECG")) {
            feat = "Recovering Surge";
        }
        else if (randomNum == 366 && available.includes("RECG") && feats.includes("Extra Second Wind")) {
            feat = "Unstoppable Combatant";
        }
        else if (randomNum == 367 && available.includes("RECG") && skills.includes("Pilot")) {
            feat = "Vehicular Surge";
        }
        else if (randomNum == 368 && available.includes("RECG") && feats.includes("Extra Second Wind")) {
            feat = "Vitality Surge";
        }
        else if (randomNum == 369 && available.includes("GaW") && BAB >= 1) {
            feat = "Bantha Herder";
        }
        else if (randomNum == 370 && available.includes("GaW") && feats.includes("Bantha Rush") && feats.includes("Trip")) {
            feat = "Battering Attack";
        }
        else if (randomNum == 371 && available.includes("GaW")) {
            feat = "Destructive Force";
        }
        else if (randomNum == 372 && available.includes("GaW")) {
            feat = "Disabler";
        }
        else if (randomNum == 373 && available.includes("GaW") && skills.includes("Jump")) {
            feat = "Dive for Cover";
        }
        else if (randomNum == 374 && available.includes("GaW") && wis > con) {
            feat = "Fight Through Pain";
        }
        else if (randomNum == 375 && available.includes("GaW") && BAB >= 1) {
            feat = "Forceful Blast";
        }
        else if (randomNum == 376 && available.includes("GaW") && cha >= 13) {
            feat = "Force of Personality";
        }
        else if (randomNum == 377 && available.includes("GaW") && con >= 13) {
            feat = "Fortifying Recovery";
        }
        else if (randomNum == 378 && available.includes("GaW")) {
            let randomNum2 = Math.floor(Math.random() * skills.length);
            feat = "Mission Specialist ("+skills[randomNum2]+")";
        }
        else if (randomNum == 379 && available.includes("GaW") && skills.includes("Endurance")) {
            feat = "Never Surrender";
        }
        else if (randomNum == 380 && available.includes("GaW")) {
            feat = "Opportunistic Shooter";
        }
        else if (randomNum == 381 && available.includes("GaW") && feats.includes("Weapon Proficiency (Pistols)")) {
            feat = "Pistoleer";
        }
        else if (randomNum == 382 && available.includes("GaW") && int >= 13) {
            feat = "Predictive Defense";
        }
        else if (randomNum == 383 && available.includes("GaW") && str >= 13) {
            feat = "Resilient Strength";
        }
        else if (randomNum == 384 && available.includes("GaW") && feats.includes("Weapon Proficiency (Rifles)")) {
            feat = "Riflemaster";
        }
        else if (randomNum == 385 && available.includes("GaW") && skills.includes("Climb") ||
                    randomNum == 385 && available.includes("GaW") && skills.includes("Jump")) {
            feat = "Risk Taker";
        }
        else if (randomNum == 386 && available.includes("GaW") && feats.includes("Weapon Proficiency (Pistols)") ||
                    randomNum == 386 && available.includes("GaW") && feats.includes("Weapon Proficiency (Rifles)")) {
            feat = "Sport Hunter";
        }
        else if (randomNum == 387 && available.includes("GaW") && BAB >= 1) {
            feat = "Staggering Attack";
        }
        else if (randomNum == 388 && available.includes("GaW") && feats.includes("Careful Shot")) {
            feat = "Steadying Position";
        }
        else if (randomNum == 389 && available.includes("SGtD") && skills.includes("Mechanics") ||
                    randomNum == 389 && available.includes("SGtD") && skills.includes("Use Computer")) {
            let randomNum2 = Math.floor(Math.random() * 5);
            if (randomNum2 == 0) {
                feat = "Droid Focus (1st-Degree)";
            }
            else if (randomNum2 == 1) {
                feat = "Droid Focus (2nd-Degree)";
            }
            else if (randomNum2 == 2) {
                feat = "Droid Focus (3rd-Degree)";
            }
            else if (randomNum2 == 3) {
                feat = "Droid Focus (4th-Degree)";
            }
            else {
                feat = "Droid Focus (5th-Degree)";
            }
        }
        else if (randomNum == 390 && available.includes("GoI") && feats.includes("Crush")) {
            feat = "Bone Crusher";
        }
        else if (randomNum == 391 && available.includes("GoI") && int >= 13) {
            feat = "Brilliant Defense";
        }
        else if (randomNum == 392 && available.includes("GoI") && speciesTraits.includes("Rage")) {
            feat = "Channel Rage";
        }
        else if (randomNum == 393 && available.includes("GoI") && skills.includes("Knowledge (Bureaucracy)")) {
            if (skills.includes("Gather Information")) {}
            else {
                feat = "Cut the Red Tape";
        }}
        else if (randomNum == 394 && available.includes("GoI") && cha >= 13) {
            feat = "Demoralizing Strike";
        }
        else if (randomNum == 395 && available.includes("GoI") && skills.includes("Deception")) {
            feat = "Disturbing Presence";
        }
        else if (randomNum == 396 && available.includes("GoI") && cha >= 13) {
            feat = "Expert Briber";
        }
        else if (randomNum == 397 && available.includes("GoI") && BAB >= 1) {
            feat = "Flèche";
        }
        else if (randomNum == 398 && available.includes("GoI") && feats.includes("Force Training")) {
            feat = "Forceful Recovery";
        }
        else if (randomNum == 399 && available.includes("GoI") && feats.includes("Point-Blank Shot")) {
            feat = "Grazing Shot";
        }
        else if (randomNum == 400 && available.includes("GoI") && talents.includes("Sneak Attack") ||
                    randomNum == 400 && available.includes("GoI") && feats.includes("Rapid Shot") ||
                    randomNum == 400 && available.includes("GoI") && feats.includes("Rapid Strike")) {
            feat = "Hobbling Strike";
        }
        else if (randomNum == 401 && available.includes("GoI") && feats.includes("Opportunistic Trickery")) {
            feat = "Improved Opportunistic Trickery";
        }
        else if (randomNum == 402 && available.includes("GoI") && cha >= 13) {
            feat = "Indomitable Personality";
        }
        else if (randomNum == 403 && available.includes("GoI") && cha >= 13 && skills.includes("Deception")) {
            feat = "Master of Disguise";
        }
        else if (randomNum == 404 && available.includes("GoI") && BAB >= 4 && feats.includes("Precise Shot")) {
            feat = "Meat Shield";
        }
        else if (randomNum == 405 && available.includes("GoI") && feats.includes("Combat Reflexes") && talents.includes("Sneak Attack")) {
            feat = "Opportunistic Trickery";
        }
        else if (randomNum == 406 && available.includes("GoI") && BAB >= 1) {
            feat = "Resolute Stance";
        }
        else if (randomNum == 407 && available.includes("GoI")) {
            feat = "Sadistic Strike";
        }
        else if (randomNum == 408 && available.includes("GoI") && skills.includes("Persuasion")) {
            feat = "Silver Tongue";
        }
        else if (randomNum == 409 && available.includes("GoI")) {
            feat = "Skill Challenge: Catastrophic Avoidance";
        }
        else if (randomNum == 410 && available.includes("GoI")) {
            feat = "Skill Challenge: Last Resort";
        }
        else if (randomNum == 411 && available.includes("GoI")) {
            feat = "Skill Challenge: Recovery";
        }
        else if (randomNum == 412 && available.includes("GoI")) {
            feat = "Stand Tall";
        }
        else if (randomNum == 413 && available.includes("GoI") && str >= 13) {
            feat = "Wookiee Grip";
        }
        else if (randomNum == 414 && available.includes("UR") && str >= 13 && dex >= 13 && skills.includes("Acrobatics")) {
            feat = "Acrobatic Ally";
        }
        else if (randomNum == 415 && available.includes("UR") && str >= 13 && feats.includes("Mobility") && skills.includes("Skill Focus (Acrobatics)")) {
            feat = "Acrobatic Dodge";
        }
        else if (randomNum == 416 && available.includes("UR") && skills.includes("Deception")) {
            feat = "Combat Trickery";
        }
        else if (randomNum == 417 && available.includes("UR") && feats.includes("Skill Focus (Knowledge (Social Sciences))") ||
                    randomNum == 417 && available.includes("UR") && feats.includes("Skill Focus (Knowledge (Galactic Lore))")) {
            feat = "Elder's Knowledge";
        }
        else if (randomNum == 418 && available.includes("UR") && BAB >= 4 && feats.includes("Cleave")) {
            feat = "Frightening Cleave";
        }
        else if (randomNum == 419 && available.includes("UR") && dex >= 13) {
            feat = "Grab Back";
        }
        else if (randomNum == 420 && available.includes("UR") && BAB >= 8 && feats.includes("Trip") && feats.includes("Weapon Focus")) {
            feat = "Halt";
        }
        else if (randomNum == 421 && available.includes("UR") && feats.includes("Weapon Focus (Heavy Weapons)")) {
            feat = "Heavy Hitter";
        }
        else if (randomNum == 422 && available.includes("UR") && skills.includes("Mechanics")) {
            feat = "Hold Together";
        }
        else if (randomNum == 423 && available.includes("UR") && skills.includes("Use Computer")) {
            feat = "Hyperblazer";
        }
        else if (randomNum == 424 && available.includes("UR") && dex >= 15 && skills.includes("Stealth") && feats.includes("Skill Focus (Deception)")) {
            feat = "Improved Sleight of Hand";
        }
        else if (randomNum == 425 && available.includes("UR")) {
            feat = "Improvised Weapon Mastery";
        }
        else if (randomNum == 426 && available.includes("UR")) {
            feat = "Instinctive Attack";
        }
        else if (randomNum == 427 && available.includes("UR")) {
            feat = "Instinctive Defense";
        }
        else if (randomNum == 428 && available.includes("UR") && skills.includes("Persuasion")) {
            feat = "Intimidator";
        }
        else if (randomNum == 429 && available.includes("UR")) {
            feat = "Maniacal Charge";
        }
        else if (randomNum == 430 && available.includes("UR") && skills.includes("Ride")) {
            feat = "Mounted Combat";
        }
        else if (randomNum == 431 && available.includes("UR") && species == "Nikto") {
            let randomNum2 = Math.floor(Math.random() * 5);
            if (randomNum2 == 0) {
                feat = "Nikto Survival (Desert)";
            }
            else if (randomNum2 == 1) {
                feat = "Nikto Survival (Forest)";
            }
            else if (randomNum2 == 2) {
                feat = "Nikto Survival (Mountains)";
            }
            else if (randomNum2 == 3) {
                feat = "Nikto Survival (Ocean)";
            }
            else {
                feat = "Nikto Survival (Arctic)";
            }
        }
        else if (randomNum == 432 && available.includes("UR") && BAB >= 5) {
            feat = "Targeted Area";
        }
        else if (randomNum == 433 && available.includes("UR") && skills.includes("Ride")) {
            feat = "Trample";
        }
        else if (randomNum == 434 && available.includes("UR") && skills.includes("Survival")) {
            feat = "Wilderness First Aid";
        }
        else if (randomNum == 435 && available.includes("WE") && cha >= 13 && tradition == 1) {
            feat = "Dreadful Countenance";
        }
        else if (randomNum == 436 && available.includes("WE") && BAB >= 6 && feats.includes("Double Attack") ||
                    randomNum == 436 && available.includes("WE") && BAB >= 6 && feats.includes("Dual Weapon Mastery I")) {
            feat = "Rapid Assault";
        }
        else if (randomNum == 437 && available.includes("HC") && con >= 13 && skills.includes("Endurance")) {
            feat = "Carouser";
        }
        if (feats.includes(feat) && feat != "Linguist" && feat != "Force Training" && feat != "Skill Training" && feat != "Starship Tactics" ||
                feat == "Skill Focus (undefined)" && feat != "Force Regimen Mastery") {
            feat = "";
        }
        if (count2 == 500) {
            alert("Character");
            feat = "ValidFeatNotFound";
        }
    }

    return feat;
}