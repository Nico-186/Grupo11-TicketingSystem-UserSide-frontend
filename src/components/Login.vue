<template>
    <div class="container-fluid vh-100">
        <div class="row align-items-center justify-content-center" style="height: 10%; background-color: #0d6efd;">
            <h2 class="w-auto m-0">Dashboard</h2>
        </div>
        <div class="row align-items-center justify-content-center" style="height: 80%;">
            <div class="col-lg-4 col-sm-11">
                <div class="d-grid gap-3">
                    <div class="form-group">
                        <label>Usuario</label>
                        <input type="text" class="form-control" placeholder="Ingrese su usuario">
                    </div>
                    <password text="Contraseña" placeholder-text="Ingrese su contraseña"></password>
                    <button type="button" class="btn btn-secondary">Ingresar</button>
                </div>
            </div>
        </div>
        <div class="row" style="height: 10%"></div>
    </div>
</template>

<script>
import password from './Utils/Password.vue';

export default {
    components: {
        password
    },
}
</script>