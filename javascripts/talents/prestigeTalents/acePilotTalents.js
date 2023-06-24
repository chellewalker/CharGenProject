export function acePilotTalents(talents,available,skills,feats,BAB,starshipManeuvers,wis,cha) {
    let count = 0;
    let talent = "";
    while (talent == "") {
        count++;
        let randomNum = Math.floor(Math.random() * 6);
    if (randomNum == 0) {
        talent = expertPilotTalents(talents,available,skills,feats,BAB,starshipManeuvers,wis);
    }
    else if (randomNum == 1) {
        talent = gunnerTalents(talents,available,skills,feats,BAB,starshipManeuvers,wis);
    }
    else if (randomNum == 2 && light == 1) {
        talent = spacerTalents(talents,available,skills,feats,BAB);
    }
    else if (randomNum == 3 && available.includes("SotG")) {
        talent = squadronLeaderTalents(talents,available,skills,feats,BAB,starshipManeuvers,wis,cha);
    }
    else if (randomNum == 4 && available.includes("SaV")) {
        talent = blockadeRunnerTalents(talents,available,skills,feats,BAB,starshipManeuvers,wis);
    }
    else if (randomNum == 5 && available.includes("RECG")) {
        talent = wingmanTalents(talents,available,skills,feats,BAB,starshipManeuvers,wis);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function expertPilotTalents(talents,available,skills,feats,BAB,starshipManeuvers,wis) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 18);

    if (randomNum == 0) {
        talent = "Elusive Dogfighter";
    }
    else if (randomNum == 1) {
        talent = "Full Throttle";
    }
    else if (randomNum == 2 && talents.includes("Vehicular Evasion")) {
        talent = "Juke";
    }
    else if (randomNum == 3) {
        talent = "Keep it Together";
    }
    else if (randomNum == 4) {
        talent = "Relentless Pursuit";
    }
    else if (randomNum == 5) {
        talent = "Vehicular Evasion";
    }
    else if (randomNum == 6 && available.includes("SotG")) {
        talent = "Blind Spot";
    }
    else if (randomNum == 7 && available.includes("GoI")) {
        talent = "Clip";
    }
    else if (randomNum == 8 && available.includes("SotG")) {
        talent = "Close Scrape";
    }
    else if (randomNum == 9 && available.includes("SotG")) {
        talent = "Improved Attack Run";
    }
    else if (randomNum == 10 && available.includes("GoI")) {
        talent = "Master Defender";
    }
    else if (randomNum == 11 && available.includes("CWCG")) {
        talent = "Renowned Pilot";
    }
    else if (randomNum == 12 && available.includes("UR") && talents.includes("Elusive Dogfighter")) {
        talent = "Roll Out";
    }
    else if (randomNum == 13 && available.includes("GoI")) {
        talent = "Shunt Damage";
    }
    else if (randomNum == 14 && available.includes("SotG") && wis >= 13) {
        talent = "Vehicle Focus (Starfighters)";
    }
    else if (randomNum == 15 && available.includes("SotG") && wis >= 13) {
        talent = "Vehicle Focus (Space Transports)";
    }
    else if (randomNum == 16 && available.includes("SotG") && wis >= 13) {
        let randomNum = Math.floor(Math.random() * 4);
            if (randomNum == 0) {
                talent = "Vehicle Focus (Airspeeders)";
            }
            if (randomNum == 1) {
                talent = "Vehicle Focus (Capital Ships)";
            }
            if (randomNum == 2) {
                talent = "Vehicle Focus (Speeders)";
            }
            if (randomNum == 3) {
                talent = "Vehicle Focus (Walkers)";
            }
    }
    else if (randomNum == 17 && available.includes("SotG") && wis >= 13) {
        talent = "Wingman";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function gunnerTalents(talents,available,skills,feats,BAB,starshipManeuvers,wis) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 9);

    if (randomNum == 0 && talents.includes("Expert Gunner")) {
        talent = "Dogfight Gunner";
    }
    else if (randomNum == 1) {
        talent = "Expert Gunner";
    }
    else if (randomNum == 2 && talents.includes("Expert Gunner")) {
        talent = "Quick Trigger";
    }
    else if (randomNum == 3 && talents.includes("Expert Gunner")) {
        talent = "System Hit";
    }
    else if (randomNum == 4 && available.includes("SotG") && talents.includes("System Hit")) {
        talent = "Crippling Hit";
    }
    else if (randomNum == 5 && available.includes("UR") && talents.includes("Quick Trigger")) {
        talent = "Fast Attack Specialist";
    }
    else if (randomNum == 6 && available.includes("SotG")) {
        talent = "Great Shot";
    }
    else if (randomNum == 7 && available.includes("UR") && talents.includes("Expert Gunner")) {
        talent = "Overcharged Shot";
    }
    else if (randomNum == 8 && available.includes("SotG") && talents.includes("Expert Gunner")) {
        talent = "Synchronized Fire";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function spacerTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 7);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Hyperdriven";
    }
    else if (randomNum == 1 && available.includes("CR")) {
        talent = "Spacehound";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Spacehound")) {
        talent = "Starship Raider";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Spacehound")) {
        talent = "Stellar Warrior";
    }
    else if (randomNum == 4 && available.includes("SaV") && talents.includes("Spacehound") && talents.includes("Starship Raider")) {
        talent = "Cramped Quarters Fighting";
    }
    else if (randomNum == 5 && available.includes("UR") && talents.includes("Spacehound") && talents.includes("Starship Raider")) {
        talent = "Deep Space Raider";
    }
    else if (randomNum == 6 && available.includes("SaV") && talents.includes("Spacehound") && talents.includes("Stellar Warrior")) {
        talent = "Make a Break for It";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function squadronLeaderTalents(talents,available,skills,feats,BAB,starshipManeuvers,wis,cha) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0 && cha >= 13) {
        talent = "Begin Attack Run";
    }
    else if (randomNum == 1 && cha >= 13) {
        talent = "Regroup";
    }
    else if (randomNum == 2 && cha >= 13 && talents.includes("Elusive Dogfighter") ||
                randomNum == 2 && cha >= 13 && talents.includes("Full Throttle") ||
                randomNum == 2 && cha >= 13 && talents.includes("Keep it Together") ||
                randomNum == 2 && cha >= 13 && talents.includes("Relentless Pursuit") ||
                randomNum == 2 && cha >= 13 && talents.includes("Vehicular Evasion") ||
                randomNum == 2 && cha >= 13 && talents.includes("Blind Spot") ||
                randomNum == 2 && cha >= 13 && talents.includes("Clip") ||
                randomNum == 2 && cha >= 13 && talents.includes("Close Scrape") ||
                randomNum == 2 && cha >= 13 && talents.includes("Improved Attack Run") ||
                randomNum == 2 && cha >= 13 && talents.includes("Master Defender") ||
                randomNum == 2 && cha >= 13 && talents.includes("Renowned Pilot") ||
                randomNum == 2 && cha >= 13 && talents.includes("Roll Out") ||
                randomNum == 2 && cha >= 13 && talents.includes("Shunt Damage") ||
                randomNum == 2 && cha >= 13 && talents.includes("Vehicle Focus (Airspeeders)") ||
                randomNum == 2 && cha >= 13 && talents.includes("Vehicle Focus (Capital Ships)") ||
                randomNum == 2 && cha >= 13 && talents.includes("Vehicle Focus (Starfighers)") ||
                randomNum == 2 && cha >= 13 && talents.includes("Vehicle Focus (Space Transports)") ||
                randomNum == 2 && cha >= 13 && talents.includes("Vehicle Focus (Speeders)") ||
                randomNum == 2 && cha >= 13 && talents.includes("Vehicle Focus (Walkers)") ||
                randomNum == 2 && cha >= 13 && talents.includes("Wingman") ||
                randomNum == 2 && cha >= 13 && talents.includes("Expert Gunner") ||
                randomNum == 2 && cha >= 13 && talents.includes("Great Shot")) {
        talent = "Squadron Maneuvers";
    }
    else if (randomNum == 3 && wis >= 13 && cha >= 13 && feats.includes("Starship Tactics") && talents.includes("Squadron Maneuvers")) {
        talent = "Squadron Tactics";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function blockadeRunnerTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0 && talents.includes("Watch This")) {
        talent = "Close Cover";
    }
    else if (randomNum == 1) {
        talent = "Outrun";
    }
    else if (randomNum == 2) {
        talent = "Punch Through";
    }
    else if (randomNum == 3) {
        talent = "Small Target";
    }
    else if (randomNum == 4) {
        talent = "Watch This";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}

export function wingmanTalents(talents,available,skills,feats,BAB) {
    let talent = "";
    let count = 0;
    while (count < 20 && talent == "") {
        count++;
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum == 0) {
        talent = "Concentrate All Fire";
    }
    else if (randomNum == 1) {
        talent = "Escort Pilot";
    }
    else if (randomNum == 2) {
        talent = "Lose Pursuit";
    }
    else if (randomNum == 3 && talents.includes("Escort Pilot")) {
        talent = "Run Interference";
    }
    else if (randomNum == 4 && talents.includes("Escort Pilot")) {
        talent = "Wingman Retribution";
    }
    if (talents.includes(talent)) {
        talent = "";
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}

    return talent;
}