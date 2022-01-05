<template>
<h1>Home</h1>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    let users=localStorage.getItem('users')
    if(!users){
      this.$router.push({name:'Register'})
    }
  }
}



</script>

<style scoped>

</style>