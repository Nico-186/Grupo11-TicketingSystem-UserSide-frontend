<template>
    <nav class="navbar navbar-collapse fixed-top" style="height: 10%; background-color: #0d6efd;">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" @click.prevent="showDashboard()">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h2 class="w-auto m-0">Dashboard</h2>
            <span class="navbar-toggler-icon px-3" style="visibility: hidden;"></span>
        </div>
    </nav>
    <div class="offcanvas offcanvas-start w-auto" style="height: 90%; margin-top: 5%;" :class="dashboard ? 'show' : ''"
        tabindex="-1" :style="{ visibility: dashboard ? 'visible' : 'hidden' }">
        <div class="offcanvas-body py-0">
            <a v-for="link in links(role)" class="nav-link active fs-6 py-2" :href="link.link">{{link.text}}</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
          dashboard: false,
          role: 0
        }
    },
    methods: {
        showDashboard(){
            this.dashboard = !this.dashboard
        },
        links(role) {
            let linkList = []
            if (role >= 1) {
                linkList.push({text: 'Cuenta', link: 'cuenta'});
            }
            if (role == 2) {
                linkList.push({text: 'Administrar usuarios', link: 'admin'});
                linkList.push({text: 'AGREGAR COSAS ACA', link: ''});
            }
            return linkList;
        }
    }
}
</script>