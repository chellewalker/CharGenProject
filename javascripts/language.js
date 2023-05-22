export function language(languages) {
    let language;
    let check = 0;
    while (check == 0) {
    let randomNum = Math.floor(Math.random() * 16);
    if (randomNum == 0) {
        if (languages.includes("Basic")) {

        }
        else {
            language = "Basic";
            check = 1;
        }
    }
    else if (randomNum == 1) {
        if (languages.includes("Binary")) {

        }
        else {
            language = "Binary";
            check = 1;
        }
    }
    else if (randomNum == 2) {
        if (languages.includes("Bocce")) {

        }
        else {
            language = "Bocce";
            check = 1;
        }
    }
    else if (randomNum == 3) {
        if (languages.includes("Bothese")) {

        }
        else {
            language = "Bothese";
            check = 1;
        }
    }
    else if (randomNum == 4) {
        if (languages.includes("Cerean")) {

        }
        else {
            language = "Cerean";
            check = 1;
        }
    }
    else if (randomNum == 5) {
        if (languages.includes("Dosh")) {

        }
        else {
            language = "Dosh";
            check = 1;
        }
    }
    else if (randomNum == 6) {
        if (languages.includes("Durese")) {

        }
        else {
            language = "Durese";
            check = 1;
        }
    }
    else if (randomNum == 4) {
        if (languages.includes("Gamorrean")) {

        }
        else {
            language = "Gamorrean";
            check = 1;
        }
    }
    else if (randomNum == 5) {
        if (languages.includes("High Galactic")) {

        }
        else {
            language = "High Galactic";
            check = 1;
        }
    }
    else if (randomNum == 6) {
        if (languages.includes("Huttese")) {

        }
        else {
            language = "Huttese";
            check = 1;
        }
    }
    else if (randomNum == 7) {
        if (languages.includes("Ithorese")) {

        }
        else {
            language = "Ithorese";
            check = 1;
        }
    }
    else if (randomNum == 8) {
        if (languages.includes("Jawa Trade Language")) {

        }
        else {
            language = "Jawa Trade Language";
            check = 1;
        }
    }
    else if (randomNum == 9) {
        if (languages.includes("Kel Dor")) {

        }
        else {
            language = "Kel Dor";
            check = 1;
        }
    }
    else if (randomNum == 10) {
        if (languages.includes("Mon Calamarian")) {

        }
        else {
            language = "Mon Calamarian";
            check = 1;
        }
    }
    else if (randomNum == 11) {
        if (languages.includes("Quarrenese")) {

        }
        else {
            language = "Quarrenese";
            check = 1;
        }
    }
    else if (randomNum == 12) {
        if (languages.includes("Rodese")) {

        }
        else {
            language = "Rodese";
            check = 1;
        }
    }
    else if (randomNum == 13) {
        if (languages.includes("Ryl")) {

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
        if (languages.includes("Sullustese")) {

        }
        else {
            language = "Sullustese";
            check = 1;
        }
    }
}
    return language;
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