<template>
    <div class="container-fluid w-100 h-100" style="padding: 2%;">
        <div class="border w-100 h-100" style="background-color: #171a1c;">
            <div class="d-flex flex-column h-100">
                <p class="w-100 mb-0 px-3 py-2 fs-5">Usuarios</p>

                <div class="flex-grow-1 overflow-auto w-100">
                    <div class="list-group h-100" style="max-height: 100%;">
                        <ul class="list-group">
                            <button v-for="(usuario, index) in usuarios" :id="index" type="button"
                                class="list-group-item list-group-item-action" :class="{ active: activeListItem == index}" @click.prevent="changeActiveListItem(index)">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">{{usuario.username}}</div>
                                    {{usuario.rol}}
                                </div>
                            </button>
                        </ul>
                    </div>
                </div>

                <div class="d-flex w-100 justify-content-end p-3">
                    <button class="btn btn-secondary" type="button">{{ activeListItem == -1 ? 'Nuevo Usuario' : 'Editar Usuario' }}</button>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            activeListItem: -1,
            usuarios:[{
                username:'test',
                rol: 'Tecnico'
            },
            {
                username:'Nico.Miaus',
                rol: 'Administrador'
            },
            {
                username:'Jefesote',
                rol: 'Administrador'
            },
            {
                username:'LAURA',
                rol: 'Usuario'
            },{
                username:'Nico.Miaus',
                rol: 'Administrador'
            },{
                username:'Nico.Miaus',
                rol: 'Administrador'
            },{
                username:'Nico.Miaus',
                rol: 'Administrador'
            },{
                username:'Nico.Miaus',
                rol: 'Administrador'
            },{
                username:'Nico.Miaus',
                rol: 'Administrador'
            },{
                username:'Nico.Miaus',
                rol: 'Administrador'
            },{
                username:'Nico.Miaus',
                rol: 'Administrador'
            },{
                username:'Nico.Miaus',
                rol: 'Administrador'
            },{
                username:'Nico.Miaus',
                rol: 'Administrador'
            },{
                username:'Nico.Miaus',
                rol: 'Administrador'
            },{
                username:'Nico.Miaus',
                rol: 'Administrador'
            }]
        }
    },
    methods: {
        changeActiveListItem(index) {
            if (this.activeListItem == index){
                this.activeListItem = -1;
            } else {
                this.activeListItem = index;
            };
        }
    }
}
</script>