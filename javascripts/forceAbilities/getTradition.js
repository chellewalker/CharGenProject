export function getTradition(light,dark,species) {
    let tradition = -1;
    while (tradition == -1) {
        let randomNum = Math.floor(Math.random() * 4);
        if (randomNum == 0 && light == 1) {
            //Jedi
            tradition = 0;
        }
        else if (randomNum == 1 && dark == 1) {
            //Sith
            tradition = 1;
        }
        else if (randomNum == 2) {
            //Jensarrai
            tradition = 2;
        }
        else if (randomNum == 3) {
            //Dathomir
            tradition = 3;
        }
    }
    return tradition;
}