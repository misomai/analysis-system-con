<template>
  <div>
    <div class="tab">
      <div class="tab_box container">
        <ul class="tab_list">
          <li
            @click="changeTab('1')"
            v-bind:class="{ active: isActive === '1' }"
          >
            標準折れ線グラフ
          </li>
          <li
            @click="changeTab('2')"
            v-bind:class="{ active: isActive === '2' }"
          >
            項目ごと比較
          </li>
          <li
            @click="changeTab('3')"
            v-bind:class="{ active: isActive === '3' }"
          >
            商品ごと比較
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="article" >
        <!--タブで入れ替えたいコンポーネントの配置-->
        <LineDisplay v-show="isActive === '1'" class="item"></LineDisplay>
        <ItemCompareLineDisplay v-show="isActive === '2'" class="item"></ItemCompareLineDisplay>
        <ProductCompareLineDisplay v-show="isActive === '3'" class="item"></ProductCompareLineDisplay>
        <!-- <trend-timeline v-show="isActive === '2'" class="item"></trend-timeline>
        <trend-item v-show="isActive === '3'" class="item"></trend-item> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab {
  width: 100%;
}
.tab_list {
  overflow: hidden;
  list-style: none;
}
.tab_list li {
  float: left;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s;
}
.tab_list li:not(:first-child) {
  border-left: none;
}
.tab_list li.active {
  border-bottom: 3px solid #000;
  cursor: auto;
}
.article {
  overflow: hidden;
  margin-top: -1px;
}
</style>

<script>
import LineDisplay from "@/components/LineDisplay.vue";
import ItemCompareLineDisplay from "@/components/ItemCompareLineDisplay.vue";
import ProductCompareLineDisplay from "@/components/ProductCompareLineDisplay.vue";

export default {
  components: {
    LineDisplay,
    ItemCompareLineDisplay,
    ProductCompareLineDisplay,
  },
  data() {
    return {
      isActive: "1",
    };
  },
  methods: {
    changeTab(val) {
      this.isActive = val;
    },
  },
};
</script>
