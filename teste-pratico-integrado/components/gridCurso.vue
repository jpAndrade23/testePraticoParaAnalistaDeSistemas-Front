<template>
    <div class="container text-center">
        <div class="row">
            <div class="col  mb-5" v-for="curso in dados" :key="curso.id"><CursoCard :dadosCurso="curso" /></div>
        </div>
    </div>
</template>
<script setup>
    import { ref, onMounted, defineProps } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const dados = ref([]);
    
    const props = defineProps({
        dadosURI: String,
    })
    onMounted(async () => {
      
        let id = route.params.id; 

        if(id === undefined){
            id = ''
        }
        dados.value = await $fetch(`http://localhost:8000/curso/${props.dadosURI}${id}`, 'get');
    });
</script>




<style  scoped>




</style>