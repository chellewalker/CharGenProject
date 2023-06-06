export function getExoticMelee(available,BAB,level,str,dex,cha,feats,talents,size,speciesTraits) {
    let exoticMeleeWeapon = "";
    let string = "";
    let weaponSize;
    let exoticMeleeDice;
    let exoticMeleeDie;
    let relativeSize;
    let randomNum = Math.floor(Math.random() * 2);

    if (size == "Small") {
        relativeSize = 0;
    }
    else if (size == "Medium") {
        relativeSize = 1;
    }
    else if (size == "Large") {
        relativeSize = 2;
    }

    let exoticMeleeAttackRaw = BAB + Math.floor((str-10)/2);

        if (feats.includes("Exotic Weapon Proficiency (Cesta)") || 
                speciesTraits.includes("Weapon Familiarity (Gungan Weaponry)") && randomNum == 0) {
            exoticMeleeWeapon = "Cesta";
            weaponSize = 2;
            exoticMeleeDice = 2;
            exoticMeleeDie = 4;
            if (speciesTraits.includes("Weapon Familiarity (Gungan Weaponry)") && feats.includes("Weapon Focus (Simple Weapons)")) {
                exoticMeleeAttackRaw++;
            }
        }
        else if (feats.includes("Exotic Weapon Proficiency (Atlatl)") || 
                    speciesTraits.includes("Weapon Familiarity (Gungan Weaponry)") && randomNum == 1) {
            exoticMeleeWeapon = "Atlatl";
            weaponSize = 2;
            exoticMeleeDice = 2;
            exoticMeleeDie = 4;
            if (speciesTraits.includes("Weapon Familiarity (Gungan Weaponry)") && feats.includes("Weapon Focus (Simple Weapons)")) {
                exoticMeleeAttackRaw++;
            }
        }
        else if (feats.includes("Exotic Weapon Proficiency (Amphistaff)") || 
                    speciesTraits.includes("Weapon Familiarity (Amphistaff)")) {
            exoticMeleeWeapon = "Amphistaff";
            weaponSize = 2;
            exoticMeleeDice = 1;
            exoticMeleeDie = 6;
            if (speciesTraits.includes("Weapon Familiarity (Amphistaff)") && feats.includes("Weapon Focus (Simple Weapons)")) {
                exoticMeleeAttackRaw++;
            }
        }
        else if (feats.includes("Exotic Weapon Proficiency (Arg'garok)") || 
                    speciesTraits.includes("Weapon Familiarity (Arg'garok)") && feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
            exoticMeleeWeapon = "Arg'garok";
            weaponSize = 2;
            exoticMeleeDice = 2;
            exoticMeleeDie = 12;
            if (speciesTraits.includes("Weapon Familiarity (Arg'garok)") && feats.includes("Weapon Focus (Advanced Melee Weapons)")) {
                exoticMeleeAttackRaw++;
            }
        }
        else if (feats.includes("Exotic Weapon Proficiency (Fira)") || 
                    talents.includes("Fira Mastery")) {
            exoticMeleeWeapon = "Fira";
            weaponSize = 1;
            exoticMeleeDice = 1;
            exoticMeleeDie = 8;
            if (talents.includes("Fira Mastery")) {
                exoticMeleeAttackRaw++;
            }
        }
        else if (feats.includes("Exotic Weapon Proficiency (Shyarn)")) {
            exoticMeleeWeapon = "Shyarn";
            weaponSize = -1;
            exoticMeleeDice = 3;
            exoticMeleeDie = 4;
        }
        else if (feats.includes("Exotic Weapon Proficiency (Zhaboka)")) {
            exoticMeleeWeapon = "Zhaboka";
            weaponSize = 2;
            exoticMeleeDice = 2;
            exoticMeleeDie = 6;
        }

    if (talents.includes("Noble Fencing Style") && feats.includes("Weapon Finesse") && relativeSize < weaponSize) {
        exoticMeleeAttackRaw = BAB + Math.max(Math.floor((cha-10)/2),Math.floor((dex-10)/2),Math.floor((str-10)/2));
    }
    else if (talents.includes("Noble Fencing Style") && relativeSize < weaponSize) {
        exoticMeleeAttackRaw = BAB + Math.max(Math.floor((cha-10)/2),Math.floor((str-10)/2));
    }
    else if (feats.includes("Weapon Finesse") && relativeSize < weaponSize) {
        exoticMeleeAttackRaw = BAB + Math.max(Math.floor((dex-10)/2),Math.floor((str-10)/2));
    }

        let exoticMeleeAttack = "";
        if (exoticMeleeAttackRaw < 0) {
            exoticMeleeAttack = exoticMeleeAttackRaw;
        }
        else {
            exoticMeleeAttack = "+" + exoticMeleeAttackRaw;
        }

    let exoticMeleeDamageRaw = Math.floor(level/2) + Math.floor((str-10)/2);

    let exoticMeleeDamage = "";
    if (exoticMeleeDamageRaw == 0) {
        exoticMeleeDamage = "";
    }
    else if (exoticMeleeDamageRaw < 0) {
        exoticMeleeDamage = exoticMeleeDamageRaw;
    }
    else {
        exoticMeleeDamage = "+" + exoticMeleeDamageRaw;
    }
    string = exoticMeleeWeapon + " " + exoticMeleeAttack +" ("+ exoticMeleeDice+"d"+exoticMeleeDie+exoticMeleeDamage + ")";
    if (feats.includes("Dual Weapon Mastery I") && relativeSize >= weaponSize) {
        exoticMeleeWeapon = exoticMeleeWeapon + " (2)";
    }
    if (exoticMeleeWeapon == "Atlatl" || exoticMeleeWeapon == "Cesta") {
        exoticMeleeWeapon = exoticMeleeWeapon + " (5 Energy Balls)";
    }

    return [string,exoticMeleeWeapon];
}