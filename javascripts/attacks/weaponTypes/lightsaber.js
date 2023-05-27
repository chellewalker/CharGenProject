export function getLightsaber(BAB,level,str,feats) {
    let lightsaberWeapon = "Lightsaber";

    let lightsaberAttackRaw = BAB + Math.floor((str-10)/2);
        let lightsaberAttack = "";
        if (lightsaberAttackRaw < 0) {
            lightsaberAttack = lightsaberAttackRaw;
        }
        else {
            lightsaberAttack = "+" + lightsaberAttackRaw;
        }

    let lightsaberDice = 2;

    let lightsaberDie = 8;

    let lightsaberDamageRaw = Math.floor(level/2) + Math.floor((str-10)/2);
    let lightsaberDamage = "";
    if (lightsaberDamageRaw < 0) {
        lightsaberDamage = lightsaberDamageRaw;
    }
    else {
        lightsaberDamage = "+" + lightsaberDamageRaw;
    }
    let string = lightsaberWeapon + " " + lightsaberAttack +" ("+ lightsaberDice+"d"+lightsaberDie+lightsaberDamage + ")";

    return string,lightsaberWeapon;
}