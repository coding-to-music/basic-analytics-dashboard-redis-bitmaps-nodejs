(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3cb4"],{"0460":function(t,e,c){"use strict";c.r(e);var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("base-collection-card",{attrs:{title:"Customers who bought Product1 and Product2",subtitle:"(anytime)",data:t.customers,loading:t.loading}})},r=[],a=c("3835"),o=c("1da1"),u=c("5530"),s=(c("96cf"),c("d3b7"),c("3ca3"),c("ddb0"),c("2f62")),i={components:{baseCollectionCard:function(){return c.e("chunk-d4c7e4a2").then(c.bind(null,"4cc5"))}},data:function(){return{customers:[],loading:!1}},computed:Object(u["a"])({},Object(s["c"])({refreshSignal:"refreshSignal"})),watch:{refreshSignal:function(){this.fetchProductsData()}},created:function(){this.fetchProductsData()},methods:Object(u["a"])(Object(u["a"])({},Object(s["b"])({fetchProducts:"fetchProducts"})),{},{fetchProductsData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var c,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.fetchProducts({filter:{products:[]},and:JSON.stringify(["product1","product2"]),period:"anytime"});case 3:c=e.sent,n=Object(a["a"])(c,1),r=n[0],t.customers=r.boughtBy,t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}})},d=i,l=c("2877"),f=Object(l["a"])(d,n,r,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0a3cb4.0a490a8d.js.map