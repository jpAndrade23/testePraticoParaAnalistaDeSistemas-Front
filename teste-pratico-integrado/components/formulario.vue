<template>
    <div class="formularios m-5 p-3">
        <div>
            <h2 class="text-center font-weight-bold tituloForm p-3">-Cadastro-</h2>
            <form>
                <template v-if="this.passoAtual === 1">
                <div class="justify-content-center d-flex mb-3">
                    <input id="nome" class="entradaDeTexto p-3" v-model="dadosAluno.nome" type="text" placeholder="Nome Completo">
                </div>
                <div class="justify-content-center d-flex mb-3">
                    <input id="email" class="entradaDeTexto p-3" v-model="dadosAluno.email" type="text" placeholder="E-mail">
                </div>
                <div class="justify-content-center d-flex mb-3">
                    <input id="telefone" class="entradaDeTexto p-3" v-model="dadosAluno.telefone" type="text" placeholder="Telefone">
                </div>
                
                </template>

                <template v-if="this.passoAtual === 2">
                    <div class="justify-content-center d-flex mb-3">
                        <input id="CEP" class="entradaDeTexto p-3" v-model="dadosAluno.CEP" type="text" placeholder="CEP">
                    </div>
                    <div class="justify-content-center d-flex mb-3">
                        <input id="CPF" class="entradaDeTexto p-3" v-model="dadosAluno.CPF" type="text" placeholder="CPF">
                    </div>
                    <div class="justify-content-center d-flex mb-3">
                        <input id="dataNascimento" class="entradaDeTexto p-3" v-model="dadosAluno.dataNascimento" type="text" placeholder="Data de Nascimento">
                    </div>


                </template>

                <template v-if="this.passoAtual === 3">
                    

                    <div class='d-flex justify-content-center align-items-center'>
                        <label class='bg-light rounded-lg text-center entradaImagem'>
                            Imagem RG ou CNH
                            <div>
                                <input type='file' name='image2' accept='image/*' required class='bg-light d-none'/>
                            </div>
                        </label>
                    </div>
                </template>
                <div class="m-3">
                    
                    <div class="justify-content-between d-flex containerBotao">
                        <button type="button" @click="voltarParaOPassoAnterior" class="btn btn-primary" data-toggle="button" :disabled="ehPrimeiroPasso" aria-pressed="false" autocomplete="off">
                            Voltar
                        </button>

                        <button type="button"  @click="submit" v-if="ehUltimoPasso" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Salvar
                        </button>
                        
                        <button type="button" @click="irParaOProximoPasso" v-else class="btn btn-primary" data-toggle="button" >
                            Próximo
                        </button>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    setup () {
        
        const passoAtual = ref(1);
        const dadosAluno = {
            nome: '',
            email: '',
            telefone: '',
            CEP: '',
            CPF: '',
            dataNascimento: '',
            imagemDoocumento: ''
        }


        return  { passoAtual, dadosAluno } 
    },
    computed: {
        ehPrimeiroPasso(){
            return this.passoAtual === 1
        },
        ehUltimoPasso(){
            return this.passoAtual === 3
        }
    },
    methods: {
        voltarParaOPassoAnterior() {
            if(!this.ehPrimeiroPasso){
                this.passoAtual -=1;
            }
        },
        irParaOProximoPasso() {
            console.log(this.passoAtual)
            if(!this.ehUltimoPasso){
                this.passoAtual +=1;
            }
        },
        submit() {
            console.log(this.dadosAluno)
        }
    }
}
</script>









<style scoped>
     .formularios{
        background-color: #ECECEC;
        max-width: 60em;
        border-radius: 10px;
        
    }
    .tituloForm{
        color: #1586CB;
    }
    .entradaDeTexto{
        width: 90%;
        border-radius: 30px;
        border: none;
        color: #B9B5B5;
    }

    .entradaImagem{
        width: 30%;
        min-width: 150px;
        height: 9em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;

    }
    .entradaImagem:hover{
        cursor: pointer;
    }
    .btn-primary {
        background-color: #1586CB !important; /* Substitua #yourColor pela cor desejada */
        border-color: #1586CB !important; /* Substitua #yourColor pela cor desejada */
    }
    
    @media only screen and (min-width: 1051px) {

    
        .formularios{
            width: 944px;
            
        }
        .entradaImagem{
            width: 276px;
        }
    }
</style>