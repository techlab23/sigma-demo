(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){var content=n(156);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("436c8b4c",content,!0,{sourceMap:!1})},103:function(e,t,n){var content=n(158);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("6bdae85e",content,!0,{sourceMap:!1})},112:function(e,t,n){"use strict";n(17);var r=n(2),o=n(111);var c={data:function(){return{t:0,ssr:!1,diff:"",coldStart:"",responseTime:"",generateTime:""}},mounted:function(){var e=this;this.t=window.__NUXT__.renderedOn,this.ssr=window.__NUXT__.serverRendered,this.update(),this._timer=setInterval((function(){return e.update()}),1e3),this.$router.beforeEach((function(t,n,r){e.ssr=!1,clearInterval(e._timer),r()})),this.bench().catch(console.error)},methods:{update:function(){var e,t,n;this.diff=(e=this.t,t=new Date-e,(n=Math.round(t/1e3))>10?Object(o.a)(e):n<1?"just now":n+" seconds ago")},bench:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Date.now(),t.next=3,fetch(location.href+"?"+Math.random());case 3:return r=t.sent,e.coldStart=r.headers.get("x-nuxt-coldstart")||"",e.generateTime=r.headers.get("x-nuxt-responsetime")||"",t.next=8,r.text();case 8:e.responseTime=Date.now()-n+" ms";case 9:case"end":return t.stop()}}),t)})))()},reload:function(){window.location.reload()}},head:{title:"Nuxt Serverless Demo",meta:[{name:"viewport",content:"width=device-width, initial-scale=1"}]}},l=(n(155),n(157),n(30)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"nav"},[n("nLink",{attrs:{to:"/"}},[e._v("\n      Home\n    ")]),e._v(" "),n("nLink",{attrs:{to:"/about"}},[e._v("\n      About\n    ")]),e._v(" "),n("nLink",{attrs:{to:"/dynamic/1"}},[e._v("\n      Dynamic\n    ")]),e._v("\n    |\n    "),n("a",{attrs:{href:"https://github.com/nuxt/serverless-demo",target:"_blank",rel:"noopener"}},[e._v("Github")])],1),e._v(" "),n("nuxt",{staticClass:"main"}),e._v(" "),n("footer",[n("div",{staticClass:"nav"},[n("a",{attrs:{href:"https://nuxt-serverless.vercel.app",rel:"noreferrer"}},[e._v("Vercel")]),e._v(" "),n("a",{attrs:{href:"https://nuxt-serverless.netlify.app",rel:"noreferrer"}},[e._v("Netlify")]),e._v(" "),n("a",{attrs:{href:"https://serverless-demo.nuxt.workers.dev",rel:"noreferrer"}},[e._v("Cloudflare")]),e._v(" "),n("a",{attrs:{href:"https://nuxt.github.io/serverless-demo"}},[e._v("Github Pages (Service Worker)")]),e._v(" "),n("a",{attrs:{href:""},on:{click:e.reload}},[e._v("(Reload)")])]),e._v(" "),n("div",{staticClass:"perf"},[e.ssr?[e._v("\n        Server Side Rendered "),n("b",[e._v(e._s(e.diff))]),e._v(" "),e.coldStart?[e._v("\n          | Cold Start: "),n("b",[e._v(e._s(e.coldStart))])]:e._e(),e._v(" "),e.generateTime?[e._v("\n          | Generate Time: "),n("b",[e._v(e._s(e.generateTime))])]:e._e(),e._v(" "),e.responseTime?[e._v("\n          | Response Time: "),n("b",[e._v(e._s(e.responseTime)+" ")])]:e._e()]:[e._v("\n        Client Side Rendered\n      ")]],2)])],1)}),[],!1,null,"62bb007f",null);t.a=component.exports},113:function(e,t,n){e.exports=n(114)},155:function(e,t,n){"use strict";n(102)},156:function(e,t,n){(t=n(44)(!1)).push([e.i,".container[data-v-62bb007f]{display:flex;align-items:center;flex-direction:column;min-height:90vh;height:90vh;justify-content:center}.nav a[data-v-62bb007f]{padding:10px}.nav[data-v-62bb007f]{margin:10px}.nav[data-v-62bb007f],.perf[data-v-62bb007f]{text-align:center}.perf[data-v-62bb007f]{position:absolute;padding:10px;bottom:0;left:0;right:0;color:#adff2f;background:rgba(0,0,0,.5)}.main[data-v-62bb007f]{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}",""]),e.exports=t},157:function(e,t,n){"use strict";n(103)},158:function(e,t,n){(t=n(44)(!1)).push([e.i,'body{margin:0;background:#2f495e;color:#fff;font-family:Quicksand,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}.page-enter-active,.page-leave-active{transition:opacity .1s}.page-enter,.page-leave-to{opacity:0}a{color:#fff}',""]),e.exports=t}},[[113,5,1,6]]]);