<template>
    <div class="container-fluid h-100 v-100 py-4" style="padding-left:25%; padding-right: 25%">
        <div class="d-flex flex-column align-items-center">
            <div class="d-flex justify-content-center m-2 w-100">
                <h4 class="w-auto">{{ isCreate ? 'Crear Usuario' : 'Editar Usuario' }}</h4>
            </div>
            <div class="form-group mb-4 w-100">
                <label>Nombre de usuario</label>
                <input type="text" class="form-control" placeholder="Nombre de usuario" :value="isCreate ? '' : username">
            </div>
            <div class="form-group mb-4 w-100">
                <label>Reestablecer contraseña</label>
                <input type="text" class="form-control" placeholder="Nueva contraseña" disabled :value="newPassword">
                <div class="d-flex justify-content-evenly pt-3">
                    <button type="button" class="btn btn-secondary" @click.prevent="passwordType(true)">Generar Nueva
                        contraseña</button>
                    <button type="button" class="btn btn-secondary" @click.prevent="passwordType(false)"
                        :disabled="newPassword == '' ? true : false">Eliminar Nueva contraseña</button>
                </div>
            </div>
            <div class="form-group mb-4 w-100">
                <label>Rol del usuario</label>
                <ul class="list-group list-group-horizontal-lg">
                    <button v-for="(rol, index) in roleTypes" :id="index" type="button" class="list-group-item list-group-item-action" :class="{ active: activeListItem == index}" @click.prevent="changeActiveListItem(index)">{{rol}}</button>
                </ul>
            </div>
            <button type="button" class="btn btn-success mb-3 w-100">{{ isCreate ? 'Crear usuario' : 'Guardar usuario' }}</button>
            <button type="button" class="btn btn-danger w-50" :style="{ visibility: !isCreate ? 'visible' : 'hidden' }">Eliminar usuario</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCreate: true,
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