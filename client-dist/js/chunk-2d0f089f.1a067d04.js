(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f089f"],{"9d97":function(t,e,c){"use strict";c.r(e);var r=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("base-collection-card",{attrs:{title:"Customers who bought only",data:t.customers,loading:t.loading}},[c("v-select",{attrs:{items:t.values,"item-text":"text","item-value":"value",label:"Product",outlined:""},model:{value:t.product,callback:function(e){t.product=e},expression:"product"}})],1)},u=[],n=(c("d3b7"),c("3835")),o=(c("96cf"),c("1da1")),a=c("5530"),s=c("2f62"),d={components:{baseCollectionCard:function(){return c.e("chunk-d4c7e4a2").then(c.bind(null,"4cc5"))}},data:function(){return{customers:[],product:"product1",values:[{text:"Product1",value:"product1"},{text:"Product2",value:"product2"},{text:"Product3",value:"product3"}],loading:!1}},computed:Object(a["a"])({},Object(s["c"])({refreshSignal:"refreshSignal"})),watch:{product:function(){this.fetchProductsData()},refreshSignal:function(){this.fetchProductsData()}},created:function(){this.fetchProductsData()},methods:Object(a["a"])(Object(a["a"])({},Object(s["b"])({fetchProducts:"fetchProducts"})),{},{fetchProductsData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var c,r,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.fetchProducts({filter:{products:[t.product]}});case 3:c=e.sent,r=Object(n["a"])(c,1),u=r[0],t.customers=u.boughtBy,t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}})},l=d,i=c("2877"),f=c("6544"),h=c.n(f),p=c("b974"),b=Object(i["a"])(l,r,u,!1,null,null,null);e["default"]=b.exports;h()(b,{VSelect:p["a"]})}}]);
//# sourceMappingURL=chunk-2d0f089f.1a067d04.js.map