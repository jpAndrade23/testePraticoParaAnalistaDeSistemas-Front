<template>
    <div class="d-flex flex-column min-vh-100">
        <Cabecalho />
        <div class="container flex-grow-1">
            <h1 class="text-center mt-4 font-weight-bold">-Encontre seu curso-</h1>
            <BarraDeBusca :rota="''" />
            <Filtros @atualizar-filtros="atualizarFiltros" />
            <GridCurso :dadosURI="URI" :EAD="filtros.EAD" :presencial="filtros.presencial"/>
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
        data() {
            return {
                filtros: {
                    presencial: false,
                    EAD: false
                },
                URI: ref('nome/'),
            }
        },
        methods: {
            atualizarFiltros(novosFiltros) {
            this.filtros = novosFiltros;
            this.constroiURI();
        },
        constroiURI(){
            if(this.filtros.presencial === true && this.filtros.EAD === false || this.filtros.presencial === false && this.filtros.EAD === true){
                this.URI = 'nome/'
                console.log(this.URI)
            } else {
                this.URI = 'nome/'
            }
        }
    }
    
    }
</script>


<style>
    h1{
        color: #1585C9;
    }
   
</style>
