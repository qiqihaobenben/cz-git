"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[892],{1044:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n={key:"v-47357bdb",path:"/zh/guide/",title:"简介",lang:"zh-CN",frontmatter:{title:"简介",sidebarDepth:0,lastUpdated:!0,sitemap:{priority:.8}},excerpt:"",headers:[{level:2,title:"介绍",slug:"介绍",children:[]},{level:2,title:"特点",slug:"特点",children:[]},{level:2,title:"使用 cz-git 的项目",slug:"使用-cz-git-的项目",children:[]},{level:2,title:"版权",slug:"版权",children:[]}],git:{updatedTime:165425864e4,contributors:[{name:"zhengqbbb",email:"40693636+Zhengqbbb@users.noreply.github.com",commits:1}]},filePathRelative:"zh/guide/README.md"}},2408:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var n=i(7208);const a=(0,n.uE)('<p align="center"><a target="_blank" href="https://github.com/Zhengqbbb/cz-git"><img src="https://user-images.githubusercontent.com/40693636/154064210-964aeaa0-d9dc-4cea-9e52-2ffc3789611b.png" alt="cz-git-logo" width="400" data-width="400" data-height="400"></a></p><h1 align="center">cz-git</h1><p align="center"><a target="_blank" href="https://github.com/commitizen/cz-cli#adapters"><img style="display:inline-block;margin:0.2em;" alt="Commitizen-Adapter" src="https://img.shields.io/badge/Commitizen-Adapter-red.svg?logo=git&amp;style=flat"></a><br><a target="_blank" href="http://commitizen.github.io/cz-cli/"><img style="display:inline-block;margin:0.2em;" alt="commitizen-friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?logo=github"></a><a target="_blank" href="https://github.com/Zhengqbbb/cz-git"><img style="display:inline-block;margin:0.2em;" alt="GitHub Repo stars" src="https://img.shields.io/github/stars/zhengqbbb/cz-git?style=social"></a><a target="_blank" href="https://github.com/Zhengqbbb/cz-git/actions/workflows/nodejs.yml"><img style="display:inline-block;margin:0.2em;" alt="test-ci" src="https://github.com/Zhengqbbb/cz-git/workflows/Node.js CI/badge.svg"></a><br><a href="https://www.npmjs.com/package/cz-git"><img style="display:inline-block;margin:0.2em;" alt="npm" src="https://img.shields.io/npm/v/cz-git?style=flat-square&amp;logo=npm"><img style="display:inline-block;margin:0.2em;" alt="npm-download" src="https://img.shields.io/npm/dt/cz-git.svg?style=flat-square&amp;logo=npm"></a><br></p><p align="center"><a href="https://github.com/Zhengqbbb/cz-git">Github</a>   |   <a href="https://cz-git.qbenben.com/guide/getting-started.html">Installation</a>   |   <a href="https://cz-git.qbenben.com">Website</a>   |   <a href="https://cz-git.qbenben.com/zh/">简体中文文档</a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>',5),s=(0,n.Uk)("一款工程性更强，轻量级，高度自定义，标准输出格式的 "),l={href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"},r=(0,n.Uk)("commitizen"),g=(0,n.Uk)(" 适配器"),h=(0,n._)("p",null,[(0,n._)("img",{src:"https://user-images.githubusercontent.com/40693636/154906217-e0b1c5d0-9294-4072-8082-c0cdd9392023.gif",alt:"demo-gif"})],-1),c=(0,n._)("blockquote",null,[(0,n._)("p",null,[(0,n.Uk)("什么是commitizen：基于Node.js的 "),(0,n._)("code",null,"git commit"),(0,n.Uk)(" 命令行工具，辅助生成标准化规范化的 commit message。"),(0,n._)("br"),(0,n._)("br"),(0,n.Uk)(" 什么是适配器：更换 commitizen 命令行工具的 "),(0,n._)("strong",null,"交互方式"),(0,n.Uk)(" 插件。")])],-1),o=(0,n._)("h2",{id:"特点",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#特点","aria-hidden":"true"},"#"),(0,n.Uk)(" 特点")],-1),b=(0,n._)("li",null,[(0,n.Uk)("友好型命令行工具，"),(0,n._)("strong",null,"“懒字优先”"),(0,n.Uk)(" ！支持在命令行搜索和选择，减少拼写错误。")],-1),m=(0,n._)("strong",null,"轻量级",-1),u=(0,n.Uk)("，"),p=(0,n._)("strong",null,"高度自定义",-1),d=(0,n.Uk)(", 但输出格式遵循标准的 "),_={href:"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits",target:"_blank",rel:"noopener noreferrer"},k=(0,n.Uk)("Angular commit"),f=(0,n.Uk)(" 规范。"),z=(0,n.Uk)("更好维护 monorepo 工程化项目"),y=(0,n.Uk)(" 与 "),w=(0,n._)("strong",null,"commitlint",-1),U=(0,n.Uk)(" 配合给予命令行的相关校验信息。"),x=(0,n.Uk)("更好的与issue链接，尤其 "),v=(0,n.Uk)("gitee"),q=(0,n.Uk)(" | ✅ 支持在 commit 中添加 "),Z=(0,n._)("strong",null,"emoji",-1),E=(0,n.Uk)("。"),W=(0,n.uE)('<div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> -D cz-git\n+ cz-git          <span class="token punctuation">(</span><span class="token number">1.7</span> MB<span class="token punctuation">)</span>\nadded <span class="token number">1</span> package <span class="token keyword">in</span> <span class="token number">0</span>.461s\n</code></pre></div>',1),A=(0,n.Uk)("⇒ 为什么是 cz-git"),C={href:"https://www.qbenben.com/post/2022/02/27/cz-git/",target:"_blank",rel:"noopener noreferrer"},D=(0,n.Uk)("⇒ 为什么做了这款插件：cz-git 友好型 commitizen 的适配器，我的开发的心路历程"),j=(0,n._)("h2",{id:"使用-cz-git-的项目",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#使用-cz-git-的项目","aria-hidden":"true"},"#"),(0,n.Uk)(" 使用 cz-git 的项目")],-1),I=(0,n._)("table",null,[(0,n._)("tr",{"border-collapse":"inherit",style:{border:"inherit"}},[(0,n._)("td",{align:"center",width:"200px"},[(0,n._)("a",{target:"_blank",href:"https://github.com/Tencent/tdesign-vue-next"},[(0,n._)("img",{src:"https://user-images.githubusercontent.com/40693636/170830562-38e4c998-9af4-4303-9270-4f14e0942b08.png",style:{width:"40px"}}),(0,n._)("br"),(0,n._)("sub",null,"TDesign-Vue-Next")])]),(0,n._)("td",{align:"center",width:"200px"},[(0,n._)("a",{target:"_blank",href:"https://github.com/IDuxFE/idux"},[(0,n._)("img",{src:"https://user-images.githubusercontent.com/40693636/171067486-56f50e23-a40b-4353-9c99-6fef702c9b4b.png",style:{width:"40px"}}),(0,n._)("br"),(0,n._)("sub",null,"iDux")])])]),(0,n._)("tr",{"border-collapse":"inherit",style:{border:"inherit"}},[(0,n._)("td",{align:"center",width:"200px"},[(0,n._)("a",{target:"_blank",href:"https://github.com/buqiyuan/vue3-antd-admin"},[(0,n._)("img",{src:"https://user-images.githubusercontent.com/40693636/170830597-31d6f0d7-2c93-491b-a984-7bf21db8f75b.png",style:{width:"40px"}}),(0,n._)("br"),(0,n._)("sub",null,"Vue3-Antd-Admin")])]),(0,n._)("td",{align:"center",width:"200px"},[(0,n._)("a",{target:"_blank",href:"https://github.com/HalseySpicy/Geeker-Admin"},[(0,n._)("img",{src:"https://user-images.githubusercontent.com/40693636/170830842-319d83ce-df67-488d-b08f-818947a5a540.png",style:{width:"40px"}}),(0,n._)("br"),(0,n._)("sub",null,"Geeker-Admin")])])]),(0,n._)("tr",{"border-collapse":"inherit",style:{border:"inherit"}},[(0,n._)("td",{align:"center",width:"200px"},[(0,n._)("a",{target:"_blank",href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope"},[(0,n._)("img",{src:"https://user-images.githubusercontent.com/40693636/170830621-45577c1d-6e6e-4916-bb43-15af954d994b.png",style:{width:"40px"}}),(0,n._)("br"),(0,n._)("sub",null,"vuepress-theme-hope")])]),(0,n._)("td",{align:"center",width:"200px"},[(0,n._)("a",{target:"_blank",href:"https://github.com/Renovamen/vuepress-theme-gungnir"},[(0,n._)("img",{src:"https://user-images.githubusercontent.com/40693636/170830637-0d465b52-6204-4bbd-872f-fb6f27f1ed50.png",style:{width:"40px"}}),(0,n._)("br"),(0,n._)("sub",null,"vuepress-theme-gungnir")])])])],-1),R=(0,n._)("h2",{id:"版权",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#版权","aria-hidden":"true"},"#"),(0,n.Uk)(" 版权")],-1),G=(0,n.Uk)("MIT Copyright (c) 2022-present Qiubin Zheng "),N=(0,n._)("a",{href:"mailto:zhengqbbb@gmail.com"},"zhengqbbb@gmail.com",-1),T=(0,n.Uk)(),L={href:"https://github.com/Zhengqbbb",target:"_blank",rel:"noopener noreferrer"},M=(0,n.Uk)("https://github.com/Zhengqbbb"),V=(0,n.Uk)("I just do my best to make thing well, Could you give a "),H={href:"https://github.com/Zhengqbbb/cz-git",target:"_blank",rel:"noopener noreferrer"},P=(0,n.Uk)("star ⭐"),S=(0,n.Uk)(" to encourage me ?"),B={},F=(0,i(3243).Z)(B,[["render",function(e,t){const i=(0,n.up)("ExternalLinkIcon"),B=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[a,(0,n._)("p",null,[s,(0,n._)("a",l,[r,(0,n.Wm)(i)]),g]),h,c,o,(0,n._)("ul",null,[b,(0,n._)("li",null,[m,u,p,d,(0,n._)("a",_,[k,(0,n.Wm)(i)]),f]),(0,n._)("li",null,[(0,n.Wm)(B,{to:"/zh/guide/recipes.html#scopes"},{default:(0,n.w5)((()=>[z])),_:1}),y,w,U]),(0,n._)("li",null,[x,(0,n.Wm)(B,{to:"/zh/guide/recipes.html#issueprefixs"},{default:(0,n.w5)((()=>[v])),_:1}),q,Z,E])]),W,(0,n._)("p",null,[(0,n.Wm)(B,{to:"/zh/guide/why.html"},{default:(0,n.w5)((()=>[A])),_:1})]),(0,n._)("p",null,[(0,n._)("a",C,[D,(0,n.Wm)(i)])]),j,I,R,(0,n._)("p",null,[G,N,T,(0,n._)("a",L,[M,(0,n.Wm)(i)])]),(0,n._)("blockquote",null,[(0,n._)("p",null,[V,(0,n._)("a",H,[P,(0,n.Wm)(i)]),S])])])}]])}}]);