(function(e){function t(t){for(var s,o,c=t[0],i=t[1],l=t[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);b&&b(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var b=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3260:function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Header"),a("v-main",[a("router-view")],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app-bar",{attrs:{dark:"",color:"primary","clipped-left":"",fixed:"",app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase white--text"},[a("span",{staticClass:"font-weight-light"},[e._v("売上解析システム")])]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{text:"",to:"/"}},[e._v("販売データCSV入力")]),a("v-btn",{attrs:{text:"",to:"/Chart"}},[e._v("グラフ")])],1)],1)],1)},c=[],i={name:"Header",data:function(){return{drawer:null,showSearchInput:!1}}},l=i,b=a("2877"),u=a("6544"),d=a.n(u),f=a("40dc"),m=a("8336"),v=a("2fa4"),p=a("2a7f"),h=Object(b["a"])(l,o,c,!1,null,null,null),k=h.exports;d()(h,{VAppBar:f["a"],VBtn:m["a"],VSpacer:v["a"],VToolbarItems:p["a"],VToolbarTitle:p["b"]});var j={name:"App",components:{Header:k},data:function(){return{}}},g=j,w=a("7496"),P=a("f6c4"),y=Object(b["a"])(g,r,n,!1,null,null,null),x=y.exports;d()(y,{VApp:w["a"],VMain:P["a"]});var C,T,I=a("8c4f"),$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab"},[a("div",{staticClass:"tab_box container"},[a("ul",{staticClass:"tab_list"},[a("li",{class:{active:"1"===e.isActive},on:{click:function(t){return e.changeTab("1")}}},[e._v(" 標準折れ線グラフ ")]),a("li",{class:{active:"2"===e.isActive},on:{click:function(t){return e.changeTab("2")}}},[e._v(" 項目ごと比較 ")]),a("li",{class:{active:"3"===e.isActive},on:{click:function(t){return e.changeTab("3")}}},[e._v(" 商品ごと比較 ")])])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"article"},[a("LineDisplay",{directives:[{name:"show",rawName:"v-show",value:"1"===e.isActive,expression:"isActive === '1'"}],staticClass:"item"}),a("ItemCompareLineDisplay",{directives:[{name:"show",rawName:"v-show",value:"2"===e.isActive,expression:"isActive === '2'"}],staticClass:"item"}),a("ProductCompareLineDisplay",{directives:[{name:"show",rawName:"v-show",value:"3"===e.isActive,expression:"isActive === '3'"}],staticClass:"item"})],1)])])},R=[],_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-combobox",{attrs:{items:this.$store.state.products,label:"商品",solo:"",dense:""},model:{value:e.selectProduct,callback:function(t){e.selectProduct=t},expression:"selectProduct"}}),a("v-text-field",{attrs:{label:"商品名",disabled:""},model:{value:this.$store.state.selectProductName,callback:function(t){e.$set(this.$store.state,"selectProductName",t)},expression:"this.$store.state.selectProductName"}}),a("v-combobox",{attrs:{items:e.items,label:"項目",solo:"",dense:""},model:{value:e.selectItem,callback:function(t){e.selectItem=t},expression:"selectItem"}}),a("LineChart",{staticStyle:{position:"relative",height:"40vh"},attrs:{"chart-data":e.chartdata,options:e.options}}),a("v-combobox",{attrs:{items:e.years,label:"年度",solo:"",dense:""},model:{value:e.selectYear,callback:function(t){e.selectYear=t},expression:"selectYear"}})],1)},O=[],z=(a("7db0"),a("b0c0"),a("1fca")),Y=z["b"].reactiveProp,D={name:"LineChart",extends:z["a"],mixins:[Y],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},N=D,A=Object(b["a"])(N,C,T,!1,null,null,null),M=A.exports,L={name:"LineDisplay",components:{LineChart:M},data:function(){return{selectYear:["2021"],years:["2023","2022","2021"],selectProduct:this.$store.state.selectProduct,products:[""],selectItem:this.$store.state.selectItem,items:["売上","売上件数","アクセス人数","ユニークユーザー数","転換率","客単価","レビュー評価","レビュー数","離脱率"],options:{responsive:!0,maintainAspectRatio:!1}}},watch:{selectProduct:function(e,t){console.log(e+t),this.$store.state.selectProduct=e;var a=this.$store.state.rows.find((function(t){return t.productId==e}));this.$store.state.selectProductName=a.name},selectYear:function(e,t){console.log(e+t),this.$store.state.selectYear=e},selectItem:function(e,t){console.log(e+t),this.$store.state.selectItem=e}},computed:{chartdata:function(){return{labels:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],datasets:[{label:this.selectItem,data:this.$store.getters.getGraphData,pointBackgroundColor:"white",pointBorderColor:"#249EBF",borderColor:"rgba(255, 150, 150, 0.8)",fill:!1,type:"line",lineTension:.1}]}}}},q=L,U=a("2b5d"),V=a("8654"),S=Object(b["a"])(q,_,O,!1,null,null,null),E=S.exports;d()(S,{VCombobox:U["a"],VTextField:V["a"]});var F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-combobox",{attrs:{items:this.$store.state.products,label:"商品",solo:"",dense:""},model:{value:e.selectProduct,callback:function(t){e.selectProduct=t},expression:"selectProduct"}}),a("v-text-field",{attrs:{label:"商品名",disabled:""},model:{value:this.selectProductName,callback:function(t){e.$set(this,"selectProductName",t)},expression:"this.selectProductName"}}),a("v-combobox",{attrs:{items:e.items,label:"項目",solo:"",dense:""},model:{value:e.selectItem,callback:function(t){e.selectItem=t},expression:"selectItem"}}),a("LineChart",{staticStyle:{position:"relative",height:"40vh"},attrs:{"chart-data":e.chartdata,options:e.options}}),a("v-combobox",{attrs:{items:e.years,label:"年度",solo:"",dense:""},model:{value:e.selectYear,callback:function(t){e.selectYear=t},expression:"selectYear"}})],1)},B=[],G=a("5530"),H=a("2f62"),J={name:"LineDisplay",components:{LineChart:M},data:function(){return{selectYear:"2021",years:["2023","2022","2021"],selectProduct:"",selectProductName:"",graphData:[0,0,0,0,0,0,0,0,0,0,0,0],selectItem:["売上"],items:["売上","売上件数","アクセス人数","ユニークユーザー数","転換率","客単価","レビュー評価","レビュー数","離脱率"],options:{responsive:!0,maintainAspectRatio:!1}}},watch:{selectProduct:function(e,t){console.log(e+t),this.$store.state.selectProduct=e;var a=this.$store.state.rows.find((function(t){return t.productId==e}));this.selectProductName=a.name},selectYear:function(e,t){console.log(e+t),this.$store.state.selectYear=e},selectItem:function(e,t){console.log(e+t),this.$store.state.selectItem=e}},computed:Object(G["a"])(Object(G["a"])({},Object(H["b"])({salesCount:"getSalesCount"})),{},{chartdata:function(){return{labels:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],datasets:[{label:this.selectItem,data:this.$store.getters.getGraphData,pointBackgroundColor:"white",pointBorderColor:"#249EBF",borderColor:"rgba(255, 150, 150, 0.8)",fill:!1,type:"line",lineTension:.1}]}}})},K=J,Q=Object(b["a"])(K,F,B,!1,null,null,null),W=Q.exports;d()(Q,{VCombobox:U["a"],VTextField:V["a"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-combobox",{attrs:{items:this.$store.state.products,label:"商品",solo:"",dense:""},model:{value:e.selectProduct,callback:function(t){e.selectProduct=t},expression:"selectProduct"}}),a("v-text-field",{attrs:{label:"商品名あ",disabled:""},model:{value:this.$store.state.selectProductName,callback:function(t){e.$set(this.$store.state,"selectProductName",t)},expression:"this.$store.state.selectProductName"}}),a("v-combobox",{attrs:{items:e.items,label:"項目",solo:"",dense:""},model:{value:e.selectItem,callback:function(t){e.selectItem=t},expression:"selectItem"}}),a("LineChart",{staticStyle:{position:"relative",height:"40vh"},attrs:{"chart-data":e.chartdata,options:e.options}}),a("v-combobox",{attrs:{items:e.years,label:"年度",solo:"",dense:""},model:{value:e.selectYear,callback:function(t){e.selectYear=t},expression:"selectYear"}})],1)},Z=[],ee={name:"LineDisplay",components:{LineChart:M},data:function(){return{selectYear:["2021"],years:["2023","2022","2021"],selectProduct:[""],products:[""],selectItem:["売上"],items:["売上","売上件数","アクセス人数","ユニークユーザー数","転換率","客単価","レビュー評価","レビュー数","離脱率"],options:{responsive:!0,maintainAspectRatio:!1}}},watch:{selectProduct:function(e,t){console.log(e+t),this.$store.state.selectProduct=e;var a=this.$store.state.rows.find((function(t){return t.productId==e}));this.$store.state.selectProductName=a.name},selectYear:function(e,t){console.log(e+t),this.$store.state.selectYear=e},selectItem:function(e,t){console.log(e+t),this.$store.state.selectItem=e}},computed:Object(G["a"])(Object(G["a"])({},Object(H["b"])({salesCount:"getSalesCount"})),{},{chartdata:function(){return{labels:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],datasets:[{label:this.selectItem,data:this.$store.getters.getGraphData,pointBackgroundColor:"white",pointBorderColor:"#249EBF",borderColor:"rgba(255, 150, 150, 0.8)",fill:!1,type:"line",lineTension:.1}]}}})},te=ee,ae=Object(b["a"])(te,X,Z,!1,null,null,null),se=ae.exports;d()(ae,{VCombobox:U["a"],VTextField:V["a"]});var re={components:{LineDisplay:E,ItemCompareLineDisplay:W,ProductCompareLineDisplay:se},data:function(){return{isActive:"1"}},methods:{changeTab:function(e){this.isActive=e}}},ne=re,oe=(a("7f9d"),Object(b["a"])(ne,$,R,!1,null,"789f514a",null)),ce=oe.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"2"}}),a("v-col",{attrs:{cols:"8",justify:"center"}},[a("input",{attrs:{type:"file"},on:{change:e.loadCsvFile}}),a("p",[e._v(e._s(e.message))])])],1),a("v-row",[a("v-col",[a("table",{attrs:{border:"1"}},e._l(e.workers,(function(t,s){return a("tr",{key:s},e._l(t,(function(t,s){return a("td",{key:s},[e._v(e._s(t))])})),0)})),0),a("div",[a("div",[a("vue-good-table",{attrs:{columns:e.columns,rows:this.$store.getters.getRows,"pagination-options":{enabled:!0,perPage:30},styleClass:"vgt-table condensed"},on:{"on-cell-click":e.onCellClick}})],1)])])],1)],1)},le=[],be=(a("fb6a"),a("ac1f"),a("1276"),a("d81d"),a("f617"));a("dac4");s["default"].use(be["a"]);var ue={name:"CsvImport",components:{},data:function(){return{message:"",workers:[],columns:[{label:"年月",field:"date",type:"date",dateInputFormat:"yyyy/MM/dd",dateOutputFormat:"yyyy-MM-dd ",filterOptions:{enabled:!0}},{label:"商品ID",field:"id"},{label:"商品名",field:"name",filterOptions:{enabled:!0}},{label:"商品管理番号",field:"productId"},{label:"商品管理名",field:"productName"},{label:"売上",field:"earnings"},{label:"売上件数",field:"earningsTotal"},{label:"アクセス人数",field:"visitor"},{label:"ユニークユーザー数",field:"uniqueUser"},{label:"転換率",field:"conversionRate"},{label:"客単価",field:"unitPrice"},{label:"レビュー評価",field:"reviewPoint"},{label:"レビュー数",field:"reviewTotal"},{label:"離脱率",field:"abandonmentRate"}],rows:[]}},methods:{loadCsvFile:function(e){var t=this,a=this;a.workers=[],a.message="";var s=e.target.files[0],r=new FileReader;r.readAsText(s),r.onload=function(){var e=r.result.split("\n").slice(1),a=e.map((function(e){var t=e.split(",");return{date:t[0],id:t[1],name:t[2],productId:t[3],productName:t[4],earnings:t[5],earningsTotal:t[6],visitor:t[7],uniqueUser:t[8],conversionRate:t[9],unitPrice:t[10],reviewPoint:t[11],reviewTotal:t[12],abandonmentRate:t[13]}}));t.$store.commit("setRows",a)}},onCellClick:function(e){var t=e.row;console.log(t),this.$store.state.selectProduct=e.row.productId,this.$store.state.selectItem=e.column.label,this.$router.push("/Chart")}}},de=ue,fe=(a("8ef6"),a("62ad")),me=a("0fd9"),ve=Object(b["a"])(de,ie,le,!1,null,"85c3b4e0",null),pe=ve.exports;d()(ve,{VCol:fe["a"],VRow:me["a"]}),s["default"].use(I["a"]);var he=[{path:"/",name:"Import",component:pe},{path:"/Chart",name:"Chart",component:ce},{path:"/ItemCompare",name:"ItemCompare",component:W},{path:"/ProductCompare",name:"ProductCompare",component:se}],ke=new I["a"]({mode:"history",base:"",routes:he}),je=ke;a("4e827"),a("4de4"),a("159b");s["default"].use(H["a"]);var ge=new H["a"].Store({state:{rows:[],selectYear:"2021",selectProduct:"",selectProductName:"",selectItem:"",products:[]},mutations:{setRows:function(e,t){e.rows=t;var a=e.rows.map((function(e){return e.productId}));e.products=a.filter((function(e,t,a){return a.indexOf(e)===t&&t!==a.lastIndexOf(e)})).sort()}},actions:{},modules:{},getters:{getRows:function(e){return e.rows},getGraphData:function(e){var t=[0,0,0,0,0,0,0,0,0,0,0,0];return e.rows.forEach((function(a){if(a.productId==e.selectProduct){var s=new Date(Date.parse(a.date));if(s.getFullYear()==e.selectYear)switch(e.selectItem){case"売上":switch(s.getMonth()){case 0:t[0]=a.earnings;break;case 1:t[1]=a.earnings;break;case 2:t[2]=a.earnings;break;case 3:t[3]=a.earnings;break;case 4:t[4]=a.earnings;break;case 5:t[5]=a.earnings;break;case 6:t[6]=a.earnings;break;case 7:t[7]=a.earnings;break;case 8:t[8]=a.earnings;break;case 9:t[9]=a.earnings;break;case 10:t[10]=a.earnings;break;case 11:t[11]=a.earnings;break}break;case"売上件数":switch(s.getMonth()){case 0:t[0]=a.earningsTotal;break;case 1:t[1]=a.earningsTotal;break;case 2:t[2]=a.earningsTotal;break;case 3:t[3]=a.earningsTotal;break;case 4:t[4]=a.earningsTotal;break;case 5:t[5]=a.earningsTotal;break;case 6:t[6]=a.earningsTotal;break;case 7:t[7]=a.earningsTotal;break;case 8:t[8]=a.earningsTotal;break;case 9:t[9]=a.earningsTotal;break;case 10:t[10]=a.earningsTotal;break;case 11:t[11]=a.earningsTotal;break}break;case"アクセス人数":switch(s.getMonth()){case 0:t[0]=a.visitor;break;case 1:t[1]=a.visitor;break;case 2:t[2]=a.visitor;break;case 3:t[3]=a.visitor;break;case 4:t[4]=a.visitor;break;case 5:t[5]=a.visitor;break;case 6:t[6]=a.visitor;break;case 7:t[7]=a.visitor;break;case 8:t[8]=a.visitor;break;case 9:t[9]=a.visitor;break;case 10:t[10]=a.visitor;break;case 11:t[11]=a.visitor;break}break;case"ユニークユーザー数":switch(s.getMonth()){case 0:t[0]=a.uniqueUser;break;case 1:t[1]=a.uniqueUser;break;case 2:t[2]=a.uniqueUser;break;case 3:t[3]=a.uniqueUser;break;case 4:t[4]=a.uniqueUser;break;case 5:t[5]=a.uniqueUser;break;case 6:t[6]=a.uniqueUser;break;case 7:t[7]=a.uniqueUser;break;case 8:t[8]=a.uniqueUser;break;case 9:t[9]=a.uniqueUser;break;case 10:t[10]=a.uniqueUser;break;case 11:t[11]=a.uniqueUser;break}break;case"転換率":switch(s.getMonth()){case 0:t[0]=a.conversionRate;break;case 1:t[1]=a.conversionRate;break;case 2:t[2]=a.conversionRate;break;case 3:t[3]=a.conversionRate;break;case 4:t[4]=a.conversionRate;break;case 5:t[5]=a.conversionRate;break;case 6:t[6]=a.conversionRate;break;case 7:t[7]=a.conversionRate;break;case 8:t[8]=a.conversionRate;break;case 9:t[9]=a.conversionRate;break;case 10:t[10]=a.conversionRate;break;case 11:t[11]=a.conversionRate;break}break;case"客単価":switch(s.getMonth()){case 0:t[0]=a.unitPrice;break;case 1:t[1]=a.unitPrice;break;case 2:t[2]=a.unitPrice;break;case 3:t[3]=a.unitPrice;break;case 4:t[4]=a.unitPrice;break;case 5:t[5]=a.unitPrice;break;case 6:t[6]=a.unitPrice;break;case 7:t[7]=a.unitPrice;break;case 8:t[8]=a.unitPrice;break;case 9:t[9]=a.unitPrice;break;case 10:t[10]=a.unitPrice;break;case 11:t[11]=a.unitPrice;break}break;case"レビュー評価":switch(s.getMonth()){case 0:t[0]=a.reviewPoint;break;case 1:t[1]=a.reviewPoint;break;case 2:t[2]=a.reviewPoint;break;case 3:t[3]=a.reviewPoint;break;case 4:t[4]=a.reviewPoint;break;case 5:t[5]=a.reviewPoint;break;case 6:t[6]=a.reviewPoint;break;case 7:t[7]=a.reviewPoint;break;case 8:t[8]=a.reviewPoint;break;case 9:t[9]=a.reviewPoint;break;case 10:t[10]=a.reviewPoint;break;case 11:t[11]=a.reviewPoint;break}break;case"レビュー数":switch(s.getMonth()){case 0:t[0]=a.reviewTotal;break;case 1:t[1]=a.reviewTotal;break;case 2:t[2]=a.reviewTotal;break;case 3:t[3]=a.reviewTotal;break;case 4:t[4]=a.reviewTotal;break;case 5:t[5]=a.reviewTotal;break;case 6:t[6]=a.reviewTotal;break;case 7:t[7]=a.reviewTotal;break;case 8:t[8]=a.reviewTotal;break;case 9:t[9]=a.reviewTotal;break;case 10:t[10]=a.reviewTotal;break;case 11:t[11]=a.reviewTotal;break}break;case"離脱率":switch(s.getMonth()){case 0:t[0]=a.abandonmentRate;break;case 1:t[1]=a.abandonmentRate;break;case 2:t[2]=a.abandonmentRate;break;case 3:t[3]=a.abandonmentRate;break;case 4:t[4]=a.abandonmentRate;break;case 5:t[5]=a.abandonmentRate;break;case 6:t[6]=a.abandonmentRate;break;case 7:t[7]=a.abandonmentRate;break;case 8:t[8]=a.abandonmentRate;break;case 9:t[9]=a.abandonmentRate;break;case 10:t[10]=a.abandonmentRate;break;case 11:t[11]=a.abandonmentRate;break}break}}})),t},getYearSalesCount:function(e){var t=[0,0,0,0];return e.rows.forEach((function(a){var s=new Date(Date.parse(a.orderDate));if(s.getFullYear()==e.selectYear)switch(a.store){case"LP":t[0]++;break;case"Amazon":t[1]++;break;case"銀行振込":t[2]++;break;case"次世代":t[3]++;break}})),t}}}),we=a("5f5b"),Pe=a("b1e0"),ye=(a("f9e3"),a("2dd8"),a("f309"));s["default"].use(ye["a"]);var xe=new ye["a"]({});s["default"].config.productionTip=!1,s["default"].use(we["a"]),s["default"].use(Pe["a"]),new s["default"]({router:je,store:ge,vuetify:xe,render:function(e){return e(x)}}).$mount("#app")},"7f9d":function(e,t,a){"use strict";a("aff2")},"8ef6":function(e,t,a){"use strict";a("3260")},aff2:function(e,t,a){}});
//# sourceMappingURL=app.12191f87.js.map