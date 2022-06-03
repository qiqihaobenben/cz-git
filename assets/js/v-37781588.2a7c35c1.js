"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[654],{5561:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-37781588",path:"/zh/guide/getting-started.html",title:"快速开始",lang:"zh-CN",frontmatter:{title:"快速开始",sidebarDepth:1,lastUpdated:!0,sitemap:{priority:.8}},excerpt:"",headers:[{level:2,title:"项目中使用",slug:"项目中使用",children:[]},{level:2,title:"全局使用",slug:"全局使用",children:[]}],git:{updatedTime:165425864e4,contributors:[{name:"zhengqbbb",email:"40693636+Zhengqbbb@users.noreply.github.com",commits:1}]},filePathRelative:"zh/guide/getting-started.md"}},4073:(n,s,a)=>{a.r(s),a.d(s,{default:()=>A});var t=a(7208);const e=(0,t.uE)('<h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h1><h2 id="项目中使用" tabindex="-1"><a class="header-anchor" href="#项目中使用" aria-hidden="true">#</a> 项目中使用</h2><blockquote><p>只需要简单的三个步骤:</p></blockquote><div class="custom-container tip"><p class="custom-container-title">提示</p><p><a href="#%E5%85%A8%E5%B1%80%E4%BD%BF%E7%94%A8">全局安装</a> <code>commitizen</code>,如此一来可以快速使用 <code>cz</code> 或 <code>git cz</code> 命令进行启动。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g commitizen\n</code></pre></div></div><h4 id="step-1-下载依赖" tabindex="-1"><a class="header-anchor" href="#step-1-下载依赖" aria-hidden="true">#</a> step 1: 下载依赖</h4>',5),o=(0,t._)("div",{class:"language-bash ext-sh"},[(0,t._)("pre",{class:"language-bash"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"npm"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"install"),(0,t.Uk)(" -D cz-git\n")])])],-1),p=(0,t._)("div",{class:"language-bash ext-sh"},[(0,t._)("pre",{class:"language-bash"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"yarn"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"add"),(0,t.Uk)(" -D cz-git\n")])])],-1),c=(0,t._)("div",{class:"language-bash ext-sh"},[(0,t._)("pre",{class:"language-bash"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"pnpm"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"install"),(0,t.Uk)(" -D cz-git\n")])])],-1),l=(0,t.uE)('<h4 id="step-2-修改-package-json-添加-config-指定使用的适配器" tabindex="-1"><a class="header-anchor" href="#step-2-修改-package-json-添加-config-指定使用的适配器" aria-hidden="true">#</a> step 2: 修改 <code>package.json</code> 添加 <code>config</code> 指定使用的适配器</h4><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/cz-git&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div></div><h4 id="step-3-添加自定义配置-可选-使用默认" tabindex="-1"><a class="header-anchor" href="#step-3-添加自定义配置-可选-使用默认" aria-hidden="true">#</a> step 3: 添加自定义配置(可选，使用默认)</h4><blockquote><p>有<mark>两种</mark>配置方式</p></blockquote>',4),i=(0,t.Uk)("方式一: (推荐) cz-git 与 "),r={href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("commitlint"),d=(0,t.Uk)(" 进行联动给予校验信息"),h=(0,t.Uk)("，所以可以编写于 "),k={href:"https://github.com/conventional-changelog/commitlint#config",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("commitlint"),m=(0,t.Uk)(" 配置文件之中。"),b=(0,t._)("br",null,null,-1),v=(0,t.Uk)("例如: ("),f=(0,t.Uk)("⇒ 配置模板"),q=(0,t.Uk)(")"),_=(0,t.uE)('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .commitlintrc.js</span>\n<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;cz-git&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UserConfig<span class="token punctuation">}</span></span> */</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">rule</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">prompt</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token comment">//option...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div></div><p><strong>方式二:</strong> 在 <strong>package.json</strong> 下 config.commitizen 下添加自定义配置，但过量的配置项会导致 package.json 臃肿，适合简单自定义。例如:</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git cz&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/cz-git&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;useEmoji&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br></div></div><h2 id="全局使用" tabindex="-1"><a class="header-anchor" href="#全局使用" aria-hidden="true">#</a> 全局使用</h2><blockquote><p>全局安装的好处在于：在任何项目下都可以利用 <code>cz</code> 或 <code>git cz</code> 命令启动命令行工具，生成标准化 commit message</p></blockquote><p>只需要简单的三个步骤：</p><h4 id="step-1-下载全局依赖" tabindex="-1"><a class="header-anchor" href="#step-1-下载全局依赖" aria-hidden="true">#</a> step 1: 下载全局依赖</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g cz-git commitizen\n</code></pre></div><h4 id="step-2-全局配置适配器类型" tabindex="-1"><a class="header-anchor" href="#step-2-全局配置适配器类型" aria-hidden="true">#</a> step 2: 全局配置适配器类型</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;{ &quot;path&quot;: &quot;cz-git&quot; }&#39;</span> <span class="token operator">&gt;</span> ~/.czrc\n</code></pre></div><h4 id="step-3-添加自定义配置-可选-使用默认配置" tabindex="-1"><a class="header-anchor" href="#step-3-添加自定义配置-可选-使用默认配置" aria-hidden="true">#</a> step 3: 添加自定义配置(可选，使用默认配置)</h4><blockquote><p>有 <mark>两种</mark> 配置方式 <br></p></blockquote><p><strong>方式一:</strong> 编辑 <code>~/.czrc</code> 文件以 <mark>json</mark> 形式添加配置, 例如:</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cz-git&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;useEmoji&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br></div></div>',14),z=(0,t.Uk)("方式二: 与 "),y={href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},U=(0,t.Uk)("commitlint"),j=(0,t.Uk)(" 配合"),x=(0,t.Uk)("，在 "),E=(0,t._)("code",null,"$HOME",-1),w=(0,t.Uk)(" 路径下创建配置文件 "),W=(0,t._)("br",null,null,-1),C=(0,t.Uk)("("),D=(0,t.Uk)("↓ 配置模板"),N=(0,t.Uk)(")"),P={},A=(0,a(3243).Z)(P,[["render",function(n,s){const a=(0,t.up)("CodeGroupItem"),P=(0,t.up)("CodeGroup"),A=(0,t.up)("ExternalLinkIcon"),B=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t.Wm)(P,null,{default:(0,t.w5)((()=>[(0,t.Wm)(a,{title:"NPM"},{default:(0,t.w5)((()=>[o])),_:1}),(0,t.Wm)(a,{title:"YARN"},{default:(0,t.w5)((()=>[p])),_:1}),(0,t.Wm)(a,{title:"PNPM"},{default:(0,t.w5)((()=>[c])),_:1})])),_:1}),l,(0,t._)("p",null,[(0,t._)("strong",null,[i,(0,t._)("a",r,[u,(0,t.Wm)(A)]),d]),h,(0,t._)("a",k,[g,(0,t.Wm)(A)]),m,b,v,(0,t.Wm)(B,{to:"/zh/guide/configuration.html"},{default:(0,t.w5)((()=>[f])),_:1}),q]),_,(0,t._)("p",null,[(0,t._)("strong",null,[z,(0,t._)("a",y,[U,(0,t.Wm)(A)]),j]),x,E,w,W,C,(0,t.Wm)(B,{to:"/zh/guide/configuration.html"},{default:(0,t.w5)((()=>[D])),_:1}),N])])}]])}}]);