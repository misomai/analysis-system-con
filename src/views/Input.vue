<template>
  <v-app>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col class="d-flex" cols="2">
            <v-select :items="items" label="購入場所"></v-select>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="name" label="注文番号"></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="名前"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field v-model="name" label="電話番号"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-text-field v-model="name" label="郵便番号"></v-text-field>
          </v-col>
          <v-col class="d-flex" cols="2">
            <v-select :items="items" label="都道府県"></v-select>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="name" label="市町村"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-text-field v-model="name" label="住所"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="送付先名"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="name" label="送付先電話番号"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="name" label="送付先郵便番号"></v-text-field>
          </v-col>
          <v-col class="d-flex" cols="3">
            <v-select :items="items" label="送付先都道府県"></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field v-model="name" label="送付先市区町村"></v-text-field>
          </v-col>
          <v-col cols="8">
            <v-text-field v-model="name" label="送付先住所"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field v-model="name" label="商品単価"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="name" label="その他"></v-text-field>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col cols="12" sm="2" md="2">
            <v-checkbox
              v-model="ex4"
              label="red"
              color="red"
              value="red"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="2" md="2">
            <v-checkbox
              v-model="ex4"
              label="indigo"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="2" md="2">
            <v-checkbox
              v-model="ex4"
              label="orange"
              color="orange"
              value="orange"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-radio-group v-model="row" row mandatory>
          <v-radio label="男" value="1"></v-radio>
          <v-radio label="女" value="2"></v-radio>
        </v-radio-group> -->
        <v-btn color="primary"> 登録 </v-btn>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    items: ["", "LP", "Amazon", "銀行振込", "次世代"],
    ex4: ["red", "indigo", "orange"],
    row: null,
  }),
};
</script>