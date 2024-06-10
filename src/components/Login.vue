<template>
    <div class="form-group" v-for="control in controls">
        <label>{{control.text}}</label>
        <input :type="control.type" class="form-control" :placeholder="control.placeholder">
    </div>
</template>
<script>
export default {
    data() {
        return {
            controls: [
                {
                    text: 'Email address',
                    type: 'email',
                    placeholder: 'Enter email'
                },
                {
                    text: 'Password',
                    type: 'password',
                    placeholder: 'Password'
                }
            ]
        }
    }
}
</script>