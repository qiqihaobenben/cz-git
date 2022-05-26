"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[892],{1044:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i={key:"v-47357bdb",path:"/zh/guide/",title:"简介",lang:"zh-CN",frontmatter:{title:"简介",sidebarDepth:0,lastUpdated:!0,sitemap:{priority:.8}},excerpt:"",headers:[{level:2,title:"介绍",slug:"介绍",children:[]},{level:2,title:"特点",slug:"特点",children:[]},{level:2,title:"使用 cz-git 的项目",slug:"使用-cz-git-的项目",children:[]},{level:2,title:"版权",slug:"版权",children:[]}],git:{updatedTime:1653534299e3,contributors:[{name:"Zhengqbbb",email:"1074059947@qq.com",commits:1}]},filePathRelative:"zh/guide/README.md"}},8689:(e,t,n)=>{n.r(t),n.d(t,{default:()=>X});var i=n(7208);const a=(0,i.uE)('<p align="center"><a target="_blank" href="https://github.com/Zhengqbbb/cz-git"><img src="https://user-images.githubusercontent.com/40693636/154064210-964aeaa0-d9dc-4cea-9e52-2ffc3789611b.png" alt="cz-git-logo" width="400" data-width="400" data-height="400"></a></p><h1 align="center">cz-git</h1><p align="center"><a target="_blank" href="https://github.com/commitizen/cz-cli#adapters"><img style="display:inline-block;margin:0.2em;" alt="Commitizen-Adapter" src="https://img.shields.io/badge/Commitizen-Adapter-red.svg?logo=git&amp;style=flat"></a><br><a target="_blank" href="http://commitizen.github.io/cz-cli/"><img style="display:inline-block;margin:0.2em;" alt="commitizen-friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?logo=github"></a><a target="_blank" href="https://github.com/Zhengqbbb/cz-git"><img style="display:inline-block;margin:0.2em;" alt="GitHub Repo stars" src="https://img.shields.io/github/stars/zhengqbbb/cz-git?style=social"></a><a target="_blank" href="https://github.com/Zhengqbbb/cz-git/actions/workflows/nodejs.yml"><img style="display:inline-block;margin:0.2em;" alt="test-ci" src="https://github.com/Zhengqbbb/cz-git/workflows/Node.js CI/badge.svg"></a><br><a href="https://www.npmjs.com/package/cz-git"><img style="display:inline-block;margin:0.2em;" alt="npm" src="https://img.shields.io/npm/v/cz-git?style=flat-square&amp;logo=npm"><img style="display:inline-block;margin:0.2em;" alt="npm-download" src="https://img.shields.io/npm/dt/cz-git.svg?style=flat-square&amp;logo=npm"></a><br></p><p align="center"><a href="https://github.com/Zhengqbbb/cz-git">Github</a>   |   <a href="https://cz-git.qbenben.com/guide/getting-started.html">Installation</a>   |   <a href="https://cz-git.qbenben.com">Website</a>   |   <a href="https://cz-git.qbenben.com/zh/">简体中文文档</a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>',5),l=(0,i.Uk)("一款工程性更强，轻量级，高度自定义，标准输出格式的 "),r={href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"},s=(0,i.Uk)("commitizen"),o=(0,i.Uk)(" 适配器"),g=(0,i._)("p",null,[(0,i._)("img",{src:"https://tva3.sinaimg.cn/large/6ccee0e1gy1gztghb579ig21nm0k8dnw.gif",alt:"demo-gif"})],-1),h=(0,i._)("blockquote",null,[(0,i._)("p",null,[(0,i.Uk)("什么是commitizen：基于Node.js的 "),(0,i._)("code",null,"git commit"),(0,i.Uk)(" 命令行工具，辅助生成标准化规范化的 commit message。"),(0,i._)("br"),(0,i._)("br"),(0,i.Uk)(" 什么是适配器：更换 commitizen 命令行工具的 "),(0,i._)("strong",null,"交互方式"),(0,i.Uk)(" 插件。")])],-1),c=(0,i._)("h2",{id:"特点",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#特点","aria-hidden":"true"},"#"),(0,i.Uk)(" 特点")],-1),m=(0,i._)("li",null,[(0,i.Uk)("友好型命令行工具，"),(0,i._)("strong",null,"“懒字优先”"),(0,i.Uk)(" ！支持在命令行搜索和选择，减少拼写错误。")],-1),p=(0,i._)("strong",null,"轻量级",-1),u=(0,i.Uk)("，"),b=(0,i._)("strong",null,"高度自定义",-1),d=(0,i.Uk)(", 但输出格式遵循标准的 "),k={href:"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits",target:"_blank",rel:"noopener noreferrer"},_=(0,i.Uk)("Angular commit"),f=(0,i.Uk)(" 规范。"),z=(0,i.Uk)("更好维护 monorepo 工程化项目"),U=(0,i.Uk)(" 与 "),y=(0,i._)("strong",null,"commitlint",-1),v=(0,i.Uk)(" 配合给予命令行的相关校验信息。"),q=(0,i.Uk)("更好的与issue链接，尤其 "),w=(0,i.Uk)("gitee"),W=(0,i.Uk)(" | ✅ 支持在 commit 中添加 "),Z=(0,i._)("strong",null,"emoji",-1),x=(0,i.Uk)("。"),C=(0,i.uE)('<div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> -D cz-git\n+ cz-git          <span class="token punctuation">(</span><span class="token number">1.8</span> MB<span class="token punctuation">)</span>\nadded <span class="token number">1</span> package <span class="token keyword">in</span> <span class="token number">0</span>.47s\n</code></pre></div>',1),E=(0,i.Uk)("⇒ 为什么是 cz-git"),j={href:"https://www.qbenben.com/post/2022/02/27/cz-git/",target:"_blank",rel:"noopener noreferrer"},R=(0,i.Uk)("⇒ 为什么做了这款插件：cz-git 友好型 commitizen 的适配器，我的开发的心路历程"),D=(0,i._)("h2",{id:"使用-cz-git-的项目",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#使用-cz-git-的项目","aria-hidden":"true"},"#"),(0,i.Uk)(" 使用 cz-git 的项目")],-1),I={href:"https://github.com/Tencent/tdesign-vue-next",target:"_blank",rel:"noopener noreferrer"},A=(0,i.Uk)("tdesign-vue-next"),L={href:"https://github.com/buqiyuan/vue3-antd-admin",target:"_blank",rel:"noopener noreferrer"},M=(0,i.Uk)("vue3-antd-admin"),N={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope",target:"_blank",rel:"noopener noreferrer"},T=(0,i.Uk)("vuepress-theme-hope"),G={href:"https://github.com/Renovamen/vuepress-theme-gungnir",target:"_blank",rel:"noopener noreferrer"},H=(0,i.Uk)("vuepress-theme-gungnir"),P=(0,i._)("h2",{id:"版权",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#版权","aria-hidden":"true"},"#"),(0,i.Uk)(" 版权")],-1),B=(0,i.Uk)("MIT Copyright (c) 2022-present Qiubin Zheng "),O=(0,i._)("a",{href:"mailto:zhengqbbb@gmail.com"},"zhengqbbb@gmail.com",-1),Q=(0,i.Uk)(),S={href:"https://github.com/Zhengqbbb",target:"_blank",rel:"noopener noreferrer"},V=(0,i.Uk)("https://github.com/Zhengqbbb"),Y=(0,i.Uk)("I just do my best to make thing well, Could you give a "),$={href:"https://github.com/Zhengqbbb/cz-git",target:"_blank",rel:"noopener noreferrer"},F=(0,i.Uk)("star ⭐"),J=(0,i.Uk)(" to encourage me ?"),K={},X=(0,n(3243).Z)(K,[["render",function(e,t){const n=(0,i.up)("ExternalLinkIcon"),K=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[l,(0,i._)("a",r,[s,(0,i.Wm)(n)]),o]),g,h,c,(0,i._)("ul",null,[m,(0,i._)("li",null,[p,u,b,d,(0,i._)("a",k,[_,(0,i.Wm)(n)]),f]),(0,i._)("li",null,[(0,i.Wm)(K,{to:"/zh/guide/recipes.html#scopes"},{default:(0,i.w5)((()=>[z])),_:1}),U,y,v]),(0,i._)("li",null,[q,(0,i.Wm)(K,{to:"/zh/guide/recipes.html#issueprefixs"},{default:(0,i.w5)((()=>[w])),_:1}),W,Z,x])]),C,(0,i._)("p",null,[(0,i.Wm)(K,{to:"/zh/guide/why.html"},{default:(0,i.w5)((()=>[E])),_:1})]),(0,i._)("p",null,[(0,i._)("a",j,[R,(0,i.Wm)(n)])]),D,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",I,[A,(0,i.Wm)(n)])]),(0,i._)("li",null,[(0,i._)("a",L,[M,(0,i.Wm)(n)])]),(0,i._)("li",null,[(0,i._)("a",N,[T,(0,i.Wm)(n)])]),(0,i._)("li",null,[(0,i._)("a",G,[H,(0,i.Wm)(n)])])]),P,(0,i._)("p",null,[B,O,Q,(0,i._)("a",S,[V,(0,i.Wm)(n)])]),(0,i._)("blockquote",null,[(0,i._)("p",null,[Y,(0,i._)("a",$,[F,(0,i.Wm)(n)]),J])])],64)}]])}}]);