<template>
    <footer class="w-100 h-10">
        <div class="d-flex justify-content-around align-items-center p-3 container">
            <div>
                <img src="/logoIntegradoRodape.png" alt="logo integrado rodape" width="129" height="42px" >
            </div>
            <div class="informacoes">
                <p class="text-center mb-0">Contato</p>
                <ul>
                    <li>
                        Telefones: 0800 000 7005 
                    </li>
                    <li>
                        Endereço: Rua Lauro de Oliveira Souza, 440
                    </li>
                </ul>
            </div>
            <div class="informacoes">
                <p class="text-center mb-0">Cursos</p>
                <ul>
                    <li>
                        <a href="/graduacao">
                            Graduação
                        </a>
                    </li>
                    <li>
                        <a href="/pos-graduacao">
                            Pós-Graduação
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>


<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    footer{
        background-color: #0D2543;
    }
    
    .informacoes{
        color: white;
        font-size: 12px;
    }
    ul{
        list-style-type: none;
        text-align: start;
    }
    a{
        text-decoration: none;
        color: white;
    }
    .container{
        justify-content: space-between;
    }
    p{
        font-weight:bolder;
    }
</style>