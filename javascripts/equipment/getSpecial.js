export function getSpecial(speciesTraits) {
    let speciesEquipment = [];

    if (speciesTraits.includes("Special Equipment (Antiox Breath Mask)")) {
        speciesEquipment.push("Antiox Breath Mask");
    }

    return speciesEquipment;
}