<template>
    <div class="d-flex justify-content-center">
        <div>
            <input type="checkbox" v-model="presencial" @change="logEstados" class="btn-check" id="Presencial" >
            <label class="btn btn-outline-primary w-40" for="Presencial">Presencial</label>
        </div>
        <div>
            <input type="checkbox" v-model="EAD" @change="logEstados" class="btn-check" id="EAD" >
            <label class="btn btn-outline-primary w-40" for="EAD">EAD</label>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                presencial: false,
                EAD: false
        }
    },
    methods: {
        logEstados() {
            this.$emit('atualizar-filtros', { presencial: this.presencial, EAD: this.EAD });
        }
    }
}
</script>

<style scoped>
    div {
        margin: 10px;
    }
    input[type="checkbox"] {
        
        height: 20px;
    }
    label {
        font-size: 18px;
    }
    .btn-check:checked + .btn {
        background-color: #1586CB;
    }
    .btn-check:not(:checked) + .btn {
        color: #1586CB;
    }

</style>