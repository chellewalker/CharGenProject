export function speciesFeats(feats,speciesTraits,skills) {
    if (speciesTraits.includes("Bonus Feat (Improved Damage Threshold)")) {
        feats.push("Improved Damage Threshold");
    }
    if (speciesTraits.includes("Bonus Feat (Toughness)")) {
        feats.push("Toughness");
    }
    if (speciesTraits.includes("Bonus Feat (Skill Focus)")) {
        let check = 0;
        let check2 = 0;
        while (check == 0) {
            check2++;
            let randomNum = Math.floor(Math.random() * skills.length);
            if (skills[randomNum] == "Endurance" ||
                    skills[randomNum] == "Mechanics" ||
                    skills[randomNum] == "Pilot" ||
                    skills[randomNum] == "Survival" ||
                    skills[randomNum] == "Treat Injury") {
                feats.push("Skill Focus ("+skills[randomNum]+")");
                check = 1;
            }
        if (check2 > 10) {
            check = 1;
        }
        }
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Gather Information))") && 
        skills.includes("Gather Information")) {
        feats.push("Skill Focus (Gather Information)");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Initiative))") && 
        skills.includes("Initiative")) {
        feats.push("Skill Focus (Initiative)");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Knowledge (Life Sciences)))") && 
        skills.includes("Knowledge (Life Sciences)")) {
        feats.push("Skill Focus (Knowledge (Life Sciences))");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Perception))") && 
        skills.includes("Perception")) {
        feats.push("Skill Focus (Perception)");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Persuasion))") && 
        skills.includes("Persuasion")) {
        feats.push("Skill Focus (Persuasion)");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Survival))") && 
        skills.includes("Survival")) {
        feats.push("Skill Focus (Survival)");
    }
    
    feats.sort();
    return feats;
}