<template>
<h1>Register</h1>
  <div class="register">
    <span>Name</span>
     <input type="text" v-model="name" >
    <span>Email</span>
    <input type="email" v-model="email" >
    <span>Password</span>
    <input type="password" v-model="password" >
   <button @click="register">Submit</button>
    <div class="login">
      <router-link to="/login">Go To Login</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Register",
  data(){
    return{
      name:'',
      email:'',
      password:'',

    }
  },
  methods:{
  async register(){
      let register=await axios.post("http://localhost:3000/user",{
        name:this.name,
        email:this.email,
        password:this.password
      });
      if(register.status===201){
        localStorage.setItem('users',JSON.stringify(register.data))
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