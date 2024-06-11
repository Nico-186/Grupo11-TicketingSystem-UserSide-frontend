<template>
   <div class="container-fluid vh-100 p-0">
        <sidebar>
        </sidebar>
        <div class="container-fluid p-0" style="height: 90%;">
            <!-- <gestionDatos>
            </gestionDatos> -->
             <gestionUsuario>
            </gestionUsuario>
            <!-- <listaUsuariosAdmin>
            </listaUsuariosAdmin>  -->
        </div> 
    </div>

    <!-- <login>
    </login> -->
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
    data() {
        return {
        }
    }
}
</script>