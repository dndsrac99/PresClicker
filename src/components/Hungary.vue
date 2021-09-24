<template>
  <v-card size="100%" class="marg" id="cardo">
    <v-toolbar
      size="100%"
      color="red darken-2"
      style="color: white; font-size: 25px"
    >
      <v-avatar id="presPic" size="60px">
        <v-img src="..\assets\a.png"></v-img>
      </v-avatar>
      Orbi!
      <v-spacer></v-spacer>
      <v-tooltip bottom color="green">
        

        <template v-slot:activator="{ on, attrs }">
      <div>
        <div v-bind="attrs" v-on="on">
        <span id="huf"> {{ huf }}</span>
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
              <span>{{ huinf }}</span>
              <v-icon color="white">mdi-account-group</v-icon>
            </div>
          </template>
          <span> Influence</span>
        </v-tooltip>
      </div>
    </v-toolbar>
    <v-btn class="btn" color="success" v-on:click="meetingPuti">Meet Puti</v-btn>
    <v-btn class="btn" color="success" v-if="huinf  >= 20" v-on:click="sPot">sell (russian) potatoes to Oposition</v-btn>
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
      hufcost: 30,
      gainspeed: 5000,
      gainamount: 1
    },
  }),

  watch: {},
  computed:{
    huf: function() {
      return this.huf;
    },
    huinf: function() {
      return this.huinf;
    }
  },
  methods: {
    meetingPuti: function(){
      this.huinf = this.huinf + 2;
      return this.huinf;
    },
    sPot: function(){
      this.huf = this.huf + 200;
      this.huinf = this.huinf - 3;
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