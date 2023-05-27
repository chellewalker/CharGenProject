export function displayFeats(feats) {
    let featDisplay = "";
    let count;
    feats.sort();
    for (count = 0; count < feats.length; count++) {
        if (count != 0) {
            featDisplay += ", ";
        }
        featDisplay += feats[count];
    }

    return featDisplay;
}