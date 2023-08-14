export function speciesFeats(feats,speciesTraits,skills,str,dex,con,int,wis,cha,BAB,level) {
    if (speciesTraits.includes("Bonus Feat (Armor Proficiency (Light))")) {
        if (feats.includes("Armor Proficiency (Light)")) {
        }
        else {
        feats.push("Armor Proficiency (Light)");
    }}
    if (speciesTraits.includes("Bonus Feat (Force Sensitivity)")) {
        if (feats.includes("Force Sensitivity")) {
        }
        else {
        feats.push("Force Sensitivity");
    }}
    if (speciesTraits.includes("Bonus Feat (Extra Second Wind)")) {
        feats.push("Extra Second Wind");
    }
    if (speciesTraits.includes("Bonus Feat (Improved Damage Threshold)")) {
        feats.push("Improved Damage Threshold");
    }
    if (speciesTraits.includes("Bonus Feat (Martial Arts I)")) {
        feats.push("Martial Arts I");
    }
    if (speciesTraits.includes("Bonus Feat (Rapid Shot)")) {
        feats.push("Rapid Shot");
    }
    if (speciesTraits.includes("Bonus Feat (Rapid Strike)")) {
        feats.push("Rapid Strike");
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
    if (speciesTraits.includes("Bonus Feat (Skill Focus (Knowledge))")) {
        let check = 0;
        let check2 = 0;
        while (check == 0) {
            check2++;
            let randomNum = Math.floor(Math.random() * skills.length);
            if (skills[randomNum] == "Knowledge (Bureaucracy)" ||
                    skills[randomNum] == "Knowledge (Galactic Lore)" ||
                    skills[randomNum] == "Knowledge (Life Sciences)" ||
                    skills[randomNum] == "Knowledge (Physical Sciences)" ||
                    skills[randomNum] == "Knowledge (Social Sciences)" ||
                    skills[randomNum] == "Knowledge (Tactics)" ||
                    skills[randomNum] == "Knowledge (Technology)") {
                feats.push("Skill Focus ("+skills[randomNum]+")");
                check = 1;
            }
        if (check2 > 10) {
            check = 1;
        }
        }
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Burst of Speed)") && skills.includes("Endurance")) {
        feats.push("Burst of Speed");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Dual Weapon Mastery I)") && 
        dex >= 13 && BAB >= 1 || speciesTraits.includes("Conditional Bonus Feat (Dual Weapon Mastery I)") &&
        dex >= 13 && level >= 3) {
        feats.push("Dual Weapon Mastery I");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Expert Droid Repair)") && skills.includes("Mechanics")) {
        feats.push("Expert Droid Repair");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Mighty Swing)") && str >= 13) {
        feats.push("Mighty Swing");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Acrobatics))") && 
        skills.includes("Acrobatics")) {
        feats.push("Skill Focus (Acrobatics)");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Climb))") && 
        skills.includes("Climb")) {
        feats.push("Skill Focus (Climb)");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Deception))") && 
        skills.includes("Deception")) {
        feats.push("Skill Focus (Deception)");
    }
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Endurance))") && 
        skills.includes("Endurance")) {
        feats.push("Skill Focus (Endurance)");
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
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Mechanics))") && 
        skills.includes("Mechanics")) {
        feats.push("Skill Focus (Mechanics)");
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
    if (speciesTraits.includes("Conditional Bonus Feat (Skill Focus (Treat Injury))") && 
        skills.includes("Treat Injury")) {
        feats.push("Skill Focus (Treat Injury)");
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
    if (speciesTraits.includes("Conditional Bonus Feat (Tech Specialist)") && skills.includes("Mechanics")) {
        feats.push("Tech Specialist");
    }
    
    return feats;
}