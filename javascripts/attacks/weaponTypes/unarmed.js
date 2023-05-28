export function getUnarmed(BAB,level,str,size,speciesTraits,feats) {
    let unarmedAttackRaw = BAB + Math.floor((str-10)/2);
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