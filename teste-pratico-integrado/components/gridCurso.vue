<template>
    <div class="container text-center">
        <div class="row">
            <div class="col  mb-5" v-for="curso in dados" :key="curso.id"><CursoCard :dadosCurso="curso" /></div>
        </div>
    </div>
</template>
<script setup>
    import { ref, onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const dados = ref([]);
    
    const props = defineProps({
        dadosURI: String,
        presencial: Boolean,
        EAD: Boolean
    })

    const fetchData = async () => {
        
        let id = route.params.id; 

        if(id === undefined){
            id = ''
        }
        if(props.presencial === false && props.EAD === true){
            dados.value = await $fetch(`http://localhost:8000/curso/${props.dadosURI}EAD/${id}`, 'get');
        } else if(props.presencial === true && props.EAD === false){
            dados.value = await $fetch(`http://localhost:8000/curso/${props.dadosURI}Presencial/${id}`, 'get');
        } else {
            dados.value = await $fetch(`http://localhost:8000/curso/${props.dadosURI}${id}`, 'get');
        }
    };

    onMounted(fetchData);

    watch(props, fetchData);
</script>




<style  scoped>




</style>