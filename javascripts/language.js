import {parseXML} from './xmlGetter.js';

export function language(languages) {
    let language;
    let check = 0;
    let count = 0;
    while (check == 0 && count < 20) {
        count++;
    let randomNum = Math.floor(Math.random() * 16);
    if (randomNum == 0) {
        if (languages.includes("Basic") || languages.includes("Basic (understand only)")) {

        }
        else {
            language = "Basic";
            check = 1;
        }
    }
    else if (randomNum == 1) {
        if (languages.includes("Binary") || languages.includes("Binary (understand only)")) {

        }
        else {
            language = "Binary";
            check = 1;
        }
    }
    else if (randomNum == 2) {
        if (languages.includes("Bocce") || languages.includes("Bocce (understand only)")) {

        }
        else {
            language = "Bocce";
            check = 1;
        }
    }
    else if (randomNum == 3) {
        if (languages.includes("Bothese") || languages.includes("Bothese (understand only)")) {

        }
        else {
            language = "Bothese";
            check = 1;
        }
    }
    else if (randomNum == 4) {
        if (languages.includes("Cerean") || languages.includes("Cerean (understand only)")) {

        }
        else {
            language = "Cerean";
            check = 1;
        }
    }
    else if (randomNum == 5) {
        if (languages.includes("Dosh") || languages.includes("Dosh (understand only)")) {

        }
        else {
            language = "Dosh";
            check = 1;
        }
    }
    else if (randomNum == 6) {
        if (languages.includes("Durese") || languages.includes("Durese (understand only)")) {

        }
        else {
            language = "Durese";
            check = 1;
        }
    }
    else if (randomNum == 4) {
        if (languages.includes("Gamorrean") || languages.includes("Gamorrean (understand only)")) {

        }
        else {
            language = "Gamorrean";
            check = 1;
        }
    }
    else if (randomNum == 5) {
        if (languages.includes("High Galactic") || languages.includes("High Galactic (understand only)")) {

        }
        else {
            language = "High Galactic";
            check = 1;
        }
    }
    else if (randomNum == 6) {
        if (languages.includes("Huttese") || languages.includes("Huttese (understand only)")) {

        }
        else {
            language = "Huttese";
            check = 1;
        }
    }
    else if (randomNum == 7) {
        if (languages.includes("Ithorese") || languages.includes("Ithorese (understand only)")) {

        }
        else {
            language = "Ithorese";
            check = 1;
        }
    }
    else if (randomNum == 8) {
        if (languages.includes("Jawa Trade Language") || languages.includes("Jawa Trade Language (understand only)")) {

        }
        else {
            language = "Jawa Trade Language";
            check = 1;
        }
    }
    else if (randomNum == 9) {
        if (languages.includes("Kel Dor") || languages.includes("Kel Dor (understand only)")) {

        }
        else {
            language = "Kel Dor";
            check = 1;
        }
    }
    else if (randomNum == 10) {
        if (languages.includes("Mon Calamarian") || languages.includes("Mon Calamarian (understand only)")) {

        }
        else {
            language = "Mon Calamarian";
            check = 1;
        }
    }
    else if (randomNum == 11) {
        if (languages.includes("Quarrenese") || languages.includes("Quarrenese (understand only)")) {

        }
        else {
            language = "Quarrenese";
            check = 1;
        }
    }
    else if (randomNum == 12) {
        if (languages.includes("Rodese") || languages.includes("Rodese (understand only)")) {

        }
        else {
            language = "Rodese";
            check = 1;
        }
    }
    else if (randomNum == 13) {
        if (languages.includes("Ryl") || languages.includes("Ryl (understand only)")) {

        }
        else {
            language = "Ryl";
            check = 1;
        }
    }
    else if (randomNum == 14) {
        if (languages.includes("Shyriiwook (understand only)") || languages.includes("Shyriiwook")) {

        }
        else {
            language = "Shyriiwook (understand only)";
            check = 1;
        }
    }
    else if (randomNum == 15) {
        if (languages.includes("Sullustese") || languages.includes("Sullustese (understand only)")) {

        }
        else {
            language = "Sullustese";
            check = 1;
        }
    }
}
if (languages[0] == "Basic (understand only)") {
    language += " (understand only)";
}
    return language;
}

export function getLanguages(speciesID,linguist,int) {
    let count;
    let languages = (parseXML("xmls/species.xml","languages",speciesID)).split(", ");
    if (speciesID == 30 && int >= 12) {
        languages.push("Sith");
    }
        if (int > 11) {
            let extraLanguages = Math.floor((int-10)/2);
            if (linguist > 0) {
                for (count = 0; count < linguist; count++) {
                    extraLanguages += 1 + Math.floor((int-10)/2);
                }
            }
            for (count = 0; count < extraLanguages; count++) {
                languages.push(language(languages));
            }
        }
        languages.sort();

    return languages;
}

export function languageList(languages) {
    let languageList = "";
    let count;
    for (count = 0; count < languages.length; count++) {
        if (count != 0) {
            languageList += ", ";
        }
        languageList += languages[count];
    }
    
    return languageList;
}