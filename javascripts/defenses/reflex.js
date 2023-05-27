export function getReflex(classes,dex,level,size,speciesTraits,feats) {

    let classReflex = 0;

        if (classes[0] > 0) {
            classReflex = 1;
        }
        if (classes[1] > 0) {
            classReflex = Math.max(classReflex,1);
        }
        if (classes[2] > 0) {
            classReflex = Math.max(classReflex,2);
        }
        if (classes[3] > 0) {
            classReflex = Math.max(classReflex,2);
        }
        if (classes[4] > 0) {
            classReflex = Math.max(classReflex,1);
        }

    let reflex = 10 + Math.floor((dex-10)/2) + parseInt(level) + classReflex;
        if (size == "Small") {
            reflex++;
        }
        if (size == "Large") {
            reflex--;
        }
        if (speciesTraits.includes("Lightning Reflexes")) {
            reflex += 2;
        }
        if (speciesTraits.includes("Natural Armor (+1)")) {
            reflex++;
        }
        if (speciesTraits.includes("Natural Armor (+2)")) {
            reflex += 2;
        }
        if (speciesTraits.includes("Superior Defenses")) {
            reflex++;
        }
        if (feats.includes("Improved Defenses")) {
            reflex++;
        }
        if (feats.includes("Martial Arts I")) {
            reflex++;
        }
        if (feats.includes("Martial Arts II")) {
            reflex++;
        }
        if (feats.includes("Martial Arts III")) {
            reflex++;
        }

    return reflex;
}

export function getFlatFooted(reflex,dex,feats) {
    let flatFooted;
    if (dex > 11) {
        flatFooted = reflex - Math.floor((dex-10)/2);
        if (feats.includes("Martial Arts I")) {
            flatFooted--;
        }
        if (feats.includes("Martial Arts II")) {
            flatFooted--;
        }
        if (feats.includes("Martial Arts III")) {
            flatFooted--;
        }
    }
    else {
        flatFooted = reflex;
    }

    return flatFooted;
}