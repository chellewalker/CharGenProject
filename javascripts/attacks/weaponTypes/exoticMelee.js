export function getExoticMelee(available,BAB,level,str,dex,cha,feats,talents,size,speciesTraits) {
    let exoticMeleeWeapon = "";
    let string = "";
    let weaponSize;
    let exoticMeleeDice;
    let exoticMeleeDie;
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

    let exoticMeleeAttackRaw = BAB + Math.floor((str-10)/2);

        if (feats.includes("Exotic Weapon Proficiency (Cesta)") || 
                speciesTraits.includes("Weapon Familiarity (Gungan Weaponry)")) {
            exoticMeleeWeapon = "Cesta";
            weaponSize = 2;
            exoticMeleeDice = 2;
            exoticMeleeDie = 4;
        }
        else if (feats.includes("Exotic Weapon Proficiency (Atlatl)") || 
                    speciesTraits.includes("Weapon Familiarity (Gungan Weaponry)")) {
            exoticMeleeWeapon = "Atlatl";
            weaponSize = 1;
            exoticMeleeDice = 2;
            exoticMeleeDie = 4;
        }
        else if (feats.includes("Exotic Weapon Proficiency (Amphistaff)") || 
                    speciesTraits.includes("Weapon Familiarity (Amphistaff)")) {
            exoticMeleeWeapon = "Amphistaff";
            weaponSize = 2;
            exoticMeleeDice = 1;
            exoticMeleeDie = 6;
        }
        else if (feats.includes("Exotic Weapon Proficiency (Arg'garok)") || 
                    speciesTraits.includes("Weapon Familiarity (Arg'garok)") && feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
            exoticMeleeWeapon = "Arg'garok";
            weaponSize = 2;
            exoticMeleeDice = 2;
            exoticMeleeDie = 12;
        }
        else if (feats.includes("Exotic Weapon Proficiency (Fira)") || 
                    talents.includes("Fira Mastery")) {
            exoticMeleeWeapon = "Fira";
            weaponSize = 1;
            exoticMeleeDice = 1;
            exoticMeleeDie = 8;
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
            exoticMeleeDice = 3;
            exoticMeleeDie = 4;
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
    if (feats.includes("Dual Weapon Mastery I") && relativeSize <= weaponSize) {
        exoticMeleeWeapon = exoticMeleeWeapon + " (2)";
    }

    return [string,exoticMeleeWeapon];
}