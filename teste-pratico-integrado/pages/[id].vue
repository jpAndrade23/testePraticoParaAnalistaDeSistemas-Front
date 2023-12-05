<template>
    <div class="d-flex flex-column min-vh-100">
        <Cabecalho />
        <div class="container flex-grow-1">
            <h1 class="text-center mt-4 font-weight-bold">-Encontre seu curso-</h1>
            <BarraDeBusca :rota="''" />
            <Filtros />
            <GridCurso :dadosURI="'nome/'"/>
        </div>
        <Rodape class="mt-auto" />
    </div>
</template>

<script>
    import BarraDeBusca from '~/components/barraDeBusca.vue';
    import Cabecalho from '~/components/cabecalho.vue';
    import Filtros from '~/components/filtros.vue'; 
    import GridCurso from '~/components/gridCurso.vue'; 
    import Rodape from '~/components/rodape.vue';
    
    export default{
        components: {
            BarraDeBusca,
            Cabecalho,
            Filtros,
            GridCurso,
            Rodape
        },
    
    }
</script>


<style>
    h1{
        color: #1585C9;
    }
   
</style>
