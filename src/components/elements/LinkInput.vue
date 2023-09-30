<template>
    <div>
        <div class="wrapper">
            <div class="inputfield">
                <input v-model="inputData" placeholder="Hello World"/>
            </div>
            <div>
                <button @click="() => addLink(inputData, false)">Submit Link</button>
            </div>
        </div>
    </div>
</template>

<script setup>


import { useAuthStore } from '../../store/authStore'
import { supabase } from '../../supabase';
let inputData = "";
const auth = useAuthStore()

const logInput = (input) => {
    console.log(input)
}

async function addLink(url, isPrivate) {
  const user = auth.user;
  if (user) {
    const { data, error } = await supabase
      .from('user_links')
      .insert([
        { user_id: user.id, link_url: url, link_name: url, is_private: isPrivate }
      ]);

    if (error) {
      console.error("Error inserting link:", error);
      return null;
    }

    return data;
  } else {
    console.error("User is not authenticated.");
    return null;
  }
}

</script>

<style>
.wrapper {
    display: flex;
}
</style>