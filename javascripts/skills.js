export function getSkills (str,dex,con,int,wis,cha,firstClass,level) {

    let skillsList = ["Acrobatics","Climb","Deception","Endurance","Gather Information","Initiative","Jump","Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Perception","Persuasion","Pilot","Ride","Stealth","Survival","Swim","Treat Injury","Use Computer","Use the Force"];
        let strSkills = ["Climb","Jump","Swim"];
        let dexSkills = ["Acrobatics","Initiative","Pilot","Ride","Stealth"];
        let conSkills = ["Endurance"];
        let intSkills = ["Knowledge (Bureaucracy)","Knowledge (Galactic Lore)","Knowledge (Life Sciences)","Knowledge (Physical Sciences)","Knowledge (Social Sciences)","Knowledge (Tactics)","Knowledge (Technology)","Mechanics","Use Computer"];
        let wisSkills = ["Perception","Survival","Treat Injury"];
        let chaSkills = ["Deception","Gather Information","Persuasion","Use the Force"];
    
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
            let thisSkills = [];
            for (count = 0; count < trained; count++) {
                let temp = skillsList[Math.round(Math.random() * skillsList.length)];
                if (trainedSkills.includes(temp)) {
                    count--
                }
                else {
                    if (count != 0) {
                        thisSkills[count] += ", ";
                    }

                trainedSkills[count] = temp;
                thisSkills[count] = " " + trainedSkills[count];
                
                if (strSkills.includes(trainedSkills[count])) {
                    thisSkills[count] += " +" + (Math.floor(level/2)+Math.floor((str-10)/2)+5);
                }
                if (dexSkills.includes(trainedSkills[count])) {
                    thisSkills[count] += " +" + (Math.floor(level/2)+Math.floor((dex-10)/2)+5);
                }
                if (conSkills.includes(trainedSkills[count])) {
                    thisSkills[count] += " +" + (Math.floor(level/2)+Math.floor((con-10)/2)+5);
                }
                if (intSkills.includes(trainedSkills[count])) {
                    thisSkills[count] += " +" + (Math.floor(level/2)+Math.floor((int-10)/2)+5);
                }
                if (wisSkills.includes(trainedSkills[count])) {
                    thisSkills[count] += " +" + (Math.floor(level/2)+Math.floor((wis-10)/2)+5);
                }
                if (chaSkills.includes(trainedSkills[count])) {
                    thisSkills[count] += " +" + (Math.floor(level/2)+Math.floor((cha-10)/2)+5);
                }
            }}
            thisSkills.sort();
    return thisSkills;
}