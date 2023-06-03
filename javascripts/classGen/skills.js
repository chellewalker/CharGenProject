export function getSkills (int,firstClass,speciesTraits,classes) {
    let skills = [];

        let trained = getAvailSkills(int,firstClass,speciesTraits);
        let count = 0;

        for (count = 0; count < trained; count++) {
            skills.push(getFirstSkills(speciesTraits,firstClass,skills));
    }

    return skills;
}

export function getClassSkills(speciesTraits,classes,feats) {
    
        let jediSkills = "Acrobatics,Endurance,Initiative,Jump,Knowledge (Bureaucracy),Knowledge (Galactic Lore),Knowledge (Life Sciences),Knowledge (Physical Sciences),Knowledge (Social Sciences),Knowledge (Tactics),Knowledge (Technology),Mechanics,Perception,Pilot";
        let nobleSkills = "Deception,Gather Information,Initiative,Knowledge (Bureaucracy),Knowledge (Galactic Lore),Knowledge (Life Sciences),Knowledge (Physical Sciences),Knowledge (Social Sciences),Knowledge (Tactics),Knowledge (Technology),Perception,Persuasion,Pilot,Ride,Treat Injury,Use Computer";
        let scoundrelSkills = "Acrobatics,Deception,Gather Information,Initiative,Knowledge (Bureaucracy),Knowledge (Galactic Lore),Knowledge (Life Sciences),Knowledge (Physical Sciences),Knowledge (Social Sciences),Knowledge (Tactics),Knowledge (Technology),Mechanics,Perception,Persuasion,Pilot,Stealth,Use Computer";
        let scoutSkills = "Climb,Endurance,Initiative,Jump,Knowledge (Bureaucracy),Knowledge (Galactic Lore),Knowledge (Life Sciences),Knowledge (Physical Sciences),Knowledge (Social Sciences),Knowledge (Tactics),Knowledge (Technology),Mechanics,Perception,Pilot,Ride,Stealth,Survival,Swim";
        let soldierSkills = "Climb,Endurance,Initiative,Jump,Knowledge (Tactics),Mechanics,Perception,Pilot,Swim,Treat Injury,Use Computer";
    
        let classSkills;
        if (classes[0] > 0) {
            classSkills += jediSkills + ",";
        }
        if (classes[1] > 0) {
            classSkills += nobleSkills + ",";
        }
        if (classes[2] > 0) {
            classSkills += scoundrelSkills + ",";
        }
        if (classes[3] > 0) {
            classSkills += scoutSkills + ",";
        }
        if (classes[0] > 4) {
            classSkills += soldierSkills + ",";
        }
        if (speciesTraits.includes("Bonus Class Skills (Climb and Stealth)")) {
            classSkills += "Climb,Stealth,";
        }
        if (feats.includes("Force Sensitivity")) {
            classSkills += "Use the Force,";
        }

    return classSkills;
}

export function getAvailSkills(int,firstClass,speciesTraits) {
    
    let trained = 0;
            if (firstClass == 0) {
                trained = 2 + Math.floor((int-10)/2);
            }
            if (firstClass == 1) {
                trained = 6 + Math.floor((int-10)/2);
            }
            if (firstClass == 2) {
                trained = 4 + Math.floor((int-10)/2);
            }
            if (firstClass == 3) {
                trained = 5 + Math.floor((int-10)/2);
            }
            if (firstClass == 4) {
                trained = 3 + Math.floor((int-10)/2);
            }
            if (trained < 2) {
                trained = 1;
            }
            if (speciesTraits.includes("Bonus Trained Skill")) {
                trained++;
            }

    return trained;
}

export function getFirstSkills(speciesTraits,firstClass,skills) {
    let skillsList = ["Acrobatics","Climb","Deception","Endurance","Gather Information","Initiative","Jump","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Persuasion","Pilot","Ride","Stealth","Survival","Swim","Treat Injury","Use Computer","Use the Force"];
    
    let classSkills = [];
    let jediSkills = ["Acrobatics","Endurance","Initiative","Jump","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Pilot","Use the Force"];
    let nobleSkills = ["Deception","Gather Information","Initiative","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Perception","Persuasion","Pilot","Ride","Treat Injury","Use Computer"];
    let scoundrelSkills = ["Acrobatics","Deception","Gather Information","Initiative","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Persuasion","Pilot","Stealth","Use Computer"];
    let scoutSkills = ["Climb","Endurance","Initiative","Jump","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Pilot","Ride","Stealth","Survival","Swim"];
    let soldierSkills = ["Climb","Endurance","Initiative","Jump","Knowledge (Tactics)","Mechanics","Perception","Pilot","Swim","Treat Injury","Use Computer"];

    if (firstClass == 0) {
        classSkills = jediSkills;
    }
    if (firstClass == 1) {
        classSkills = nobleSkills;
    }
    if (firstClass == 2) {
        classSkills = scoundrelSkills;
    }
    if (firstClass == 3) {
        classSkills = scoutSkills;
    }
    if (firstClass == 4) {
        classSkills = soldierSkills;
    }
    if (speciesTraits.includes("Bonus Class Skills (Climb and Stealth)")) {
        classSkills.push("Climb","Stealth");
    }

            let thisSkill = "";
            while (thisSkill == "") {
                thisSkill = skillsList[Math.round(Math.random() * skillsList.length)];
                    let randomNum2 = Math.round(Math.random() * 4);
                    if (randomNum2 == 0) {
                        thisSkill = "Use the Force";
                    }
                
                if (skills.includes(thisSkill)) {
                    thisSkill = "";
                }
                if (classSkills.includes(thisSkill)) {

                }
                else {
                    thisSkill = "";
                }
        }
        return thisSkill;
}

export function getNewSkill(speciesTraits,classes,skills,feats) {
    let skillsList = ["Acrobatics","Climb","Deception","Endurance","Gather Information","Initiative","Jump","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Persuasion","Pilot","Ride","Stealth","Survival","Swim","Treat Injury","Use Computer","Use the Force"];
    
            let thisSkill = "";
            while (thisSkill == "") {
                thisSkill = skillsList[Math.round(Math.random() * skillsList.length)];
                    let randomNum2 = Math.round(Math.random() * 2);
                    if (randomNum2 == 0 && feats.includes("Force Sensitivity")) {
                        thisSkill = "Use the Force";
                    }
                
                if (skills.includes(thisSkill)) {
                    thisSkill = "";
                }
                if (thisSkill == "Use the Force") {
                    if (feats.includes("Force Sensitivity")) {

                    }
                    else {
                        thisSkill = "";
                    }
                }
                /*if (getClassSkills(speciesTraits,classes,feats).includes(thisSkill)) {

                }
                else {
                    thisSkill = "";
                }*/
        }
        return thisSkill;
}

export function displaySkills (str,dex,con,int,wis,cha,trainedSkills,size,level,speciesTraits,feats,talents) {
    let count;
    let listSkills = "";
    let special;
    trainedSkills.sort();

        let strSkills = ["Climb","Jump","Swim"];
        let dexSkills = ["Acrobatics","Initiative","Pilot","Ride","Stealth"];
        let conSkills = ["Endurance"];
        let intSkills = ["Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Use Computer"];
        let wisSkills = ["Perception","Survival","Treat Injury"];
        let chaSkills = ["Deception","Gather Information","Persuasion","Use the Force"];

    for (count = 0; count < trainedSkills.length; count++) {
        special = "";
        if (count != 0) {
            listSkills += ", ";
        }
        if (strSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((str-10)/2)+5);
            if (trainedSkills[count] == "Climb") {
                if (feats.includes("Skill Focus (Climb)")) {
                    score += 5;
                }
            }
            if (trainedSkills[count] == "Jump") {
                if (feats.includes("Skill Focus (Jump)")) {
                    score += 5;
                }
            }
            if (trainedSkills[count] == "Swim") {
                if (feats.includes("Skill Focus (Swim)")) {
                    score += 5;
                }
                if (speciesTraits.includes("Expert Swimmer")) {
                    special = " (may reroll, must take second result)";
                }
            }
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score + special;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score + special;
            }
        }
        if (dexSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((dex-10)/2)+5);
            if (trainedSkills[count] == "Acrobatics") {
                if (feats.includes("Skill Focus (Acrobatics)")) {
                    score += 5;
                }
            }
            if (trainedSkills[count] == "Initiative") {
                if (feats.includes("Skill Focus (Initiative)")) {
                    score += 5;
                }
                if (speciesTraits.includes("Intuitive Initiative") && talents.includes("Improved Initiative")) {
                    special = " (may reroll twice, must take second result)";
                }
                else if (speciesTraits.includes("Intuitive Initiative") || talents.includes("Improved Initiative")) {
                    special = " (may reroll, must take second result)";
                }
            }
            if (trainedSkills[count] == "Pilot") {
                if (feats.includes("Skill Focus (Pilot)")) {
                    score += 5;
                }
                if (speciesTraits.includes("Expert Pilot")) {
                    special = " (may reroll, must take second result)";
                }
            }
            if (trainedSkills[count] == "Ride") {
                if (feats.includes("Skill Focus (Ride)")) {
                    score += 5;
                }
                if (speciesTraits.includes("Animal Handler")) {
                    special = " (may reroll, must take second result)";
                }
            }
            if (trainedSkills[count] == "Stealth") {
                if (feats.includes("Skill Focus (Stealth)")) {
                    score += 5;
                }
                if (size == "Small") {
                    score += 5;
                }
                else if (size == "Large") {
                score -= 5;
                }
                if (speciesTraits.includes("Sneaky") && talents.includes("Improved Stealth")) {
                    special = " (may reroll twice, must take second result)";
                }
                else if (speciesTraits.includes("Sneaky") || talents.includes("Improved Stealth")) {
                    special = " (may reroll, must take second result)";
                }
            }
            
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score + special;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score + special;
            }
        }
        if (conSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((con-10)/2)+5);
            if (trainedSkills[count] == "Endurance") {
                if (feats.includes("Skill Focus (Endurance)")) {
                    score += 5;
                }
            }
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score + special;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score + special;
            }
        }
        if (intSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((int-10)/2)+5);
            if (trainedSkills[count] == "Knowledge (Bureaucracy)") {
                if (feats.includes("Skill Focus (Knowledge (Bureaucracy))")) {
                    score += 5;
                }
            }
            if (trainedSkills[count] == "Knowledge (Galactic Lore)") {
                if (feats.includes("Skill Focus (Knowledge (Galactic Lore))")) {
                    score += 5;
                }
            }
            if (trainedSkills[count] == "Knowledge (Life Sciences)") {
                if (feats.includes("Skill Focus (Knowledge (Life Sciences))")) {
                    score += 5;
                }
            }
            if (trainedSkills[count] == "Knowledge (Physical Sciences)") {
                if (feats.includes("Skill Focus (Knowledge (Physical Sciences))")) {
                    score += 5;
                }
            }
            if (trainedSkills[count] == "Knowledge (Social Sciences)") {
                if (feats.includes("Skill Focus (Knowledge (Social Sciences))")) {
                    score += 5;
                }
            }
            if (trainedSkills[count] == "Knowledge (Tactics)") {
                if (feats.includes("Skill Focus (Knowledge (Tactics))")) {
                    score += 5;
                }
            }
            if (trainedSkills[count] == "Knowledge (Technology)") {
                if (feats.includes("Skill Focus (Knowledge (Technology))")) {
                    score += 5;
                }
            }
            if (trainedSkills[count] == "Mechanics") {
                if (feats.includes("Skill Focus (Mechanics)")) {
                    score += 5;
                }
            }
            if (trainedSkills[count] == "Use Computer") {
                if (feats.includes("Skill Focus (Mechanics)")) {
                    score += 5;
                }
            }
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score + special;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score + special;
            }
        }
        if (wisSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((wis-10)/2)+5);
            if (trainedSkills[count] == "Perception") {
                if (feats.includes("Skill Focus (Perception)")) {
                    score += 5;
                }
                if (speciesTraits.includes("Heightened Awareness") && talents.includes("Acute Senses")) {
                    special = " (may reroll twice, must take second result)";
                }
                else if (speciesTraits.includes("Heightened Awareness") || talents.includes("Acute Senses")) {
                    special = " (may reroll, must take second result)";
                }
            }
            if (trainedSkills[count] == "Survival") {
                if (feats.includes("Skill Focus (Survival)")) {
                    score += 5;
                }
                if (speciesTraits.includes("Survival Instinct")) {
                    special = " (may reroll, must take second result)";
                }
            }
            if (trainedSkills[count] == "Treat Injury") {
                if (feats.includes("Skill Focus (Treat Injury)")) {
                    score += 5;
                }
            }
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score + special;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score + special;
            }
        }
        if (chaSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((cha-10)/2)+5);
            if (trainedSkills[count] == "Deception") {
                if (feats.includes("Skill Focus (Deception)")) {
                    score += 5;
                }
                if (speciesTraits.includes("Deceptive")) {
                    special = " (may reroll, must take second result)";
                }
            }
            if (trainedSkills[count] == "Gather Information") {
                if (feats.includes("Skill Focus (Gather Information)")) {
                    score += 5;
                }
            }
            if (trainedSkills[count] == "Persuasion") {
                if (speciesTraits.includes("Logical Reasoning")) {
                    score = (Math.floor(level/2)+Math.floor((Math.max(cha,int)-10)/2)+5);
                }
                if (feats.includes("Skill Focus (Persuasion)")) {
                    score += 5;
                }
                if (speciesTraits.includes("Silver Tongued")) {
                    special = " (may reroll, may keep better result)";
                }
                else if (speciesTraits.includes("Intimidating Presence")) {
                    special = " (may reroll to Intimidate, must take second result)";
                }
            }
            if (trainedSkills[count] == "Use the Force") {
                if (feats.includes("Skill Focus (Use the Force)")) {
                    score += 5;
                }
                if (speciesTraits.includes("Keen Force Sense")) {
                    special = " (may reroll to Search Your Feelings or Sense Force, may keep better result)";
                }
            }
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score + special;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score + special;
            }
        }
    }

        return listSkills;
}

export function getInitiative(level,dex,skills,feats) {
    let initiative = Math.floor(level/2) + Math.floor((dex-10)/2);
        if (skills.includes("Initiative")) {
            initiative += 5;
        }
        if (feats.includes("Skill Focus (Initiative)")) {
            initiative += 5;
        }
        let initiativeDisplay = "";
        if (initiative < 0) {
            initiativeDisplay = initiative;
        }
        else {
            initiativeDisplay = "+" + initiative;
        }
    return initiativeDisplay;
}

export function getPerception(level,wis,skills,feats) {
    let perception = Math.floor(level/2) + Math.floor((wis-10)/2);
        if (skills.includes("Perception")) {
            perception += 5;
        }
        if (feats.includes("Skill Focus (Perception)")) {
            perception += 5;
        }
        let perceptionDisplay = "";
        if (perception < 0) {
            perceptionDisplay = perception;
        }
        else {
            perceptionDisplay = "+" + perception;
        }
    return perceptionDisplay;
}