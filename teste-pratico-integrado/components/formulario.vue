<template>
    <div class="formularios m-5 p-3">
        <div>
            <h2 class="text-center font-weight-bold tituloForm p-3">-Cadastro-</h2>
            <form>
                <template v-if="this.passoAtual === 1">
                <div class="justify-content-center d-flex mb-3">
                    <input id="nome" class="entradaDeTexto p-3" v-model="this.dadosAluno.nome" type="text" required placeholder="Nome Completo">
                </div>
                <div class="justify-content-center d-flex mb-3">
                    <input id="email" class="entradaDeTexto p-3" v-model="this.dadosAluno.email" type="email" required placeholder="E-mail">
                </div>
                <div class="justify-content-center d-flex mb-3">
                    <input id="telefone" class="entradaDeTexto p-3" v-model="this.dadosAluno.telefone" type="number" required placeholder="Telefone">
                </div>
                
                </template>

                <template v-if="this.passoAtual === 2">
                    <div class="justify-content-center d-flex mb-3">
                        <input id="CEP" class="entradaDeTexto p-3" v-model="this.dadosAluno.CEP" type="text" required placeholder="CEP">
                    </div>
                    <div class="justify-content-center d-flex mb-3">
                        <input id="CPF" class="entradaDeTexto p-3" v-model="this.dadosAluno.CPF" type="text"  required placeholder="CPF">
                    </div>
                    <div class="justify-content-center d-flex mb-3">
                        <input id="dataNascimento" class="entradaDeTexto p-3" v-model="this.dadosAluno.dataNascimento" type="text" required placeholder="Data de Nascimento">
                    </div>


                </template>

                <template v-if="this.passoAtual === 3">
                    

                    <div class='d-flex justify-content-center align-items-center'>
                        <label class='bg-light rounded-lg text-center entradaImagem'>
                            Imagem RG ou CNH
                            <div>
                                <input type='file' @change="uploadImages"  name='imagemDoocumento' id="imagemDoocumento" accept='image/*' required class='bg-light d-none'/>
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
                        
                        <button type="submit" @click="irParaOProximoPasso" v-else class="btn btn-primary" data-toggle="button" >
                            Próximo
                        </button>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue'
import { storage } from '../lib/useFireBase'; 
import { ref as fbRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
export default {
    setup () {
    const passoAtual = ref(1)
    
    const dadosAluno = {
        nome: '',
        email: '',
        telefone: '',
        CEP: '',
        CPF: '',
        dataNascimento: '',
        imagemDoocumento: ''
    }
    const uploadImages = async(event)=>{
        const arquivos = event.target.files[0];
      


        const storageRef = fbRef(storage, `images/${arquivos.name}`);
        const uploadTask = uploadBytesResumable(storageRef, arquivos);

        uploadTask.on(
        'state_changed',
        (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        
        },
        (error) => {
        alert(error);
        },
        () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            dadosAluno.imagemDoocumento = url;  // Corrigido aqui
            });
        }
        );
    }
    return  { uploadImages, passoAtual, dadosAluno }  // Corrigido aqui
},

    created(){
        this.passoAtual = 1
    },
    mounted(){
        this.passoAtual = 1

    },
    computed: {
        ehPrimeiroPasso(){
            return this.passoAtual === 1;
        },
        ehUltimoPasso(){
            return this.passoAtual === 3;
        },
    },
    methods: {
        voltarParaOPassoAnterior() {
            if(!this.ehPrimeiroPasso){
                this.passoAtual -=1;
            }
        },
        irParaOProximoPasso() {
            if(!this.ehUltimoPasso){
                this.passoAtual +=1;
            }
        },
        submit() {
           
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