<template>
  <div id="chartdiv"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
// 世界地図のgeodataを取得
import am4geodata_japanLow from "@amcharts/amcharts4-geodata/japanLow";

import japanData from "../assets/geoData/japan_data.json";
import japan from "../assets/geoData/japan_geodata";
// マップデータ読み込み
import osaka from "../assets/geoData/map/大阪府.json";
import osakaData from "../assets/geoData/大阪府.json";

export default {
  mounted() {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_japanLow;
    map.projection = new am4maps.projections.Miller();
    var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.geodata = japan;
    // クリックするとその県へ
    polygonSeries.mapPolygons.template.events.on("hit", function (ev) {
      map.zoomToMapObject(ev.target);
    });
    // ポリゴン設定
    let JapanPolygon = polygonSeries.mapPolygons.template;

    // ヒートマップ色設定
    const HeatmapColor = {
      max: "#51AA12",
      min: "#e4f1d9",
      hover: "#2D5E0A",
      tooltip: "#6392ff",
    };
    // ツールチップ
    JapanPolygon.tooltipText = "{name}: {value}";
    JapanPolygon.fill = am4core.color(HeatmapColor.hover);

    // ホバー
    let JapanHs = JapanPolygon.states.create("hover");
    JapanHs.properties.fill = am4core.color(HeatmapColor.tooltip);

    // ヒートマップ
    polygonSeries.heatRules.push({
      property: "fill",
      target: JapanPolygon,
      min: am4core.color(HeatmapColor.min),
      max: am4core.color(HeatmapColor.max),
    });
    // ヒートマップ横のバー
    let JapanHeatLegend = map.createChild(am4maps.HeatLegend);
    JapanHeatLegend.series = polygonSeries;
    JapanHeatLegend.align = "left";
    JapanHeatLegend.height = am4core.percent(80);
    JapanHeatLegend.orientation = "vertical";
    JapanHeatLegend.valign = "middle";
    JapanHeatLegend.marginRight = am4core.percent(4);
    JapanHeatLegend.valueAxis.renderer.opposite = true;
    JapanHeatLegend.valueAxis.renderer.dx = 25;
    JapanHeatLegend.valueAxis.strictMinMax = false;
    JapanHeatLegend.valueAxis.fontSize = 9;
    JapanHeatLegend.valueAxis.logarithmic = false;
    // 日本地図: 配送量データ読み込み
    polygonSeries.data = japanData;

    // 市町村別地図: 読み込み・設定
    // ドリルマップ: https://www.amcharts.com/docs/v4/tutorials/building-drill-down-maps/
    let CitySeries = map.series.push(new am4maps.MapPolygonSeries());
    CitySeries.useGeodata = true;
    CitySeries.hide();

    // 市町村別地図: ポリゴン設定
    let CityPolygon = CitySeries.mapPolygons.template;

    // 市町村別地図: ツールチップ
    CityPolygon.tooltipText = "{name}: {value}";
    CityPolygon.fill = am4core.color(HeatmapColor.hover);

    // 市町村別地図: ホバー
    let CityHs = CityPolygon.states.create("hover");
    CityHs.properties.fill = am4core.color(HeatmapColor.hover);

    // 市町村別地図: ヒートマップ
    CitySeries.heatRules.push({
      property: "fill",
      target: CityPolygon,
      min: am4core.color(HeatmapColor.min),
      max: am4core.color(HeatmapColor.max),
    });

    let CityHeatLegend = map.createChild(am4maps.HeatLegend);
    CityHeatLegend.series = CitySeries;
    CityHeatLegend.align = "right";
    CityHeatLegend.height = am4core.percent(80);
    CityHeatLegend.orientation = "vertical";
    CityHeatLegend.valign = "middle";
    CityHeatLegend.marginRight = am4core.percent(4);
    CityHeatLegend.valueAxis.renderer.opposite = true;
    CityHeatLegend.valueAxis.renderer.dx = -25;
    CityHeatLegend.valueAxis.strictMinMax = false;
    CityHeatLegend.valueAxis.fontSize = 9;
    CityHeatLegend.valueAxis.logarithmic = false;
    CityHeatLegend.hide();

    // // 市町村別地図: 市町村別地図が読み込みが終わったら日本全体地図を閉じて，市町村別地図だけを表示
    // CitySeries.geodataSource.events.on("done", function (ev) {
    //   polygonSeries.hide();
    //   JapanHeatLegend.hide();
    //   CitySeries.show();
    //   CityHeatLegend.show();
    //   console.log(ev);
    // });

    // 現在地の追加
    const button = map.chartContainer.createChild(am4core.Button);
    button.padding(5, 5, 5, 5);
    button.align = "right";
    button.valign = "bottom";
    button.marginRight = am4core.percent(10);
    button.events.on("hit", function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((postion) => {
          map.homeGeoPoint = {
            latitude: postion.coords.latitude,
            longitude: postion.coords.longitude,
          };
          map.homeZoomLevel = 8;
          map.goHome(500);
        });
      } else {
        map.goHome();
      }
    });

    button.icon = new am4core.Sprite();
    // https://material.io/resources/icons/?search=location&icon=gps_fixed&style=baseline
    button.icon.path =
      "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z";

    // マップを日本地図表示に戻す．
    function reset_map() {
      // onoff_zoompan(true);
      polygonSeries.show();
      JapanHeatLegend.show();
      map.goHome(500);
      CitySeries.hide();
      CityHeatLegend.hide();
      back.hide();
    }
    // ズームアウト: ボタン
    // TODO: デザインの改良
    const back = map.createChild(am4core.ZoomOutButton);
    back.align = "right";
    back.marginRight = am4core.percent(10);
    back.hide();
    back.events.on("hit", function () {
      reset_map();
    });

    // 市町村別地図: 地図・配送データの動的読み込みのためのイベントを日本地図側に設定
    JapanPolygon.events.on("hit", function (ev) {
      let pref_name = ev.target.dataItem.dataContext.name;
      let virtual_lati = ev.target.dataItem.dataContext.virtual_lati;
      let virtual_long = ev.target.dataItem.dataContext.virtual_long;

      if (virtual_lati !== undefined) {
        map.zoomToGeoPoint(
          {
            latitude: virtual_lati,
            longitude: virtual_long,
          },
          20,
          true
        );
      } else {
        map.zoomToMapObject(ev.target);
      }

      if (pref_name) {
        ev.target.isHover = false;
        // 市町村別地図: 地図データ読み込み
        //CitySeries.geodataSource.url = userEnv.MAP_DATA + pref_name + ".json";
        CitySeries.geodata = osaka;
        CitySeries.geodata.load;
        //CitySeries.geodataSource.load();

        // 市町村別地図: 数量データ読み込み
        //CitySeries.dataSource.url = get_api_url(pref_name);
        CitySeries.data = osakaData;
        CitySeries.data.load;

        polygonSeries.hide();
        CitySeries.show();

        // 市町村別地図: 数量データのデフォルト値を設定
        // https://www.amcharts.com/docs/v4/tutorials/manipulating-chart-data/
        CitySeries.events.on("beforedatavalidated", function (ev) {
          ev.target.data.forEach(
            (obj) => (obj.value = obj.value === undefined ? 0 : obj.value)
          );
        });

        // 市町村別地図: 数量データ読み込み時のエラーハンドリング
        CitySeries.dataSource.events.on("error", function () {
          // デフォルトのエラーモーダルを閉じる
          map.modal.close();
          // 日本語のエラーを表示
          map.openModal(
            `エラー: ${pref_name}の詳細データが読み込めませんでした．`,
            "エラー"
          );
          // 以前のデータを削除
          CitySeries.data.length = 0;
        });
        back.show();
      }

      // ズームアウト: 背景クリック時にズームアウト
      // 背景の種類に注意: https://github.com/amcharts/amcharts4/issues/1805
      map.seriesContainer.background.events.on("hit", function () {
        if (CitySeries.visible) {
          reset_map();
        }
      });
      map.backgroundSeries.events.on("hit", function () {
        if (CitySeries.visible) {
          reset_map();
        }
      });
    });
  },
  beforeDestroy() {
    if (this.map) {
      this.map.dispose();
    }
  },
};
</script>
<style scoped>
#chartdiv {
  width: 100%;
  height: 100%;
}
</style>