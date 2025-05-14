<script setup>
import {onMounted, ref} from 'vue'
import {UserService} from "@/Security/Application/user.service.js";

const email = ref("")
const password = ref("")
const userService = new UserService()


const login = async () => {

  const user ={
    email : email.value,
    password: password.value,
  }

   const response  = await userService.login(user)
    localStorage.setItem("username", email.value)

    if (response.status === 200) {
      alert("Login successfully.");
      localStorage.setItem("token", response.data.accessToken)
      sessionStorage.setItem("token", response.data.accessToken)
    }
    else {
      alert("Login failed.");
    }
  console.log(response)

}
onMounted(()=>{
  email.value = localStorage.getItem("username");
})

</script>

<template>
<label for="username">email</label>
 <pv-input-text v-model="email" ></pv-input-text>

  <label for="username">password</label>
  <pv-input-text v-model="password"  ></pv-input-text>

  <pv-button @click="login" >login</pv-button>

</template>

<style scoped>

</style>