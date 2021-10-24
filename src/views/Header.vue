<template>
  <div>
    <v-app-bar dark color="primary" clipped-left fixed app>
      <v-toolbar-title class="headline text-uppercase white--text">
        <span class="font-weight-light">売上解析システム</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/Import">販売データCSV入力</v-btn>
        <v-btn text to="/Chart">グラフ</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: null,
      showSearchInput: false,
    };
  }
};
</script>