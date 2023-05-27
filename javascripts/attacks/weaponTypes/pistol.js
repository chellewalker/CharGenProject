export function getPistol(BAB,level,dex,feats) {
    let pistolWeapon = "Blaster Pistol";

    let pistolAttackRaw = BAB + Math.floor((dex-10)/2);
        let pistolAttack = "";
        if (pistolAttackRaw < 0) {
            pistolAttack = pistolAttackRaw;
        }
        else {
            pistolAttack = "+" + pistolAttackRaw;
        }

    let pistolDice = 3;

    let pistolDie = 6;

    let pistolDamageRaw = Math.floor(level/2) + Math.floor((str-10)/2);
    let pistolDamage = "";
    if (pistolDamageRaw < 0) {
        pistolDamage = pistolDamageRaw;
    }
    else {
        pistolDamage = "+" + pistolDamageRaw;
    }
    let string = pistolWeapon + " " + pistolAttack +" ("+ pistolDice+"d"+pistolDie+pistolDamage + ")";

    return string,pistolWeapon;
}