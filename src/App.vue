<template>
    <div class="container-fluid vh-100 p-0">
        <sidebar>
        </sidebar>
        <div class="container" style="height: 10%;"></div>
        <div class="container-fluid p-0" style="height: 90%;">
            <adminUsuarios>
            </adminUsuarios>
        </div>
    </div>

    <!-- <login>
    </login> -->
</template>

<script>
import login from './components/Login.vue';
import sidebar from './components/Sidebar.vue';
import adminUsuarios from './components/Admin/Usuarios.vue';

export default {
    components: {
        login,
        sidebar,
        adminUsuarios
    },
    data() {
        return {
        }
    }
}
</script>