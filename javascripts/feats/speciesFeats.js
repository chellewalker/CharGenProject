export function speciesFeats(feats,speciesTraits,skills,str,dex,con,int,wis,cha) {
    if (speciesTraits.includes("Bonus Feat (Force Sensitivity)")) {
        if (feats.includes("Force Sensitivity")) {
        }
        else {
        feats.push("Force Sensitivity");
    }}
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
    if (speciesTraits.includes("Bonus Feat (Weapon Focus (Simple Weapons))")) {
        feats.push("Weapon Focus (Simple Weapons)");
    }
    if (speciesTraits.includes("Bonus Feat (Weapon Proficiency (Advanced Melee Weapons))")) {
        feats.push("Weapon Proficiency (Advanced Melee Weapons)");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Acrobatics))") && 
        skills.includes("Acrobatics")) {
        feats.push("Skill Focus (Acrobatics)");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Deception))") && 
        skills.includes("Deception")) {
        feats.push("Skill Focus (Deception)");
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
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Mechanics))") && 
        skills.includes("Mechanics")) {
        feats.push("Skill Focus (Mechanics)");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Persuasion))") && 
        skills.includes("Persuasion")) {
        feats.push("Skill Focus (Persuasion)");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Survival))") && 
        skills.includes("Survival")) {
        feats.push("Skill Focus (Survival)");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Force Training)") && 
        skills.includes("Use the Force")) {
        feats.push("Force Training");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Precise Shot)") && feats.includes("Point-Blank Shot")) {
        feats.push("Precise Shot");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Running Attack)") && str >= 13) {
        feats.push("Running Attack");
    }
    
    return feats;
}