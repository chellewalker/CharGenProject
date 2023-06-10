export function getShields(available,feats,talents) {
    let shields = [];

    if (feats.includes("Armor Proficiency (Heavy)")) {
        shields[0] = "Energy Shields (SR 25)";
        shields[1] = 25;
        shields[2] = 2;
        shields[3] = "Heavy";
    }
    else if (feats.includes("Armor Proficiency (Medium)")) {
        shields[0] = "Energy Shields (SR 15)";
        shields[1] = 15;
        shields[2] = 3;
        shields[3] = "Medium";
    }
    else if (feats.includes("Armor Proficiency (Light)")) {
        shields[0] = "Energy Shields (SR 5)";
        shields[1] = 5;
        shields[2] = 4;
        shields[3] = "Light";
    }

    return shields;
}