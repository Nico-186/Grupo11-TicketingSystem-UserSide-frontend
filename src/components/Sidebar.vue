<template>
    <nav class="navbar navbar-nav fixed-top" style="background-color: #3346C5; position: relative; z-index: 2;">
        <div class="d-flex justify-content-start gap-4 container-fluid">
            <a class="m-0 h2 py-3" style="text-decoration: none;">MeowAssist Usuarios</a>
            <a v-for="link in links(Number(loggedUser.rol))" class="nav-link fs-6 py-2" :class="{ active: activePage >= link.page && activePage < link.page + 1 }" href="#" @click.prevent="sidebarClick(link.page)">{{link.text}}</a>
            <a v-if="loggedUser.justCreated.data[0] != 1" class="nav-link fs-6 py-2" href="http://localhost:8080/" @click="test()">Tickets</a>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['loggedUser', 'sidebarClick','activePage', 'changeToUser'],
    methods: {
        links(role) {
            let linkList = []
            if (this.loggedUser.justCreated.data[0] != 1){
                linkList.push({text: 'Cuenta', page: 1})
                if (role == 2) {
                    linkList.push({text: 'Administrar usuarios', page: 2})
                }
            }
            return linkList;
        },
    }
}
</script>