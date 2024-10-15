import { parametersConsultStadium } from "../panelParameters/parameters";
import { parametersStadiums } from "../panelParameters/parameters";

const InitialConsult = async (req:any, res:any) => {
    const data = await req.body;
    const { idStadium, numberStadium } = data;

    

      const newListStadiums:any = parametersStadiums.listStadiums[0];

    for(let stadium of newListStadiums) {
        if( idStadium === stadium.idStadium ) {

        const selectParameters = {
            idStadium: stadium.idStadium,
            idUser: stadium.idUser,
            typeStadium: stadium.typeStadium,
            typeFloor: stadium.typeFloor,
            name: stadium.name,
            description: stadium.description,
            allStadium: false,
            numberStadium: numberStadium
        } 

        parametersConsultStadium.push(selectParameters)
        parametersConsultStadium.shift();
 
        }
    }
    res.json({
        list: parametersStadiums.listStadiums[0],
        consult: parametersConsultStadium[0]
    })


}

const getInitialConsult = async (req: any, res: any) => {
    const parameters = parametersConsultStadium[0];

    res.json(parameters)
}

export default {
    InitialConsult,
    getInitialConsult
}