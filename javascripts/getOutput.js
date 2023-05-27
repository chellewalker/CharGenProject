export function getOutput(feats,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
    reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,
    advancedMelee,lightsaber,pistol,rifle,heavyWeapon,otherAttack,BAB,grappleDisplay,
    speciesTraits,str,dex,con,int,wis,cha,listTalents,listFeats,listSkills,equipmentList) {
    let destiny = "";
        if (Math.floor(level/5) > 0) {
            destiny = "<strong>Destiny Points: </strong>" + Math.floor(level/5) + "; ";
        }

    let forcePoints = Math.max(Math.floor(level/2),1);
        if (feats.includes("Force Boon")) {
            forcePoints += 3;
        }

    let advancedMeleeAttack = "";
    let lightsaberAttack = "";
    let pistolAttack = "";
    let rifleAttack = "";
    let heavyWeaponAttack = "";
    if (advancedMelee != "") {
        advancedMeleeAttack = "<strong>Melee:</strong> "+advancedMelee+"<br>";
    }
    if (lightsaber != "") {
        lightsaberAttack = "<strong>Melee:</strong> "+lightsaber+"<br>";
    }
    if (pistol != "") {
        pistolAttack = "<strong>Ranged:</strong> "+pistol+"<br>";
    }
    if (rifle != "") {
        rifleAttack = "<strong>Ranged:</strong> "+rifle+"<br>";
    }
    if (heavyWeapon != "") {
        heavyWeaponAttack = "<strong>Ranged:</strong> "+heavyWeapon+"<br>";
    }

    let outputData = getOutputData(destiny,forcePoints,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
        reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,
        advancedMeleeAttack,lightsaberAttack,pistolAttack,rifleAttack,heavyWeaponAttack,otherAttack,BAB,grappleDisplay,
        speciesTraits,str,dex,con,int,wis,cha,listTalents,listFeats,listSkills,equipmentList);

    let output = 
    "<h3 style='padding-bottom:-5%;'><u>"+name+" Statistics (CL "+level+")</u></h3>"+
        size+" "+species+" "+classList+"<br>"+
        destiny+"<strong>Force Points:</strong> "+forcePoints+"<br>"+
        "<strong>Initiative:</strong> "+initiativeDisplay+"; <strong>Senses:</strong> Perception "+perceptionDisplay+"<br>"+
        "<strong>Languages:</strong> "+listLanguages+"<br>"+
        "<p style='font-size: large; margin-bottom: 0;'><u><strong>Defenses</strong></u></p>"+
        "<strong>Reflex Defense:</strong> "+reflex+" (<strong>Flat-Footed:</strong> "+flatFooted+"), <strong>Fortitude Defense:</strong> "+fortitude+", <strong>Will Defense:</strong> "+will+"<br>"+
        "<strong>Hit Points:</strong> "+hitPoints+", <strong>Damage Threshold:</strong> "+damageThreshold+"<br>"+
        "<p style='font-size: large; margin-bottom: 0;'><u><strong>Offense</strong></u></p>"+
        "<strong>Speed:</strong> "+speed+"<br>"+
        "<strong>Melee:</strong> "+unarmed+"<br>"+
        advancedMeleeAttack+
        lightsaberAttack+
        pistolAttack+
        rifleAttack+
        heavyWeaponAttack+
        otherAttack+
        "<strong>Base Attack Bonus:</strong> +"+BAB+", <strong>Grapple:</strong> "+grappleDisplay+"<br>"+
        "<strong>Species Traits ("+species+"):</strong> "+speciesTraits+"<br>"+
        "<p style='font-size: large; margin-bottom: 0;'><u><strong>Base Stats</strong></u></p>"+
        "<strong>Abilities:</strong> Strength "+str+", Dexterity "+dex+", Constitution "+con+", Intelligence "+int+", Wisdom "+wis+", Charisma "+cha+""+"<br>"+
        "<strong>Talents:</strong> "+listTalents+"<br>"+
        "<strong>Feats:</strong> "+listFeats+"<br>"+        
        "<strong>Skills:</strong> "+listSkills+"<br>"+
        "<strong>Possessions:</strong> "+equipmentList+"<br><br>"+
        "<div style='padding-left: 10%;'><button type='submit'>"+
        "<a onclick='location.href = \"index.html\"'>Make New Character</a>"+
        "</button><button type='submit'>"+
        "<a onclick='print()'>Download Character</a>"+
        "</button></div>";

    return output;
}

export function getOutputData(destiny,forcePoints,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
    reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,
    advancedMelee,lightsaber,pistol,rifle,heavyWeapon,otherAttack,BAB,grappleDisplay,
    speciesTraits,str,dex,con,int,wis,cha,listTalents,listFeats,listSkills,equipmentList) {

        let advancedMeleeAttack = "";
        let lightsaberAttack = "";
        let pistolAttack = "";
        let rifleAttack = "";
        let heavyWeaponAttack = "";
        if (advancedMelee != "") {
            advancedMeleeAttack = "Melee: "+advancedMelee+"<br>";
        }
        if (lightsaber != "") {
            lightsaberAttack = "Melee: "+lightsaber+"<br>";
        }
        if (pistol != "") {
            pistolAttack = "Ranged: "+pistol+"<br>";
        }
        if (rifle != "") {
            rifleAttack = "Ranged: "+rifle+"<br>";
        }
        if (heavyWeapon != "") {
            heavyWeaponAttack = "Ranged: "+heavyWeapon+"<br>";
        }

    let outputData = 
    name+" Statistics (CL "+level+")\n"+
        size+" "+species+" "+classList+"\n"+
        destiny+"Force Points: "+forcePoints+"\n"+
        "Initiative: "+initiativeDisplay+"; Senses: Perception "+perceptionDisplay+"\n"+
        "Languages: "+listLanguages+"\n"+
        "Defenses\n"+
        "Reflex Defense: "+reflex+" (Flat-Footed: "+flatFooted+"), Fortitude Defense: "+fortitude+", Will Defense: "+will+"\n"+
        "Hit Points: "+hitPoints+", Damage Threshold: "+damageThreshold+"\n"+
        "Offense\n"+
        "Speed: "+speed+"\n"+
        "Melee: "+unarmed+"\n"+
        advancedMeleeAttack+
        lightsaberAttack+
        pistolAttack+
        rifleAttack+
        heavyWeaponAttack+
        otherAttack+
        "Base Attack Bonus: +"+BAB+", Grapple: "+grappleDisplay+"\n"+
        "Species Traits ("+species+"): "+speciesTraits+"\n"+
        "Base Stats\n"+
        "Abilities: Strength "+str+", Dexterity "+dex+", Constitution "+con+", Intelligence "+int+", Wisdom "+wis+", Charisma "+cha+""+"\n"+
        "Talents: "+listTalents+"\n"+
        "Feats: "+listFeats+"\n"+        
        "Skills: "+listSkills+"\n"+
        "Possessions: "+equipmentList;

    return outputData;
}