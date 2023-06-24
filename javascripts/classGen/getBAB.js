export function getBAB(classes) {
    let BAB = 0;

    BAB += classes[0]*1;
    BAB += Math.floor(classes[1]*0.75);
    BAB += Math.floor(classes[2]*0.75);
    BAB += Math.floor(classes[3]*0.75);
    BAB += classes[4]*1;
    //Ace Pilot
    BAB += Math.floor(classes[5]*0.75);

    return BAB;
}