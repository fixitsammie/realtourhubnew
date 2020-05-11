<template>
  <div class="">
    
    
   <section>
     <section class="masthead ">
       <div id="nav" class="container">
     
      <router-link :to="{ name: 'homepage' }"><img class="mast-logo" src="../assets/realtourhub-beta.png"></router-link>
      <ul v-if="!this.$store.getters.isLoggedIn">
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
        <div class="separ"><h2>Why get a 3D tour?</h2></div>


   </section>
<section class="right">
<transition-group name="slide-fade">
  <section v-if="docState === 0" key="saved" class="transition-right">
      <h3>90% </h3>
    <p>of buyers would
be compelled by a listing 
with 3D tour.</p>
<p>(Source: Matterport)</p>
   </section>

    <section v-if="docState === 1" key="editeda" class="transition-right">
        <h3>1% </h3>
    <p>of buyers would
be compelled by a listing 
with 3D tour.</p>
<p>(Source: Matterport)</p>
   </section>
    <section v-if="docState === 2" key="editedb" class="transition-right">
        <h3>2%</h3>
        <p>of buyers would
            be compelled by a listing
            with 3D tour.</p>
        <p>(Source: Matterport)</p>
    </section>
    <section v-if="docState === 3" key="editedc" class="transition-right">
        <h3>3%</h3>
        <p>of buyers would
            be compelled by a listing
            with 3D tour.</p>
        <p>(Source: Matterport)</p>
    </section>
    <section v-if="docState === 4" key="editedd" class="transition-right">
        <h3>4% </h3>
        <p>of buyers would
            be compelled by a listing
            with 3D tour.</p>
        <p>(Source: Matterport)</p>
    </section>
  
</transition-group></section>
  
      
  
</div>
</section>
 <section class="featured-tours container">
<h3>FEATURED TOURS</h3>
<p>Explore the top featured tours across the world</p>
     <section class="featured-tours-card-section">
         <div class="tours-card">
             <div class="parent">
             <div class="img-container"></div>
             </div>
             <h5>94 Mercet</h5>
             <p>Apartment . New York</p>
         </div>
         <div class="tours-card">
             <img src="../assets/test-tour-image.jpg">
             <h5>94 Mercet</h5>
             <p>Apartment . New York</p>
         </div>  <div class="tours-card">
         <img src="../assets/test-tour-image.jpg">
         <h5>94 Mercet</h5>
         <p>Apartment . New York</p>
     </div>  <div class="tours-card">
         <img src="../assets/test-tour-image.jpg">
         <h5>94 Mercet</h5>
         <p>Apartment . New York</p>
     </div>  <div class="tours-card">

         <img src="../assets/test-tour-image.jpg">
         <h5>94 Mercet</h5>
         <p>Apartment . New York</p>
     </div>  <div class="tours-card">
         <img src="../assets/test-tour-image.jpg">
         <h5>94 Mercet</h5>
         <p>Apartment . New York</p>
     </div>




     </section>
<button>MORE TOURS</button>

</section>
   <section class="one-functional-platform">
     <div class="container">
     <h3>ONE FUNCTIONAL PLATFORM</h3>
     <h4>Get everything you need in one place.</h4>
     <p>Every Realtourhub Pro plan comes with all the tools you need to manage and grow your entire business: a powerful online profile portfolio, work scheduling tool, content tagging, client management solutions, team management solutions, 3D services integration and so much more.</p>
     <button>GET STARTED</button>
     </div>
   </section>
   </section>

    <section class=" container features">
     <h3>FEATURES</h3>
     <section class="features-card-section">
     <div class="features-card">
         <div class="features-card-header">
             <h5>Portfolio Profile</h5><ProfileIcon class="features-card-icon"/></div>
       <p>The best way to showcase your 3D brand and contents to your potential clients</p>

       </div>
        <div class="features-card">
            <div class="features-card-header">
                <h5>Portfolio Profile</h5><TagIcon class="features-card-icon"/></div>
       <p>The best way to showcase your 3D brand and contents to your potential clients</p>

       </div>
        <div class="features-card">
            <div class="features-card-header">
                <h5>Portfolio Profile</h5><ScheduleIcon class="features-card-icon"/></div>
       <p>The best way to showcase your 3D brand and contents to your potential clients</p>

       </div>
       <div class="features-card">
           <div class="features-card-header">
               <h5>Portfolio Profile</h5><ClientIcon class="features-card-icon"/></div>
       <p>The best way to showcase your 3D brand and contents to your potential clients</p>

       </div>
        <div class="features-card">
            <div class="features-card-header">
                <h5>Portfolio Profile</h5><TeamIcon class="features-card-icon"/></div>
       <p>The best way to showcase your 3D brand and contents to your potential clients</p>

       </div>
        <div class="features-card">
            <div class="features-card-header">
                <h5>Portfolio Profile</h5><IntegrationIcon class="features-card-icon"/></div>
       <p>The best way to showcase your 3D brand and contents to your potential clients</p>

       </div>
   </section>
    </section>

 <section class="container estate-professional">
     <h3>A MUST USE FOR EVERY REAL ESTATE PROFESSIONAL</h3>


     <div class="estate-professional-card-section">
     <div class="estate-professional-card">
         <div class="estate-icon-container">
             <ChartRise class="estate-icon"/>
         </div>

         <h5>GROW YOUR CLIENT BASE</h5>
       <p>Show potential sellers how you will set their listings above the rest with cutting-edge marketing technology.</p>
       <p>Get more referrals by selling faster at a higher price.</p>

       </div>
<div class="estate-professional-card">
    <div class="estate-icon-container">
        <Listings class="estate-icon"/>
    </div>

    <h5>ELEVATE YOUR LISTINGS</h5>
       <p>Show potential sellers how you will set their listings above the rest with cutting-edge marketing technology.</p>
       <p>Get more referrals by selling faster at a higher price.</p>

       </div>
       <div class="estate-professional-card">
           <div class="estate-icon-container">
               <Clock class="estate-icon"/>
           </div>

       <h5>SPEND YOUR TIME WISELY</h5>
       <p>Show potential sellers how you will set their listings above the rest with cutting-edge marketing technology.</p>
       <p>Get more referrals by selling faster at a higher price.</p>

       </div>
     </div>

     <div class="estate-professional-button">
         <button >CREATE A PROFILE</button>
     </div>

   </section>



       <section class="one-functional-platform become3d">
          <div class="container">
              <h3 class="become3d-heading">BECOME A 3D CAPTURE EXPERT TODAY!</h3>
              <h4>Don’t be left behind, be one of the very first in your area, and start earning with cutting edge innovation and technology through these easy steps:</h4>
              <p>Every Realtourhub Pro plan comes with all the tools you need to manage and grow your entire business: a powerful online profile portfolio, work scheduling tool, content tagging, client management solutions, team management solutions, 3D services integration and so much more.</p>
              <button>GET STARTED</button>
          </div>
      </section>

      <section class="footer">
          <div class="container">
              <input type="text">
              <button>Subscribe</button>
              <p>Copyright &copy 2020 RealTourHub. All rights reserved.</p>
          </div>
      </section>



  </div>
</template>

<script>
import BuildingInPhone from '../assets/phone3.svg';
import Listings from '../assets/listing.svg';
import ChartRise from '../assets/chart-rise.svg'
import BackgroundCurve from '../assets/background-curve.svg'
import Clock from '../assets/clock.svg'
import ProfileIcon from '../assets/profile-icon.svg'
import ClientIcon from '../assets/client.svg'
import IntegrationIcon from '../assets/integration.svg'
import ScheduleIcon from '../assets/schedule.svg'
import TeamIcon from '../assets/team.svg'
import TagIcon from '../assets/tag.svg'


export default {
  name: 'HomePage',
        components: {
   BuildingInPhone,Listings,BackgroundCurve,ChartRise,Clock,ProfileIcon,
            ClientIcon,IntegrationIcon,ScheduleIcon,TagIcon,TeamIcon
  },
  data () {
    return {
    'whyTransitionState':0,
        'docState':0
    }
  },
  created: function() {
		var self = this;
		setInterval(function() {
      
        if (self.docState<4) {
             self.docState++;
         }else{
            self.docState=0;
        }
       
    }, 3000);
},computed:
function(){

}}
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
  width:50%;
}
.masthead{
  background:rgb(31,63,129);
  color:white;
  padding-bottom:150px;

}
.masthead::before {
    content: "";
    position: absolute;
    background-color: transparent;
    bottom: -80px;
    height: 100px;
    width: 100%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    -webkit-box-shadow: 0 -125px 0 0 #F9FBFD;
    box-shadow: 0 -125px 0 0 #F9FBFD;
    z-index:1;
}
.masthead-left{
  width:50%;
  float:left;
  text-align:left;
}
.masthead-left h2{
  margin-top:70px;
  font-size:40px;
  margin-bottom:10px;
}
.masthead-left p{
  font-size:12px;
  margin-bottom:60px;
}

.container{
  width:960px;
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
padding-top:20px;}
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
    margin-top:-90px;
   height:260px;
    background:white;
    position:relative;
    z-index:3;
}
.left{
    height:250px;

  width:50%;
    float:left;
    display: flex;
    justify-content: center;
    align-items: center;


}


.right{
    width:46%;
    padding-right:2%;
    padding-left:2%;
    float:right;
    height:250px;
    display: flex;
    justify-content: center;
    align-items: center;
}
/*Why 3D tour section*/
.transition-right{
    text-align:center;
}

/*Featured Tours*/
.featured-tours{
    text-align: center;
}
.featured-tours h3,.featured-tours p{
  text-align:center;
}

.featured-tours-card-section{
    display: grid;
    height: 800px;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    gap: 40px 40px;


}

.featured-tours >h3{
    text-align:center;
    color:rgb(31,63,129);
    font-size:60px;
    font-weight:bold;
    padding-top:0px;
    margin-top:50px;
    margin-bottom:20px;
}

.tours-card {

    background: white;
    -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    height: 335px;
    padding: 0px 0px 10px 0px;
}

.tours-card img{

    padding:0px;
    margin:0px;
    width: 100%;
    object-fit:contain;
}
.parent{
    display:block !important;
    width:200px;
    height:200px;
}

.img-container{
    width:100%;
    height:100px;

    background-image: url("../assets/test-tour-image.jpg");



    background-attachment: fixed;
    transition: all .5s;
    background-color:white;
    background-size:contain !important;
    -webkit-background-size: contain !important;
    background-position:center;
}
.parent:hover .img-container,
.parent:focus .img-container{
    transform:scale(1.2);
}


.tours-card img:hover{
    width:120%;
    object-fit: contain;
}
.featured-tours button{
    background: rgb(31,63,129);
    color: white;
    margin-top: 10px;
    margin-bottom: 0px;
    padding: 10px;
    border-radius: 30px;
    border: 0px;
    width: 325px;
    height: 59px;
    font-size: 20px;
    font-weight: bold;
}
/*One functional tour*/
.one-functional-platform{
  background:rgb(31,63,129);
  height:400px;
  text-align:center;
  color:white;

}
.one-functional-platform h3{
    font-size:60px;
    padding-top:70px;
    padding-bottom: 0px;
    margin-bottom:0px;
}
.one-functional-platform button{
    color:rgb(31,63,129);
    background:white;
    margin-top:10px;
    margin-bottom:0px;
    padding:10px;
    border-radius:30px;
    border:0px;
    width:325px;
    height:59px;
    font-size:20px;
    font-weight:bold;

}
/*features*/
.features{
    padding-top:0px;
    margin-top:0px;
}
.features>h3{
    text-align:center;
    color:rgb(31,63,129);
    font-size:60px;
    font-weight:bold;
    padding-top:0px;
    margin-top:50px;
    margin-bottom:40px;
}
.features-card-section{
  display: grid;
  height: 800px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 40px 40px;


}
.features-card-icon{
    fill:rgb(31,63,129);
    width:30px;

}
.features-card-header{
    display:flex;
}
.features-card{
  border-radius:10px;
  background:white;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  
  height:335px;
  padding:10px 20px 10px 20px;


}

/* A Must for every professional*/

.estate-professional{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    background:white;
    padding:10px 0px 50px 0px;
    border-radius:10px;

}
.estate-professional h3{
    text-align:center;
    font-size:36px;
    font-weight:bold;
}
.estate-professional-button{
    text-align:center;
    margin-top:5px;
}
.estate-professional-button> button{
    text-align:center;


    width:325px;
    background: rgb(31,63,129);
    color: white;
    height: 59px;
    font-size:30px;
    font-weight: bolder;
    padding:10px;
    border:0px;
    border-radius: 30px;
}
.estate-professional-card h5{
    text-align:center;
    font-size:16px;
    font-weight: bolder;
}
.estate-professional-card-section{
    width:90%;
    margin:0px auto 0px auto;
    display: grid;
    height: 400px;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    gap: 10px 10px;
}
.estate-icon{
    height:120px;
margin-right:auto;
    margin-left:auto;
    fill:rgb(31,63,129);
}
.estate-icon-container{
    margin-right:auto;
    margin-left:auto;
    text-align:center;
}
/* Become 3d expert */
.become3d-heading{
    font-size:50px !important;
}

.footer{
    background:#333333;
    color:white;
    margin-top:0px;
    margin-bottom:0px;
    height:100px;
}


.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    position: absolute;
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(5px);
    opacity: 0;
}

</style>
