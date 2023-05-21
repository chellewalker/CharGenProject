export function plannedStats(planPoints) {
let check = 1;

    let abilities = planGetNumber(planPoints);
    let currentIndex = abilities.length, randomIndex;

    while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [abilities[currentIndex], abilities[randomIndex]] = [
        abilities[randomIndex], abilities[currentIndex]];
    check = 0;
  }

    return abilities;
}

export function planGetNumber(planPoints) {
    if (planPoints == null) {
        planPoints = 25;
    }
    else if (planPoints < 15) {
        planPoints = 15;
    }
    else if (planPoints > 80) {
        planPoints = 80;
    }

    let abilities = [];
    let check;
    let costs = [0,1,2,3,4,5,6,8,10,13,16];
    let count;

while (check != 1) {
    let temp = planPoints;
    let reroll = 0;
    for (count = 0; count < 6; count++) {
        let pointer = (Math.floor((Math.random() * (temp + 1)) + 0));
            if (costs.includes(pointer)) {
                temp = temp - pointer;

                if (pointer == 16) {
                    abilities[count] = 18;
                }
                else if (pointer == 13) {
                    abilities[count] = 17;
                }
                else if (pointer == 10) {
                    abilities[count] = 16;
                }
                else if (pointer == 8) {
                    abilities[count] = 15;
                }
                else if (pointer == 6) {
                    abilities[count] = 14;
                }
                else if (pointer == 5) {
                    abilities[count] = 13;
                }
                else if (pointer == 4) {
                    abilities[count] = 12;
                }
                else if (pointer == 3) {
                    abilities[count] = 11;
                }
                else if (pointer == 2) {
                    abilities[count] = 10;
                }
                else if (pointer == 1) {
                    abilities[count] = 9;
                }
                else if (pointer == 0 && reroll == 1) {
                        abilities[count] = 8;
                        reroll = 0;
                }
            }
            else {
                    reroll = 1;
                    count--;
                }
        }
        if (temp == 0) {
            check = 1;
    }}

    return abilities;
}