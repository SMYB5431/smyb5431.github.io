if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let n={};const d=e=>c(e,a),b={module:{uri:a},exports:n,require:d};i[a]=Promise.all(s.map((e=>b[e]||d(e)))).then((e=>(r(...e),n)))}}define(["./workbox-a69a5c93"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/custom.css",revision:"741819c9d37a6a7d09169c0d16359715"},{url:"css/imgloaded.css",revision:"d0a2e3b44bb2a7ac0c5638f5be8ca154"},{url:"css/index.css",revision:"34af832b74b7703d2e1f33c64584c414"},{url:"css/project.css",revision:"ea91c838356452f09d3dbf32f21af3e9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"86f05bf87e73e9ea26b2904d62b59c15"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/imgloaded.js",revision:"9aefd9feda5e6dce8b8f97a28644e38a"},{url:"js/jquery.min.js",revision:"e985ca1e4eef799ad82495ed52651091"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/project.js",revision:"eac2e94a125d5fccd61be717cc649fa8"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/txmap.js",revision:"b29ff1b38405de6d1755802583b78e2e"},{url:"js/utils.js",revision:"ff1698bf9acd5e31d3ec6daaab816ee0"},{url:"js/waterfall.min.js",revision:"e3ba9351101c8014b462bcc055fb6a44"},{url:"anzhiyu/random.js",revision:"72c6c4c1a4b1460d4b15a690974c10a6"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/chatgpt.ico",revision:"e025e49e2fac46fd7ec9c2e71c6d9340"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/gemini.ico",revision:"4c440719decb751933d26475ff2f03eb"},{url:"img/img.ico",revision:"c91d428238272935b388a6f5298ecdb1"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"img/三木羽冰-上班中-blue.svg",revision:"7cfdace2b60a06d3f04d82fed2409e26"},{url:"img/三木羽冰-下班中-blue.svg",revision:"09c88698b1381fbe29bf2e467b052b03"},{url:"/",revision:"index-20240131145432437"},{url:"music/",revision:"music-20240131145432437"},{url:"about/",revision:"about-20240131145432437"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
