export function references() {
    let available = [];

    if (document.getElementById('core').checked) {
        available.push(document.getElementById('core').value);
    }
    if (document.getElementById('starships').checked) {
        available.push(document.getElementById('starships').value);
    }
    if (document.getElementById('threats').checked) {
        available.push(document.getElementById('threats').value);
    }
    if (document.getElementById('knights').checked) {
        available.push(document.getElementById('knights').value);
    }
    if (document.getElementById('force').checked) {
        available.push(document.getElementById('force').value);
    }
    if (document.getElementById('scum').checked) {
        available.push(document.getElementById('scum').value);
    }
    if (document.getElementById('clone').checked) {
        available.push(document.getElementById('clone').value);
    }
    if (document.getElementById('legacy').checked) {
        available.push(document.getElementById('legacy').value);
    }
    if (document.getElementById('academy').checked) {
        available.push(document.getElementById('academy').value);
    }
    if (document.getElementById('rebellion').checked) {
        available.push(document.getElementById('rebellion').value);
    }
    if (document.getElementById('war').checked) {
        available.push(document.getElementById('war').value);
    }
    if (document.getElementById('droids').checked) {
        available.push(document.getElementById('droids').value);
    }
    if (document.getElementById('intrigue').checked) {
        available.push(document.getElementById('intrigue').value);
    }
    if (document.getElementById('unknown').checked) {
        available.push(document.getElementById('unknown').value);
    }
    if (document.getElementById('web').checked) {
        available.push(document.getElementById('web').value);
    }
    if (document.getElementById('homebrew').checked) {
        available.push(document.getElementById('homebrew').value);
    }

    if (available == "") {
        available.push(document.getElementById('core').value);
    }

    return available;
}