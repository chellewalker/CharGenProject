export function getSimpleMelee(available,BAB,level,str,dex,cha,feats,talents,size,speciesTraits,tradition) {
    let simpleMeleeWeapon = "";
    let weaponSize;
    let simpleMeleeDice;
    let simpleMeleeDie;
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

    let simpleMeleeAttackRaw = BAB + Math.floor((str-10)/2);
    let simpleMeleeDamageRaw = Math.floor(level/2) + Math.floor((str-10)/2);

    while (simpleMeleeWeapon == "") {
        let randomNum = Math.floor(Math.random() * 26);

        if (randomNum == 0 && available.includes("CR")) {
            simpleMeleeWeapon = "Bayonet";
            weaponSize = 2;
            simpleMeleeDice = 1;
            simpleMeleeDie = 8;
        }
        if (randomNum == 1 && available.includes("CR")) {
            simpleMeleeWeapon = "Club/Baton";
            weaponSize = 0;
            simpleMeleeDice = 1;
            simpleMeleeDie = 6;
        }
        if (randomNum == 2) {
            simpleMeleeWeapon = "Knife";
            weaponSize = -1;
            simpleMeleeDice = 1;
            simpleMeleeDie = 4;
        }
        if (randomNum == 3 && available.includes("CR")) {
            simpleMeleeWeapon = "Mace";
            weaponSize = 1;
            simpleMeleeDice = 1;
            simpleMeleeDie = 8;
        }
        if (randomNum == 4 && available.includes("CR") && size != "Small") {
            simpleMeleeWeapon = "Quarterstaff";
            weaponSize = 2;
            simpleMeleeDice = 1;
            simpleMeleeDie = 6;
        }
        if (randomNum == 5 && available.includes("CR")) {
            simpleMeleeWeapon = "Spear";
            weaponSize = 1;
            simpleMeleeDice = 1;
            simpleMeleeDie = 8;
        }
        if (randomNum == 6 && available.includes("CR")) {
            simpleMeleeWeapon = "Stun Baton";
            weaponSize = 0;
            simpleMeleeDice = 2;
            simpleMeleeDie = 6;
            special = " (Stun)";
        }
        if (randomNum == 7 && available.includes("TotG")) {
            simpleMeleeWeapon = "Datadagger";
            weaponSize = -1;
            simpleMeleeDice = 1;
            simpleMeleeDie = 4;
        }
        if (randomNum == 8 && available.includes("TotG")) {
            simpleMeleeWeapon = "Riot Shield";
            weaponSize = 1;
            simpleMeleeDice = 2;
            simpleMeleeDie = 6;
            special = " (Stun)";
        }
        if (randomNum == 9 && available.includes("TotG")) {
            simpleMeleeWeapon = "Sith Sword";
            weaponSize = 1;
            simpleMeleeDice = 1;
            simpleMeleeDie = 8;
        }
        if (randomNum == 10 && available.includes("KotORCG") && size != "Small") {
            simpleMeleeWeapon = "Dire Sword";
            weaponSize = 2;
            simpleMeleeDice = 1;
            simpleMeleeDie = 10;
        }
        if (randomNum == 11 && available.includes("KotORCG") && size != "Small") {
            simpleMeleeWeapon = "Double-Bladed Sword";
            weaponSize = 2;
            simpleMeleeDice = 1;
            simpleMeleeDie = 6;
        }
        if (randomNum == 12 && available.includes("KotORCG") && size != "Small") {
            simpleMeleeWeapon = "Mythosaur Axe";
            weaponSize = 2;
            simpleMeleeDice = 1;
            simpleMeleeDie = 12;
        }
        if (randomNum == 13 && available.includes("KotORCG")) {
            simpleMeleeWeapon = "Short Sword";
            weaponSize = 0;
            simpleMeleeDice = 1;
            simpleMeleeDie = 6;
        }
        if (randomNum == 14 && available.includes("KotORCG")) {
            simpleMeleeWeapon = "War Sword";
            weaponSize = 1;
            simpleMeleeDice = 1;
            simpleMeleeDie = 8;
        }
        if (randomNum == 15 && available.includes("CWCG")) {
            simpleMeleeWeapon = "Snap Baton";
            weaponSize = 0;
            simpleMeleeDice = 2;
            simpleMeleeDie = 4;
        }
        if (randomNum == 16 && available.includes("JATM")) {
            simpleMeleeWeapon = "Wan-Shen";
            weaponSize = 2;
            simpleMeleeDice = 2;
            simpleMeleeDie = 6;
        }
        if (randomNum == 17 && available.includes("RECG")) {
            simpleMeleeWeapon = "Axe";
            weaponSize = 1;
            simpleMeleeDice = 1;
            simpleMeleeDie = 8;
        }
        if (randomNum == 18 && available.includes("RECG")) {
            simpleMeleeWeapon = "Gaderffii";
            weaponSize = 2;
            simpleMeleeDice = 2;
            simpleMeleeDie = 4;
        }
        if (randomNum == 19 && available.includes("GaW")) {
            simpleMeleeWeapon = "Entrenching Tool";
            weaponSize = 0;
            simpleMeleeDice = 1;
            simpleMeleeDie = 6;
            simpleMeleeAttackRaw -= 2;
        }
        if (randomNum == 20 && available.includes("GaW")) {
            simpleMeleeWeapon = "Fire Blade";
            weaponSize = 0;
            simpleMeleeDice = 2;
            simpleMeleeDie = 4;
        }
        if (randomNum == 21 && available.includes("UR")) {
            simpleMeleeWeapon = "Contact Stunner";
            weaponSize = 0;
            simpleMeleeDice = 2;
            simpleMeleeDie = 8;
            special = " (Stun)";
        }
        if (randomNum == 22 && available.includes("UR")) {
            simpleMeleeWeapon = "Survival Knife";
            weaponSize = 0;
            simpleMeleeDice = 1;
            simpleMeleeDie = 6;
        }
        if (randomNum == 23 && available.includes("HC")) {
            simpleMeleeWeapon = "Hook Blade";
            weaponSize = -1;
            simpleMeleeDice = 1;
            simpleMeleeDie = 4;
        }
        if (randomNum == 24 && available.includes("HC")) {
            simpleMeleeWeapon = "Slaver Blade";
            weaponSize = 1;
            simpleMeleeDice = 1;
            simpleMeleeDie = 10;
            if (str < 14) {
                simpleMeleeAttackRaw -= 5;
                simpleMeleeDamageRaw -= 5;
            }
        }
        if (randomNum == 25 && available.includes("HC")) {
            simpleMeleeWeapon = "Throwing Knife";
            weaponSize = -1;
            simpleMeleeDice = 1;
            simpleMeleeDie = 4;
        }
        if (tradition == 18) {
            simpleMeleeWeapon = "Wan-Shen";
            weaponSize = 2;
            simpleMeleeDice = 2;
            simpleMeleeDie = 6;
            special = "";
        }
    }

    if (talents.includes("Noble Fencing Style") && feats.includes("Weapon Finesse") && relativeSize > weaponSize) {
        simpleMeleeAttackRaw = BAB + Math.max(Math.floor((cha-10)/2),Math.floor((dex-10)/2),Math.floor((str-10)/2));
    }
    else if (talents.includes("Noble Fencing Style") && relativeSize > weaponSize) {
        simpleMeleeAttackRaw = BAB + Math.max(Math.floor((cha-10)/2),Math.floor((str-10)/2));
    }
    else if (feats.includes("Weapon Finesse") && relativeSize > weaponSize) {
        simpleMeleeAttackRaw = BAB + Math.max(Math.floor((dex-10)/2),Math.floor((str-10)/2));
    }
    if (feats.includes("Weapon Focus (Simple Weapons)")) {
        simpleMeleeAttackRaw++;
    }
    if (talents.includes("Greater Weapon Focus (Simple Weapons)")) {
        simpleMeleeAttackRaw++;
    }

        let simpleMeleeAttack = "";
        if (simpleMeleeAttackRaw < 0) {
            simpleMeleeAttack = simpleMeleeAttackRaw;
        }
        else {
            simpleMeleeAttack = "+" + simpleMeleeAttackRaw;
        }

    if (talents.includes("Weapon Specialization (Simple Weapons)")) {
        simpleMeleeDamageRaw += 2;
    }
    if (talents.includes("Greater Weapon Specialization (Simple Weapons)")) {
        simpleMeleeDamageRaw += 2;
    }
    if (talents.includes("Melee Smash")) {
        simpleMeleeDamageRaw++;
    }
    let simpleMeleeDamage = "";
    if (simpleMeleeDamageRaw == 0) {
        simpleMeleeDamage = "";
    }
    else if (simpleMeleeDamageRaw < 0) {
        simpleMeleeDamage = simpleMeleeDamageRaw;
    }
    else {
        simpleMeleeDamage = "+" + simpleMeleeDamageRaw;
    }
    let string = simpleMeleeWeapon + " " + simpleMeleeAttack +" ("+ simpleMeleeDice+"d"+simpleMeleeDie+simpleMeleeDamage + special + ")";
    if (feats.includes("Dual Weapon Mastery I") && relativeSize >= weaponSize) {
        simpleMeleeWeapon = simpleMeleeWeapon + " (2)";
    }

    return [string,simpleMeleeWeapon];
}