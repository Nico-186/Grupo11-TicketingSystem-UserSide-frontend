<template>
    <div class="container-fluid vh-100">
        <div class="row align-items-center justify-content-center bg-light text-dark" style="height: 10%;">
            <h2 class="w-auto m-0">Dashboard</h2>
        </div>
        <div class="row align-items-center justify-content-center" style="height: 80%;">
            <div class="col-lg-4 col-sm-11">
                <div class="d-grid gap-3">
                    <div class="form-group">
                        <label>Usuario</label>
                        <input type="text" class="form-control" placeholder="Ingrese su usuario">
                    </div>
                    <div class="form-group">
                        <label>Contraseña</label>
                        <div class="row w-100 g-0">
                            <div class="col p-0">
                                <input :type="passwordType.type" class="form-control" placeholder="Ingrese su contraseña">
                            </div>
                            <div class="col-auto p-0">
                                <button type="button" class="btn btn-secondary" @click.prevent="isPassword = !isPassword">{{passwordType.text}}</button>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-secondary" @click="isPassword = true">Ingresar</button>
                </div>
            </div>
        </div>
        <div class="row" style="height: 10%"></div>
    </div>
</template>

<script>
export default {
    computed: {
        passwordType() {
            if (this.isPassword) {
                return {
                    type: 'password',
                    text: 'Mostrar'
                }
            } else {
                return {
                    type: 'text',
                    text: 'Ocultar'
                }
            }
        }
    },
    data() {
        return {
            isPassword: true
        }
    }
}
</script>