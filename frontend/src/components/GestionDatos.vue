<template>
    <div class="container-fluid h-100 v-100 py-4" style="padding-left:25%; padding-right: 25%">
        <div class="d-flex flex-column align-items-center">
            <div class="d-flex justify-content-center m-2 w-100">
                <h4 class="w-auto">Editar datos</h4>
            </div>
            <div class="form-group mb-4 w-100">
                <label>Nombre de usuario</label>
                <input type="text" class="form-control" placeholder="Nombre de usuario"
                    :value="user.username">
            </div>
            <div class="form-group mb-4 w-100">
                <label class="pb-2">Cambiar contraseña</label>
                <password class="pb-3" text="Ingrese su contraseña actual" placeholder-Text="Contraseña actual"></password>
                <password class="pb-5" text="Ingrese nueva contraseña" placeholder-Text="Nueva contraseña"></password>
                <button type="button" class="btn btn-success mb-3 w-100">Guardar cambios</button>
            </div>
        </div>
    </div>
</template>

<script>
import password from './Utils/Password.vue';

export default {
    props: ['user'],
    components: {
        password
    },
    data() {
        return {
            newPassworddsa: '',
            activeListItem: -1,
            roleTypes: [ 'Usuario', 'Tecnico', 'Administrador' ]
        }
    }
}
</script>