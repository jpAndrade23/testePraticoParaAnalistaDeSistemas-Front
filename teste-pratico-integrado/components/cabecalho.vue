<template>
    <header class="w-100 d-flex align-items-center" >
        <div class="container  d-flex ml-5 justify-content-between">
            <a href="/">
                <img src="/logoIntegrado.png" alt="logo integrado cabecalho" :width="imageWidth" :height="imageHeight"  class="mr-auto mt-3"/>
            </a>
            <div class="d-flex classesCabecalho ">
                <ul class="d-flex mt-2">
                    <a href="/graduacao">
                        <li class=" pr-10">Graduação</li>
                    </a>
                    <a href="/pos-graduacao">
                        <li class="pr-10">Pós-Graduação</li>
                    </a>
                </ul>
            </div>
        </div>
    </header>
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
    header {
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
        
    }
    .classesCabecalho{
        margin-left: 2em;
    }
    a{
        text-decoration: none;
        color: white;
    }
</style>
