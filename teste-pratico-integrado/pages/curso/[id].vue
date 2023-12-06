<template>
    <div>

        <ComponeneteTeste  v-if="curso" :curso="curso"/>
       
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute();
    let id = route.params.id; 
    let curso = ref(null)

    if(id === undefined){
        id = ''
    }
   const fetchData = async () => {
       curso.value = await $fetch(`http://localhost:8000/curso/id/${id}`, 'get');
       
    }

    fetchData()

</script>

