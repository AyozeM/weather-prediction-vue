import Vue from 'vue';
import Vuei18n from 'vue-i18n';

Vue.use(Vuei18n);

const messages = {
    en:{
        page:{
            title: 'Weather information',
            provincia:'province',
            municipio: 'municipality',
            temperatura:'temperature',
            humedad:'humidity',
            sen_termica:'thermal sensation',
            maxima:'max',
            minima:'min'
        },
        alerts:{
            weatherNotFound:'meteorological data is empty for this municipality',
            provinciaNotFound:`we can't get provincies`,
            municipioNotFound:`we can't get municipalities of this province`
        }
    },
    es:{
        page:{
            title: 'Información del tiempo',
            provincia:'provincia',
            municipio:'municipio',
            temperatura:'temperatura',
            humedad:'humedad',
            sen_termica:'sesación térmica',
            maxima:'máxima',
            minima:'mínima'
        },
        alerts:{
            weatherNotFound:'No tenemos los datos meteorológicos de este municipio',
            provinciaNotFound:'No pudimos obtener las provincias',
            municipioNotFound:'No pudimos obtener los municipios de esta provincia'
        }
    }
};

export const i18n = new Vuei18n({
    locale:'en',
    messages
});