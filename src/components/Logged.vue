<template>
    <div>
        <button id="logout" @click.prevent="logout">Logout</button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('logout');
            browser.runtime.sendMessage({type: 'internal-logout'});
        }
    }
}
</script>

