<template>
    <div class="container-fluid w-100 h-100 p-4" >
        <div class="border w-100 h-100" style="background-color: #171a1c;">
            <div class="d-flex flex-column h-100">
                <p class="w-100 mb-0 px-3 py-2 fs-5">Usuarios</p>

                <div class="flex-grow-1 overflow-auto w-100">
                    <div class="list-group h-100" style="max-height: 100%;">
                        <ul class="list-group">
                            <button v-for="(user, index) in users" :id="index" type="button"
                                class="list-group-item list-group-item-action" :class="{ active: activeListItem == index && user.rol != ''}" @click.prevent="changeActiveListItem(index, user.rol)">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">{{user.username}}</div>
                                    {{user.rol}}
                                </div>
                            </button>
                        </ul>
                    </div>
                </div>

                <div class="d-flex w-100 justify-content-end p-3">
                    <button class="btn btn-secondary" type="button" href="" @click.prevent="editHandler(returnIsCreate())">{{ activeListItem == -1 ? 'Nuevo Usuario' : 'Editar Usuario' }}</button>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    props: ['users', 'editHandler'],
    data() {
        return {
            activeListItem: -1
        }
    },
    methods: {
        changeActiveListItem(index,rol) {
            if (this.activeListItem != index && rol != ''){
                this.activeListItem = index;
            } else {
                this.activeListItem = -1;
            };
        },
        returnIsCreate() {
            console.log(this.activeListItem == -1 ? true : false);
        }
    }
}
</script>