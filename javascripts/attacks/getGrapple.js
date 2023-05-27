export function getGrapple(BAB,str,dex,size,talents) {
    let grapple = BAB + Math.max(Math.floor((str-10)/2),Math.floor((dex-10)/2));
            if (size == "Small") {
                grapple -= 5;
            }
            if (size == "Large") {
                grapple += 5;
            }
            if (talents.includes("Expert Grappler")) {
                grapple += 2;
            }
        let grappleDisplay;
        if (grapple < 0) {
            grappleDisplay = grapple;
        }
        else {
            grappleDisplay = "+"+grapple;
        }
    return grappleDisplay;
}