export function getTradition(light,dark,species,available) {
    let tradition = -1;
    while (tradition == -1) {
        let randomNum = Math.floor(Math.random() * 13);
        if (randomNum == 0 && light == 1 && available.includes("CR")) {
            //Jedi
            tradition = 0;
        }
        else if (randomNum == 1 && dark == 1 && available.includes("CR")) {
            //Sith
            tradition = 1;
        }
        else if (randomNum == 2 && available.includes("CR")) {
            //Jensarrai
            tradition = 2;
        }
        else if (randomNum == 3 && species == "Human" && available.includes("CR") ||
                    randomNum == 3 && species == "Zabrak" && available.includes("CR")) {
            //Dathomir
            tradition = 3;
        }
        else if (randomNum == 4 && available.includes("KotORCG")) {
            //Jal Shey
            tradition = 4;
        }
        else if (randomNum == 5 && species == "Draethos" && available.includes("KotORCG")) {
            //Keetael
            tradition = 5;
        }
        else if (randomNum == 6 && dark == 1 && available.includes("KotORCG")) {
            //Krath
            tradition = 6;
        }
        else if (randomNum == 7 && species == "Miraluka" && available.includes("KotORCG")) {
            //Luka Sene
            tradition = 7;
        }
        else if (randomNum == 8 && species == "Selkath" && available.includes("KotORCG")) {
            //Order of Shasa
            tradition = 8;
        }
        else if (randomNum == 9 && light == 1 && available.includes("FUCG")) {
            //Agents of Ossus
            tradition = 9;
        }
        else if (randomNum == 10 && species == "Felucian" && available.includes("FUCG")) {
            //Felucian Shamans
            tradition = 10;
        }
        else if (randomNum == 11 && dark == 1 && available.includes("FUCG")) {
            //Inquisitorius
            tradition = 11;
        }
        else if (randomNum == 12 && dark == 1 && available.includes("SaV")) {
            //Sable Dawn
            tradition = 12;
        }
    }
    return tradition;
}