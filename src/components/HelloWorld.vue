<template>
  <v-container>
    <v-btn height="100%" @click="orbi =!orbi"> <v-img src="..\assets\a.png"></v-img></v-btn>
    <v-overlay :value="orbi">
      <v-btn @click="orbi = !orbi"> <v-img src="..\assets\b.png"></v-img> </v-btn>
       </v-overlay>
    
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',


    data: () => ({
      orbi: false,
      }),

      watch: {
        
      }
  }
</script>
