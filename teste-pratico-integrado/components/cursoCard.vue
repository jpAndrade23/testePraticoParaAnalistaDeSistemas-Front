<template>
    <a :href="'/curso/' + dadosCurso.id">
        <div class="container d-flex align-items-end" :style="{ backgroundImage: 'url(' + dadosCurso.imagemCurso + ')' }">
            <div>
                <p class="modalidade mb-0"> {{ dadosCurso.modalidadeDoCurso.nome }}</p>
                <p class="tipo mb-0"> {{ dadosCurso.tipoDoCurso.nome }}</p>
                <p class="curso">{{ dadosCurso.nome }}</p>
            </div>
        </div>
    </a>
</template>

<script>

export default {
    props: {
        dadosCurso:{
            type: Object,
        }
    },
    created(){
        this.verificaTamanho();
    },
    methods: {
        verificaTamanho(){
            if(this.dadosCurso.nome.length>29){
                this.dadosCurso.nome = this.dadosCurso.nome.substring(0, 29) + "...";
            }
        }
    }
    
}
</script>

<style scoped>
    .container{
        background-color: black;
        justify-content:last baseline;
        width: 265px;
        height: 265px;
        background-size:cover;
        background-repeat: no-repeat;
        box-shadow: rgba(0, 0, 0, 0.25) 150px 150px 0px 150px inset, rgba(0, 0, 0, 0.3) 150px 150px 0px 150px inset;
    }
    p{
        color: white;
        text-align: start;
    }
    .curso{
        font-weight: bolder;
        font-size: 20px;
    }
    a{
        text-decoration: none;
    }
    
</style>