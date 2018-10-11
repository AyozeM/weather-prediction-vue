<template>
  <div id="app" class="container mt-3">
    <transition name="animate.css"
    enter-active-class="animated bounceInDown"
    leave-active-class="animated bounceOutUp">
      <alert :message="message" v-if="message" @finalizado="clearMessage"/>
    </transition>
    
      <h1>{{ $t('page.title') }}</h1>
      <img src="./assets/englishFlag.svg" @click="changeLanguage('en')" alt="traducir al ingles" class="col-1" :class="{'diselect':language == 'es'}" >
      <img src="./assets/spanishFlag.svg" @click="changeLanguage('es')" alt="traducir al español" class="col-1" :class="{'diselect':language == 'en'}">
    
    <hr>

    <div class="row justify-content-between">
      <select-vue v-if="provincias" name="provincias" :data="provincias" @cambio="cambioProvincia">
        <h5>{{ $t('page.provincia') }}</h5>
      </select-vue>
      <select-vue v-if="municipios" name="municipios" :data="municipios" @cambio="datosTiempo">
        <h5>{{ $t('page.municipio') }}</h5>
      </select-vue>
    </div>
    
    <section>
      <prediccion v-for="(day,i) in prediccion" :key="i" :datosDia="day"/>
    </section>

  </div>
</template>

<script>
import selectVue from "./components/select";
import prediccion from './components/prediccionDia';
import alert from './components/mensaje';
import axios from "axios";
import * as api from './services/apiService.js';

export default {
  name: "app",
  components: { selectVue, prediccion, alert },
  data() {
    return {
      provincias: null,
      municipios: null,
      provinciaActual: null,
      prediccion:null,
      message:null,
      language:'en'
    };
  },
  methods: {
    changeLanguage(lang){
      this.language = lang;
      this.$i18n.locale = lang;
    },
    clearMessage(){
      this.message = null;
    },
    cambioProvincia(provincia) {
      this.provinciaActual = provincia;
        api.getMunicipiosProvincia(provincia).then(data=>{
          this.municipios = data;
        }).catch(error=>{
          this.message = error;
        });
        this.municipios = null;
        this.prediccion = null;
    },
    datosTiempo(municipio){
      api.getMunicipcioWeather(this.provinciaActual,municipio).then(data=>this.prediccion = data).catch(error=> {
        this.message = error;
        this.prediccion = null;
        });
    }
  },
  created() {
    api.getProvincias().then(
      data =>{
        this.provincias = data;
      }
    ).catch(
      error =>{
        this.message = error;
      });
  }
};
</script>

<style>
  img{
    cursor: pointer; 
  }
  .diselect{
    filter: grayscale(100%)
  }
</style>
