(this["webpackJsonpcorona-app"]=this["webpackJsonpcorona-app"]||[]).push([[0],{149:function(e,t,a){e.exports=a(162)},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),o=a(73),i=a.n(o),s=(a(154),a(142)),c=a(38),l=a(191),d=a(190),u=a(188),p=a(136),m=a.n(p),h=a(189),v=a(94),f=a.n(v),b=a(124),g=a(62),w=a(56),x=a(135);a(155);g.e(x.a);var E=function(){return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(f.a.mark((function e(){var t,a,n,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,(n=a.statewise.map((function(e){return{state:e.state,active:e.active}}))).shift(),(r=g.c("pieChartDiv",w.d)).data=n,(o=r.series.push(new w.e)).dataFields.value="active",o.dataFields.category="state",r.innerRadius=g.d(40),o.slices.template.stroke=g.b("#fff"),o.slices.template.strokeWidth=2,o.slices.template.strokeOpacity=1,o.labels.template.disabled=!0,o.ticks.template.disabled=!0,o.slices.template.states.getKey("hover").properties.shiftRadius=0,o.slices.template.states.getKey("hover").properties.scale=1.1,r.legend=new w.c;case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",null,r.a.createElement("div",{id:"pieChartDiv"}))},y=a(143);a(156);g.e(x.a),g.e(y.a);var j=function(){return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(f.a.mark((function e(){var t,a,n,r,o,i,s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,(n=a.statewise.map((function(e){return{state:e.state,active:e.active,confirmed:e.confirmed,recovered:e.recovered,deaths:e.deaths}}))).shift(),(r=g.c("barChartDiv",w.g)).data=n,(o=r.xAxes.push(new w.a)).dataFields.category="state",o.title.text="State covid cases",o.renderer.grid.template.location=0,r.yAxes.push(new w.f).title.text="Active Cases",(i=r.series.push(new w.b)).dataFields.valueY="active",i.dataFields.categoryX="state",i.name="Active",i.tooltipText="{name}: [bold]{valueY}[/]",(s=r.series.push(new w.b)).dataFields.valueY="recovered",s.dataFields.categoryX="state",s.name="Recovered",s.tooltipText="{name}: [bold]{valueY}[/]",(c=r.series.push(new w.b)).dataFields.valueY="deaths",c.dataFields.categoryX="state",c.name="Deaths",c.tooltipText="{name}: [bold]{valueY}[/]",c.stacked=!0,r.cursor=new w.h,r.legend=new w.c,r.scrollbarX=new g.a,r.scrollbarY=new g.a;case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",null,r.a.createElement("div",{id:"barChartDiv"}))},k=Object(c.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(l.a),C=Object(c.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(d.a);Object(c.a)((function(e){return{root:{padding:e.spacing(2)}}}))(u.a);function O(){var e=r.a.useState("panel1"),t=Object(s.a)(e,2),a=t[0],n=t[1],o=function(e){return function(t,a){n(!!a&&e)}};return r.a.createElement("div",null,r.a.createElement(k,{square:!0,expanded:"panel1"===a,onChange:o("panel1")},r.a.createElement(C,{expandIcon:r.a.createElement(m.a,null),"aria-controls":"panel1d-content",id:"panel1d-header"},r.a.createElement(h.a,null,"Covid19 Cases in India Overview")),r.a.createElement(E,null)),r.a.createElement(k,{square:!0,expanded:"panel2"===a,onChange:o("panel2")},r.a.createElement(C,{expandIcon:r.a.createElement(m.a,null),"aria-controls":"panel2d-content",id:"panel2d-header"},r.a.createElement(h.a,null,"State wise data")),r.a.createElement(j,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[149,1,4]]]);
//# sourceMappingURL=main.a17a443a.chunk.js.map