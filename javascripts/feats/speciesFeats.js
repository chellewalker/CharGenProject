export function speciesFeats(feats,speciesTraits,skills) {
    if (speciesTraits.split(", ").includes("Bonus Feat (Improved Damage Threshold)")) {
        feats.push("Improved Damage Threshold");
    }
    if (speciesTraits.split(", ").includes("Bonus Feat (Toughness)")) {
        feats.push("Toughness");
    }
    if (speciesTraits.split(", ").includes("Bonus Feat (Skill Focus)")) {
        let check = 0;
        let check2 = 0;
        while (check == 0) {
            check2++;
        let randomNum = Math.round(Math.random() * 5);
        if (randomNum == 0) {
            if (skills.includes("Endurance")) {
                feats.push("Skill Focus (Endurance)");
                check = 1;
            }
        }
        if (randomNum == 1) {
            if (skills.includes("Mechanics")) {
                feats.push("Skill Focus (Mechanics)");
                check = 1;
            }
        }
        if (randomNum == 2) {
            if (skills.includes("Pilot")) {
                feats.push("Skill Focus (Pilot)");
                check = 1;
            }
        }
        if (randomNum == 3) {
            if (skills.includes("Survival")) {
                feats.push("Skill Focus (Survival)");
                check = 1;
            }
        }
        if (randomNum == 4) {
            if (skills.includes("Treat Injury")) {
                feats.push("Skill Focus (Treat Injury)");
                check = 1;
            }
        }
        if (check2 > 10) {
            check = 1;
        }
        }
    }
    if (speciesTraits.split(", ").includes("Conditional Bonus Feat (Skill Focus (Gather Information))") && 
        skills.includes("Gather Information")) {
        feats.push("Skill Focus (Gather Information)");
    }
    if (speciesTraits.split(", ").includes("Conditional Bonus Feat (Skill Focus (Initiative))") && 
        skills.includes("Initiative")) {
        feats.push("Skill Focus (Initiative)");
    }
    if (speciesTraits.split(", ").includes("Conditional Bonus Feat (Skill Focus (Knowledge (Life Sciences)))") && 
        skills.includes("Knowledge (Life Sciences)")) {
        feats.push("Skill Focus (Knowledge (Life Sciences))");
    }
    if (speciesTraits.split(", ").includes("Conditional Bonus Feat (Skill Focus (Perception))") && 
        skills.includes("Perception")) {
        feats.push("Skill Focus (Perception)");
    }
    if (speciesTraits.split(", ").includes("Conditional Bonus Feat (Skill Focus (Persuasion))") && 
        skills.includes("Persuasion")) {
        feats.push("Skill Focus (Persuasion)");
    }
    if (speciesTraits.split(", ").includes("Conditional Bonus Feat (Skill Focus (Survival))") && 
        skills.includes("Survival")) {
        feats.push("Skill Focus (Survival)");
    }
    
    feats.sort();
    return feats;
}