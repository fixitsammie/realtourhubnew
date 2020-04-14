<template>
  <div class="">
    
    
   <section>
     <section class="masthead ">
       <div id="nav" class="container">
     
      <router-link :to="{ name: 'homepage' }"><img class="mast-logo" src="../assets/realtourhub-beta.png"></router-link>
      <ul>
<li><router-link :to="{ name: 'login' }">Login</router-link></li>
     <li><router-link :to="{ name: 'register' }">Register</router-link></li>
     </ul>
    </div>
       <div class="container">
   <section class="masthead-left">
       
        
    <h2>The All-In-One 3D Tours Online Management Platform.</h2>
    <p>A complete online platform for 3D capture experts to manage <br/>
their (3D tour) contents, clients and team seamlessly and efficiently.</p>
<button class="jumbo">GET STARTED</button>

 
    </section>

    <BuildingInPhone class="phone_building"/>
    </div>
    </section>
<section class="why-get-3d container">
    <div >
    <section class="left">
   <h2>Why get a 3D tour?</h2>

   </section>


  
      <section>
    <img src="">
    <p>90% 
of buyers would
be compelled by a listing 
with 3D tour.</p>
<p>(Source: Matterport)</p>
   </section>
  
</div>
</section>
 <section class="featured-tours container">
<h3>FEATURED TOURS</h3>
<p>Explore the top featured tours across the world</p>
<button>More Tours</button>

</section>
   <section class="one-functional-platform">
     <div class="container">
     <h3>ONE FUNCTIONAL PLATFORM</h3>
     <p>Get everything you need in one place.</p>
     <p>Every Realtourhub Pro plan comes with all the tools you need to manage and grow your entire business: a powerful online profile portfolio, work scheduling tool, content tagging, client management solutions, team management solutions, 3D services integration and so much more.</p>
     <button>GET STARTED</button>
     </div>
   </section>

    <section class="container ">
     <h3>FEATURES</h3>
     <section class="features-card-section">
     <div class="features-card">
       <h5>Portfolio Profile</h5>
       <p>The best way to showcase your 3D brand and contents to your potential clients</p>

       </div>
        <div class="features-card">
       <h5>Portfolio Profile</h5>
       <p>The best way to showcase your 3D brand and contents to your potential clients</p>

       </div>
        <div class="features-card">
       <h5>Portfolio Profile</h5>
       <p>The best way to showcase your 3D brand and contents to your potential clients</p>

       </div>
       <div class="features-card">
       <h5>Portfolio Profile</h5>
       <p>The best way to showcase your 3D brand and contents to your potential clients</p>

       </div>
        <div class="features-card">
       <h5>Portfolio Profile</h5>
       <p>The best way to showcase your 3D brand and contents to your potential clients</p>

       </div>
        <div class="features-card">
       <h5>Portfolio Profile</h5>
       <p>The best way to showcase your 3D brand and contents to your potential clients</p>

       </div>
   </section>
    </section>

 <section class="container">
     <h3>A MUST USE FOR EVERY REAL ESTATE PROFESSIONAL</h3>
     <div class="features-card">
       <h5>GROW YOUR CLIENT BASE</h5>
       <p>Show potential sellers how you will set their listings above the rest with cutting-edge marketing technology.</p>
       <p>Get more referrals by selling faster at a higher price.</p>

       </div>
<div class="features-card">
       <h5>GROW YOUR CLIENT BASE</h5>
       <p>Show potential sellers how you will set their listings above the rest with cutting-edge marketing technology.</p>
       <p>Get more referrals by selling faster at a higher price.</p>

       </div>
       <div class="features-card">
       <h5>GROW YOUR CLIENT BASE</h5>
       <p>Show potential sellers how you will set their listings above the rest with cutting-edge marketing technology.</p>
       <p>Get more referrals by selling faster at a higher price.</p>

       </div>
       <button>CREATE A PROFILE</button>
   </section>
   <section>

<h3>BECOME A 3D CAPTURE EXPERT TODAY!</h3>


</section>
   </section>


  </div>
</template>

<script>
import BuildingInPhone from '../assets/phone3.svg';
  
export default {
  name: 'HomePage',
        components: {
   BuildingInPhone
  },
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mast-logo{
  height:30px;
}
body,html{
  padding:0px;
  margin:0px;
}
.phone_building{
  width:600px;
}
.masthead{
  background:rgb(31,63,129);
  color:white;
  padding-bottom:100px;
}
.masthead-left{
  width:50%;
  float:left;
  text-align:left;
}
.masthead-left h2{
  margin-top:70px;
  font-size:50px;
  margin-bottom:10px;
}
.masthead-left p{
  font-size:12px;
  margin-bottom:60px;
}
.container{
  width:1200px;
  margin:0px auto 0px auto;
}
.jumbo{
  background:white;
  color:rgb(31,63,129);
  border:0px;
  width:325px;
  height:39px;
  padding:10px 0px 10px 0px;
  text-align:center;
  border-radius:20px;
  font-weight: bold;
  font-size:16pt;

}
#nav{color:white;
text-decoration:none;
list-style-type: none;
display:block;
padding-top:10px;}
#nav ul{
  float:right;
  margin-right:-1px;
  text-align:right;
}
#nav ul li{
  text-decoration:none;
  list-style: none;
  list-style-type: none;
  display:inline-block;
  color:white;
  margin-right:10px;
}
#nav ul li a{
  color:white;
  text-decoration:none;
}
.why-get-3d{
  border-radius:20px;
  
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    text-align:center;
    padding:20px 0px 20px 0px;
    margin-top:-50px;
   height:260px;
    background:white;
}
.left{
  width:50%;
  float:left;
}

/*Featured Tours*/
.featured-tours h3,.featured-tours p{
  text-align:center;
}

/*One functional tour*/
.one-functional-platform{
  background:rgb(31,63,129);
  height:400px;
  text-align:center;
  color:white;
}

/*features*/
.features-card-section{
  display: grid;
  height: 335px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 15px;
  margin-bottom:40px;

}
.features-card{
  border-radius:10px;
  background:white;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  
  height:335px;
  padding:10px 20px 10px 20px;


}

/* A Must for every professional*/

</style>
