export function getExoticRanged(available,BAB,level,dex,feats,talents,size,speciesTraits) {
    let exoticRangedWeapon = "";
    let string = "";
    let weaponSize;
    let exoticRangedDice;
    let exoticRangedDie;
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
    if (speciesTraits.includes("Extra Arms")) {
        relativeSize++;
    }

    let exoticRangedAttackRaw = BAB + Math.floor((dex-10)/2);

        if (feats.includes("Exotic Weapon Proficiency (Flamethrower)")) {
            exoticRangedWeapon = "Flamethrower";
            weaponSize = 1;
            exoticRangedDice = 3;
            exoticRangedDie = 6;
            special = " (Fire), 6-Square Cone";
        }
        else if (feats.includes("Exotic Weapon Proficiency (Bowcaster)") || 
                    speciesTraits.includes("Weapon Familiarity (Bowcaster and Ryyk Blade)") && feats.includes("Weapon Proficiency (Rifles)")) {
            exoticRangedWeapon = "Bowcaster";
            weaponSize = 2;
            exoticRangedDice = 3;
            exoticRangedDie = 10;
            if (speciesTraits.includes("Weapon Familiarity (Bowcaster and Ryyk Blade)") && feats.includes("Weapon Focus (Rifles)")) {
                exoticRangedAttackRaw++;
            }
        }
        else if (feats.includes("Exotic Weapon Proficiency (Aurial Blaster)")) {
            exoticRangedWeapon = "Aurial Blaster";
            weaponSize = 1;
            exoticRangedDice = 3;
            exoticRangedDie = 6;
            special = " (Sonic)";
        }
        else if (feats.includes("Exotic Weapon Proficiency (Massassi Lanvarok)") || 
                    speciesTraits.includes("Weapon Familiarity (Massassi Lanvarok)")) {
            exoticRangedWeapon = "Massassi Lanvarok";
            weaponSize = 2;
            exoticRangedDice = 3;
            exoticRangedDie = 4;
            if (speciesTraits.includes("Weapon Familiarity (Massassi Lanvarok)") && feats.includes("Weapon Focus (Simple Weapons)")) {
                exoticRangedAttackRaw++;
            }
        }
        else if (feats.includes("Exotic Weapon Proficiency (Sith Lanvarok)")) {
            exoticRangedWeapon = "Sith Lanvarok";
            weaponSize = 1;
            exoticRangedDice = 3;
            exoticRangedDie = 4;
        }
        else if (feats.includes("Exotic Weapon Proficiency (Deck Sweeper)")) {
            exoticRangedWeapon = "Deck Sweeper";
            weaponSize = 2;
            exoticRangedDice = 3;
            exoticRangedDie = 6;
            special = " (Stun), 6-Square Cone";
        }
        else if (feats.includes("Exotic Weapon Proficiency (Neural Inhibitor)")) {
            exoticRangedWeapon = "Neural Inhibitor";
            weaponSize = 1;
            exoticRangedDice = 1;
            exoticRangedDie = 6;
        }
        else if (feats.includes("Exotic Weapon Proficiency (Pulse Rifle)")) {
            exoticRangedWeapon = "Pulse Rifle";
            weaponSize = 1;
            exoticRangedDice = 2;
            exoticRangedDie = 8;
            special = ", 6-Square Cone";
        }
        else if (feats.includes("Exotic Weapon Proficiency (Wrist Rocket Launcher)")) {
            exoticRangedWeapon = "Wrist Rocket Launcher";
            weaponSize = 0;
            exoticRangedDice = 3;
            exoticRangedDie = 8;
            special = ", 1-Square Burst";
        }

        let exoticRangedAttack = "";
        if (exoticRangedAttackRaw < 0) {
            exoticRangedAttack = exoticRangedAttackRaw;
        }
        else {
            exoticRangedAttack = "+" + exoticRangedAttackRaw;
        }

    let exoticRangedDamageRaw = Math.floor(level/2);

    let exoticRangedDamage = "";
    if (exoticRangedDamageRaw == 0) {
        exoticRangedDamage = "";
    }
    else if (exoticRangedDamageRaw < 0) {
        exoticRangedDamage = exoticRangedDamageRaw;
    }
    else {
        exoticRangedDamage = "+" + exoticRangedDamageRaw;
    }
    string = exoticRangedWeapon + " " + exoticRangedAttack +" ("+ exoticRangedDice+"d"+exoticRangedDie+exoticRangedDamage + special + ")";
    if (feats.includes("Dual Weapon Mastery I") && relativeSize >= weaponSize) {
        exoticRangedWeapon = exoticRangedWeapon + " (2)";
    }

    return [string,exoticRangedWeapon];
}