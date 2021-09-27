<template>
  <v-app>
    <v-app-bar
    app>
      <v-btn color="red darken-2" to="/hun" value dark>Hungary <v-avatar size="30px"><v-img src="..\src\assets\a.png" ></v-img> </v-avatar> </v-btn>
      <v-spacer></v-spacer>
      <span> Country Clicker</span>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" to="/ru" dark>Russia <v-avatar size="30px"><v-img src="..\src\assets\b.png" ></v-img> </v-avatar> </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  mounted(){
    this.$eventBus.$on('increasehuf',function(amount){
      console.log(`ur moneh is ${this.$hunstats.huf}`)
      this.$hunstats.huf += amount;
    }),
    this.$eventBus.$on('decrhuf', function(amount){
      this.$hunstats.huf -= amount;
    }),
    this.$eventBus.$on('incrinflu',function(amount){
      console.log(`ur influ is ${this.$hunstats.hufinf}`)
      this.$hunstats.hufinf += amount;
      
    }),
    this.$eventBus.$on('dcrinf',function(amount){
      this.$hunstats.hufinf -= amount;
    })
    this.$eventBus.$on('autocal', function(main, speed, val){
       let counter = null;
       //let szam = main;
      const SEC_MULT = 100;
      counter = setInterval(function(){ main+= val},speed*SEC_MULT)
      
    })
  }
};
</script>
