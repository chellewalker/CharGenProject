export function parseXML(basexml,value,num) {
    var xhttp;
    var xmlDoc;
    if(window.XMLHttpRequest){
        xhttp = new XMLHttpRequest();
    }else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }


    xhttp.open("GET", basexml, false);
    xhttp.send(null);
    xmlDoc = xhttp.responseXML;

    var test = xmlDoc.getElementsByTagName(value)[num].childNodes[0].nodeValue;
    
    return test;
}

export function classXML(basexml,value,num) {
    var xhttp;
    var xmlDoc;
    if(window.XMLHttpRequest){
        xhttp = new XMLHttpRequest();
    }else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }


    xhttp.open("GET", basexml, false);
    xhttp.send(null);
    xmlDoc = xhttp.responseXML;

    var test = xmlDoc.getElementsByTagName(value)[num].childNodes[0].nodeValue;
    
    return test;
}

export function lengthXML(basexml,value) {
    var xhttp;
    var xmlDoc;
    if(window.XMLHttpRequest){
        xhttp = new XMLHttpRequest();
    }else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }


    xhttp.open("GET", basexml, false);
    xhttp.send(null);
    xmlDoc = xhttp.responseXML;

    var test = xmlDoc.getElementsByTagName(value)[0].childNodes[10].length + 2;

    return test;
}