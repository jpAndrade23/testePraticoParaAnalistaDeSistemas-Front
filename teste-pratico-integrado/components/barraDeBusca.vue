<template>
    <div class="w-100 align-items-center justify-content-center d-flex">
        <div>
            <input type="text" v-model="dadoBarraDePesquisa" name="input-pesquisa" id="input-pesquisa" placeholder="Buscar...">
        </div>
        <div >
            <button @click="buscaDados">
                Pesquisar
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dadoBarraDePesquisa: '',
        }
    },
    props: {
        rota: {
            type: String,
        }
    },
    methods: {
        buscaDados() {
            if(this.dadoBarraDePesquisa.length>0){
                console.log(this.rota)
                this.$router.push(this.rota + '/' + this.dadoBarraDePesquisa)
            }
        }
    }
}
</script>

<style scoped>
    input{
        border-radius: 40px;
        padding: 7px;
        color: #9C9C9C;
        width: 141%;
    }
    button{
        background: #1585C9;
        color: white;
        border-radius: 30px;
        padding: 7px;
        border: none;
    }
</style>
