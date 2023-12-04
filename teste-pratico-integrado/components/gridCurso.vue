<template>
    <div class="container text-center">
        <div class="row">
            <div class="col  mb-5" v-for="curso in dados" :key="curso.id"><CursoCard :dadosCurso="curso" /></div>
        </div>
    </div>
</template>

<script>
import CursoCard from './cursoCard.vue';
    export default{
        data(){
            const dados = []
            return { dados };
        },
    }    

</script>

<style  scoped>

</style>