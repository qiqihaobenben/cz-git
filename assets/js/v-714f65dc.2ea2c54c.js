"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[724],{346:(e,t,s)=>{s.r(t),s.d(t,{data:()=>o});const o={key:"v-714f65dc",path:"/zh/guide/options-show.html",title:"显示相关",lang:"zh-CN",frontmatter:{title:"显示相关",sidebarDepth:1,lastUpdated:!0,sitemap:{priority:.6}},excerpt:"",headers:[{level:2,title:"messages",slug:"messages",children:[]},{level:2,title:"themeColorCode",slug:"themecolorcode",children:[]},{level:2,title:"types",slug:"types",children:[]},{level:2,title:"typesAppend",slug:"typesappend",children:[]},{level:2,title:"useEmoji",slug:"useemoji",children:[]},{level:2,title:"customScopesAlign",slug:"customscopesalign",children:[]},{level:2,title:"customScopesAlias",slug:"customscopesalias",children:[]},{level:2,title:"emptyScopesAlias",slug:"emptyscopesalias",children:[]},{level:2,title:"customIssuePrefixsAlign",slug:"customissueprefixsalign",children:[]},{level:2,title:"customIssuePrefixsAlias",slug:"customissueprefixsalias",children:[]},{level:2,title:"emptyIssuePrefixsAlias",slug:"emptyissueprefixsalias",children:[]},{level:2,title:"confirmColorize",slug:"confirmcolorize",children:[]},{level:2,title:"defaultScope",slug:"defaultscope",children:[]},{level:2,title:"defaultSubject",slug:"defaultsubject",children:[]},{level:2,title:"defaultBody",slug:"defaultbody",children:[]},{level:2,title:"defaultIssues",slug:"defaultissues",children:[]}],git:{updatedTime:1653244402e3,contributors:[{name:"Zhengqbbb",email:"1074059947@qq.com",commits:1}]},filePathRelative:"zh/guide/options-show.md"}},7694:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Z});var o=s(7208);const l=(0,o.uE)('<h1 id="配置-显示相关" tabindex="-1"><a class="header-anchor" href="#配置-显示相关" aria-hidden="true">#</a> 配置 - 显示相关</h1><h2 id="messages" tabindex="-1"><a class="header-anchor" href="#messages" aria-hidden="true">#</a> messages</h2><ul><li><strong>描述</strong> : 自定义命令行提问信息</li><li><strong>例子</strong> : <br><code>messages: { type: &quot;type: &quot;选择你的提交类型:&quot; }</code></li></ul><h2 id="themecolorcode" tabindex="-1"><a class="header-anchor" href="#themecolorcode" aria-hidden="true">#</a> themeColorCode</h2>',4),r=(0,o._)("li",null,[(0,o._)("strong",null,"描述"),(0,o.Uk)(" : set prompt inquirer theme color")],-1),i=(0,o._)("li",null,[(0,o._)("strong",null,"类型"),(0,o.Uk)(" : "),(0,o._)("code",null,"string")],-1),n=(0,o._)("li",null,[(0,o._)("strong",null,"默认"),(0,o.Uk)(" : "),(0,o._)("code",null,'""'),(0,o.Uk)(" (⇒ cyan 青色)")],-1),a=(0,o._)("strong",null,"规则",-1),c=(0,o.Uk)(": "),u=(0,o._)("code",null,"38;5;${color_code}",-1),d=(0,o._)("br",null,null,-1),g=(0,o.Uk)(" ⇒ "),h=(0,o._)("code",null,"color_code",-1),p=(0,o.Uk)(" 可以通过链接查看获取 "),m={href:"https://github.com/sindresorhus/xterm-colors",target:"_blank",rel:"noopener noreferrer"},f=(0,o.Uk)("https://github.com/sindresorhus/xterm-colors"),b=(0,o._)("li",null,[(0,o._)("strong",null,"例子"),(0,o.Uk)(": "),(0,o._)("code",null,'"38;5;043"')],-1),q=(0,o.uE)('<div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果你不想要采用配置记录的主题色，可以在<code>~/.bashrc</code> 或者 <code>~/.zshrc</code> 等profile文件中添加一行，其优先级会更高:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">___X_CMD_THEME_COLOR_CODE</span><span class="token operator">=</span><span class="token string">&quot;38;5;043&quot;</span>\n</code></pre></div></div><h2 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> types</h2><ul><li><strong>描述</strong> : 自定义选择<strong>类型</strong>提示</li><li><strong>类型</strong> : <code>Array&lt;{ name: string; value: string; emoji?: string }&gt;</code></li><li><strong>例子</strong> : <br><code>types: [{value: &#39;feat&#39;, name: &#39;feat: 新增功能 | A new feature&#39;, emoji: &#39;:sparkles:&#39;}]</code></li></ul>',3),_={class:"custom-container tip"},k=(0,o._)("p",{class:"custom-container-title"},"提示",-1),y=(0,o.Uk)("如果要使用 Emoji 需要 "),x=(0,o._)("mark",null,"开启",-1),v=(0,o.Uk)(),j=(0,o._)("code",null,"userEmoji",-1),U=(0,o.Uk)(" 配置项。"),E=(0,o._)("br",null,null,-1),A=(0,o._)("mark",null,"并且需添加 Emoji Code",-1),S=(0,o.Uk)("，可以在: "),C={href:"https://gitmoji.dev/",target:"_blank",rel:"noopener noreferrer"},w=(0,o.Uk)("https://gitmoji.dev/"),z=(0,o.Uk)(" 查找相应的字符进行补充到 "),I=(0,o._)("code",null,"emoji",-1),P=(0,o.Uk)("。"),D=(0,o.uE)('<h2 id="typesappend" tabindex="-1"><a class="header-anchor" href="#typesappend" aria-hidden="true">#</a> typesAppend</h2><ul><li><strong>描述</strong> : 在默认 types 的基础上，添加额外的 types</li><li><strong>类型</strong> : <code>Array&lt;{ name: string; value: string; emoji?: string }&gt;</code></li><li><strong>使用</strong> : <strong>只想额外添加少量types</strong>，不想添加臃肿的默认配置，或改变默认配置的显示顺序时使用。</li><li><strong>默认</strong> : <code>[]</code></li><li><strong>例子</strong> : <br><code>typesAppend: [ { value: &quot;workflow&quot;, name: &quot;workflow: Workflow changes&quot;} ],</code></li></ul><h2 id="useemoji" tabindex="-1"><a class="header-anchor" href="#useemoji" aria-hidden="true">#</a> useEmoji</h2><ul><li><strong>描述</strong> : 是否开启 commit message 带有 Emoji 字符。</li><li><strong>类型</strong> : <code>boolean</code></li><li><strong>默认</strong> : <code>false</code></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>尝试运行 <code>emoji=1 cz</code> <strong>可在当前会话直接开启输出 emoji 模式</strong></p></div><h2 id="customscopesalign" tabindex="-1"><a class="header-anchor" href="#customscopesalign" aria-hidden="true">#</a> customScopesAlign</h2><ul><li><strong>描述</strong> : 设置 <strong>选择范围</strong> 中 为空选项(empty) 和 自定义选项(custom) 的 <strong>位置</strong></li><li><strong>类型</strong> : <code>&quot;top&quot; | &quot;bottom&quot; | &quot;top-bottom&quot; | &quot;bottom-top&quot;</code></li><li><strong>默认</strong> : <code>&quot;bottom&quot;</code></li></ul><h2 id="customscopesalias" tabindex="-1"><a class="header-anchor" href="#customscopesalias" aria-hidden="true">#</a> customScopesAlias</h2><ul><li><strong>描述</strong> : 自定义 <strong>选择范围</strong> 中 自定义选项(custom) 在命令行中显示的 <strong>名称</strong></li><li><strong>类型</strong> : <code>string</code></li><li><strong>默认</strong> : <code>custom</code></li></ul><h2 id="emptyscopesalias" tabindex="-1"><a class="header-anchor" href="#emptyscopesalias" aria-hidden="true">#</a> emptyScopesAlias</h2><ul><li><strong>描述</strong> : 自定义 <strong>选择范围</strong> 中 为空选项(empty) 在命令行中显示的 <strong>名称</strong></li><li><strong>类型</strong> : <code>string</code></li><li><strong>默认</strong> : <code>empty</code></li></ul><h2 id="customissueprefixsalign" tabindex="-1"><a class="header-anchor" href="#customissueprefixsalign" aria-hidden="true">#</a> customIssuePrefixsAlign</h2><ul><li><strong>描述</strong> : 设置 <strong>选择 issue 前缀</strong> 中 跳过选项(skip) 和 自定义选项(custom) 的 <strong>位置</strong></li><li><strong>类型</strong> : <code>&quot;top&quot; | &quot;bottom&quot; | &quot;top-bottom&quot; | &quot;bottom-top&quot;</code></li><li><strong>默认</strong> : <code>&quot;top&quot;</code></li></ul><h2 id="customissueprefixsalias" tabindex="-1"><a class="header-anchor" href="#customissueprefixsalias" aria-hidden="true">#</a> customIssuePrefixsAlias</h2><ul><li><strong>描述</strong> : 自定义 <strong>选择 issue 前缀</strong> 中 自定义选项(custom) 在命令行中显示的 <strong>名称</strong></li><li><strong>类型</strong> : <code>string</code></li><li><strong>默认</strong> : <code>custom</code></li></ul><h2 id="emptyissueprefixsalias" tabindex="-1"><a class="header-anchor" href="#emptyissueprefixsalias" aria-hidden="true">#</a> emptyIssuePrefixsAlias</h2><ul><li><strong>描述</strong> : 自定义 <strong>选择 issue 前缀</strong> 中 跳过选项(skip) 在命令行中显示的 <strong>名称</strong></li><li><strong>类型</strong> : <code>string</code></li><li><strong>默认</strong> : <code>skip</code></li></ul><h2 id="confirmcolorize" tabindex="-1"><a class="header-anchor" href="#confirmcolorize" aria-hidden="true">#</a> confirmColorize</h2><ul><li><strong>描述</strong> : 确定提交中模板 commit message 是否着色</li><li><strong>类型</strong> : <code>boolean</code></li><li><strong>默认</strong> : <code>true</code></li></ul><hr>',20),W={class:"custom-container tip"},L=(0,o._)("p",{class:"custom-container-title"},"提示",-1),O=(0,o.Uk)("使用"),R=(0,o._)("mark",null,"默认值",-1),B=(0,o.Uk)("可以产生很多种玩法让工具更契合你或团队的习惯，"),H=(0,o.Uk)("⇒ 查看小窍门"),M=(0,o.uE)('<h2 id="defaultscope" tabindex="-1"><a class="header-anchor" href="#defaultscope" aria-hidden="true">#</a> defaultScope</h2><ul><li><strong>描述</strong> : 在 <strong>自定义范围</strong> 中是否使用显示默认值</li><li><strong>类型</strong> : <code>string</code></li><li><strong>默认</strong> : <code>&quot;&quot;</code></li><li><strong>使用</strong> : 当你想要命令行中出现的默认值只需要按下 &quot;Enter&quot; 键即可</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果 <code>defaultScope</code> 与在选择范围列表项中的 <code>value</code> 相匹配就会进行星标置顶操作。</p></div><h2 id="defaultsubject" tabindex="-1"><a class="header-anchor" href="#defaultsubject" aria-hidden="true">#</a> defaultSubject</h2><ul><li><strong>描述</strong> : 在 <strong>简短描述</strong> 中是否使用显示默认值</li><li><strong>类型</strong> : <code>string</code></li><li><strong>默认</strong> : <code>&quot;&quot;</code></li><li><strong>使用</strong> : 当你想要命令行中出现的默认值只需要按下 &quot;Enter&quot; 键即可</li></ul><h2 id="defaultbody" tabindex="-1"><a class="header-anchor" href="#defaultbody" aria-hidden="true">#</a> defaultBody</h2><ul><li><strong>描述</strong> : 在 <strong>详细描述</strong> 中是否使用显示默认值</li><li><strong>类型</strong> : <code>string</code></li><li><strong>默认</strong> : <code>&quot;&quot;</code></li><li><strong>使用</strong> : 当你想要命令行中出现的默认值只需要按下 &quot;Enter&quot; 键即可</li></ul><h2 id="defaultissues" tabindex="-1"><a class="header-anchor" href="#defaultissues" aria-hidden="true">#</a> defaultIssues</h2><ul><li><strong>描述</strong> : 在 <strong>输入ISSUE 和 自定义ISSUE前缀</strong> 中是否使用显示默认值</li><li><strong>类型</strong> : <code>string</code></li><li><strong>默认</strong> : <code>&quot;&quot;</code></li><li><strong>使用</strong> : 当你想要命令行中出现的默认值只需要按下 &quot;Enter&quot; 键即可</li></ul>',9),T={},Z=(0,s(3243).Z)(T,[["render",function(e,t){const s=(0,o.up)("ExternalLinkIcon"),T=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[l,(0,o._)("ul",null,[r,i,n,(0,o._)("li",null,[a,c,u,d,g,h,p,(0,o._)("a",m,[f,(0,o.Wm)(s)])]),b]),q,(0,o._)("div",_,[k,(0,o._)("p",null,[y,x,v,j,U,E,A,S,(0,o._)("a",C,[w,(0,o.Wm)(s)]),z,I,P])]),D,(0,o._)("div",W,[L,(0,o._)("p",null,[O,R,B,(0,o.Wm)(T,{to:"/zh/guide/recipes.html#default"},{default:(0,o.w5)((()=>[H])),_:1})])]),M],64)}]])}}]);