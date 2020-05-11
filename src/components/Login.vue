<template>

  <div >
     <router-link :to="{ name: 'homepage' }" ><img class="header-logo" src="../assets/realtourhub-beta-blue.png"></router-link> 
      <section class="login-page">
      
    <h1>Login</h1>
  <input type="text" v-model="email" required autofocus>

  <input type="password" v-model="password" required>

  
   <button class="button3" v-on:click="handleSubmit"> <LoaderAnim class="loader" v-if="processing"/>
      <span  v-if="submitted"></span>
      <span  v-else>Login</span></button>
       <ul class="login-crumbs"><li>Forgotten password?</li> <router-link :to="{ name: 'register' }" ><li>Create a new account</li></router-link> </ul>
      </section>
  </div>
</template>

<script>
import LoaderAnim from '../assets/loader.svg';
  export default {
    name:'Login',
          components: {
   LoaderAnim
  },
      data(){
          return {
              email : "",
              password : "",
                submitted:false,
        processing:false,
              errors:[]
          }
      },
      methods : {
          handleSubmit(e){
              e.preventDefault()


              let email = this.email
              let password = this.password
              if (this.password.length > 0 && this.email.length > 0){
                  this.processing=true;
                  this.submitted=true;
                  const formData = new FormData();
                  formData.append('email', email);
                  formData.append('password', password);
                  this.$store.dispatch('login', formData)
                      .then(() => this.$router.push('/'))
                      .catch(err => {alert(err);this.errors.push(err);})
              }
              else{
                  this.email = ''
                  this.password = ''
              }


          }

      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
body{
    background: #fafbfc;
}
.login-page{
    background-color:white;
    width:400px;
    margin:0 auto 0 auto;
   padding:20px;
   
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    text-align:center;
}
.login-page input{
    height:30px;
    width:320px;
    margin-bottom:20px;
    padding: 1px 0px 1px 2px;
    border-style:inset;
    font-weight:400;
   
    border-radius:3px;

}
 .button3{
   display:block;
   padding:0.3em 1.2em;
margin:0 auto 20px auto;
border:0px;
border-style:outset;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:#FFFFFF;

text-align:center;
transition: all 0.2s;
width:320px;
height:40px;
background: rgb(0, 82, 204);
    border-radius: 3px;
    padding: 0px 8px;
    transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
text-decoration:none;
outline: none !important;
border-style: outset;
    
    border-image: initial;
}
.button3:hover{
    background: rgb(0, 101, 255);
}
.loader{
width:  15px;
  height: 15px;
 
}
.header-logo{
    display:block;
    width:400px;
margin:60px auto 40px auto;
}
.login-crumbs li{
text-decoration:none;
list-style: none;
display:inline-block;
padding-right:10px;
}
.login-crumbs a{
    text-decoration:none;
}
</style>
