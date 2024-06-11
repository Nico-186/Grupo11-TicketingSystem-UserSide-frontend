<template>
    <div class="container-fluid vh-100 p-0">
        <sidebar>
        </sidebar>
        <div class="container" style="height: 10%;"></div>
        <div class="container-fluid p-0" style="height: 90%;">
            <gestionUsuario>
            </gestionUsuario>
            <!-- <listaUsuariosAdmin>
            </listaUsuariosAdmin> -->
        </div> 
    </div>

    <!-- <login>
    </login> -->
</template>

<script>
import login from './components/Login.vue';
import sidebar from './components/Sidebar.vue';
import listaUsuariosAdmin from './components/Admin/ListaUsuarios.vue';
import gestionUsuario from './components/Admin/GestionUsuario.vue';

export default {
    components: {
        login,
        sidebar,
        listaUsuariosAdmin,
        gestionUsuario
    },
    data() {
        return {
        }
    }
}
</script>