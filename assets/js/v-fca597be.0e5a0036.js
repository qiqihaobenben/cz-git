"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67],{6097:(e,t,o)=>{o.r(t),o.d(t,{data:()=>s});const s={key:"v-fca597be",path:"/guide/options-show.html",title:"Show Related",lang:"en-US",frontmatter:{title:"Show Related",sidebarDepth:1,lastUpdated:!0,sitemap:{priority:.6}},excerpt:"",headers:[{level:2,title:"messages",slug:"messages",children:[]},{level:2,title:"themeColorCode",slug:"themecolorcode",children:[]},{level:2,title:"types",slug:"types",children:[]},{level:2,title:"typesAppend",slug:"typesappend",children:[]},{level:2,title:"useEmoji",slug:"useemoji",children:[]},{level:2,title:"customScopesAlign",slug:"customscopesalign",children:[]},{level:2,title:"customScopesAlias",slug:"customscopesalias",children:[]},{level:2,title:"emptyScopesAlias",slug:"emptyscopesalias",children:[]},{level:2,title:"customIssuePrefixsAlign",slug:"customissueprefixsalign",children:[]},{level:2,title:"customIssuePrefixsAlias",slug:"customissueprefixsalias",children:[]},{level:2,title:"emptyIssuePrefixsAlias",slug:"emptyissueprefixsalias",children:[]},{level:2,title:"confirmColorize",slug:"confirmcolorize",children:[]},{level:2,title:"defaultType",slug:"defaulttype",children:[]},{level:2,title:"defaultScope",slug:"defaultscope",children:[]},{level:2,title:"defaultSubject",slug:"defaultsubject",children:[]},{level:2,title:"defaultBody",slug:"defaultbody",children:[]},{level:2,title:"defaultIssues",slug:"defaultissues",children:[]}],git:{updatedTime:1653718252e3,contributors:[{name:"zhengqbbb",email:"40693636+Zhengqbbb@users.noreply.github.com",commits:1}]},filePathRelative:"guide/options-show.md"}},9432:(e,t,o)=>{o.r(t),o.d(t,{default:()=>H});var s=o(7208);const i=(0,s.uE)('<h1 id="options-show-related" tabindex="-1"><a class="header-anchor" href="#options-show-related" aria-hidden="true">#</a> Options - Show Related</h1><h2 id="messages" tabindex="-1"><a class="header-anchor" href="#messages" aria-hidden="true">#</a> messages</h2><ul><li><strong>description</strong> : custom command line question information</li><li><strong>example</strong> : <br><code>messages: { type: &quot;Select the type of change that you&#39;re committing:&quot; }</code></li></ul><h2 id="themecolorcode" tabindex="-1"><a class="header-anchor" href="#themecolorcode" aria-hidden="true">#</a> themeColorCode</h2>',4),l=(0,s._)("li",null,[(0,s._)("strong",null,"description"),(0,s.Uk)(" : set prompt inquirer theme color")],-1),n=(0,s._)("li",null,[(0,s._)("strong",null,"type"),(0,s.Uk)(" : "),(0,s._)("code",null,"string")],-1),r=(0,s._)("li",null,[(0,s._)("strong",null,"default"),(0,s.Uk)(" : "),(0,s._)("code",null,'""'),(0,s.Uk)(" (⇒ cyan color)")],-1),a=(0,s._)("strong",null,"rule",-1),d=(0,s.Uk)(": "),u=(0,s._)("code",null,'"38;5;${color_code}"',-1),c=(0,s._)("br",null,null,-1),h=(0,s.Uk)(" ⇒ the "),p=(0,s._)("code",null,"color_code",-1),g=(0,s.Uk)(" can get it by "),m={href:"https://github.com/sindresorhus/xterm-colors",target:"_blank",rel:"noopener noreferrer"},f=(0,s.Uk)("https://github.com/sindresorhus/xterm-colors"),y=(0,s._)("li",null,[(0,s._)("strong",null,"example"),(0,s.Uk)(": "),(0,s._)("code",null,'"38;5;043"')],-1),b=(0,s.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you don&#39;t want to use the theme color of the configuration record, you can add a line to the profile file such as <code>~/.bashrc</code> or <code>~/.zshrc</code>, which will have a higher priority:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">___X_CMD_THEME_COLOR_CODE</span><span class="token operator">=</span><span class="token string">&quot;38;5;043&quot;</span>\n</code></pre></div></div><h2 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> types</h2><ul><li><strong>description</strong> : custom selection <strong>type</strong> prompt</li><li><strong>type</strong> : <code>Array&lt;{ name: string; value: string; emoji?: string }&gt;</code></li><li><strong>example</strong> : <br><code>types: [{value: &#39;feat&#39;, name: &#39;feat: A new feature&#39;, emoji: &#39;:sparkles:&#39;}]</code></li></ul>',3),q={class:"custom-container tip"},v=(0,s._)("p",{class:"custom-container-title"},"TIP",-1),x=(0,s.Uk)("If you want to use Emoji, you need "),k=(0,s._)("mark",null,"enable",-1),_=(0,s.Uk)(),w=(0,s._)("code",null,"userEmoji",-1),j=(0,s.Uk)(" configuration item. "),U=(0,s._)("br",null,null,-1),S=(0,s.Uk)(" And need to add Emoji Code, you can find the corresponding characters in: "),A={href:"https://gitmoji.dev/",target:"_blank",rel:"noopener noreferrer"},E=(0,s.Uk)("https://gitmoji.dev/"),I=(0,s.Uk)(" to supplement "),C=(0,s._)("code",null,"emoji",-1),z=(0,s.Uk)("."),P=(0,s.uE)('<h2 id="typesappend" tabindex="-1"><a class="header-anchor" href="#typesappend" aria-hidden="true">#</a> typesAppend</h2><ul><li><strong>description</strong> : Add extra types to default types</li><li><strong>type</strong> : <code>Array&lt;{ name: string; value: string; emoji?: string }&gt;</code></li><li><strong>use</strong> : Use when you don&#39;t want to add bloated defaults and don&#39;t want to adjust the default order in configuration. <strong>Only want to add a small number of types</strong>.</li><li><strong>default</strong> : <code>[]</code></li><li><strong>example</strong> : <br><code>typesAppend: [ { value: &quot;workflow&quot;, name: &quot;workflow: Workflow changes&quot;} ],</code></li></ul><h2 id="useemoji" tabindex="-1"><a class="header-anchor" href="#useemoji" aria-hidden="true">#</a> useEmoji</h2><ul><li><strong>description</strong> : Whether to enable commit messages with emoji characters.</li><li><strong>type</strong> : <code>boolean</code></li><li><strong>default</strong> : <code>false</code></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Try running <code>emoji=1 cz</code> to <strong>enable output emoji mode in the current session</strong></p></div><h2 id="customscopesalign" tabindex="-1"><a class="header-anchor" href="#customscopesalign" aria-hidden="true">#</a> customScopesAlign</h2><ul><li><strong>description</strong> : Set the <strong>location</strong> of empty option (empty) and custom option (custom) in <strong>selection range</strong></li><li><strong>type</strong> : <code>&quot;top&quot; | &quot;bottom&quot; | &quot;top-bottom&quot; | &quot;bottom-top&quot;</code></li><li><strong>default</strong> : <code>&quot;bottom&quot;</code></li></ul><h2 id="customscopesalias" tabindex="-1"><a class="header-anchor" href="#customscopesalias" aria-hidden="true">#</a> customScopesAlias</h2><ul><li><strong>description</strong> : Customize the <strong>name</strong> displayed on the command line for the custom option (custom) in the <strong>selection range</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>custom</code></li></ul><h2 id="emptyscopesalias" tabindex="-1"><a class="header-anchor" href="#emptyscopesalias" aria-hidden="true">#</a> emptyScopesAlias</h2><ul><li><strong>description</strong> : Customize the <strong>name</strong> displayed on the command line if the empty option (empty) in the <strong>selection range</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>empty</code></li></ul><h2 id="customissueprefixsalign" tabindex="-1"><a class="header-anchor" href="#customissueprefixsalign" aria-hidden="true">#</a> customIssuePrefixsAlign</h2><ul><li><strong>description</strong> : Set the <strong>location</strong> of skip option (skip) and custom option (custom) in <strong>select issue prefix</strong></li><li><strong>type</strong> : <code>&quot;top&quot; | &quot;bottom&quot; | &quot;top-bottom&quot; | &quot;bottom-top&quot;</code></li><li><strong>default</strong> : <code>&quot;top&quot;</code></li></ul><h2 id="customissueprefixsalias" tabindex="-1"><a class="header-anchor" href="#customissueprefixsalias" aria-hidden="true">#</a> customIssuePrefixsAlias</h2><ul><li><strong>description</strong> : custom <strong>select the issue prefix</strong> in the custom option (custom) to display the <strong>name</strong> on the command line</li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>custom</code></li></ul><h2 id="emptyissueprefixsalias" tabindex="-1"><a class="header-anchor" href="#emptyissueprefixsalias" aria-hidden="true">#</a> emptyIssuePrefixsAlias</h2><ul><li><strong>description</strong> : Customize the <strong>name</strong> displayed on the command line in the skip option (skip) in the <strong>select issue prefix</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>skip</code></li></ul><h2 id="confirmcolorize" tabindex="-1"><a class="header-anchor" href="#confirmcolorize" aria-hidden="true">#</a> confirmColorize</h2><ul><li><strong>description</strong> : Determines whether the template commit message is colored in the commit</li><li><strong>type</strong> : <code>boolean</code></li><li><strong>default</strong> : <code>true</code></li></ul><hr><br><br><br>',23),T={class:"custom-container tip"},W=(0,s._)("p",{class:"custom-container-title"},"TIP",-1),R=(0,s.Uk)("Using "),D=(0,s._)("mark",null,"default value",-1),O=(0,s.Uk)(" can produce many ways to make the tool more suitable for you or your team's habits, "),B=(0,s.Uk)("⇒ see the recipes"),L=(0,s.uE)('<h2 id="defaulttype" tabindex="-1"><a class="header-anchor" href="#defaulttype" aria-hidden="true">#</a> defaultType</h2><ul><li><strong>description</strong> : pin type item the top of the types list (match item value)</li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>&quot;&quot;</code></li></ul><h2 id="defaultscope" tabindex="-1"><a class="header-anchor" href="#defaultscope" aria-hidden="true">#</a> defaultScope</h2><ul><li><strong>description</strong> : Whether to use display default value in <strong>custom scope</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>&quot;&quot;</code></li><li><strong>use</strong> : when you want the default value to appear on the command line just press the &quot;Enter&quot; key</li></ul>',4),M=(0,s.uE)(' pin scope item the top of the scope list (match item value) <h2 id="defaultsubject" tabindex="-1"><a class="header-anchor" href="#defaultsubject" aria-hidden="true">#</a> defaultSubject</h2><ul><li><strong>description</strong> : Whether to use the display default value in the <strong>short description</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>&quot;&quot;</code></li><li><strong>use</strong> : when you want the default value to appear on the command line just press the &quot;Enter&quot; key</li></ul><h2 id="defaultbody" tabindex="-1"><a class="header-anchor" href="#defaultbody" aria-hidden="true">#</a> defaultBody</h2><ul><li><strong>description</strong> : Whether to use the display default value in the <strong>detailed description</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>&quot;&quot;</code></li><li><strong>use</strong> : when you want the default value to appear on the command line just press the &quot;Enter&quot; key</li></ul><h2 id="defaultissues" tabindex="-1"><a class="header-anchor" href="#defaultissues" aria-hidden="true">#</a> defaultIssues</h2><ul><li><strong>description</strong> : Whether to use the display default value in the <strong>input ISSUE and custom ISSUE prefix</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>&quot;&quot;</code></li><li><strong>use</strong> : when you want the default value to appear on the command line just press the &quot;Enter&quot; key</li></ul>',7),Z={},H=(0,o(3243).Z)(Z,[["render",function(e,t){const o=(0,s.up)("ExternalLinkIcon"),Z=(0,s.up)("RouterLink"),H=(0,s.up)("Badge");return(0,s.wg)(),(0,s.iD)("div",null,[i,(0,s._)("ul",null,[l,n,r,(0,s._)("li",null,[a,d,u,c,h,p,g,(0,s._)("a",m,[f,(0,s.Wm)(o)])]),y]),b,(0,s._)("div",q,[v,(0,s._)("p",null,[x,k,_,w,j,U,S,(0,s._)("a",A,[E,(0,s.Wm)(o)]),I,C,z])]),P,(0,s._)("div",T,[W,(0,s._)("p",null,[R,D,O,(0,s.Wm)(Z,{to:"/guide/recipes.html#default"},{default:(0,s.w5)((()=>[B])),_:1})])]),L,(0,s.Wm)(H,{type:"tip",text:"Tip",vertical:"middle"}),M])}]])}}]);