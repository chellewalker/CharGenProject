export function getRifle(BAB,level,dex,feats) {
    let rifleWeapon = "Blaster Rifle";

    let rifleAttackRaw = BAB + Math.floor((dex-10)/2);
        let rifleAttack = "";
        if (rifleAttackRaw < 0) {
            rifleAttack = rifleAttackRaw;
        }
        else {
            rifleAttack = "+" + rifleAttackRaw;
        }

    let rifleDice = 3;

    let rifleDie = 8;

    let rifleDamageRaw = Math.floor(level/2) + Math.floor((str-10)/2);
    let rifleDamage = "";
    if (rifleDamageRaw < 0) {
        rifleDamage = rifleDamageRaw;
    }
    else {
        rifleDamage = "+" + rifleDamageRaw;
    }
    let string = rifleWeapon + " " + rifleAttack +" ("+ rifleDice+"d"+rifleDie+rifleDamage + ")";

    return string,rifleWeapon;
}