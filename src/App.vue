<template>
   <div class="container-fluid vh-100 p-0">
        <sidebar ref="sidebar">
        </sidebar>
        <div class="container-fluid" style="height: 90%;" :style="checkSidebar ? 'padding: 0% 0% 0% 20%;' : 'padding: 0%;'" >
            <gestionDatos>
            </gestionDatos>
             <!-- <gestionUsuario>
            </gestionUsuario> -->
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
            mounted: false
        }
    },
    mounted() {
        this.mounted = true
    }
}
</script>