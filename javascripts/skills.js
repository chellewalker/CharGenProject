export function getSkills (str,dex,con,int,wis,cha,firstClass,level,size,speciesTraits,classes) {
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
        if (speciesTraits.split(", ").includes("Bonus Class Skill (Climb)")) {
            classSkills.push("Climb");
        }
        if (speciesTraits.split(", ").includes("Bonus Class Skill (Stealth)")) {
            classSkills.push("Stealth");
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
            if (speciesTraits.split(", ").includes("Bonus Trained Skill")) {
                trained++;
            }
            let thisSkills = [];
            for (count = 0; count < trained; count++) {
                let temp = skillsList[Math.round(Math.random() * skillsList.length)];
                if (trainedSkills.includes(temp)) {
                    count--;
                }
                else if (classSkills.includes(temp)) {

                trainedSkills[count] = temp;
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

export function displaySkills (str,dex,con,int,wis,cha,trainedSkills,size,level,speciesTraits) {
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
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score;
            }
        }
        if (dexSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((dex-10)/2)+5);
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
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score;
            }
        }
        if (intSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((int-10)/2)+5);
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score;
            }
        }
        if (wisSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((wis-10)/2)+5);
            if (score < 0) {
                listSkills += trainedSkills[count] + " " + score;
            }
            else {
                listSkills += trainedSkills[count] + " +" + score;
            }
        }
        if (chaSkills.includes(trainedSkills[count])) {
            let score = (Math.floor(level/2)+Math.floor((cha-10)/2)+5);
            if (trainedSkills[count] == "Persuasion" && speciesTraits.split(", ").includes("Logical Reasoning")) {
                score = (Math.floor(level/2)+Math.floor((Math.max(cha,int)-10)/2)+5);
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