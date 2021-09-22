<template>
  <v-app>
    <v-app-bar
    app>
      <v-btn color="red darken-2" to="/hun" value>Hungary <v-avatar size="30px"><v-img src="..\src\assets\a.png" ></v-img> </v-avatar> </v-btn>
      <v-spacer></v-spacer>
      <span> Country Clicker</span>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" to="/ru">Russia <v-avatar size="30px"><v-img src="..\src\assets\b.png" ></v-img> </v-avatar> </v-btn>
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
};
</script>
