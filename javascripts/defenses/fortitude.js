import {getWill} from './will.js';

export function getFortitude(classes,con,str,level,speciesTraits,feats,armorFort,talents) {

    let classFortitude = 0;

        if (classes[0] > 0) {
            classFortitude = 1;
        }
        if (classes[1] > 0) {
            classFortitude = Math.max(classFortitude,0);
        }
        if (classes[2] > 0) {
            classFortitude = Math.max(classFortitude,0);
        }
        if (classes[3] > 0) {
            classFortitude = Math.max(classFortitude,1);
        }
        if (classes[4] > 0) {
            classFortitude = Math.max(classFortitude,2);
        }
        //Ace Pilot
        if (classes[5] > 0) {
            classFortitude = Math.max(classFortitude,2);
        }
        //Bounty Hunter
        if (classes[6] > 0) {
            classFortitude = Math.max(classFortitude,2);
        }
        //Elite Trooper
        if (classes[8] > 0) {
            classFortitude = Math.max(classFortitude,4);
        }
        //Force Adept
        if (classes[9] > 0) {
            classFortitude = Math.max(classFortitude,2);
        }
        //Force Disciple
        if (classes[10] > 0) {
            classFortitude = Math.max(classFortitude,3);
        }

    let fortitude = 10 + Math.floor((con-10)/2) + parseInt(level) + classFortitude + armorFort;
    if (feats.includes("Resilient Strength")) {
        fortitude = 10 + Math.floor((Math.max(con,str)-10)/2) + parseInt(level) + classFortitude + armorFort;
    }
        if (speciesTraits.includes("Great Fortitude")) {
            fortitude += 2;
        }
        if (speciesTraits.includes("Resilient")) {
            fortitude++;
        }
        if (speciesTraits.includes("Tough")) {
            fortitude += 2;
        }
        if (speciesTraits.includes("Superior Defenses")) {
            fortitude++;
        }
        if (speciesTraits.includes("Carapace")) {
            fortitude++;
        }
        if (feats.includes("Improved Defenses")) {
            fortitude++;
        }

    return fortitude;
}

export function getDamageThreshold(fortitude,size,feats,talents,speciesTraits,classes,wis,cha,level,armorFort) {
    let damageThreshold = fortitude;
    if (feats.includes("Fight Through Pain")) {
        damageThreshold = getWill(classes,wis,cha,level,speciesTraits,feats,talents,armorFort);
    }
        if (size == "Large") {
            damageThreshold += 5;
        }
        if (feats.includes("Improved Damage Threshold")) {
            damageThreshold += 5;
        }
        if (speciesTraits.includes("Tough")) {
            fortitude += 5;
        }

    return damageThreshold;
}