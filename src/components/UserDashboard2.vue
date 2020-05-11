<template>
  <div class="">

    <div class="container-profile">
        <p> Thank God</p>
        <section class="left-container">

            <img v-bind:src="'/uploads/'+ user['photo'] " class="profile-photo">
            <h4>{{ user['name'] }}</h4>
            <h5>{{ user['state'] }}, <p>{{ user['country'] }}</p></h5>
            <p>{{ user['biodescript'] }}</p>
            

        </section>
        <section class="middle-container">

            <div class=" upload-div ">
                <div class="user-text-name">


                    <h3 >Hi, {{ user['name'] }}</h3>


                </div>


                <div class="upload-button-div">
                    <a href="/submit" class="upload-button"><span class="upload-icon"> <img v-bind:src="img/icon-upload.png"></span>Upload Tour</a>

                </div>
            </div>


            <div class="main-list-item" v-for="tour in tours">
                <div class="list-item-image">
                    <a href="'/tour/'+tour.slug">  <img v-bind:src="tour['list_feature_image']"></a>
                </div>
                <div class="list-item-text">
                    <a :href="'/tour/'+ tour.slug"> <h3>{{ tour['title'] }}</h3></a>
                    <p class="location">{{ tour['category' ]}}
                        - {{ tour['city']  }}</p>
                    <p>Description</p>
                    <p>{{ tour['description' ]}}</p>
                </div>
            </div>



        </section>
        <section class="aside-container">
            <div class="side-list-item"><h3>Recommended</h3></div>

            <div class="side-list-item" v-for="tour in recommended">
                <div class="list-item-image">
                    <img v-bind:src="tour.list_feature_image"  v-bind:alt="tour.slug">
                </div>
                <div class="list-item-text">
                    <a href="'/tour/'+tour.slug"><h3>{{tour['title']}}</h3></a>
                    <p class="location">{{ tour['category' ]}}
                        - {{ tour['city'] }}</p>

                </div>



            </div>


        </section>
    </div>
  
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
        'docState':0,
        tours: '',
    recommended: '',
        errors:[],
        user:localStorage.getItem('user') || ''
    }
  },
  created: function() {

this.$http({url:'/api/tours/get',method:'GET'})
    .then(resp => {
        const tours=resp.data.tours
        //const recommended_tours=resp.data.recommended_tours
        this.tours=tours
    }).catch(err => {
        this.errors.push(err);

})
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
