export function getTradition(light,dark,species) {
    let tradition = -1;
    while (tradition == -1) {
        let randomNum = Math.floor(Math.random() * 9);
        if (randomNum == 0 && light == 1) {
            //Jedi
            tradition = 0;
        }
        else if (randomNum == 1 && dark == 1) {
            //Sith
            tradition = 1;
        }
        else if (randomNum == 2) {
            //Jensarrai
            tradition = 2;
        }
        else if (randomNum == 3 && species == "Human" ||
                    randomNum == 3 && species == "Zabrak") {
            //Dathomir
            tradition = 3;
        }
        else if (randomNum == 4) {
            //Jal Shey
            tradition = 4;
        }
        else if (randomNum == 5 && species == "Draethos") {
            //Keetael
            tradition = 5;
        }
        else if (randomNum == 6) {
            //Krath
            tradition = 6;
        }
        else if (randomNum == 7 && species == "Miraluka") {
            //Luka Sene
            tradition = 7;
        }
        else if (randomNum == 8 && species == "Selkath") {
            //Order of Shasa
            tradition = 8;
        }
    }
    return tradition;
}