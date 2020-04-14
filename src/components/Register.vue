<template>
    <div>
        <router-link :to="{ name: 'homepage' }"><img class="header-logo" src="../assets/realtourhub-beta-blue.png"></router-link> 
        <section  class="login-page">
        <h4>Register</h4>
        <form>
            <label for="name">Name</label>
            <div>
                <input id="name" type="text" v-model="name" required autofocus>
            </div>

            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="email" v-model="email" required>
            </div>

            <label for="password">Password</label>
            <div>
                <input id="password" type="password" v-model="password" required>
            </div>


          

            <div>
              

                 <button class="button3" v-on:click="handleSubmit"> <LoaderAnim class="loader" v-if="processing"/> 
      <span  v-if="submitted"></span>
      <span  v-else>Register</span></button>
            </div>
        </form>
        <ul class="login-crumbs"><li>Forgotten password?</li><router-link :to="{ name: 'login' }" ><li>Already have an account?</li></router-link> </ul>
        </section>
    </div>
</template>

<script>
import LoaderAnim from '../assets/loader.svg';
    export default {
        name:'Register',
            components: {
   LoaderAnim
  },
        props : ["nextUrl"],
        data(){
            return {
                name : "",
                email : "",
                password : "",
                password_confirmation : "",
                 submitted:false,
        processing:false,
                is_admin : null
            }
        },
        methods : {
            handleSubmit(e) {
                e.preventDefault()
                this.processing=true;
        this.submitted=true;
        let this_vue=this;

                if (this.password === this.password_confirmation && this.password.length > 0)
                {
                    let url = "/api/register"
                    if(this.is_admin != null || this.is_admin == 1) url = "/api/register-admin"
                    this.$http.post(url, {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        is_admin: this.is_admin
                    })
                    .then(response => {
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else{
                                this.$router.push('/')
                            }
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
                } else {
                    this.password = ""
                    this.passwordConfirm = ""

                    return alert("Passwords do not match")
                }
            }
        }
    }
</script>

<style scoped>

body{
    background-color:#ccc;
}
.register-page{
    background-color:white;
    width:300px;
    margin:0 auto 0 auto;
   padding:20px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    
}
.register-page input{
    height:30px;
    width:300px;
    margin-bottom:20px;
}
 a.button3{
   display:block;
   padding:0.3em 1.2em;
margin:0 auto 20px auto;

box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:#FFFFFF;
background-color:#4eb5f1;
text-align:center;
transition: all 0.2s;
width:300px;
height:40px;

}
a.button3:hover{
background-color:#4095c6;
}</style>