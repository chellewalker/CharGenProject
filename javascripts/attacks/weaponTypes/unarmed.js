export function getUnarmed(BAB,level,str,dex,cha,feats,talents,size,speciesTraits) {
    let unarmedAttackRaw = BAB + Math.floor((str-10)/2);
    if (talents.includes("Noble Fencing Style") && feats.includes("Weapon Finesse")) {
        unarmedAttackRaw = BAB + Math.max(Math.floor((cha-10)/2),Math.floor((dex-10)/2),Math.floor((str-10)/2));
    }
    else if (talents.includes("Noble Fencing Style")) {
        unarmedAttackRaw = BAB + Math.max(Math.floor((cha-10)/2),Math.floor((str-10)/2));
    }
    else if (feats.includes("Weapon Finesse")) {
        unarmedAttackRaw = BAB + Math.max(Math.floor((dex-10)/2),Math.floor((str-10)/2));
    }
    if (feats.includes("Weapon Focus (Simple Weapons)")) {
        unarmedAttackRaw++;
    }

        let unarmedAttack = "";
        if (unarmedAttackRaw < 0) {
            unarmedAttack = unarmedAttackRaw;
        }
        else {
            unarmedAttack = "+" + unarmedAttackRaw;
        }

    let unarmedDice = 1;

    let unarmedList = [2,3,4,6,8,10,12];
        let unarmedDie = 2;
        if (size == "Small") {
            unarmedDie--;
        }
        if (size == "Large") {
            unarmedDie++;
        }
        if (speciesTraits.includes("Natural Weapons")) {
            unarmedDie = 3;
        }

    if (feats.includes("Martial Arts I")) {
        unarmedDie++;
    }
    if (feats.includes("Martial Arts II")) {
        unarmedDie++;
    }
    if (feats.includes("Martial Arts III")) {
        unarmedDie++;
    }

    let unarmedDamageRaw = Math.floor(level/2) + Math.floor((str-10)/2);
    if (talents.includes("Weapon Specialization (Simple Weapons)")) {
        unarmedDamageRaw += 2;
    }
    let unarmedDamage = "";
    if (unarmedDamageRaw == 0) {
        unarmedDamage = "";
    }
    else if (unarmedDamageRaw < 0) {
        unarmedDamage = unarmedDamageRaw;
    }
    else {
        unarmedDamage = "+" + unarmedDamageRaw;
    }
    let string = "Unarmed " + unarmedAttack +" ("+ unarmedDice+"d"+unarmedList[unarmedDie]+unarmedDamage + ")";

    return string;
}