<template>
    <div>
        <dashboard>
        </dashboard>
        <!-- <login>
        </login> -->
    </div>
</template>

<script>
import dashboard from './components/Dashboard.vue';
import login from './components/Login.vue';

export default {
    components: {
        login,
        dashboard
    },
    data() {
        return {
            theme: 'dark'
        }
    }
}
</script>