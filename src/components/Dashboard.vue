<template>
    <div>
    <section class="left-container">

        <img src="/uploads/{{ user['profile_user']['photo'] }}" class="profile-photo">
        <h4>{{ user['profile_user']['name'] }}</h4>
        <p>{{ user['profile_user']['state'] }}, <p>{{ data['profile_user']['country'] }}</p></p>
        <p>{{ user['profile_user']['biodescript'] }}</p>


    </section>
    <section class="middle-container">

        <div class=" upload-div" v-if="user['is_owner']" >
            <div class="user-text-name">


                <h3 >Hi, {{ user['profile_user']['name'] }}</h3>


            </div>


            <div class="upload-button-div">
                <a href="/submit" class="upload-button"><span class="upload-icon"> <img src="{{ static_url('img/icon-upload.png') }}"></span>Upload Tour</a>

            </div>
        </div>


        <div class="main-list-item" v-for="tour in tours['recent']" :key="tour._id">
            <div class="list-item-image">
                <a href="/tour/{{ tour['slug'] }}">  <img src="{{ tour['list_feature_image'] }}"></a>
            </div>
            <div class="list-item-text">
                <a href="/tour/{{ tour['slug'] }}"> <h3>{{ tour['title'] }}</h3></a>
                <p class="location">{{ tour['category' ]}}
                    - {{ tour.get('city') or tour.get('location') }}</p>
                <p>Description</p>
                <p>{{ tour['description' ]}}</p>
            </div>
        </div>



    </section>
    <section class="aside-container">
        <div class="side-list-item"><h3>Recommended</h3></div>

        <div class="side-list-item" v-for="tour in tours['latest']" :key="tour._id">
            <div class="list-item-image">
                <img src="{{tour['list_feature_image'] }}"  alt="{{tour['slug']}}">
            </div>
            <div class="list-item-text">
                <a href="/tour/{{tour['slug']}}"><h3>{{tour['title']}}</h3></a>
                <p class="location">{{ tour['category' ]}}
                    - {{ tour.get('city') or tour.get('location') }}</p>

            </div>



        </div>


    </section>

        <footer class="footer"><p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> <span>RealTourHub</span>. All rights reserved.</p></footer>

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
  name: 'Dashboard',
        components: {
   BuildingInPhone,Listings,BackgroundCurve,ChartRise,Clock,ProfileIcon,
            ClientIcon,IntegrationIcon,ScheduleIcon,TagIcon,TeamIcon
  },
  data () {
    return {
    'whyTransitionState':0,
        'docState':0,
        'tours':''
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
    /* This css is only used on the profile page*/
    @media only screen
    and (max-width: 1200px)
    {


        html{
            background-color: #FAFBFB;
            font-family: "Montserrat";
        }
        body{

        }
        header{

            height:60px;
            display:flex;
            flex-direction: row;
            width: 100%;
            margin:0 auto 0 auto;
            padding-top:20px 0 20px 0;

        }
        .header-img-div{

            flex:1;

        }
        .header-profile-thumbnail{
            clear:both;
        }
        #headerimg{height:24px; margin-bottom:20px;display:block;padding-top: 15px;}

        .profile-stub{
            display:flex;
            align-items: center;
            justify-content: center;
            flex-direction:column;
            margin-right: 2%;
        }
        .header-profile-thumbnail{
            width:31px;
            height:31px;
            border-radius:50%;
            object-fit: cover;
            display:block;
        }

        .header-menu-list {
            top: 50px;
            left:0px;
            position: absolute;
            background: #ffffff;
            width:100%;
            height: 60px;
            overflow-x:hidden;
            margin:0px;
            padding:0px;
            display:none;

        }
        .show{display: block;}

        .container{

            width:95vw;
            margin:0 auto 0 auto;

        }


        .profile-photo{
            width: 20vw;
            height:20vw;

            object-fit: cover;
            border-radius:50%;
            box-shadow: 1px 10px 5px rgba(0,0,0,0.15);
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        .left-container{

            width:95vw;
            text-align:center;
            flex:auto;
            align-items: center;
            justify-content: center;
            margin-top:30px;


        }
        .upload-icon img{
            float: left;
            width: 20px;
            height: 20px;
            margin-left:10px;
        }
        .upload-button{
            margin-top:10px;
            align-self:center;
            display: inline-block;
            cursor:pointer;
            border-radius: 12px;
            width: 147px;
            height: 20px;
            background-color: #7f74ff;
            padding:10px 0px;
            text-decoration:none;
            text-shadow:0px 1px 0px #2f6627;
            color:white;
            text-align:center;
        }
        .upload-div{
            background-color:white;
            padding:10px;
            box-shadow: 1px 10px 5px rgba(0,0,0,0.1);
            margin-bottom:45px;
            border-radius:10px;
            display: flex;
            flex-direction: row;
        }
        .user-text-name{
            flex:3;

        }
        .user-text-name h3 {
            /* Text style for "Hi, John B" */
            color: #000000;
            font-family: "Montserrat Light";
            font-size: 20px;
            font-weight: 300;
        }
        .middle-container{

        }
        .middle-container >.main-list-item{

        }

        .list-item-image img{
            width: 100%;

            object-fit: cover;
        }
        .list-item-text h3,.list-item-text p{
            padding:0;
            margin:0;
        }
        .list-item-text h3{
            font-size: 20px;
        }
        .list-item-text> .location{
            color:#666666;
            font-size: 14px;
            margin-bottom: 10px;
        }
        .main-list-item{
            background-color:white;

            box-shadow: 1px 10px 5px rgba(0,0,0,0.1);
            margin-bottom:45px;
            border-radius:10px;
            display: flex;
            flex-direction: column;
        }

        .list-item-text{padding-bottom: 20px;
            padding-left:10px;}
        .side-list-item{
            width:100%;
            padding:10px;
            display: flex;
            flex-direction:column;

        }
        .side-list-item img{


            object-fit: cover;

        }

        .aside-container{
            flex:none;

            box-shadow: 1px 10px 5px rgba(0,0,0,0.1);
            height: fit-content;
            background-color:white;

            border-radius:10px;
            padding:10px 30px 10px 30px;
        }
        .aside-container img{
            width:100%; }
    }

    /*This css is only used on profile page*/
    @media screen
    and (min-width: 1200px)
    and (-webkit-min-device-pixel-ratio: 1) {


        html{
            background-color: #FAFBFB;
            font-family: "Montserrat";
        }
        header{

            height:45px;
            display:flex;
            flex-direction: row;


            margin:0px auto 20px auto;
            padding-top:15px;
            padding-right:2%;

        }
        .header-img-div{
            width:1200px;
            display:flex;
            flex-direction: row;

            margin:0 auto 0 auto;
        }
        .header-profile-thumbnail{
            clear:both;
        }
        #headerimg{height:24px; margin-bottom:20px;display:block;}

        .profile-stub{
            display:flex;
            align-items: center;
            justify-content: center;
            flex-direction:column;
            margin-right: 2%;
        }
        .header-profile-thumbnail{
            width:31px;
            height:31px;
            border-radius:50%;
            object-fit: cover;
            display:block;
        }

        .header-menu-list {
            top: 60px;

            position: absolute;
            background: #ffffff;
            width: 90px;
            height: 60px;
            border-radius: 12px;
            box-shadow: 1px 5px 5px rgba(0,0,0,0.1);
            display:none;

        }
        .show{display: block;}

        .header-menu-list:after,
        .header-menu-list:before {
            bottom: 100%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
        }

        .header-menu-list:after {
            border-color: rgba(255, 255, 255, 0);
            border-bottom-color: white;
            border-width: 9px;
            left: 50%;
            margin-left: -9px;
        }

        .header-menu-list:before {
            border-color: rgba(113, 158, 206, 0);
            border-bottom-color: white;
            border-width: 10px;
            left: 50%;
            margin-left: -10px;
        }
        .header-menu-list li{

            list-style: none;
        }
        .profile-photo{
            width: 145px;
            height:145px;

            object-fit: cover;
            border-radius:50%;
            box-shadow: 1px 10px 5px rgba(0,0,0,0.15);
        }
        .upload-icon img{
            float: left;
            width: 20px;
            height: 20px;
            margin-left:10px;
        }
        .user-text-name{
            flex:3;

        }
        .user-text-name h3 {
            /* Text style for "Hi, John B" */
            color: #000000;
            font-family: "Montserrat Light";
            font-size: 20px;
            font-weight: 300;
        }
        .upload-button{
            margin-top:10px;
            align-self:center;
            display: inline-block;
            cursor:pointer;
            border-radius: 12px;
            width: 147px;
            height: 20px;
            background-color: #7f74ff;
            padding:10px 0px;
            text-decoration:none;
            text-shadow:0px 1px 0px #2f6627;
            color:white;
            text-align:center;
        }
        .container{
            display: flex;
            flex-direction: row;
            width:1280px;
            margin:0 auto 0 auto;
        }
        .main-list-item{
            background-color:white;
            padding:0px;
            box-shadow: 1px 10px 5px rgba(0,0,0,0.1);
            margin-bottom:45px;
            border-radius:10px;
            display: flex;
            flex-direction: column;
        }
        .list-item-text{
            padding: 10px 0px 10px 10px;
        }
        .upload-div{
            background-color:white;
            padding:10px;
            box-shadow: 1px 10px 5px rgba(0,0,0,0.1);
            margin-bottom:45px;
            border-radius:10px;
            display: flex;
            flex-direction: row;
        }
        .list-item-image img{
            width: 100%;


            object-fit: cover;

        }
        .list-item-text h3,.list-item-text p{
            padding:0;
            margin:0;
        }
        .list-item-text h3{
            font-size: 20px;
        }
        .list-item-text> .location{
            color:#666666;
            font-size: 14px;
            margin-bottom: 10px;
        }

        .side-list-item{

            padding:10px;
            display: flex;
            flex-direction:column;

        }
        .aside-container > .list-item-image{
            align-items: center;
            justify-content: center;
            display: flex;

            text-align: center;
        }
        .side-list-item img{


            object-fit: cover;

        }
        .left-container{
            margin-right:50px;
            flex:auto;
            width:150px;

        }
        .middle-container{
            margin-right:30px;
            flex:none;
            width:570px;

        }
        .middle-container >.main-list-item{

        }
        .upload-div {padding:10px;}
        .aside-container{
            flex:none;
            width:337px;
            box-shadow: 1px 10px 5px rgba(0,0,0,0.1);
            height: fit-content;
            background-color:white;
            margin-top:130px;
            border-radius:10px;
            padding:10px 30px 10px 30px;
        }
        .aside-container img{
            width:90%;
        }

    }
</style>


