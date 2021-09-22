<template>
  <v-card size="100%" class="marg" >
    <v-toolbar size="100%" color="red darken-1" style="color: white; font-size: 25px "> 
      <v-avatar id="presPic" size="60px"> <v-img src="..\assets\a.png"></v-img> </v-avatar> Orbi!
      <v-spacer></v-spacer>
      <span value="moneycount">
      0  
      </span>
      <v-icon color="white" style="font-size: 40px "  >mdi-cash</v-icon>
      
  </v-toolbar>
  <v-btn class="btn" color="success">Meet Puti</v-btn>
    
  </v-card>
</template>

<script>
  export default {
    name: 'Magyarország',


    data: () => ({
      }),

      watch: {
        
      }
  }
</script>

<style>

.marg{
  margin-top: 2%;
  margin-left: 1%;
  margin-right: 1%;
}
#presPic{
  margin: 1%;
}
.btn{
  margin: 1%;
}


</style>