<template>

    <div class="container">
        <nav class="navbar navbar-collapse fixed-top">
            <ul class="navbar-nav mt-3">
                <button class="navbar-toggler" type="button" @click.prevent="showOffcanvasMenu()">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </ul>
        </nav>
        <div class="offcanvas offcanvas-start" :class="showMenu ? 'show' : ''" tabindex="-1"
            :style="{ visibility: showMenu ? 'visible' : 'hidden' }">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="">Offcanvas with backdrop</h5>
                <button type="button" class="btn-close text-reset" @click.prevent="showOffcanvasMenu()"></button>
            </div>
            <div class="offcanvas-body">
                <p>MIAU</p>
                <p>MIAU</p>
                <p>MIAU</p>
                <p>MIAU</p>
                <p>MIAU</p>
                <p>MIAU</p>
                <p>MIAU</p>
                <p>MIAU</p>
                <p>MIAU</p>
            </div>
        </div>
    </div>


    <!-- <div id="app" class="container py-2">
        <nav class="navbar navbar-collapse fixed-top">
            <div class="container-fluid">
                <span class="float-start">
                    <button class="navbar-toggler" type="button" @click.prevent="showOffcanvasMenu()">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </span>
            </div>
            <div class="offcanvas offcanvas-start" :class="showMenu ? 'show' : ''" tabindex="-1"
                :style="{ visibility: showMenu ? 'visible' : 'hidden' }">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="">Offcanvas with backdrop</h5>
                    <button type="button" class="btn-close text-reset" @click.prevent="showOffcanvasMenu()"></button>
                </div>
                <div class="offcanvas-body">
                    <p>MIAU</p>
                    <p>MIAU</p>
                    <p>MIAU</p>
                    <p>MIAU</p>
                    <p>MIAU</p>
                    <p>MIAU</p>
                    <p>MIAU</p>
                    <p>MIAU</p>
                    <p>MIAU</p>
                </div>
            </div>
        </nav>
    </div> -->
</template>

<script>
export default {
    el: "#app",
    data(){
        return {
          showMenu: false
        }
    },
    methods: {
        showOffcanvasMenu(){
            this.showMenu ? this.showMenu = false : this.showMenu = true;
        }
    }
}
</script>