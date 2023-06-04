export function getFortitude(classes,con,level,speciesTraits,feats,armorFort) {

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

    let fortitude = 10 + Math.floor((con-10)/2) + parseInt(level) + classFortitude + armorFort;
        if (speciesTraits.includes("Great Fortitude")) {
            fortitude += 2;
        }
        if (speciesTraits.includes("Superior Defenses")) {
            fortitude++;
        }
        if (feats.includes("Improved Defenses")) {
            fortitude++;
        }

    return fortitude;
}

export function getDamageThreshold(fortitude,size,feats) {
    let damageThreshold = fortitude;
        if (size == "Large") {
            damageThreshold += 5;
        }
        if (feats.includes("Improved Damage Threshold")) {
            damageThreshold += 5;
        }

    return damageThreshold;
}