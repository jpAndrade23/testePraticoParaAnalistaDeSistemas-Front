<template>
    <div class="d-flex justify-content-center">
        <div>
            <input type="checkbox" class="btn-check" id="Presencial" >
            <label class="btn btn-outline-primary w-40" for="Presencial">Presencial</label>
        </div>
        <div>
            <input type="checkbox" class="btn-check" id="EAD" >
            <label class="btn btn-outline-primary w-40" for="EAD">EAD</label>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
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