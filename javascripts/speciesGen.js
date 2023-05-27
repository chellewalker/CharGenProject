import {parseXML} from './xmlGetter.js';

export function speciesGen(tempSpecies,available) {
    tempSpecies = tempSpecies.toLowerCase();
    let speciesCount = 26;
    let speciesID = 0;
    let species;
        if (tempSpecies != "human") {
            if (tempSpecies != "random") {
                let count;

                for (count = 0; count < speciesCount; count++) {
                    let check2 = parseXML("xmls/species.xml","value",count);

                    if (check2 == tempSpecies) {
                        species = parseXML("xmls/species.xml","name",count);
                        speciesID = count;
                    }
                }
                if (speciesID == 0) {
                    tempSpecies = "random";
                }
            }
            else {
                let check = 0;
                let count = 0;
                while (check == 0) {
                    count++;
                let randomNum = Math.floor(Math.random() * (speciesCount));

                if (available.includes(parseXML("xmls/species.xml","source",randomNum))) {
                species = parseXML("xmls/species.xml","name",randomNum);
                speciesID = randomNum;
                check = 1;
            }
            if (count > 20) {
                speciesID = 0;
                check = 1;
            }
        }}
        }
        else {
            species = "Human";
            speciesID = 0;
        }
        if (tempSpecies == "random" && species != "Human"|| species == "human") {
            let check = 0;
            let count = 0;
            while (check == 0) {
            count++;
            let randomNum = Math.floor(Math.random() * (speciesCount));

            if (available.includes(parseXML("xmls/species.xml","source",randomNum))) {
            species = parseXML("xmls/species.xml","name",randomNum);
            speciesID = randomNum;
            check = 1;
        }
        if (count > 20) {
            speciesID = 0;
            check = 1;
        }
    }}

    return speciesID;
}