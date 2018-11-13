<template>
    <div>
        <form action="">
            <input type="text" id="username" v-model="username" placeholder="username">
            <input type="password" id="password" v-model="password" placeholder="password">
            <button id="login" @click.prevent="login">Login</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        async login() {
            try {
                const { data } = await axios.post('http://10.96.198.32:80/api/ndb/staffUsers/login', {
                    username: this.username,
                    password: this.password,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if(data) {
                    console.log(data)
                    await this.$store.dispatch('login', data);
                    browser.runtime.sendMessage({type: 'internal-login'}, function(response) {
                      console.log(response);
                    });
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

