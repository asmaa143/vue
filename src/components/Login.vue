<template>
  <h1>Login</h1>
  <div class="register">
    <span>Email</span>
    <input type="email" v-model="email" >
    <span>Password</span>
    <input type="password" v-model="password" >
    <button @click="login">Submit</button>
    <div class="login">
      <router-link to="/register">Go To Register</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data(){
    return{
      email:'',
      password:'',
    }
  },
  methods:{
    async login(){
     let login= await  axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
      if(login.status===200 && login.data.length>0){
        localStorage.setItem('users',JSON.stringify(login.data[0]))
        this.$router.push({name:'Home'})
      }
    }
  },
  mounted() {
    let users=localStorage.getItem('users')
    if(users){
      this.$router.push({name:'Home'})
    }
  }
}
</script>

<style scoped>

.register span{
  margin: 20px;
  font-size: 16px;
  font-weight: bolder;
  display: block;
}
.register input{
  width: 400px;
  height: 40px;


}
.register button{
  width: 320px;
  height: 40px;
  margin-top: 10px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-color: deepskyblue;
  color: white;

}
.login{
  margin-top: 20px;
}
</style>