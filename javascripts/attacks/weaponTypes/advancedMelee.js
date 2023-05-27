export function getAdvancedMelee(BAB,level,str,feats) {
    let advancedMeleeWeapon = "Vibroblade";

    let advancedMeleeAttackRaw = BAB + Math.floor((str-10)/2);
        let advancedMeleeAttack = "";
        if (advancedMeleeAttackRaw < 0) {
            advancedMeleeAttack = advancedMeleeAttackRaw;
        }
        else {
            advancedMeleeAttack = "+" + advancedMeleeAttackRaw;
        }

    let advancedMeleeDice = 2;

    let advancedMeleeDie = 6;

    let advancedMeleeDamageRaw = Math.floor(level/2) + Math.floor((str-10)/2);
    let advancedMeleeDamage = "";
    if (advancedMeleeDamageRaw < 0) {
        advancedMeleeDamage = advancedMeleeDamageRaw;
    }
    else {
        advancedMeleeDamage = "+" + advancedMeleeDamageRaw;
    }
    let string = advancedMeleeWeapon + " " + advancedMeleeAttack +" ("+ advancedMeleeDice+"d"+advancedMeleeDie+advancedMeleeDamage + ")";

    return string,advancedMeleeWeapon;
}