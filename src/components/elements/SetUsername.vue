<template>
    <div>
        <div class="wrapper">
            <div class="inputfield">
                <input v-model="username" placeholder="What's my new name?!"/>
            </div>
            <div>
                <button @click="() => Setusername(username)">Setusername</button>
            </div>
        </div>
    </div>
</template>

<script setup>


import { useAuthStore } from '../../store/authStore'
import { supabase } from '../../supabase';
let username = "";
const auth = useAuthStore()

async function Setusername(username) {
    const newUser = {
    uid: auth.user.id,
    username: username
  };
  const { data, error } = await supabase
    .from('username_mapping')
    .insert([newUser]);
    console.log("Submitted new name",username)
}

</script>

<style>
.wrapper {
    display: flex;
}
</style>