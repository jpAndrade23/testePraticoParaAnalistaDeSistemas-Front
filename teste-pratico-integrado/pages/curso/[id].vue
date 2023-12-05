<template>
    <Cabecalho />
    <div>
        <div>
            <div class="topoPagina w-100 vh-160 d-flex align-items-end" :style="{ backgroundImage: 'url(' + curso.imagemCurso + ')' }">
                <div class="w-100 justify-content-center d-flex">
                    <div >
                        <p class="tipo">{{ curso.tipoDoCurso.nome }} </p>
                        <p class="nomeCurso">{{ curso.nome }} </p>
                    </div>
                </div>
            </div>
        </div>
        <div  class="formulario">
            <div>
                <Formulario />
            </div>
        </div>
    </div>
    <Rodape />
</template>

<script>
import Cabecalho from '../../components/cabecalho.vue';
import Formulario from '../../components/formulario.vue';
import Rodape from '../../components/rodape.vue';   
 
export default {
    data(){
        const curso = {
                            "id": 3,
                            "nome": "TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
                            "duracao": 5,
                            "descricao": "curso do integrado",
                            "valor": 740.09,
                            "modalidadeId": 2,
                            "imagemCurso": "https://firebasestorage.googleapis.com/v0/b/endless-sol-403405.appspot.com/o/images%2FR.png?alt=media&token=2619069b-a677-49a6-bde4-e50e0481a251",
                            "tipoId": 2,
                            "tipoDoCurso": {
                                "id": 2,
                                "nome": "graducao"
                            },
                            "modalidadeDoCurso": {
                                "id": 2,
                                "nome": "EAD"
                            }
                        }
            return { curso }
        }
   
}
</script>

<style  scoped>
    .topoPagina{
        font-weight: bolder;
        background-color: black;
        height: 60vh;
        
        background-size:cover;
        text-align: start;
        background-position: 50%;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.25) 400px 400px 0px 400px inset, rgba(0, 0, 0, 0.3) 400px 400px 0px 400px inset;
    }
    .tipo{
        font-size: 20px;
    }
    .nomeCurso{
        font-size: 30px;
    }

    @media only screen and (min-width: 1051px) {
        .formulario{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

</style>