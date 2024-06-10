<template>
    <div data-bs-theme="dark">
        <login>

        </login>
    </div>
</template>

<script>
import login from './components/Login.vue';

export default {
    components: {
        login
    },
    data() {
        return {
            theme: 'dark'
        }
    }
}
</script>