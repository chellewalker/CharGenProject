export function getSkills (int,firstClass,speciesTraits,classes) {
    let check = 0;

    while (check == 0) {
    let skillsList = ["Acrobatics","Climb","Deception","Endurance","Gather Information","Initiative","Jump","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Persuasion","Pilot","Ride","Stealth","Survival","Swim","Treat Injury","Use Computer","Use the Force"];

        let jediSkills = ["Acrobatics","Endurance","Initiative","Jump","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Pilot","Use the Force"];
        let nobleSkills = ["Deception","Gather Information","Initiative","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Perception","Persuasion","Pilot","Ride","Treat Injury","Use Computer"];
        let scoundrelSkills = ["Acrobatics","Deception","Gather Information","Initiative","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Persuasion","Pilot","Stealth","Use Computer"];
        let scoutSkills = ["Climb","Endurance","Initiative","Jump","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Pilot","Ride","Stealth","Survival","Swim"];
        let soldierSkills = ["Climb","Endurance","Initiative","Jump","Knowledge (Tactics)","Mechanics","Perception","Pilot","Swim","Treat Injury","Use Computer"];
    
        let classSkills = [];
        if (firstClass == 0 || classes[0] > 0) {
            classSkills += jediSkills;
        }
        if (firstClass == 1 || classes[1] > 0) {
            classSkills += nobleSkills;
        }
        if (firstClass == 2 || classes[2] > 0) {
            classSkills += scoundrelSkills;
        }
        if (firstClass == 3 || classes[3] > 0) {
            classSkills += scoutSkills;
        }
        if (firstClass == 4 || classes[0] > 4) {
            classSkills += soldierSkills;
        }
        if (speciesTraits.includes("Bonus Class Skills (Climb and Stealth)")) {
            classSkills +="Climb";
            classSkills +="Stealth";
        }

    let trained = 0;
        let count = 0;
        let trainedSkills = [];
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
            let thisSkills = [];
            for (count = 0; count < trained; count++) {
                let temp = skillsList[Math.round(Math.random() * skillsList.length)];
                if (trainedSkills.includes(temp)) {
                    count--;
                }
                else if (classSkills.includes(temp)) {
                    let randomNum = Math.round(Math.random() * 5);
                trainedSkills[count] = temp;
                if (randomNum == 0 && classSkills.includes("Use the Force") ||
                    randomNum == 1 && classSkills.includes("Use the Force") ||
                    randomNum == 2 && classSkills.includes("Use the Force")) {
                    if (trainedSkills.includes("Use the Force")) {

                    }
                    else {
                        trainedSkills[count] = "Use the Force";
                    }
                }
                thisSkills[count] = trainedSkills[count];
                
            }
            else {
                count--;
            }
        }
            thisSkills.sort();
            check = 1;
            for (count = 0; count < trained; count++) {
            if (thisSkills[count]) {
                check = 0;
            }}

            return thisSkills;
        }
    
}

export function getNewSkill(speciesTraits,classes,skills) {
    let skillsList = ["Acrobatics","Climb","Deception","Endurance","Gather Information","Initiative","Jump","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Persuasion","Pilot","Ride","Stealth","Survival","Swim","Treat Injury","Use Computer","Use the Force"];

        let jediSkills = ["Acrobatics","Endurance","Initiative","Jump","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Pilot","Use the Force"];
        let nobleSkills = ["Deception","Gather Information","Initiative","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Perception","Persuasion","Pilot","Ride","Treat Injury","Use Computer"];
        let scoundrelSkills = ["Acrobatics","Deception","Gather Information","Initiative","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Persuasion","Pilot","Stealth","Use Computer"];
        let scoutSkills = ["Climb","Endurance","Initiative","Jump","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Pilot","Ride","Stealth","Survival","Swim"];
        let soldierSkills = ["Climb","Endurance","Initiative","Jump","Knowledge (Tactics)","Mechanics","Perception","Pilot","Swim","Treat Injury","Use Computer"];
    
        let classSkills = [];
        if (classes[0] > 0) {
            classSkills += jediSkills;
        }
        if (classes[1] > 0) {
            classSkills += nobleSkills;
        }
        if (classes[2] > 0) {
            classSkills += scoundrelSkills;
        }
        if (classes[3] > 0) {
            classSkills += scoutSkills;
        }
        if (classes[0] > 4) {
            classSkills += soldierSkills;
        }
        if (speciesTraits.includes("Bonus Class Skills (Climb and Stealth)")) {
            classSkills +="Climb";
            classSkills +="Stealth";
        }

            let thisSkill = "";
            while (thisSkill == "") {
                thisSkill = skillsList[Math.round(Math.random() * skillsList.length)];
                if (skills.includes(thisSkill)) {
                    thisSkill = "";
                }
        }
        return thisSkill;
}

export function displaySkills (str,dex,con,int,wis,cha,trainedSkills,size,level,speciesTraits,feats) {
    let count;
    let listSkills = "";

        let strSkills = ["Climb","Jump","Swim"];
        let dexSkills = ["Acrobatics","Initiative","Pilot","Ride","Stealth"];
        let conSkills = ["Endurance"];
        let intSkills = ["Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Use Computer"];
        let wisSkills = ["Perception","Survival","Treat Injury"];
        let chaSkills = ["Deception","Gather Information","Persuasion","Use the Force"];

    for (count = 0; count < trainedSkills.length; count++) {
        
        if (count != 0) {
            listSkills += ", ";
        }
        if (strSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((str-10)/2)+5);
            if (trainedSkills[count] == "Climb" && feats.includes("Skill Focus (Climb)")) {
                score += 5;
            }
            if (trainedSkills[count] == "Jump" && feats.includes("Skill Focus (Jump)")) {
                score += 5;
            }
            if (trainedSkills[count] == "Swim" && feats.includes("Skill Focus (Swim)")) {
                score += 5;
            }
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score;
            }
        }
        if (dexSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((dex-10)/2)+5);
            if (trainedSkills[count] == "Acrobatics" && feats.includes("Skill Focus (Acrobatics)")) {
                score += 5;
            }
            if (trainedSkills[count] == "Initiative" && feats.includes("Skill Focus (Initiative)")) {
                score += 5;
            }
            if (trainedSkills[count] == "Pilot" && feats.includes("Skill Focus (Pilot)")) {
                score += 5;
            }
            if (trainedSkills[count] == "Ride" && feats.includes("Skill Focus (Ride)")) {
                score += 5;
            }
            if (trainedSkills[count] == "Stealth" && feats.includes("Skill Focus (Stealth)")) {
                score += 5;
            }
            if (trainedSkills[count] == "Stealth" && size == "Small") {
                score += 5;
            }
            if (trainedSkills[count] == "Stealth" && size == "Large") {
                score -= 5;
            }
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score;
            }
        }
        if (conSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((con-10)/2)+5);
            if (trainedSkills[count] == "Endurance" && feats.includes("Skill Focus (Endurance)")) {
                score += 5;
            }
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score;
            }
        }
        if (intSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((int-10)/2)+5);
            if (trainedSkills[count] == "Knowledge (Bureaucracy)" && feats.includes("Skill Focus (Knowledge (Bureaucracy))")) {
                score += 5;
            }
            if (trainedSkills[count] == "Knowledge (Galactic Lore)" && feats.includes("Skill Focus (Knowledge (Galactic Lore))")) {
                score += 5;
            }
            if (trainedSkills[count] == "Knowledge (Life Sciences)" && feats.includes("Skill Focus (Knowledge (Life Sciences))")) {
                score += 5;
            }
            if (trainedSkills[count] == "Knowledge (Physical Sciences)" && feats.includes("Skill Focus (Knowledge (Physical Sciences))")) {
                score += 5;
            }
            if (trainedSkills[count] == "Knowledge (Social Sciences)" && feats.includes("Skill Focus (Knowledge (Social Sciences))")) {
                score += 5;
            }
            if (trainedSkills[count] == "Knowledge (Tactics)" && feats.includes("Skill Focus (Knowledge (Tactics))")) {
                score += 5;
            }
            if (trainedSkills[count] == "Knowledge (Technology)" && feats.includes("Skill Focus (Knowledge (Technology))")) {
                score += 5;
            }
            if (trainedSkills[count] == "Mechanics" && feats.includes("Skill Focus (Mechanics)")) {
                score += 5;
            }
            if (trainedSkills[count] == "Use Computer" && feats.includes("Skill Focus (Use Computer)")) {
                score += 5;
            }
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score;
            }
        }
        if (wisSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((wis-10)/2)+5);
            if (trainedSkills[count] == "Perception" && feats.includes("Skill Focus (Perception)")) {
                score += 5;
            }
            if (trainedSkills[count] == "Survival" && feats.includes("Skill Focus (Survival)")) {
                score += 5;
            }
            if (trainedSkills[count] == "Treat Injury" && feats.includes("Skill Focus (Treat Injury)")) {
                score += 5;
            }
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score;
            }
        }
        if (chaSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((cha-10)/2)+5);
            if (trainedSkills[count] == "Persuasion" && speciesTraits.includes("Logical Reasoning")) {
                score = (Math.floor(level/2)+Math.floor((Math.max(cha,int)-10)/2)+5);
            }
            if (trainedSkills[count] == "Deception" && feats.includes("Skill Focus (Deception)")) {
                score += 5;
            }
            if (trainedSkills[count] == "Gather Information" && feats.includes("Skill Focus (Gather Information)")) {
                score += 5;
            }
            if (trainedSkills[count] == "Persuasion" && feats.includes("Skill Focus (Persuasion)")) {
                score += 5;
            }
            if (trainedSkills[count] == "Use the Force" && feats.includes("Skill Focus (Use the Force)")) {
                score += 5;
            }
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score;
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