<template>
    <div class="container-fluid h-100 v-100 py-4" style="padding-left:25%; padding-right: 25%">
        <div class="d-flex flex-column align-items-center">
            <div class="d-flex justify-content-center m-2 w-100">
                <h4 class="w-auto">{{ isCreate ? 'Crear Usuario' : 'Editar Usuario' }}</h4>
            </div>
            <div class="form-group mb-4 w-100">
                <label>Nombre de usuario</label>
                <input type="text" class="form-control" placeholder="Nombre de usuario"
                    :value="isCreate ? '' : username">
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
    components: {
        password
    },
    data() {
        return {
            username: 'Usuario ejemplo',
            newPassword: '',
            role: 2,
            activeListItem: -1,
            roleTypes: [ 'Usuario', 'Tecnico', 'Administrador' ]
        }
    },
    mounted:function() {
        this.showRoleOnList();
    },
    methods: {
        showDropdown() {
            this.$refs.roleDropdown.show();
        },
        passwordType(generate) {
            if (generate) {
                this.newPassword = Math.random().toString(36).slice(-8);
            } else {
                this.newPassword = '';
            }
        },
        changeActiveListItem(index) {
            this.activeListItem = index;
            this.role = index + 1;
        },
        showRoleOnList() {
            if (!this.isCreate) {
                this.activeListItem = this.role;
            }
        }
    }
}
</script>