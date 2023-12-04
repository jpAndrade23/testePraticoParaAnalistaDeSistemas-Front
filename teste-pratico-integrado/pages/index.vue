<template>
    <Cabecalho />
    <div class="container">
        <h1 class="text-center mt-4 font-weight-bold">-Encontre seu curso-</h1>
        <BarraDeBusca />
        <Filtros />
    </div>
</template>

<script>
    import BarraDeBusca from '~/components/barraDeBusca.vue';
    import Cabecalho from '../components/cabecalho.vue';
    import Filtros from '../components/filtros.vue';  
    export default{
        components: {
            BarraDeBusca,
            Cabecalho,
            Filtros
        }
    }  
</script>


<style>
    h1{
        font-weight: bold;
        color: #1585C9;
    }
   
</style>
