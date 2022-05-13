const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")



const main = async() => {

    let opt;

    do {

        opt = await inquirerMenu();

        switch(opt) {
            case 1:
                console.log(`${opt}: Buscar ciudad`);
            break;
            case 2:
                console.log(`${opt}: Historial`);
            break;
            
        }

        if (opt !== 0 ) await pausa();
 
    } while(opt !== 0);


}


main();

