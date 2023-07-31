export function getTradition(light,dark,species,available) {
    let tradition = -1;
    while (tradition == -1) {
        let randomNum = Math.floor(Math.random() * 28);
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
        else if (randomNum == 12 && dark == 1 && available.includes("CWCG")) {
            //Bando Gora
            tradition = 12;
        }
        else if (randomNum == 13 && dark == 1 && available.includes("CWCG")) {
            //Believers
            tradition = 13;
        }
        else if (randomNum == 14 && available.includes("LECG")) {
            //Disciples of Twilight
            tradition = 14;
        }
        else if (randomNum == 15 && dark == 1 && species == "Vahla" && available.includes("LECG")) {
            //Ember of Vahl
            tradition = 15;
        }
        else if (randomNum == 27 && available.includes("LECG")) {
            //Imperial Knights
            tradition = 27;
        }
        else if (randomNum == 16 && light == 1 && available.includes("JATM")) {
            //Aing-Tii Monks
            tradition = 16;
        }
        else if (randomNum == 17 && light == 1 && species == "Kel Dor" && available.includes("JATM")) {
            //Baran Do Sages
            tradition = 17;
        }
        else if (randomNum == 18 && available.includes("JATM")) {
            //Matukai
            tradition = 18;
        }
        else if (randomNum == 19 && dark == 1 && available.includes("JATM")) {
            //Seyugi Dervishs
            tradition = 19;
        }
        else if (randomNum == 20 && available.includes("JATM")) {
            //Shapers of Kro Var
            tradition = 20;
        }
        else if (randomNum == 21 && light == 1 && available.includes("JATM")) {
            //Tyia
            tradition = 21;
        }
        else if (randomNum == 22 && light == 1 && available.includes("JATM")) {
            //Wardens of the Sky
            tradition = 22;
        }
        else if (randomNum == 23 && light == 1 && available.includes("JATM")) {
            //Fallanassi
            tradition = 23;
        }
        else if (randomNum == 24 && light == 1 && available.includes("JATM")) {
            //Zeison Sha
            tradition = 24;
        }
        else if (randomNum == 25 && available.includes("JATM")) {
            //Kilian Rangers
            tradition = 25;
        }
        else if (randomNum == 26 && available.includes("JATM")) {
            //Blazing Chain
            tradition = 26;
        }
    }
    return tradition;
}