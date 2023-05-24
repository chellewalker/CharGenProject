import {parseXML} from './xmlGetter.js';
import {references} from './references.js';
import {speciesGen} from './speciesGen.js';
import {language,languageList} from './language.js';
import {getSkills,displaySkills} from './skills.js';
import {classFeats,speciesFeats,displayFeats,getFeats} from './feats.js';
import {getTalents,displayTalents} from './talents/getTalents.js';
import {classFirst,classSelection,classListing,getHitPoints,getBAB,availableFeats} from './classGen.js';
import {abilityGen} from './abilities/abilityGen.js';

export function genCharacter() {
    // get values
    let available = references().split(",");
    let abilities = document.getElementById('abilities').value;
    let firstClass = document.getElementById('class').value;
    let level = document.getElementById('level').value;
    let species = "error";
    let tempSpecies = document.querySelector('input[name="species"]:checked').value;
        if (tempSpecies == "on") {
            tempSpecies = document.getElementById('speciesManual').value;
            if (tempSpecies == null) {
                tempSpecies = "random";
            }
        }

        //generate species
        let speciesID = speciesGen(tempSpecies,available);
        species = parseXML("xmls/species.xml","name",speciesID);
        let speciesMod = parseXML("xmls/species.xml","abilityMods",speciesID);
        let speciesTraits = parseXML("xmls/species.xml","speciesTraits",speciesID).split(", ");

        //generate name
        let name = document.querySelector('input[name="name"]:checked').value;
        if (document.getElementById('nameManual').value != "") {
            name = document.getElementById('nameManual').value;
        }
        else if (name == "random" || name == "on") {
                let nameList = parseXML("xmls/species.xml","exampleNames",speciesID);
                let nameArray = nameList.split(", ");
                let randomName = Math.floor(Math.random() * nameArray.length);
                name = nameArray[randomName];
        }

        //generate ability scores

}