export function getBellow(available,BAB,level,dex,feats,talents,size) {
    let bellowWeapon = "";
    let bellowDice;
    let bellowDie;
    let special = "";
    let bellowAttackRaw = level;

    bellowWeapon = "Bellow";
            bellowDice = 3;
            bellowDie = 6;
            special = " (Sonic), 6-Square Cone";
        
        let bellowAttack = "";
        if (bellowAttackRaw < 0) {
            bellowAttack = bellowAttackRaw;
        }
        else {
            bellowAttack = "+" + bellowAttackRaw;
        }

    let bellowDamageRaw = Math.floor(level/2);

    let bellowDamage = "";
    if (bellowDamageRaw == 0) {
        bellowDamage = "";
    }
    else if (bellowDamageRaw < 0) {
        bellowDamage = bellowDamageRaw;
    }
    else {
        bellowDamage = "+" + bellowDamageRaw;
    }
    let string = bellowWeapon + " " + bellowAttack +" ("+ bellowDice+"d"+bellowDie+bellowDamage + special + ")";

    return [string,bellowWeapon];
}