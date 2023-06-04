export function getImplant(available) {
    let implant = "";

    while (implant == "") {
        let randomNum = Math.floor(Math.random() * 8);
        if (randomNum == 0) {
            implant = "Bio-Stabilizer Implant";
        }
        if (randomNum == 1) {
            implant = "Cardio Implant";
        }
        if (randomNum == 2) {
            implant = "Combat Implant";
        }
        if (randomNum == 3) {
            implant = "Memory Implant";
        }
        if (randomNum == 4) {
            implant = "Nerve Reinforcement Implant";
        }
        if (randomNum == 5) {
            implant = "Regenerative Implant";
        }
        if (randomNum == 6) {
            implant = "Sensory Implant";
        }
        if (randomNum == 7 && available.includes("JATM")) {
            implant = "Subelectronic Converter";
        }
    }

    return implant;
}