export function getHeavyWeapon(BAB,level,dex,feats) {
    let heavyWeaponWeapon = "Blaster Cannon";

    let heavyWeaponAttackRaw = BAB + Math.floor((dex-10)/2);
        let heavyWeaponAttack = "";
        if (heavyWeaponAttackRaw < 0) {
            heavyWeaponAttack = heavyWeaponAttackRaw;
        }
        else {
            heavyWeaponAttack = "+" + heavyWeaponAttackRaw;
        }

    let heavyWeaponDice = 3;

    let heavyWeaponDie = 8;

    let heavyWeaponDamageRaw = Math.floor(level/2) + Math.floor((str-10)/2);
    let heavyWeaponDamage = "";
    if (heavyWeaponDamageRaw < 0) {
        heavyWeaponDamage = heavyWeaponDamageRaw;
    }
    else {
        heavyWeaponDamage = "+" + heavyWeaponDamageRaw;
    }
    let areaEffect = ", 1-Square Splash";

    let string = heavyWeaponWeapon + " " + heavyWeaponAttack +" ("+ heavyWeaponDice+"d"+heavyWeaponDie+heavyWeaponDamage + areaEffect + ")";

    return string,heavyWeaponWeapon;
}