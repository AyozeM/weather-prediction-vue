<template>
    <label :for="name">
        <slot></slot>
        <select :name="name" :id="name" class="form-control" @change="change" v-model="selectedValue">
            <option v-for="(value,i) in dataList" :key="i" :value="value.value">{{value.text}}</option>
        </select>
    </label>
</template>

<script>
    export default {
        props:{
            data:{
                required: true,
                type: Array
            },
            name:{
                required:true,
                type: String
            }
        },
        data(){
            return{
                selectedValue:null
            }
        },
        computed:{
            dataList(){
                let aux = this.data;
                aux.unshift({value:null,text:'seleccione una opcion'});
                return aux;
            }
        },
        methods:{
            change(){
                this.$emit('cambio',this.selectedValue)
            }
        }     
    }
</script>

