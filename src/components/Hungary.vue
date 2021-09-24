<template>
  <v-card size="100%" class="marg" id="Cardo">
    <v-toolbar
      size="100%"
      color="red darken-2"
      style="color: white; font-size: 25px"
    >
      <v-avatar id="presPic" size="60px">
        <v-img src="..\assets\a.png"></v-img>
      </v-avatar>
      Orbi!!
      <v-spacer></v-spacer>
      <v-tooltip bottom color="green">
        

        <template v-slot:activator="{ on, attrs }">
      <div>
        <div v-bind="attrs" v-on="on">
        <span id="huf"> {{$hunstats.huf}}</span>
        <v-icon color="white" style="font-size: 40px">mdi-cash</v-icon>
        </div>
      </div>
        </template>
        <span>Hungarian Forint</span>
      </v-tooltip>
      <div>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <span>{{ $hunstats.hufinf }}</span>
              <v-icon color="white">mdi-account-group</v-icon>
            </div>
          </template>
          <span> Influence</span>
        </v-tooltip>
      </div>
    </v-toolbar>
    <v-btn class="btn" color="success" v-on:click="meetingPuti">Meet Puti</v-btn>
    <v-btn class="btn" color="success" v-if="$hunstats.hufinf  >= 20" v-on:click="sPot">sell (russian) potatoes to Oposition</v-btn>
    <v-btn class="btn" color="success" v-if="$hunstats.huf >= 100000">text</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "Magyarország",
  el: "Cardo",

  data: () => ({
    
    huf: 0,
    huinf: 0,
    acollecthuf:null,
    adcampaign:{
      smt: 0,
      gainspeed: 5000,
      gainamount: 1
    },
  }),

  watch: {
    '$hunstats'(){
      this.huf = this.$hunstats.huf;
      this.huinf = this.$hunstats.hufinf;
    }
  },
  computed:{
    huf: function() {
      return this.huf;
    },
    huinf: function() {
      return this.huinf;
    },

  },
  methods: {
    meetingPuti: function(){
      this.$eventBus.$emit('incrinflu',2);
    },
    sPot: function(){
      this.$eventBus.$emit('dcrinf',5);
      this.$eventBus.$emit("increasehuf",200);
      
    },
    
  }
};
</script>

<style>
.marg {
  margin-top: 2%;
  margin-left: 1%;
  margin-right: 1%;
}
#presPic {
  margin: 1%;
}
.btn {
  margin: 1%;
}
</style>