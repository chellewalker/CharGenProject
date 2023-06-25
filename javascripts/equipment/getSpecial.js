export function getSpecial(speciesTraits) {
    let speciesEquipment = [];

    if (speciesTraits.includes("Special Equipment (Antiox Breath Mask)")) {
        speciesEquipment.push("Antiox Breath Mask");
    }
    if (speciesTraits.includes("Special Equipment (Breathing Apparatus and Transliterator)")) {
        speciesEquipment.push("Breathing Apparatus");
        speciesEquipment.push("Transliterator");
    }

    return speciesEquipment;
}