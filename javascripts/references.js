export function references() {
    let available = "";

    if (document.getElementById('core').checked) {
        available += document.getElementById('core').value;
        available += ",";
    }
    if (document.getElementById('starships').checked) {
        available += document.getElementById('starships').value;
        available += ",";
    }
    if (document.getElementById('threats').checked) {
        available += document.getElementById('threats').value;
        available += ",";
    }
    if (document.getElementById('knights').checked) {
        available += document.getElementById('knights').value;
        available += ",";
    }
    if (document.getElementById('force').checked) {
        available += document.getElementById('force').value;
        available += ",";
    }
    if (document.getElementById('scum').checked) {
        available += document.getElementById('scum').value;
        available += ",";
    }
    if (document.getElementById('clone').checked) {
        available += document.getElementById('clone').value;
        available += ",";
    }
    if (document.getElementById('legacy').checked) {
        available += document.getElementById('legacy').value;
        available += ",";
    }
    if (document.getElementById('academy').checked) {
        available += document.getElementById('academy').value;
        available += ",";
    }
    if (document.getElementById('rebellion').checked) {
        available += document.getElementById('rebellion').value;
        available += ",";
    }
    if (document.getElementById('war').checked) {
        available += document.getElementById('war').value;
        available += ",";
    }
    if (document.getElementById('droids').checked) {
        available += document.getElementById('droids').value;
        available += ",";
    }
    if (document.getElementById('intrigue').checked) {
        available += document.getElementById('intrigue').value;
        available += ",";
    }
    if (document.getElementById('unknown').checked) {
        available += document.getElementById('unknown').value;
        available += ",";
    }
    if (document.getElementById('web').checked) {
        available += document.getElementById('web').value;
        available += ",";
    }
    if (document.getElementById('homebrew').checked) {
        available += document.getElementById('homebrew').value;
        available += ",";
    }

    if (available == "") {
        available += document.getElementById('core').value;
        available += ",";
    }

    return available;
}