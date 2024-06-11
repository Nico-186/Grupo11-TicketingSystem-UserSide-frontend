<template>
    <div>
        <sidebar>
        </sidebar>
        <!-- <login>
        </login> -->
    </div>
</template>

<script>
import sidebar from './components/Sidebar.vue';
import login from './components/Login.vue';

export default {
    components: {
        login,
        sidebar
    },
    data() {
        return {
            theme: 'dark'
        }
    }
}
</script>