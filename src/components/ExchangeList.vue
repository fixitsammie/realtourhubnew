<template>
<div class="exchangelistcontainer">
    <ul v-if="exchanges" class="exchange-name-list">
<li v-for="exchange in exchanges" v-bind:key="exchange.id"  v-on:click="show_single(exchange)">
        {{exchange.name}}

      </li>
    </ul>
    
          <ul v-if="active_exchange" class="pair-name-list">
              <li v-for="pair in active_exchange.pairs" v-bind:key="pair.id" v-on:click="show_chart(pair)" >
        {{pair}}
 
        

      </li>
          </ul>
</div>
</template>

<script>
import EventBus from '../event-bus';
//import axios from 'axios'
export default{
data: function() {
    return {
      active_exchange: "",
      exchanges: [],
      pair:''
      
    }
  },
   created(){
       let exchange_url='/api/exchanges';
       this.$http.get(exchange_url)
              .then((response) => {
                this.exchanges = response.data['exchanges'];
              })
              .catch((err) => {
               
                console.log(err);
              })
        },
  
   methods:{
       show_single(exchange){
           this.active_exchange=exchange;

       },
       show_chart(pair){
           
           let pair_string=this.active_exchange.name+":"+pair.split('-')[0]+"/"+pair.split('-')[1];
           //alert(pair+":"+this.active_exchange.name);
           EventBus.$emit('symbol_emitted', pair_string);
           this.pair=pair_string;
       }
   }
}

</script>

<style>
.exchangelistcontainer{
    width:400px;
    display:block;
    float:left;
}
.exchange-name-list{
   width:100%;
    list-style:none;
    margin:0px;
    margin-bottom:0px;
    clear:both;
    display:block;
    
}
.exchange-name-list li{
    text-align:left;
    text-decoration:none;
    display: inline-block;
   
    padding:5px 10px 5px 10px;
    
    background-color:rgb(214,214,214);
    margin:0px;
}
.exchange-name-list li:hover{
    color:white;
    background-color:black;
}
.pair-name-list li{text-decoration:none; 
                    margin:0px;
                    text-decoration:none;
                    padding:5px 10px 5px 10px; 
                    background-color:white;
                    margin:0px;
                    padding: 10px 20px;
  border-bottom: 1px solid #ccc;}
.pair-name-list li:nth-child(even) {
    background: #f8f8f8;
  }
.pair-name-list li:hover{
    color:white;
    background-color:rgb(139, 139, 139);
}                   
.pair-name-list{height:200px; 
            width:100%;
            text-decoration:none;
            list-style:none;
            margin-top:0px;}
.pair-name-list{overflow:hidden; overflow-y:scroll;}
.pair-name-list::-webkit-scrollbar {
    width: 0.25em;
}
.pair-name-list::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.3);
}
.pair-name-list::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 0.25px solid slategrey;
}

</style>