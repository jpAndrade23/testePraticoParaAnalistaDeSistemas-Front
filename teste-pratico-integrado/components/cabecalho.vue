<template>
    <footer class="w-100 d-flex align-items-center" >
        <div class="container  d-flex ml-5 justify-content-between">
            <img src="/logoIntegrado.png" alt="logo integrado cabecalho" :width="imageWidth" :height="imageHeight"  class="mr-auto mt-3"/>
            <div class="d-flex classesCabecalho ">
                <ul class="d-flex mt-2">
                    <li class=" pr-10">Graduação</li>
                    <li class="pr-10">Pós-Graduação</li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    setup () {
        return {
            imageWidth: '30px',
            imageHeight: '30px',
        }
    }
}
</script>

<style scoped>
    footer {
        background: #232228;
        height: 60px;
    }
    
    ul{
        color: white;
        list-style-type: none
    }
    li{
        padding: 10px;
        padding-left: 20px;
        font-size: 15px;
    }
    .classesCabecalho{
        margin-left: 20%;
    }
</style>
