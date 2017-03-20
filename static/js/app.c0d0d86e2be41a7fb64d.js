webpackJsonp([1,2],{159:function(t,e,n){"use strict";e.a={blogTitle:"Hello World",favicon:null,repo:"jiangyixin/blog-article",path:"articles",branch:"master"}},160:function(t,e,n){"use strict";var r=n(157),a=n.n(r),o=n(155),s=n.n(o),i=n(60),c=n.n(i),u=n(159),l={get:function(t){return!!window.sessionStorage&&JSON.parse(window.sessionStorage.getItem(t))},set:function(t,e){return!!window.sessionStorage&&(window.sessionStorage.setItem(t,s()(e)),!0)},has:function(t){return Boolean(window.sessionStorage&&window.sessionStorage.hasOwnProperty(t))}},d=function(t){return t.replace(/\.md$/,"").replace(/^\d{4}-\d{1,2}-\d{1,2}-/,"")},f=function(t){return/^\d{4}-\d{1,2}-\d{1,2}/.exec(t)[0]};e.a={getArticles:function(){if(l.has("list"))return a.a.resolve(l.get("list"));var t="https://api.github.com/repos/"+u.a.repo+"/contents/"+u.a.path+"?ref=master";return c.a.get(t).then(function(t){return t.data},function(t){console.log(t)}).then(function(t){var e=t.map(function(t){var e=t.name,n=t.sha,r=t.size;return{title:d(e),date:f(e),sha:n,size:r}});return l.set("list",e),e})},getArticleDetail:function(t,e){var n=(t.commit,{headers:{Accept:"application/vnd.github.v3.raw"}}),r="article."+e;if(l.has(r))return a.a.resolve(l.get(r));var o="https://api.github.com/repos/"+u.a.repo+"/git/blobs/"+e;return c.a.get(o,n).then(function(t){return t.data}).then(function(t){return l.set(r,t),t})}}},161:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="GET_TITLE"},162:function(t,e,n){"use strict";var r=n(158),a=n.n(r),o=n(161);e.a=a()({},o.a,function(t){return t.replace(/\.md$/,"").replace(/^\d{4}-\d{1,2}-\d{1,2}-/,"")})},163:function(t,e,n){"use strict";var r=n(170),a=n.n(r),o=n(171),s=n.n(o),i=new a.a.Renderer;i.heading=function(t,e){return"<h"+e+' id="'+t.replace(/<(?:.|\n)*?>/gm,"").toLowerCase().replace(/[\s\n\t]+/g,"-")+'">'+t+"</h"+e+">"},i.code=function(t,e){var n=s.a.highlight(t,s.a.languages[e]||s.a.languages.javascript);return'<pre><code class="lang-'+escape(e,!0)+'">'+n+"</code></pre>"},a.a.setOptions({renderer:i,breaks:!0,gfm:!0}),e.a=a.a},164:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(82),a=n.n(r),o=n(81),s=n.n(o);e.default={name:"app",components:{"my-header":a.a,"my-footer":s.a}}},165:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{thisYear:(new Date).getFullYear()}}}},166:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{name:"hello world",keyword:""}},computed:{isShow:function(){return"list"===this.$route.name}},methods:{resetSearch:function(){this.keyword="",this.$refs.searchBar.blur()},selectSearchText:function(){this.$refs.searchBar.select()},wait:function(){this.keyword?this.$router.push({name:"list",query:{keyword:this.keyword}}):this.$router.push({name:"list"})}},watch:{keyword:function(){this.wait()}}}},167:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(154),a=n.n(r),o=n(16),s=n(169),i=n.n(s),c=n(163);e.default={name:"article",data:function(){return{title:"",date:null,content:""}},computed:{htmlFromMarkdown:function(){return n.i(c.a)(this.content)}},created:function(){this.loadArticle()},methods:{loadArticle:function(){var t=this,e=this.$route.params.hash;this.$store.dispatch("getArticleDetail",e).then(function(e){var n=i()(e);t.title=n.attributes.title,t.date=n.attributes.date.toLocaleDateString(),t.content=n.body,window.document.title=""+t.title}).catch(function(e){console.error(e),t.$router.replace("/")})},newTab:function(){o.a.nextTick(function(){var t=a()(document.querySelectorAll("a")),e=window.location.host;t.forEach(function(t){t.href&&t.host!==e&&(t.target="_blank",t.rel="noopener noreferrer")})})}},watch:{htmlFromMarkdown:"newTab"}}},168:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"articles",data:function(){return{lists:null}},computed:{articles:function(){var t=(this.$route.query.keyword||"").toLowerCase();return this.$store.state.list.filter(function(e){return e.title.toLowerCase().indexOf(t)!==-1}).sort(function(t,e){return new Date(e.date)-new Date(t.date)})}},created:function(){this.loadList()},methods:{loadList:function(){var t=this;this.$store.dispatch("getArticles").then(function(e){t.$store.state.list=e}).catch(function(t){console.log(t)})}},watch:{$route:"loadList"}}},172:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16),a=n(57),o=n.n(a),s=n(58),i=n(59);r.a.config.productionTip=!0,new r.a({el:"#app",router:s.a,store:i.a,template:"<App/>",components:{App:o.a}})},57:function(t,e,n){n(92);var r=n(11)(n(164),n(86),null,null);t.exports=r.exports},58:function(t,e,n){"use strict";var r=n(16),a=n(97),o=n(84),s=n.n(o),i=n(83),c=n.n(i);r.a.use(a.a),e.a=new a.a({mode:"history",base:"/blog/",routes:[{path:"/",name:"list",component:s.a},{path:"/list",name:"list",component:s.a},{path:"/article/:hash",name:"article",component:c.a}],scrollBehavior:function(t,e,n){if(n)return n}})},59:function(t,e,n){"use strict";var r=n(16),a=n(96),o=n(162),s=n(160);r.a.use(a.a);var i={name:"Jyx",date:"2017/03/15",list:[]};e.a=new a.a.Store({state:i,mutations:o.a,actions:s.a})},81:function(t,e,n){n(93);var r=n(11)(n(165),n(87),"data-v-5e4b74f1",null);t.exports=r.exports},82:function(t,e,n){n(94);var r=n(11)(n(166),n(88),"data-v-7f7dd8e3",null);t.exports=r.exports},83:function(t,e,n){n(91);var r=n(11)(n(167),n(85),"data-v-0ae242b0",null);t.exports=r.exports},84:function(t,e,n){n(95);var r=n(11)(n(168),n(89),"data-v-bb2e3f48",null);t.exports=r.exports},85:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"post-view"},[t.content?t._e():n("div",[t._v("loading..")]),t._v(" "),n("h1",{staticClass:"post-title"},[t._v("\n    "+t._s(t.title)+"\n    "),n("time",{staticClass:"post-date"},[t._v(t._s(t.date))])]),t._v(" "),t.content?n("article",{domProps:{innerHTML:t._s(t.htmlFromMarkdown)}}):t._e()])},staticRenderFns:[]}},86:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("my-header"),t._v(" "),n("router-view"),t._v(" "),n("my-footer")],1)},staticRenderFns:[]}},87:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[t._v("\n  Copyright © "+t._s(t.thisYear)+" | Powered by "),n("a",{attrs:{href:"https://github.com/jiangyixin/vue-blog",target:"_blank"}},[t._v("vue-blog")])])},staticRenderFns:[]}},88:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("router-link",{staticClass:"router-link-active",attrs:{to:"/"}},[t._v(t._s(t.name))]),t._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"},{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],ref:"searchBar",staticClass:"search-bar",attrs:{type:"search",placeholder:"Search..."},domProps:{value:t.keyword},on:{click:t.selectSearchText,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.resetSearch(e)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}})],1)},staticRenderFns:[]}},89:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"list-view"},[t.articles?t._e():n("div",[t._v("loading...")]),t._v(" "),t.articles?n("ul",{staticClass:"list"},t._l(t.articles,function(e,r){return n("li",{staticClass:"list-item"},[n("router-link",{staticClass:"item-title",attrs:{to:{name:"article",params:{hash:e.sha}}}},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),n("br"),t._v(" "),n("time",{staticClass:"item-date"},[t._v(t._s(e.date))])],1)})):t._e()])},staticRenderFns:[]}},91:function(t,e){},92:function(t,e){},93:function(t,e){},94:function(t,e){},95:function(t,e){}},[172]);
//# sourceMappingURL=app.c0d0d86e2be41a7fb64d.js.map