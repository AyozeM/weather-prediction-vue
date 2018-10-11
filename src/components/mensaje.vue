<template>
    <div class="alert alert-danger">
        <div class="close" @click="close">X</div>
        <section v-if="title">
            <h5 class="alert-heading">{{title}}</h5>
            <hr>
        </section>
        <span class="col-10">{{ $t(`alerts['${message}']`) }}</span>
        <div class="progressBar" :style="`width:${width}%`" v-if="width > 1"/>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String
        },
        message:{
            required: true,
            type: String
        }
    },
    data(){
        return{
            width:100,
            intervalo:null
        }
    },
    methods:{
        moveProgressBar(){
            const initialWidth = this.width;
            const totalTime = 2000;
            const indiceDecrecimiento = 1;
            let actualTime = 0;

            this.intervalo = setInterval(()=>{
                actualTime +=  indiceDecrecimiento;
                let completed = actualTime / totalTime * 100;

                this.width = 100 - completed;

                if(actualTime == totalTime){
                    clearInterval(this.intervalo)
                    this.$emit('finalizado');
                }
            },indiceDecrecimiento);
        },
        close(){
            clearInterval(this.intervalo);
            this.$emit('finalizado');
        }
    },
    mounted(){
        this.moveProgressBar();
    }
}
</script>

<style scoped>
    .progressBar{
        display: block;
        border: 2px solid var(--danger);
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .alert{
        position: absolute;
        right: 2%;
    }
</style>
