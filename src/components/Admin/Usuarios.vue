<template>
    <div class="container-fluid w-100 h-100" style="padding: 2%;">
        <div class="border w-100 h-100" style="background-color: #171a1c;">
            <div class="d-flex flex-column h-100">
                <ul class="list-group">
                    <li class="list-group-item border-0 bg-transparent">
                        MIAU
                    </li>
                </ul>
                <div class="flex-grow-1 overflow-auto">
                    <div class="list-group h-100 w-100" style="max-height: 100%;">
                        <ul class="list-group">
                            <button v-for="(usuario, index) in usuarios" :id="index" type="button"
                                class="list-group-item list-group-item-action" @click.prevent="">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">{{usuario.username}}</div>
                                    {{usuario.rol}}
                                </div>
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
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
            }]
        }
    }
}
</script>