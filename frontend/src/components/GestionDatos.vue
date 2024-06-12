<template>
    <div class="container-fluid h-100 v-100 py-4" style="padding-left:25%; padding-right: 25%">
        <div class="d-flex flex-column align-items-center">
            <div class="d-flex justify-content-center m-2 w-100">
                <h4 class="w-auto">Editar datos</h4>
            </div>
            <div class="form-group mb-4 w-100">
                <label>Nombre de usuario</label>
                <input v-model="newUsername" ref="usrText" type="text" class="form-control" placeholder="Nombre de usuario">
            </div>
            <div class="form-group mb-4 w-100">
                <label class="pb-2">Cambiar contraseña</label>
                <password v-model="newPassword" class="pb-3" text="Ingrese nueva contraseña" placeholder-Text="Nueva contraseña"></password>
                <button type="button" class="btn btn-success mb-3 w-100" @click.prevent="updateUser(returnUser())">Guardar cambios</button>
            </div>
        </div>
    </div>
</template>

<script>
import password from './Utils/Password.vue';

export default {
    props: ['user','updateUser'],
    components: {
        password
    },
    data() {
        return {
            newUsername: '',
            newPassword: '',
            activeListItem: -1,
            roleTypes: [ 'Usuario', 'Tecnico', 'Administrador' ]
        }
    },
    mounted() {
        this.$refs.usrText.value = this.user.username;
    },
    methods: {
        returnUser() {
            if (this.newPassword == '') {
                return { id: this.user.id, username: this.newUsername, password: this.user.password, role: this.user.role };
            } else {
                return { id: this.user.id, username: this.newUsername, password: this.newPassword, role: this.user.role };
            }
        }
    }
}
</script>