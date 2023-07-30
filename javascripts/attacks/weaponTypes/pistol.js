export function getPistol(available,BAB,level,dex,feats,talents,size,speciesTraits) {
    let pistolWeapon = "";
    let weaponSize;
    let pistolDice;
    let pistolDie;
    let special = "";
    let relativeSize;

    if (size == "Small") {
        relativeSize = 0;
    }
    else if (size == "Medium") {
        relativeSize = 1;
    }
    else if (size == "Large") {
        relativeSize = 2;
    }
    if (speciesTraits.includes("Extra Arms") || feats.includes("Wookiee Grip")) {
        relativeSize++;
    }

    let pistolAttackRaw = BAB + Math.floor((dex-10)/2);
    if (feats.includes("Weapon Focus (Pistols)")) {
        pistolAttackRaw++;
    }
    if (talents.includes("Greater Weapon Focus (Pistols)")) {
        pistolAttackRaw++;
    }

    let pistolDamageRaw = Math.floor(level/2);
    while (pistolWeapon == "") {
        let randomNum = Math.floor(Math.random() * 31);

        if (randomNum == 0) {
            pistolWeapon = "Blaster Pistol";
            weaponSize = 0;
            pistolDice = 3;
            pistolDie = 6;
        }
        if (randomNum == 1 && available.includes("CR") && size != "Small") {
            pistolWeapon = "Heavy Blaster Pistol";
            weaponSize = 1;
            pistolDice = 3;
            pistolDie = 8;
        }
        if (randomNum == 2 && available.includes("CR") && size != "Large") {
            pistolWeapon = "Hold-Out Blaster Pistol";
            weaponSize = -1;
            pistolDice = 3;
            pistolDie = 4;
        }
        if (randomNum == 3 && available.includes("CR")) {
            pistolWeapon = "Ion Pistol";
            weaponSize = 0;
            pistolDice = 3;
            pistolDie = 6;
            special = " (Ion)";
            if (feats.includes("Riflemaster")) {
                pistolDie = 8;
            }
        }
        if (randomNum == 4 && available.includes("CR")) {
            pistolWeapon = "Sporting Blaster Pistol";
            weaponSize = 0;
            pistolDice = 3;
            pistolDie = 4;
        }
        if (randomNum == 5 && available.includes("CR")) {
            pistolWeapon = "Slugthrower Pistol";
            weaponSize = 0;
            pistolDice = 2;
            pistolDie = 6;
            if (feats.includes("Sport Hunter")) {
                pistolDice++;
            }
        }
        if (randomNum == 6 && available.includes("TotG")) {
            pistolWeapon = "Sonic Stunner";
            weaponSize = -1;
            pistolDice = 3;
            pistolDie = 6;
            special = " (Stun)";
        }
        if (randomNum == 7 && available.includes("KotORCG")) {
            pistolWeapon = "Heavy Sonic Pistol";
            weaponSize = 1;
            pistolDice = 2;
            pistolDie = 8;
            special = " (Sonic)";
        }
        if (randomNum == 8 && available.includes("KotORCG")) {
            pistolWeapon = "Needler";
            weaponSize = 0;
            pistolDice = 2;
            pistolDie = 4;
        }
        if (randomNum == 9 && available.includes("KotORCG")) {
            pistolWeapon = "Pulse-Wave Pistol";
            weaponSize = 0;
            pistolDice = 2;
            pistolDie = 6;
            pistolDamageRaw += 4;
        }
        if (randomNum == 10 && available.includes("KotORCG")) {
            pistolWeapon = "Ripper";
            weaponSize = 0;
            pistolDice = 2;
            pistolDie = 4;
        }
        if (randomNum == 11 && available.includes("KotORCG")) {
            pistolWeapon = "Sonic Disruptor";
            weaponSize = 0;
            pistolDice = 2;
            pistolDie = 6;
            special = " (Sonic)";
        }
        if (randomNum == 12 && available.includes("KotORCG")) {
            pistolWeapon = "Sonic Pistol";
            weaponSize = 0;
            pistolDice = 2;
            pistolDie = 6;
            special = " (Sonic)";
        }
        if (randomNum == 13 && available.includes("FUCG")) {
            pistolWeapon = "Bryar Pistol";
            weaponSize = 1;
            pistolDice = 3;
            pistolDie = 4;
        }
        if (randomNum == 14 && available.includes("FUCG")) {
            pistolWeapon = "Disruptor Pistol";
            weaponSize = 1;
            pistolDice = 3;
            pistolDie = 6;
        }
        if (randomNum == 15 && available.includes("SaV")) {
            pistolWeapon = "Subrepeating Blaster";
            weaponSize = 1;
            pistolDice = 3;
            pistolDie = 6;
            special = ", 2-Square Autofire";
            pistolAttackRaw -= 5;
        }
        if (randomNum == 16 && available.includes("CWCG")) {
            pistolWeapon = "Adjudicator Slugthrower";
            weaponSize = -1;
            pistolDice = 2;
            pistolDie = 4;
        }
        if (randomNum == 17 && available.includes("CWCG")) {
            pistolWeapon = "Defender MicroBlaster";
            weaponSize = -1;
            pistolDice = 3;
            pistolDie = 4;
        }
        if (randomNum == 18 && available.includes("CWCG")) {
            pistolWeapon = "DH-23 Blaster Pistol";
            weaponSize = 0;
            pistolDice = 3;
            pistolDie = 6;
        }
        if (randomNum == 19 && available.includes("CWCG")) {
            pistolWeapon = "DT-12 Heavy Blaster";
            weaponSize = 1;
            pistolDice = 4;
            pistolDie = 6;
        }
        if (randomNum == 20 && available.includes("CWCG")) {
            pistolWeapon = "Model 434 DeathHammer";
            weaponSize = 1;
            pistolDice = 3;
            pistolDie = 8;
        }
        if (randomNum == 21 && available.includes("LECG")) {
            pistolWeapon = "Bluebolt Blaster Pistol";
            weaponSize = 1;
            pistolDice = 3;
            pistolDie = 8;
        }
        if (randomNum == 22 && available.includes("LECG")) {
            pistolWeapon = "Snap-Shot Blaster Pistol";
            weaponSize = -1;
            pistolDice = 3;
            pistolDie = 6;
        }
        if (randomNum == 23 && available.includes("GaW")) {
            pistolWeapon = "Ascension Gun";
            weaponSize = 1;
            pistolDice = 3;
            pistolDie = 8;
        }
        if (randomNum == 24 && available.includes("GaW")) {
            pistolWeapon = "Sidearm Blaster Pistol";
            weaponSize = 0;
            pistolDice = 3;
            pistolDie = 6;
        }
        if (randomNum == 25 && available.includes("GoI")) {
            pistolWeapon = "Snare Pistol";
            weaponSize = 1;
            pistolDice = 1;
            pistolDie = 4;
            special = " (Stun)";
        }
        if (randomNum == 26 && available.includes("GoI")) {
            pistolWeapon = "Wrist Blaster";
            weaponSize = -1;
            pistolDice = 3;
            pistolDie = 6;
        }
        if (randomNum == 27 && available.includes("UR")) {
            pistolWeapon = "Black-Powder Pistol";
            weaponSize = 0;
            pistolDice = 2;
            pistolDie = 4;
        }
        if (randomNum == 28 && available.includes("UR")) {
            pistolWeapon = "Heavy Slugthrower Pistol";
            weaponSize = 1;
            pistolDice = 2;
            pistolDie = 8;
        }
        if (randomNum == 29 && available.includes("UR")) {
            pistolWeapon = "Stun Pistol";
            weaponSize = 0;
            pistolDice = 3;
            pistolDie = 6;
            special = " (Stun)";
        }
        if (randomNum == 30 && available.includes("WE")) {
            pistolWeapon = "S-5 Heavy Blaster Pistol";
            weaponSize = 1;
            pistolDice = 3;
            pistolDie = 8;
        }
    }

        let pistolAttack = "";
        if (pistolAttackRaw < 0) {
            pistolAttack = pistolAttackRaw;
        }
        else {
            pistolAttack = "+" + pistolAttackRaw;
        }

    if (talents.includes("Weapon Specialization (Pistols)")) {
        pistolDamageRaw += 2;
    }
    if (talents.includes("Greater Weapon Specialization (Pistols)")) {
        pistolDamageRaw += 2;
    }
    let pistolDamage = "";
    if (pistolDamageRaw == 0) {
        pistolDamage = "";
    }
    else if (pistolDamageRaw < 0) {
        pistolDamage = pistolDamageRaw;
    }
    else {
        pistolDamage = "+" + pistolDamageRaw;
    }
    let string = pistolWeapon + " " + pistolAttack +" ("+ pistolDice+"d"+pistolDie+pistolDamage + special + ")";
    if (feats.includes("Dual Weapon Mastery I") && relativeSize >= weaponSize) {
        pistolWeapon = pistolWeapon + " (2)";
    }

    return [string,pistolWeapon];
}