<template>
  <div class="">
    
 <UserDashboard v-if="this.$store.getters.isLoggedIn"></UserDashboard>
<GuestDashboard v-if="!this.$store.getters.isLoggedIn"></GuestDashboard>
  </div>
</template>

<script>

import UserDashboard from "./UserDashboard";
import GuestDashboard from "./GuestDashboard";
export default {
  name: 'HomePage',
        components: {
   GuestDashboard,
            UserDashboard
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
</style>
