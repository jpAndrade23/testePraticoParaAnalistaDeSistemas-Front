<template>
    <div>
        <Cabecalho />
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
        <Rodape />
    </div>
</template>

<script>
import Cabecalho from '../../components/cabecalho.vue';
import Formulario from '../../components/formulario.vue';
import Rodape from '../../components/rodape.vue';   
 
export default {
    data(){
        const curso = []
        return  { curso } 
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