<template>
    <div class="informacoes m-5 p-3 text-center">
        <h1>Por dentro do curso</h1>
        <h2 class="apresentacao">Apresentação</h2>
        <p class="dadosEssenciais">{{dadosCurso.tipoDoCurso.nomeDeExibicao}}</p>
        <p class="dadosEssenciais">Duração: {{dadosCurso.duracao}} anos</p>
        <p>{{dadosCurso.descricao}}</p>
        <h1>Parcelas</h1>
        <div class="preco">
            <h2>Valor do curso: R${{ dadosCurso.valor }}</h2>
            <h3>Parcelas de apenas R${{ this.precoCorrigido }} por mês</h3>
        </div>
    </div>
</template>

<script>
    
    export default {
    setup(){
        let precoCorrigido = ref(0); 
        return { precoCorrigido }
    },
    props: {
        dadosCurso:{
            type: Object,
        }
    },
    created(){
        this.corrigeCasasDecimais();
    },
    methods: {
        corrigeCasasDecimais() {
            let preco = this.dadosCurso.valor/(this.dadosCurso.duracao*10)
            this.precoCorrigido = preco.toFixed(2) 
            return this.precoCorrigido;
        }
    }
}

    
</script>


<style scoped>
     .informacoes{
        background-color: #ECECEC;
        max-width: 60em;
        border-radius: 10px;
        
    }

    h1{
        color: #1586CB;
    }
    .apresentacao{
        text-align: start;
    }

    .preco{
        font-weight: bold;
        color: #E26D00;
    }
    .dadosEssenciais{
        text-align: start;
        font-size: 20px;
        font-weight: bold;
    }

    @media only screen and (min-width: 1051px) {

    
        .informacoes{
            width: 944px;
            
        }
    }
</style>