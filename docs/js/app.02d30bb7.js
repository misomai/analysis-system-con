(function(e){function t(t){for(var s,n,c=t[0],i=t[1],l=t[2],u=0,b=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&b.push(r[n][0]),r[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(s=!1)}s&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},o=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0c4e":function(e,t,a){"use strict";a("5168")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="4678"},5168:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Header"),a("v-main",[a("router-view")],1)],1)},o=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app-bar",{attrs:{dark:"",color:"primary","clipped-left":"",fixed:"",app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase white--text"},[a("span",{staticClass:"font-weight-light"},[e._v("売上解析システム")])]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{text:"",to:"/"}},[e._v("販売データCSV入力")]),a("v-btn",{attrs:{text:"",to:"/Chart"}},[e._v("グラフ")])],1)],1)],1)},c=[],i={name:"Header",data:function(){return{drawer:null,showSearchInput:!1}}},l=i,d=a("2877"),u=a("6544"),b=a.n(u),f=a("40dc"),h=a("8336"),m=a("2fa4"),v=a("2a7f"),p=Object(d["a"])(l,n,c,!1,null,null,null),k=p.exports;b()(p,{VAppBar:f["a"],VBtn:h["a"],VSpacer:m["a"],VToolbarItems:v["a"],VToolbarTitle:v["b"]});var j={name:"App",components:{Header:k},data:function(){return{}}},g=j,w=a("7496"),C=a("f6c4"),P=Object(d["a"])(g,r,o,!1,null,null,null),y=P.exports;b()(P,{VApp:w["a"],VMain:C["a"]});var x,I,T=a("8c4f"),$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab"},[a("div",{staticClass:"tab_box container"},[a("ul",{staticClass:"tab_list"},[a("li",{class:{active:"1"===e.isActive},on:{click:function(t){return e.changeTab("1")}}},[e._v(" 標準折れ線グラフ ")]),a("li",{class:{active:"2"===e.isActive},on:{click:function(t){return e.changeTab("2")}}},[e._v(" 項目ごと比較 ")]),a("li",{class:{active:"3"===e.isActive},on:{click:function(t){return e.changeTab("3")}}},[e._v(" 商品ごと比較 ")])])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"article"},[a("LineDisplay",{directives:[{name:"show",rawName:"v-show",value:"1"===e.isActive,expression:"isActive === '1'"}],staticClass:"item"}),a("ItemCompareLineDisplay",{directives:[{name:"show",rawName:"v-show",value:"2"===e.isActive,expression:"isActive === '2'"}],staticClass:"item"}),a("ProductCompareLineDisplay",{directives:[{name:"show",rawName:"v-show",value:"3"===e.isActive,expression:"isActive === '3'"}],staticClass:"item"})],1)])])},R=[],_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"9"}},[a("v-combobox",{attrs:{items:e.products,label:"商品ID",solo:"",dense:""},model:{value:e.selectProduct,callback:function(t){e.selectProduct=t},expression:"selectProduct"}})],1),a("v-col",{attrs:{cols:"1"}},[a("v-btn",{attrs:{small:"",fab:"",dark:"",color:"indigo"}},[a("v-icon",{staticClass:"justify-end",attrs:{dark:""},on:{click:e.addProductGraph}},[e._v(" mdi-plus ")])],1)],1),a("v-col",{attrs:{cols:"1"}},[a("v-btn",{attrs:{small:"",fab:"",dark:"",color:"red"}},[a("v-icon",{staticClass:"justify-end",attrs:{dark:""},on:{click:e.removeProductGraph}},[e._v(" mdi-minus ")])],1)],1)],1),a("v-text-field",{attrs:{label:"商品名",disabled:""},model:{value:e.selectProductName,callback:function(t){e.selectProductName=t},expression:"selectProductName"}}),a("LineChart",{ref:"LineChartChild",staticStyle:{position:"relative",height:"40vh"},attrs:{"chart-data":e.chartdata,options:e.options}}),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-combobox",{attrs:{"background-color":"#2ECC71",items:e.items,label:"項目",solo:"",dense:""},model:{value:e.selectItem,callback:function(t){e.selectItem=t},expression:"selectItem"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-combobox",{attrs:{"background-color":"#90CAF9",items:e.years,label:"年度",solo:"",dense:""},model:{value:e.selectYear,callback:function(t){e.selectYear=t},expression:"selectYear"}})],1)],1)],1)},O=[],D=(a("159b"),a("d3b7"),a("25f0"),a("b0c0"),a("7db0"),a("1fca")),N=D["b"].reactiveProp,Y={name:"LineChart",extends:D["a"],mixins:[N],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)},methods:{reRenderChart:function(){this.renderChart(this.chartData,this.options)}}},z=Y,S=Object(d["a"])(z,x,I,!1,null,null,null),L=S.exports,B={name:"LineDisplay",components:{LineChart:L},data:function(){return{selectYear:this.$store.getters.getSelectYear,years:["2022","2021","2020"],selectProduct:this.$store.getters.getSelectProduct,products:this.$store.getters.getProducts,selectItem:this.$store.getters.getSelectItem,selectProductName:"",items:["売上","売上件数","アクセス人数","ユニークユーザー数","転換率","客単価","レビュー評価","レビュー数","離脱率"],lineColor:["rgba(220, 20, 60, 0.8)","rgba(60, 179, 113, 0.8)","rgba(65, 105, 225, 0.8)","rgba(240, 230, 140, 0.8)","rgba(255, 182, 193, 0.8)","rgba(0, 206, 209, 0.8)","rgba(255, 140, 0, 0.8)","rgba(123, 104, 238, 0.8)"],lineColorIndex:0,options:{responsive:!0,maintainAspectRatio:!1},loaded:!1,datasets:[]}},watch:{selectProduct:function(e,t){console.log(e+t),this.selectProductName=this.findProductName(e)},selectYear:function(e,t){var a=this;console.log(e+t),this.$store.state.selectYear=e;var s=[];this.datasets.forEach((function(e){a.selectProduct=e.label,s.push({label:a.selectProduct,data:a.getGraphData(),pointBackgroundColor:"white",pointBorderColor:"#249EBF",borderColor:e.borderColor,fill:!1,type:"line",lineTension:.1})})),this.datasets=s,this.$refs.LineChartChild.reRenderChart()},selectItem:function(e,t){var a=this;console.log(e+t),this.$store.state.selectItem=e;var s=[];this.datasets.forEach((function(e){a.selectProduct=e.label,s.push({label:a.selectProduct,data:a.getGraphData(),pointBackgroundColor:"white",pointBorderColor:"#249EBF",borderColor:e.borderColor,fill:!1,type:"line",lineTension:.1})})),this.datasets=s,this.$refs.LineChartChild.reRenderChart()}},computed:{chartdata:function(){return{labels:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],datasets:this.datasets}}},methods:{addProductGraph:function(){this.chartdata.datasets.push({label:this.selectProduct,data:this.getGraphData(),pointBackgroundColor:"white",pointBorderColor:"#249EBF",borderColor:this.graphColorSetting(),fill:!1,type:"line",lineTension:.1}),this.$refs.LineChartChild.reRenderChart()},removeProductGraph:function(){this.chartdata.datasets.length>0&&(this.chartdata.datasets.pop(),this.$refs.LineChartChild.reRenderChart())},graphColorSetting:function(){var e=this.lineColor[this.lineColorIndex];return this.lineColorIndex>=this.lineColor.length-1?this.lineColorIndex=0:this.lineColorIndex++,e},getGraphData:function(){var e=this,t={2020:[0,0,0,0,0,0,0,0,0,0,0,0],2021:[0,0,0,0,0,0,0,0,0,0,0,0],2022:[0,0,0,0,0,0,0,0,0,0,0,0]},a=this.$store.getters.getRows;a.forEach((function(a){if(a.productId==e.selectProduct){var s=new Date(Date.parse(a.date)),r=s.getFullYear().toString();if(r===e.selectYear)switch(e.selectItem){case"売上":switch(s.getMonth()){case 0:t[r][0]=a.earnings;break;case 1:t[r][1]=a.earnings;break;case 2:t[r][2]=a.earnings;break;case 3:t[r][3]=a.earnings;break;case 4:t[r][4]=a.earnings;break;case 5:t[r][5]=a.earnings;break;case 6:t[r][6]=a.earnings;break;case 7:t[r][7]=a.earnings;break;case 8:t[r][8]=a.earnings;break;case 9:t[r][9]=a.earnings;break;case 10:t[r][10]=a.earnings;break;case 11:t[r][11]=a.earnings;break}break;case"売上件数":switch(s.getMonth()){case 0:t[r][0]=a.earningsTotal;break;case 1:t[r][1]=a.earningsTotal;break;case 2:t[r][2]=a.earningsTotal;break;case 3:t[r][3]=a.earningsTotal;break;case 4:t[r][4]=a.earningsTotal;break;case 5:t[r][5]=a.earningsTotal;break;case 6:t[r][6]=a.earningsTotal;break;case 7:t[r][7]=a.earningsTotal;break;case 8:t[r][8]=a.earningsTotal;break;case 9:t[r][9]=a.earningsTotal;break;case 10:t[r][10]=a.earningsTotal;break;case 11:t[r][11]=a.earningsTotal;break}break;case"アクセス人数":switch(s.getMonth()){case 0:t[r][0]=a.visitor;break;case 1:t[r][1]=a.visitor;break;case 2:t[r][2]=a.visitor;break;case 3:t[r][3]=a.visitor;break;case 4:t[r][4]=a.visitor;break;case 5:t[r][5]=a.visitor;break;case 6:t[r][6]=a.visitor;break;case 7:t[r][7]=a.visitor;break;case 8:t[r][8]=a.visitor;break;case 9:t[r][9]=a.visitor;break;case 10:t[r][10]=a.visitor;break;case 11:t[r][11]=a.visitor;break}break;case"ユニークユーザー数":switch(s.getMonth()){case 0:t[r][0]=a.uniqueUser;break;case 1:t[r][1]=a.uniqueUser;break;case 2:t[r][2]=a.uniqueUser;break;case 3:t[r][3]=a.uniqueUser;break;case 4:t[r][4]=a.uniqueUser;break;case 5:t[r][5]=a.uniqueUser;break;case 6:t[r][6]=a.uniqueUser;break;case 7:t[r][7]=a.uniqueUser;break;case 8:t[r][8]=a.uniqueUser;break;case 9:t[r][9]=a.uniqueUser;break;case 10:t[r][10]=a.uniqueUser;break;case 11:t[r][11]=a.uniqueUser;break}break;case"転換率":switch(s.getMonth()){case 0:t[r][0]=a.conversionRate;break;case 1:t[r][1]=a.conversionRate;break;case 2:t[r][2]=a.conversionRate;break;case 3:t[r][3]=a.conversionRate;break;case 4:t[r][4]=a.conversionRate;break;case 5:t[r][5]=a.conversionRate;break;case 6:t[r][6]=a.conversionRate;break;case 7:t[r][7]=a.conversionRate;break;case 8:t[r][8]=a.conversionRate;break;case 9:t[r][9]=a.conversionRate;break;case 10:t[r][10]=a.conversionRate;break;case 11:t[r][11]=a.conversionRate;break}break;case"客単価":switch(s.getMonth()){case 0:t[r][0]=a.unitPrice;break;case 1:t[r][1]=a.unitPrice;break;case 2:t[r][2]=a.unitPrice;break;case 3:t[r][3]=a.unitPrice;break;case 4:t[r][4]=a.unitPrice;break;case 5:t[r][5]=a.unitPrice;break;case 6:t[r][6]=a.unitPrice;break;case 7:t[r][7]=a.unitPrice;break;case 8:t[r][8]=a.unitPrice;break;case 9:t[r][9]=a.unitPrice;break;case 10:t[r][10]=a.unitPrice;break;case 11:t[r][11]=a.unitPrice;break}break;case"レビュー評価":switch(s.getMonth()){case 0:t[r][0]=a.reviewPoint;break;case 1:t[r][1]=a.reviewPoint;break;case 2:t[r][2]=a.reviewPoint;break;case 3:t[r][3]=a.reviewPoint;break;case 4:t[r][4]=a.reviewPoint;break;case 5:t[r][5]=a.reviewPoint;break;case 6:t[r][6]=a.reviewPoint;break;case 7:t[r][7]=a.reviewPoint;break;case 8:t[r][8]=a.reviewPoint;break;case 9:t[r][9]=a.reviewPoint;break;case 10:t[r][10]=a.reviewPoint;break;case 11:t[r][11]=a.reviewPoint;break}break;case"レビュー数":switch(s.getMonth()){case 0:t[r][0]=a.reviewTotal;break;case 1:t[r][1]=a.reviewTotal;break;case 2:t[r][2]=a.reviewTotal;break;case 3:t[r][3]=a.reviewTotal;break;case 4:t[r][4]=a.reviewTotal;break;case 5:t[r][5]=a.reviewTotal;break;case 6:t[r][6]=a.reviewTotal;break;case 7:t[r][7]=a.reviewTotal;break;case 8:t[r][8]=a.reviewTotal;break;case 9:t[r][9]=a.reviewTotal;break;case 10:t[r][10]=a.reviewTotal;break;case 11:t[r][11]=a.reviewTotal;break}break;case"離脱率":switch(s.getMonth()){case 0:t[r][0]=a.abandonmentRate;break;case 1:t[r][1]=a.abandonmentRate;break;case 2:t[r][2]=a.abandonmentRate;break;case 3:t[r][3]=a.abandonmentRate;break;case 4:t[r][4]=a.abandonmentRate;break;case 5:t[r][5]=a.abandonmentRate;break;case 6:t[r][6]=a.abandonmentRate;break;case 7:t[r][7]=a.abandonmentRate;break;case 8:t[r][8]=a.abandonmentRate;break;case 9:t[r][9]=a.abandonmentRate;break;case 10:t[r][10]=a.abandonmentRate;break;case 11:t[r][11]=a.abandonmentRate;break}break}}}));var s=t[this.selectYear];return console.log(s),t[this.selectYear]},findProductName:function(e){var t=this.$store.getters.getRows;return t.find((function(t){return t.productId==e})).name}},mounted:function(){this.loaded=!0,this.datasets.push({label:this.selectProduct,data:this.getGraphData(),pointBackgroundColor:"white",pointBorderColor:"#249EBF",borderColor:this.graphColorSetting(),fill:!1,type:"line",lineTension:.1}),this.selectProductName=this.findProductName(this.selectProduct)}},V=B,A=a("62ad"),E=a("2b5d"),M=a("132d"),F=a("0fd9"),q=a("8654"),U=Object(d["a"])(V,_,O,!1,null,null,null),G=U.exports;b()(U,{VBtn:h["a"],VCol:A["a"],VCombobox:E["a"],VIcon:M["a"],VRow:F["a"],VTextField:q["a"]});var H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-combobox",{attrs:{items:this.$store.state.products,label:"商品",solo:"",dense:""},model:{value:e.selectProduct,callback:function(t){e.selectProduct=t},expression:"selectProduct"}}),a("v-text-field",{attrs:{label:"商品名",disabled:""},model:{value:this.selectProductName,callback:function(t){e.$set(this,"selectProductName",t)},expression:"this.selectProductName"}}),a("v-combobox",{attrs:{items:e.items,label:"項目",solo:"",dense:""},model:{value:e.selectItem,callback:function(t){e.selectItem=t},expression:"selectItem"}}),a("LineChart",{staticStyle:{position:"relative",height:"40vh"},attrs:{"chart-data":e.chartdata,options:e.options}}),a("v-combobox",{attrs:{items:e.years,label:"年度",solo:"",dense:""},model:{value:e.selectYear,callback:function(t){e.selectYear=t},expression:"selectYear"}})],1)},J=[],K=a("5530"),Q=a("2f62"),W={name:"LineDisplay",components:{LineChart:L},data:function(){return{selectYear:"2021",years:["2023","2022","2021"],selectProduct:"",selectProductName:"",graphData:[0,0,0,0,0,0,0,0,0,0,0,0],selectItem:["売上"],items:["売上","売上件数","アクセス人数","ユニークユーザー数","転換率","客単価","レビュー評価","レビュー数","離脱率"],options:{responsive:!0,maintainAspectRatio:!1}}},watch:{selectProduct:function(e,t){console.log(e+t),this.$store.state.selectProduct=e;var a=this.$store.state.rows.find((function(t){return t.productId==e}));this.selectProductName=a.name},selectYear:function(e,t){console.log(e+t),this.$store.state.selectYear=e},selectItem:function(e,t){console.log(e+t),this.$store.state.selectItem=e}},computed:Object(K["a"])(Object(K["a"])({},Object(Q["b"])({salesCount:"getSalesCount"})),{},{chartdata:function(){return{labels:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],datasets:[{label:this.selectItem,data:this.$store.getters.getGraphData,pointBackgroundColor:"white",pointBorderColor:"#249EBF",borderColor:"rgba(255, 150, 150, 0.8)",fill:!1,type:"line",lineTension:.1}]}}})},X=W,Z=Object(d["a"])(X,H,J,!1,null,null,null),ee=Z.exports;b()(Z,{VCombobox:E["a"],VTextField:q["a"]});var te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-combobox",{attrs:{items:this.$store.state.products,label:"商品",solo:"",dense:""},model:{value:e.selectProduct,callback:function(t){e.selectProduct=t},expression:"selectProduct"}}),a("v-text-field",{attrs:{label:"商品名あ",disabled:""},model:{value:this.$store.state.selectProductName,callback:function(t){e.$set(this.$store.state,"selectProductName",t)},expression:"this.$store.state.selectProductName"}}),a("v-combobox",{attrs:{items:e.items,label:"項目",solo:"",dense:""},model:{value:e.selectItem,callback:function(t){e.selectItem=t},expression:"selectItem"}}),a("LineChart",{staticStyle:{position:"relative",height:"40vh"},attrs:{"chart-data":e.chartdata,options:e.options}}),a("v-combobox",{attrs:{items:e.years,label:"年度",solo:"",dense:""},model:{value:e.selectYear,callback:function(t){e.selectYear=t},expression:"selectYear"}})],1)},ae=[],se={name:"LineDisplay",components:{LineChart:L},data:function(){return{selectYear:["2021"],years:["2023","2022","2021"],selectProduct:[""],products:[""],selectItem:["売上"],items:["売上","売上件数","アクセス人数","ユニークユーザー数","転換率","客単価","レビュー評価","レビュー数","離脱率"],options:{responsive:!0,maintainAspectRatio:!1}}},watch:{selectProduct:function(e,t){console.log(e+t),this.$store.state.selectProduct=e;var a=this.$store.state.rows.find((function(t){return t.productId==e}));this.$store.state.selectProductName=a.name},selectYear:function(e,t){console.log(e+t),this.$store.state.selectYear=e},selectItem:function(e,t){console.log(e+t),this.$store.state.selectItem=e}},computed:Object(K["a"])(Object(K["a"])({},Object(Q["b"])({salesCount:"getSalesCount"})),{},{chartdata:function(){return{labels:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],datasets:[{label:this.selectItem,data:this.$store.getters.getGraphData,pointBackgroundColor:"white",pointBorderColor:"#249EBF",borderColor:"rgba(255, 150, 150, 0.8)",fill:!1,type:"line",lineTension:.1}]}}})},re=se,oe=Object(d["a"])(re,te,ae,!1,null,null,null),ne=oe.exports;b()(oe,{VCombobox:E["a"],VTextField:q["a"]});var ce={components:{LineDisplay:G,ItemCompareLineDisplay:ee,ProductCompareLineDisplay:ne},data:function(){return{isActive:"1"}},methods:{changeTab:function(e){this.isActive=e}}},ie=ce,le=(a("7f9d"),Object(d["a"])(ie,$,R,!1,null,"789f514a",null)),de=le.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"2"}}),a("v-col",{attrs:{cols:"8",justify:"center"}},[a("input",{attrs:{type:"file"},on:{change:e.loadCsvFile}}),a("p",[e._v(e._s(e.message))])])],1),a("v-row",[a("v-col",[a("table",{attrs:{border:"1"}},e._l(e.workers,(function(t,s){return a("tr",{key:s},e._l(t,(function(t,s){return a("td",{key:s},[e._v(e._s(t))])})),0)})),0),a("div",[a("div",[a("vue-good-table",{attrs:{columns:e.columns,rows:this.$store.getters.getRows,"pagination-options":{enabled:!0,perPage:30},styleClass:"vgt-table condensed"},on:{"on-cell-click":e.onCellClick}})],1)])])],1)],1)},be=[],fe=(a("fb6a"),a("ac1f"),a("1276"),a("d81d"),a("f617"));a("dac4");s["default"].use(fe["a"]);var he={name:"CsvImport",components:{},data:function(){return{message:"",workers:[],columns:[{label:"年月",field:"date",type:"date",dateInputFormat:"yyyy/MM/dd",dateOutputFormat:"yyyy/MM/dd "},{label:"商品ID",field:"id"},{label:"商品名",field:"name",filterOptions:{enabled:!0}},{label:"商品管理番号",field:"productId"},{label:"商品管理名",field:"productName"},{label:"売上",field:"earnings"},{label:"売上件数",field:"earningsTotal"},{label:"アクセス人数",field:"visitor"},{label:"ユニークユーザー数",field:"uniqueUser"},{label:"転換率",field:"conversionRate"},{label:"客単価",field:"unitPrice"},{label:"レビュー評価",field:"reviewPoint"},{label:"レビュー数",field:"reviewTotal"},{label:"離脱率",field:"abandonmentRate"}],rows:[]}},methods:{loadCsvFile:function(e){var t=this,a=this;a.workers=[],a.message="";var s=e.target.files[0],r=new FileReader;r.readAsText(s),r.onload=function(){var e=r.result.split("\n").slice(1),a=e.map((function(e){var t=e.split(",");return{date:t[0],id:t[1],name:t[2],productId:t[3],productName:t[4],earnings:t[5],earningsTotal:t[6],visitor:t[7],uniqueUser:t[8],conversionRate:t[9],unitPrice:t[10],reviewPoint:t[11],reviewTotal:t[12],abandonmentRate:t[13]}}));t.$store.commit("setRows",a)}},onCellClick:function(e){var t=this;this.$store.state.selectProduct=e.row.productId,"年月"===e.column.label||"商品ID"===e.column.label||"商品名"===e.column.label||"商品管理番号"===e.column.label||"商品管理名"===e.column.label?this.$store.state.selectItem="売上":this.$store.state.selectItem=e.column.label,this.$store.state.selectProductName=this.$store.state.rows.find((function(e){return e.productId==t.$store.state.selectProduct})).name,this.$router.push("/Chart")}}},me=he,ve=(a("0c4e"),Object(d["a"])(me,ue,be,!1,null,"25039cfc",null)),pe=ve.exports;b()(ve,{VCol:A["a"],VRow:F["a"]}),s["default"].use(T["a"]);var ke=[{path:"/",name:"Import",component:pe},{path:"/Chart",name:"Chart",component:de},{path:"/ItemCompare",name:"ItemCompare",component:ee},{path:"/ProductCompare",name:"ProductCompare",component:ne}],je=new T["a"]({mode:"history",base:"",routes:ke}),ge=je;a("4e827"),a("4de4");s["default"].use(Q["a"]);var we=new Q["a"].Store({state:{rows:[],selectYear:"2021",selectProduct:"",selectItem:"",products:[]},mutations:{setRows:function(e,t){e.rows=t;var a=e.rows.map((function(e){return e.productId}));e.products=a.filter((function(e,t,a){return a.indexOf(e)===t&&t!==a.lastIndexOf(e)})).sort()}},actions:{},modules:{},getters:{getProducts:function(e){return e.products},getRows:function(e){return e.rows},getSelectYear:function(e){return e.selectYear},getSelectProduct:function(e){return e.selectProduct},getSelectItem:function(e){return e.selectItem}}}),Ce=a("5f5b"),Pe=a("b1e0"),ye=(a("f9e3"),a("2dd8"),a("f309"));s["default"].use(ye["a"]);var xe=new ye["a"]({});s["default"].config.productionTip=!1,s["default"].use(Ce["a"]),s["default"].use(Pe["a"]),new s["default"]({router:ge,store:we,vuetify:xe,render:function(e){return e(y)}}).$mount("#app")},"7f9d":function(e,t,a){"use strict";a("aff2")},aff2:function(e,t,a){}});
//# sourceMappingURL=app.02d30bb7.js.map