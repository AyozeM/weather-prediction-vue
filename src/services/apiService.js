import axios from 'axios';
import properties from '../config/environment.dev';

/**
 * Obtiene las provincias
 */
const getProvincias = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${properties.api}/provincias`).then(
            data => {
                console.info('Provincias obtenidas')
                resolve(data.data.map(e => {
                    return {
                        value: e.CODPROV,
                        text: e.NOMBRE_PROVINCIA
                    };
                }));
            },
            error => {
                console.error("hubo un fallo en la peticon", error);
                reject('provinciaNotFound');
            }
        );
    })
};

/**
 * Obtiene todos los municipios de una provincia concreta
 * @param {String} provincia Código de la provincia
 */
const getMunicipiosProvincia = provincia => {
    return new Promise((resolve, reject) => {
        axios.get(`${properties.api}/provincias/${provincia}/municipios`).then(
            data => {
                console.info('Municipios obtenidos')
                resolve(Object.values(data.data).map(e => {
                    return {
                        value: e.COD_GEO,
                        text: e.NOMBRE
                    }
                }));
            },
            error => {
                console.error('Hubo un fallo ', error);
                reject('municipioNotFound');
            }
        );
    });
};

/**
 * Obtiene los datos meteorológicos de un municipio concreto
 * @param {String} procincia Código de la provincia
 * @param {String} municipio Código del municipio
 */
const getMunicipcioWeather = (procincia,municipio) =>{
    return new Promise((resolve,reject)=>{
        axios.get(`${properties.api}/provincias/${procincia}/municipios/${municipio}/weather`).then(data=>{
            console.log('Datos del tiempo obtenidos');
            resolve(data.data.prediccion.dia.slice(0,3).map(e=>{
                return {
                  fecha: new Date(e['@attributes'].fecha),
                  datos:{
                    temperatura:{
                      max: `${e.temperatura.maxima}ºC`,
                      min: `${e.temperatura.minima}ºC`,
                    },
                    humedad:{
                      max: `${e.humedad_relativa.maxima}%`,
                      min: `${e.humedad_relativa.minima}%`
                    },
                    sen_termica:{
                      max: `${e.sens_termica.maxima}ºC`,
                      min: `${e.sens_termica.minima}ºC`
                    }
                  }
                }
              }));            
        }).catch(error=>{
            console.error('Fallo en la consulta ',error);
            reject('weatherNotFound');
        });
    }       );
        };

export { getProvincias, getMunicipiosProvincia, getMunicipcioWeather };