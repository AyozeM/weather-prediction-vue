<template>
    <section>
        <span class="row">{{fecha}}</span>
        <div class="row justify-content-between">
            <datos v-for="(valor,key) in datosDia.datos" :key="key" :medidas="valor">
                <span>{{key}}</span>
            </datos>
        </div>
        <hr>
    </section>
</template>

<script>
import datos from "./datos";
export default {
  components: { datos },
  props: {
    datosDia: {
      required: true,
      type: Object
    }
  },
  computed:{
      fecha(){
          return this.datosDia.fecha.toDateString();
      }
  }
};
</script>
