import {getAdvancedMelee} from './weaponTypes/advancedMelee.js';
import {getHeavyWeapon} from './weaponTypes/heavyWeapon.js';
import {getLightsaber} from './weaponTypes/lightsaber.js';
import {getPistol} from './weaponTypes/pistol.js';
import {getRifle} from './weaponTypes/rifle.js';

export function getWeapon(BAB,level,str,dex,feats) {
    let equipment = [];
    let temp = "";
    let advancedMelee = "";
    let heavyWeapon = "";
    let lightsaber = "";
    let pistol = "";
    let rifle = "";
    let otherAttack = "";

    if (feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
        advancedMelee,temp = getAdvancedMelee(BAB,level,str,feats);
        equipment.push(temp);
    }
    if (feats.includes("Weapon Proficiency (Heavy Weapons)")) {
        heavyWeapon,temp = getHeavyWeapon(BAB,level,dex,feats);
        equipment.push(temp);
    }
    if (feats.includes("Weapon Proficiency (Lightsabers)")) {
        lightsaber,temp = getLightsaber(BAB,level,str,feats);
        equipment.push(temp);
    }
    if (feats.includes("Weapon Proficiency (Pistols)")) {
        pistol,temp = getPistol(BAB,level,dex,feats);
        equipment.push(temp);
    }
    if (feats.includes("Weapon Proficiency (Rifles)")) {
        rifle,temp = getRifle(BAB,level,dex,feats);
        equipment.push(temp);
    }

    return advancedMelee,heavyWeapon,lightsaber,pistol,rifle,otherAttack,equipment;
}