<template>
    <login v-if="!isLogged" ref="loginComponent" :try-loggin="(username, password) => tryLogIn(username, password)"></login>
    <div class="container-fluid vh-100 p-0" :style=" isLogged ? '' : 'display: none;' ">

        <sidebar ref="sidebar" :role="loggedUser.role" :sidebar-click="(page) => activePage = page"></sidebar>

        <div v-if="isLogged" id="content" class="container-fluid" style="height: 90%;"
            :style="checkSidebar ? 'padding: 0% 0% 0% 17%;' : 'padding: 0%;'">
            <gestionDatos v-if="activePage == 1" :user="loggedUser"></gestionDatos>
            <listaUsuariosAdmin v-if="activePage == 2" :users="usersList" :edit-handler="(isCreate) => {createNewUser = isCreate; activePage = 2.1}"></listaUsuariosAdmin> 
            <gestionUsuario v-if="activePage == 2.1"></gestionUsuario>
        </div>
    </div>
    
</template>

<script>
import login from './components/Login.vue';
import sidebar from './components/Sidebar.vue';
import gestionDatos from './components/GestionDatos.vue';

import listaUsuariosAdmin from './components/Admin/ListaUsuarios.vue';
import gestionUsuario from './components/Admin/GestionUsuario.vue';

export default {
    components: {
        login,
        sidebar,
        gestionDatos,
        listaUsuariosAdmin,
        gestionUsuario
    },
    computed: {
        checkSidebar() {
            if (this.mounted) {
                return this.$refs.sidebar.dashboard;
            } else {
                return false;
            }
        }
    },
    data() {
        return {
            activePage: 0,
            isLogged: false,
            loggedUser: { role: -1 },
            mounted: false,
            usersList: [{
                username:'No existen usarios',
                rol: ''
            }],
            createNewUser: false
        }
    },
    mounted() {
        this.mounted = true
    },
    methods: {
        tryLogIn: function (user, pass) {
            axios.get(`http://localhost:3000/logindata/?username=${user}&password=${pass}`).then(
                (response) => {
                    if (JSON.stringify(response.data) == JSON.stringify([])) {
                        alert("Usuario o contraseña incorrectos");
                    } else {
                        this.dataToLoggedUser(response.data[0]);
                        this.isLogged = true;
                        if (this.loggedUser.role == 2){
                            this.loadAdmin();
                        }
                    }
                }
            )
        },
        loadAdmin() {
            axios.get(`http://localhost:3000/admin/allusers/?id=${this.loggedUser.id}`).then(
                (response) => {
                    if (JSON.stringify(response.data) != JSON.stringify([])) {
                        console.log(response.data)
                    }
                }
            )
        },
        dataToLoggedUser(resData) {
            this.loggedUser = {
                id: resData.ID_usuario,
                username: resData.nomusua,
                role: resData.rol
            } 
        }
    }
}
</script>