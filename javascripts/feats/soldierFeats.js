export function soldierFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel) {
    let feat = "";
    let count2 = 0;
    while (feat == "") {
        count2++;
        let randomNum = Math.floor(Math.random() * 137);
        if (randomNum == 0 && available.includes("CR")) {
            feat = "Armor Proficiency (Light)";
        }
        else if (randomNum == 1 && available.includes("CR") && feats.includes("Armor Proficiency (Light)")) {
            feat = "Armor Proficiency (Medium)";
        }
        else if (randomNum == 2 && available.includes("CR") && skills.includes("Armor Proficiency (Medium)") ||
                    randomNum == 3 && available.includes("CR") && skills.includes("Armor Proficiency (Medium)") ||
                    randomNum == 4 && available.includes("CR") && skills.includes("Armor Proficiency (Medium)") ||
                    randomNum == 5 && available.includes("CR") && skills.includes("Armor Proficiency (Medium)")) {
            feat = "Armor Proficiency (Heavy)";
        }
        else if (randomNum == 6 && available.includes("CR") && str > 12 && BAB >= 1 ||
                    randomNum == 7 && available.includes("CR") && str > 12 && BAB >= 1) {
            feat = "Bantha Rush";
        }
        else if (randomNum == 8 && available.includes("CR") && feats.includes("Point-Blank Shot") && BAB >= 2) {
            feat = "Careful Shot";
        }
        else if (randomNum == 9 && available.includes("CR") && BAB >= 4 ||
                    randomNum == 10 && available.includes("CR") && BAB >= 4 ||
                    randomNum == 11 && available.includes("CR") && BAB >= 4) {
            feat = "Charging Fire";
        }
        else if (randomNum == 12 && available.includes("CR") && feats.includes("Power Attack") && str >= 13) {
            feat = "Cleave";
        }
        else if (randomNum == 13 && available.includes("CR")) {
            feat = "Combat Reflexes";
        }
        else if (randomNum == 14 && available.includes("CR") && BAB >= 2) {
            feat = "Coordinated Attack";
        }
        else if (randomNum == 15 && available.includes("CR") && feats.includes("Pin") && BAB >= 1) {
            feat = "Crush";
        }
        else if (randomNum == 16 && available.includes("CR") && feats.includes("Point-Blank Shot") && feats.includes("Precise Shot") && BAB >= 4) {
            feat = "Deadeye";
        }
        else if (randomNum == 17 && available.includes("CR") && BAB >= 6 ||
                    randomNum == 18 && available.includes("CR") && BAB >= 6 ||
                    randomNum == 19 && available.includes("CR") && BAB >= 6 ||
                    randomNum == 20 && available.includes("CR") && BAB >= 6 ||
                    randomNum == 21 && available.includes("CR") && BAB >= 6) {
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
                if (count == 20) {
                    check = 1;
                }
            }
        }
        else if (randomNum == 22 && available.includes("CR") && dex >= 13 && BAB >= 1 ||
                    randomNum == 23 && available.includes("CR") && dex >= 13 && BAB >= 1 ||
                    randomNum == 24 && available.includes("CR") && dex >= 13 && BAB >= 1 ||
                    randomNum == 25 && available.includes("CR") && dex >= 13 && BAB >= 1 ||
                    randomNum == 26 && available.includes("CR") && dex >= 13 && BAB >= 1) {
            feat = "Dual Weapon Mastery I";
        }
        else if (randomNum == 27 && available.includes("CR") && feats.includes("Dual Weapon Mastery I") && dex >= 15 && BAB >= 6 ||
                    randomNum == 28 && available.includes("CR") && feats.includes("Dual Weapon Mastery I") && dex >= 15 && BAB >= 6 ||
                    randomNum == 29 && available.includes("CR") && feats.includes("Dual Weapon Mastery I") && dex >= 15 && BAB >= 6 ||
                    randomNum == 30 && available.includes("CR") && feats.includes("Dual Weapon Mastery I") && dex >= 15 && BAB >= 6) {
            feat = "Dual Weapon Mastery II";
        }
        else if (randomNum == 31 && available.includes("CR") && feats.includes("Dual Weapon Mastery II") && dex >= 17 && BAB >= 11 ||
                    randomNum == 32 && available.includes("CR") && feats.includes("Dual Weapon Mastery II") && dex >= 17 && BAB >= 11 ||
                    randomNum == 33 && available.includes("CR") && feats.includes("Dual Weapon Mastery II") && dex >= 17 && BAB >= 11) {
            feat = "Dual Weapon Mastery III";
        }
        else if (randomNum == 34 && BAB >= 1) {
            let randomNum2 = Math.floor(Math.random() * 31);
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
        }
        else if (randomNum == 35 && available.includes("CR") && feats.includes("Point-Blank Shot")) {
            feat = "Far Shot";
        }
        else if (randomNum == 36 && available.includes("CR")  && feats.includes("Power Attack")  && feats.includes("Cleave") && str >= 13 && BAB >= 4) {
            feat = "Great Cleave";
        }
        else if (randomNum == 37 && available.includes("CR")  && feats.includes("Dodge")  && feats.includes("Mobility") && dex >= 13) {
            feat = "Improved Charge";
        }
        else if (randomNum == 38 && available.includes("CR")  && feats.includes("Melee Defense") && int >= 13) {
            feat = "Improved Disarm";
        }
        else if (randomNum == 39 && available.includes("CR") ||
                    randomNum == 40 && available.includes("CR") ||
                    randomNum == 41 && available.includes("CR") ||
                    randomNum == 42 && available.includes("CR") ||
                    randomNum == 43 && available.includes("CR")) {
            feat = "Martial Arts I";
        }
        else if (randomNum == 44 && available.includes("CR")  && feats.includes("Martial Arts I") && BAB >= 3 ||
                    randomNum == 45 && available.includes("CR")  && feats.includes("Martial Arts I") && BAB >= 3 ||
                    randomNum == 46 && available.includes("CR")  && feats.includes("Martial Arts I") && BAB >= 3 ||
                    randomNum == 47 && available.includes("CR")  && feats.includes("Martial Arts I") && BAB >= 3) {
            feat = "Martial Arts II";
        }
        else if (randomNum == 48 && available.includes("CR")  && feats.includes("Martial Arts I") && feats.includes("Martial Arts II") && BAB >= 6 ||
                    randomNum == 49 && available.includes("CR")  && feats.includes("Martial Arts I") && feats.includes("Martial Arts II") && BAB >= 6 ||
                    randomNum == 50 && available.includes("CR")  && feats.includes("Martial Arts I") && feats.includes("Martial Arts II") && BAB >= 6) {
            feat = "Martial Arts III";
        }
        else if (randomNum == 51 && available.includes("CR") && int >= 13 ||
                    randomNum == 52 && available.includes("CR") && int >= 13 ||
                    randomNum == 53 && available.includes("CR") && int >= 13) {
            feat = "Melee Defense";
        }
        else if (randomNum == 54 && available.includes("CR") && str >= 13 ||
                    randomNum == 55 && available.includes("CR") && str >= 13) {
            feat = "Mighty Swing";
        }
        else if (randomNum == 56 && available.includes("CR") && BAB >= 1) {
            feat = "Pin";
        }
        else if (randomNum == 57 && available.includes("CR")) {
            feat = "Point-Blank Shot";
        }
        else if (randomNum == 58 && available.includes("CR") && str >= 13 ||
                    randomNum == 59 && available.includes("CR") && str >= 13 ||
                    randomNum == 60 && available.includes("CR") && str >= 13 ||
                    randomNum == 61 && available.includes("CR") && str >= 13) {
            feat = "Power Attack";
        }
        else if (randomNum == 62 && available.includes("CR") && feats.includes("Point-Blank Shot")) {
            feat = "Precise Shot";
        }
        else if (randomNum == 63 && available.includes("CR") && BAB >= 1) {
            feat = "Quick Draw";
        }
        else if (randomNum == 64 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 65 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 66 && available.includes("CR") && BAB >= 1) {
            feat = "Rapid Shot";
        }
        else if (randomNum == 67 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 68 && available.includes("CR") && BAB >= 1 ||
                    randomNum == 69 && available.includes("CR") && BAB >= 1) {
            feat = "Rapid Strike";
        }
        else if (randomNum == 70 && available.includes("CR") && dex >= 13) {
            feat = "Running Attack";
        }
        else if (randomNum == 71 && available.includes("CR") && con >= 13 && skills.includes("Endurance")) {
            feat = "Shake It Off";
        }
        else if (randomNum == 72 && available.includes("CR") || 
                    randomNum == 73 && available.includes("CR") || 
                    randomNum == 74 && available.includes("CR") || 
                    randomNum == 75 && available.includes("CR") || 
                    randomNum == 76 && available.includes("CR") || 
                    randomNum == 77 && available.includes("CR") || 
                    randomNum == 78 && available.includes("CR")) {
                let randomNum2 = Math.floor(Math.random() * skills.length);
                feat = "Skill Focus ("+skills[randomNum2]+")";
        }
        else if (randomNum == 79 && available.includes("CR") || 
                    randomNum == 80 && available.includes("CR")) {
            feat = "Skill Training";
        }
        else if (randomNum == 81 && available.includes("CR") && feats.includes("Point-Blank Shot") && feats.includes("Precise Shot") && BAB >= 4) {
            feat = "Sniper";
        }
        else if (randomNum == 82 && available.includes("CR") && feats.includes("Trip") && BAB >= 1) {
            feat = "Throw";
        }
        else if (randomNum == 83 && available.includes("CR") ||
                    randomNum == 84 && available.includes("CR") ||
                    randomNum == 85 && available.includes("CR")) {
            feat = "Toughness";
        }
        else if (randomNum == 86 && available.includes("CR") && BAB >= 1) {
            feat = "Trip";
        }
        else if (randomNum == 87 && available.includes("CR") && feats.includes("Double Attack (Advanced Melee Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Advanced Melee Weapons)";
        }
        else if (randomNum == 88 && available.includes("CR") && feats.includes("Double Attack (Heavy Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Heavy Weapons)";
        }
        else if (randomNum == 89 && available.includes("CR") && feats.includes("Double Attack (Lightsabers)") && BAB >= 11) {
            feat = "Triple Attack (Lightsabers)";
        }
        else if (randomNum == 90 && available.includes("CR") && feats.includes("Double Attack (Pistols)") && BAB >= 11) {
            feat = "Triple Attack (Pistols)";
        }
        else if (randomNum == 91 && available.includes("CR") && feats.includes("Double Attack (Rifles)") && BAB >= 11) {
            feat = "Triple Attack (Rifles)";
        }
        else if (randomNum == 92 && available.includes("CR") && feats.includes("Double Attack (Simple Weapons)") && BAB >= 11) {
            feat = "Triple Attack (Simple Weapons)";
        }
        else if (randomNum == 93 && available.includes("CR") && BAB >= 8 ||
                    randomNum == 94 && available.includes("CR") && BAB >= 8) {
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
                if (count == 20) {
                    check = 1;
                }
            }
        }
        else if (randomNum == 95 && available.includes("CR") && skills.includes("Pilot")) {
            feat = "Vehicular Combat";
        }
        else if (randomNum == 96 && available.includes("CR") ||
                    randomNum == 97 && available.includes("CR") ||
                    randomNum == 98 && available.includes("CR") ||
                    randomNum == 99 && available.includes("CR") ||
                    randomNum == 100 && available.includes("CR") ||
                    randomNum == 101 && available.includes("CR")) {
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
                if (count == 20) {
                    check = 1;
                }
            }
        }
        else if (randomNum == 102 || randomNum == 103 || randomNum == 104) {
            if (count2 % 2 == 0) {
                feat = "Weapon Proficiency (Advanced Melee Weapons)";
            }}
        else if (randomNum == 105 || randomNum == 106 || randomNum == 107) {
            feat = "Weapon Proficiency (Heavy Weapons)";
        }
        else if (randomNum == 108) {
            feat = "Weapon Proficiency (Pistols)";
        }
        else if (randomNum == 109) {
            feat = "Weapon Proficiency (Rifles)";
        }
        else if (randomNum == 110 && available.includes("KotORCG") && BAB >= 6) {
            feat = "Accelerated Strike";
        }
        else if (randomNum == 111 && available.includes("KotORCG") && str >= 13 && con >= 13) {
            feat = "Conditioning";
        }
        else if (randomNum == 112 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Advanced Melee Weapons)") ||
                    randomNum == 112 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Heavy Weapons)") ||
                    randomNum == 112 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Lightsabers)") ||
                    randomNum == 112 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Pistols)") ||
                    randomNum == 112 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Rifles)") ||
                    randomNum == 112 && available.includes("KotORCG") && BAB >= 9 && feats.includes("Weapon Focus (Simple Weapons)")) {
            feat = "Critical Strike";
        }
        else if (randomNum == 113 && available.includes("KotORCG") && dex >= 13) {
            feat = "Flurry";
        }
        else if (randomNum == 114 && available.includes("KotORCG") && feats.includes("Rapid Strike")) {
            feat = "Improved Rapid Strike";
        }
        else if (randomNum == 115 && available.includes("KotORCG") && feats.includes("Conditioning")) {
            feat = "Increased Agility";
        }
        else if (randomNum == 116 && available.includes("KotORCG") && dex >= 13) {
            feat = "Power Blast";
        }
        else if (randomNum == 117 && available.includes("KotORCG")) {
            feat = "Sniper Shot";
        }
        else if (randomNum == 118 && available.includes("KotORCG")) {
            feat = "Tumble Defense";
        }
        else if (randomNum == 119 && available.includes("KotORCG")) {
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
        else if (randomNum == 120 && available.includes("FUCG") && skills.includes("Stealth")) {
            feat = "Advantageous Cover";
        }
        else if (randomNum == 121 && available.includes("FUCG") && dex >= 13) {
            feat = "Angled Throw";
        }
        else if (randomNum == 122 && available.includes("FUCG") && feats.includes("Coordinated Attack")) {
            feat = "Blaster Barrage";
        }
        else if (randomNum == 123 && available.includes("FUCG") && feats.includes("Precise Shot") && BAB >= 6) {
            feat = "Crossfire";
        }
        else if (randomNum == 124 && available.includes("FUCG") && feats.includes("Bantha Rush") && str >= 15 && BAB >= 1) {
            feat = "Improved Bantha Rush";
        }
        else if (randomNum == 125 && available.includes("FUCG") && str >= 13) {
            feat = "Mighty Throw";
        }
        else if (randomNum == 126 && available.includes("FUCG") && wis >= 13) {
            feat = "Rapport";
        }
        else if (randomNum == 127 && available.includes("FUCG")) {
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
        else if (randomNum == 128 && available.includes("FUCG") && BAB >= 1) {
            feat = "Strafe";
        }
        else if (randomNum == 129 && available.includes("SaV") && skills.includes("Endurance")) {
            feat = "Burst of Speed";
        }
        else if (randomNum == 130 && available.includes("SaV") && feats.includes("Rapid Shot") && BAB >= 6) {
            feat = "Collateral Damage";
        }
        else if (randomNum == 131 && available.includes("SaV") && feats.includes("Sniper") && skills.includes("Stealth") && BAB >= 9) {
            feat = "Deadly Sniper";
        }
        else if (randomNum == 132 && available.includes("SaV") && con >= 13) {
            feat = "Impetuous Move";
        }
        else if (randomNum == 133 && available.includes("SaV") && feats.includes("Quick Draw")) {
            feat = "Lightning Draw";
        }
        else if (randomNum == 134 && available.includes("SaV") && skills.includes("Endurance")) {
            feat = "Resurgence";
        }
        else if (randomNum == 135 && available.includes("SaV") && feats.includes("Dodge")) {
            feat = "Slippery Maneuver";
        }
        else if (randomNum == 136 && available.includes("SaV") && skills.includes("Endurance")) {
            feat = "Stay Up";
        }
        else if (randomNum == 137 && available.includes("CWCG")) {
            feat = "Artillery Shot";
        }
        else if (randomNum == 138 && available.includes("CWCG") && feats.includes("Coordinated Attack") && BAB >= 5) {
            feat = "Coordinated Barrage";
        }
        else if (randomNum == 139 && available.includes("CWCG")) {
            feat = "Droid Hunter";
        }
        else if (randomNum == 140 && available.includes("CWCG") && skills.includes("Treat Injury")) {
            feat = "Experienced Medic";
        }
        else if (randomNum == 141 && available.includes("CWCG")) {
            feat = "Flash and Clear";
        }
        else if (randomNum == 142 && available.includes("CWCG")) {
            feat = "Flood of Fire";
        }
        else if (randomNum == 143 && available.includes("CWCG") && feats.includes("Armor Proficiency (Light)")) {
            feat = "Grand Army of the Republic Training";
        }
        else if (randomNum == 144 && available.includes("CWCG") && BAB >= 1) {
            feat = "Gunnery Specialist";
        }
        else if (randomNum == 145 && available.includes("CWCG")) {
            feat = "Overwhelming Attack";
        }
        else if (randomNum == 146 && available.includes("CWCG")) {
            feat = "Separatist Military Training";
        }
        else if (randomNum == 147 && available.includes("CWCG")) {
            feat = "Trench Warrior";
        }
        else if (randomNum == 148 && available.includes("CWCG")) {
            feat = "Unstoppable Force";
        }
        else if (randomNum == 149 && available.includes("CWCG")) {
            feat = "Wary Defender";
        }
        if (feats.includes(feat) && feat != "Linguist" && feat != "Skill Training" ||
            feat == "Skill Focus (undefined)") {
            feat = "";
        }
        if (count2 == 500) {
            feat = "ValidSoldierFeatNotFound";
        }
    }

    return feat;
}