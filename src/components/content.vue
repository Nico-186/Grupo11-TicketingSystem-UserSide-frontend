<template>
    <sidebar ref="sidebar" :active-page="activePage" :logged-user="loggedUser" :sidebar-click="(page) => loadData(page)"></sidebar>
    <div id="content" class="container-fluid overflow-auto p-4 w-100 h-100">
        <gestionDatos 
        v-if="activePage == 1" 
        :user="loggedUser"
        :update-user="(user) => createUser(user.id,user,false,1)"
        ></gestionDatos>

        <listaUsuariosAdmin 
        ref="adminUserList"
        v-if="activePage == 2"
        :users="usersList"
        :edit-handler="(isCreate) => {createNewUser = isCreate; activePage = 2.1}"
        ></listaUsuariosAdmin> 
            
        <gestionUsuario 
        v-if="activePage == 2.1" 
        :create-user="(id,user,isCreate) => createUser(id,user,isCreate,2)"
        :is-create="createNewUser"
        :user="getSelectedListIndex()"
        :delete-user="(id) => deleteUser(id)"
        ></gestionUsuario>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import sidebar from './Sidebar.vue';
import gestionDatos from './GestionDatos.vue';

import listaUsuariosAdmin from './Admin/ListaUsuarios.vue';
import gestionUsuario from './GestionUsuario.vue';

export default {
    components: {
        sidebar,
        gestionDatos,
        listaUsuariosAdmin,
        gestionUsuario
    },
    data() {
        return {
            activePage: 0,
            loggedUser: { justCreated: { data: [0] }, rol: -1 },
            usersList: [],
            allUsers: [],
            createNewUser: false
        }
    },
    mounted() {
        // this.loggedUser = cookies.get('loggedUser');
        console.log(cookies.get('loggedUser'));
        // if (this.loggedUser == null){
        //     window.location.href = 'http://localhost:8081/';
        // }
        cookies.remove('loggedUser');
        // this.loadData(1);
    },
    methods: {
        async loadData(page) {
            await this.getUsers();
            this.usersToDisplay();
            this.activePage = page;
        },
        usersToDisplay() {
            this.usersList = [];
            this.loggedUser = this.allUsers.find((obj) => obj.ID_usuario == this.loggedUser.ID_usuario);
            this.allUsers.splice(this.allUsers.indexOf(this.loggedUser),1);
            this.usersList.push(...this.allUsers);
        },
        async getUsers() {
            await axios.get(`${process.env.VUE_APP_BACKENDURL}/admin/allusers/`).then(
                (response) => {
                    if (JSON.stringify(response.data) != JSON.stringify([])) {
                        this.allUsers = response.data[0];
                    }
                }
            )
        },
        async createUser(id, user, isCreate, page){
            if (user.username == '' || user.role == -1 || (isCreate && user.newPassword == '')) {
                alert("Ingrese todos los campos");
                console.log(user);
            } else if (isCreate){
                await axios.post(`${process.env.VUE_APP_BACKENDURL}/admin/allusers/`, user).then(
                    async (response) => {
                        await this.loadData(page);
                        return alert(`Usuario creado con exito`);
                    }).catch((error) =>{
                        return alert(`Ya existe usuario con username: ${user.username}`);
                    })
            } else {
                await axios.put(`${process.env.VUE_APP_BACKENDURL}/admin/allusers/?id=${id}`, user).then(
                    async (response) => {
                        await this.loadData(page);
                        return alert(`Usuario actualizado con exito`);
                    }).catch((error) =>{
                        return alert(error);
                    })
            }
        },
        async deleteUser(id){
            await axios.put(`${process.env.VUE_APP_BACKENDURL}/admin/allusers/delete/?id=${id}`).then(
                (response) => {
                    this.activePage = 2;
                    this.getUsers();
                    return alert(`Usuario eliminado con exito`);
                }).catch((error) => {
                    return alert(error);
                })
        },
        getSelectedListIndex(){
            let index = this.$refs.adminUserList.activeListItem;
            if (index == -1) {
                return '';
            } else {
                let fixedList = JSON.parse(JSON.stringify(this.usersList))
                return fixedList[index];
            }
        }
    }
}
</script>