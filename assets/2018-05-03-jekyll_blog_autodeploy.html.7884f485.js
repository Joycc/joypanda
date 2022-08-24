import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as o,a as s,b as e,d as i,e as n,r}from"./app.ef108ed0.js";const c={},p=i(`<p>Github \u4E0A\u642D\u5EFA Jekyll \u662F\u6700\u65B9\u4FBF\u7684\uFF0C\u7A7A\u95F4\u514D\u8D39\u3001\u6D41\u91CF\u514D\u8D39\u3001\u90E8\u7F72\u7B80\u5355\u3002\u4F46 Github \u5C5E\u4E8E\u88AB\u5899\u72B6\u6001\uFF0C\u5C06\u535A\u5BA2\u90E8\u7F72\u5728\u90A3\uFF0C\u901F\u5EA6\u5B9E\u5728\u592A\u6162\u3002\u5728\u73A9\u4E86\u51E0\u5929\u540E\uFF0C\u6211\u5F00\u59CB\u5728\u670D\u52A1\u5668\u4E0A\u76F4\u63A5\u642D\u5EFA Jekyll \u535A\u5BA2\u3002</p><p>\u670D\u52A1\u5668\u642D\u5EFA\u9700\u8981\u4EBA\u5DE5\u6267\u884C <code>jekyll build</code>, \u5B8C\u5168\u80CC\u79BB\u4E86\u6700\u5F00\u59CB\u642D\u5EFA\u535A\u5BA2\u7684\u521D\u8877-<strong>\u65B9\u4FBF</strong>\u3002\u4E4B\u540E\u7ED3\u5408\u4E86\u7F51\u7EDC\u4E0A\u591A\u4E2A\u81EA\u52A8\u5316\u65B9\u6848\uFF0C\u9009\u5B9A\u5165\u95E8\u6210\u672C\u6700\u4F4E\u7684 <code>Github</code> -&gt; <code>Travis CI</code> -&gt; <code>Docker</code>-&gt; <code>VPS</code>\u3002</p><h2 id="\u642D\u5EFA\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u601D\u8DEF" aria-hidden="true">#</a> \u642D\u5EFA\u601D\u8DEF</h2><ul><li>\u672C\u5730\u63D0\u4EA4\u535A\u5BA2 Markdown \u6587\u4EF6 \u5230 Github \u6E90\u6587\u4EF6 repository</li><li>Github \u89E6\u53D1 Travis CI \u6267\u884C\u81EA\u52A8\u7F16\u8BD1</li><li>Travis CI \u7F16\u8BD1\u540E push \u9759\u6001\u6587\u4EF6\u5230 Github \u9759\u6001\u6587\u4EF6 repository</li><li>Travis CI \u901A\u77E5 Docker \u91CD\u5EFA\u955C\u50CF\uFF08\u9884\u8BA1 5 \u5206\u949F\uFF09</li><li>\u670D\u52A1\u5668\u4F11\u7720 5 \u5206\u949F\u540E\uFF0CTravis CI \u901A\u77E5\u670D\u52A1\u5668</li><li>\u670D\u52A1\u5668\u62C9\u53D6\u6700\u65B0\u955C\u50CF\uFF0C\u7136\u540E\u505C\u6B62\u5E76\u5220\u9664\u539F\u5BB9\u5668\uFF0C\u7528\u6700\u65B0\u955C\u50CF\u91CD\u5EFA\u5BB9\u5668</li></ul><h2 id="travis-ci-\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#travis-ci-\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> Travis CI \u57FA\u672C\u914D\u7F6E</h2><p>Travis CI \u5BF9\u4E8E\u5F00\u6E90\u9879\u76EE\u5B8C\u5168\u514D\u8D39\uFF0C\u5E76\u4E14\u80FD\u81EA\u52A8\u611F\u77E5\u5230 Github \u7684 commit\uFF0C\u5E2E\u6211\u4EEC\u89E3\u51B3\u4E86\u9759\u6001\u6587\u4EF6\u751F\u6210\u95EE\u9898\u3002</p><p>\u5148\u7528 Github \u767B\u5F55 Travis CI\uFF0C\u7136\u540E\u70B9\u51FB\u6700\u53F3\u4FA7\u7684\u5934\u50CF\uFF0C\u5F00\u542F\u60F3\u8981\u4F7F\u7528 Travis CI \u7684\u9879\u76EE</p><p><img src="http://tc.seoipo.com/20180504135244.png" alt="" loading="lazy"></p><p>\u70B9\u51FB\u8BBE\u7F6E\u6309\u94AE\uFF0C\u8FDB\u5165\u9879\u76EE\u8BBE\u7F6E</p><p><img src="http://tc.seoipo.com/20180504135541.png" alt="" loading="lazy"></p><h2 id="\u9759\u6001\u6587\u4EF6\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u6587\u4EF6\u66F4\u65B0" aria-hidden="true">#</a> \u9759\u6001\u6587\u4EF6\u66F4\u65B0</h2><p>Travis CI push \u9759\u6001\u6587\u4EF6\u5230 Github \u901A\u8FC7 Github \u7684 token \u5B9E\u73B0\u6388\u6743\uFF0Cpush \u4EE3\u7801\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>after_success:
  - <span class="token function">git</span> clone https://github.com/rockbenben/rockbenben.github.io.git
  - <span class="token builtin class-name">cd</span> rockbenben.github.io <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> * <span class="token operator">&amp;&amp;</span> <span class="token function">cp</span> <span class="token parameter variable">-r</span> <span class="token punctuation">..</span>/_site/* <span class="token builtin class-name">.</span>
  - <span class="token function">git</span> config user.name <span class="token string">&quot;rockbenben&quot;</span>
  - <span class="token function">git</span> config user.email <span class="token string">&quot;qingwhat@gmail.com&quot;</span>
  - <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">--all</span> <span class="token builtin class-name">.</span>
  - <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Travis CI Auto Builder&quot;</span>
  - <span class="token function">git</span> push <span class="token parameter variable">--force</span> https://<span class="token variable">$DEPLOY_TOKEN</span>@github.com/rockbenben/blog.git master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>$DEPLOY_TOKEN</code> \u662F\u4ECE Github \u6388\u6743\u5F97\u5230\u7684\uFF0C<code>setting - Developer settings - Personal access tokens - Generate new token</code>, \u7136\u540E\u7ED9\u4E8E\u76F8\u5E94\u6743\u9650\u5373\u53EF\uFF0C<code>admin:public_key, admin:repo_hook, repo</code>\u3002</p><p><img src="http://tc.seoipo.com/20180504153729.png" alt="" loading="lazy"></p><p>\u8FDB\u5165 Travis \u7684 repo \u9879\u76EE\uFF0C<code>More options - Settings - Environment Variables</code>, \u65B0\u5EFA\u4E00\u4E2A\u53D8\u91CF<code>DEPLOY_TOKEN</code>\uFF0C\u628A Github \u7684\u6388\u6743 token \u4FDD\u5B58\u5728\u91CC\u9762\u3002</p><p><img src="http://tc.seoipo.com/20180504154229.png" alt="" loading="lazy"></p>`,17),d=n("Travis CI \u63D0\u4F9B\u4E86\u5B58\u653E\u52A0\u5BC6\u6587\u4EF6\u7684\u65B9\u5F0F\uFF0C\u53C2\u8003 "),u={href:"https://docs.travis-ci.com/user/encrypting-files/",target:"_blank",rel:"noopener noreferrer"},m=n("\u5B98\u65B9\u6587\u6863"),v=n("\u3002"),b=i(`<h2 id="dockerfiles-\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#dockerfiles-\u8BBE\u7F6E" aria-hidden="true">#</a> Dockerfiles \u8BBE\u7F6E</h2><p>\u5728 Github \u4E2D\u65B0\u5EFA\u4E00\u4E2A repository\uFF0C\u53EF\u4EE5\u547D\u540D\u4E3A <code>dockerfiles</code>, \u4E13\u95E8\u7528\u6765\u5B58\u50A8 Docker \u955C\u50CF\u7684\u8BBE\u7F6E\u6587\u4EF6\u3002\u5728 <code>dockerfiles</code> \u65B0\u5EFA\u6587\u4EF6\u5939 <code>jekyll</code> \uFF0C\u5E76\u5728 <code>jekyll</code> \u4E2D\u65B0\u5EFA\u6587\u4EF6 <code>Dockerfile</code>, \u653E\u5165\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FROM nginx:1.13.9-alpine

LABEL <span class="token assign-left variable">maintainer</span><span class="token operator">=</span><span class="token string">&quot;Benson &lt;qingwhat@gmail.com&gt;&quot;</span>

ARG <span class="token assign-left variable">TZ</span><span class="token operator">=</span><span class="token string">&#39;Asia/Shanghai&#39;</span>

ENV TZ <span class="token variable">\${TZ}</span>

RUN apk upgrade <span class="token parameter variable">--update</span> <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> apk <span class="token function">add</span> <span class="token function">bash</span> <span class="token function">git</span> <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/share/nginx/html <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> clone https://github.com/rockbenben/blog.git /usr/share/nginx/html <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">ln</span> <span class="token parameter variable">-sf</span> /usr/share/zoneinfo/<span class="token variable">\${TZ}</span> /etc/localtime <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">\${TZ}</span> <span class="token operator">&gt;</span> /etc/timezone <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/cache/apk/*

<span class="token comment"># ADD entrypoint.sh /entrypoint.sh #\u5BB9\u6613\u62A5\u9519</span>
<span class="token comment"># ADD flush /usr/local/bin/flush #\u5BB9\u6613\u62A5\u9519</span>

WORKDIR /usr/share/nginx/html

<span class="token comment"># CMD [&quot;/entrypoint.sh&quot;] #\u5BB9\u6613\u62A5\u9519</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06 Travis CI \u751F\u6210\u7684\u9759\u6001\u6587\u4EF6\u63A8\u9001\u5230 Github\uFF0C\u535A\u5BA2\u7684 docker \u5316\u90E8\u7F72\uFF0C\u91C7\u7528 nginx + \u9759\u6001\u6587\u4EF6 \u65B9\u5F0F</p>`,4),k=n("\u6837\u4F8B Dockerfile: "),h={href:"https://github.com/mritd/dockerfile/tree/master/mritd",target:"_blank",rel:"noopener noreferrer"},g=n("https://github.com/mritd/dockerfile/tree/master/mritd"),_=s("h2",{id:"docker-\u955C\u50CF\u8BBE\u7F6E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docker-\u955C\u50CF\u8BBE\u7F6E","aria-hidden":"true"},"#"),n(" Docker \u955C\u50CF\u8BBE\u7F6E")],-1),f=n("\u6CE8\u518C\u5E76\u767B\u5F55 "),y={href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"},T=n("Docker Hub"),x=n("\uFF0C\u70B9\u51FB "),j=s("code",null,"Create - Create Automated Build - Create Auto-build Github",-1),I=n(", \u9009\u62E9\u4E4B\u524D\u65B0\u5EFA\u7684 "),w=s("code",null,"dockerfiles",-1),C=n(" repository\u3002"),q=i(`<p>\u5EFA\u7ACB Automated Build \u955C\u50CF\u540E\uFF0C\u8FDB\u5165 <code>Build Seeting</code>, \u70B9\u51FB Trigger\uFF0C\u5EFA\u7ACB\u7B2C\u4E00\u4E2A Docker \u955C\u50CF\u3002</p><p><img src="http://tc.seoipo.com/20180504161016.png" alt="" loading="lazy"></p><p>\u7136\u540E\u5728 <code>Building Settings - Build Triggers - Activate Triggers</code> \uFF0C\u590D\u5236 Trigger URL\u3002</p><p><img src="http://tc.seoipo.com/20180504161245.png" alt="" loading="lazy"></p><p>\u7136\u540E\u5728\u670D\u52A1\u5668\u4E0A\u6267\u884C\u4E0B\u5217\u4EE3\u7801\uFF0C\u62C9\u53D6\u5E76<strong>\u542F\u52A8 Docker \u955C\u50CF</strong>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull rockben/jekyll
<span class="token function">docker</span> stop jekyll_blog
<span class="token function">docker</span> <span class="token function">rm</span> jekyll_blog
<span class="token function">docker</span> run <span class="token parameter variable">--name</span><span class="token operator">=</span>jekyll_blog <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">39100</span>:80 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true rockben/jekyll:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>--name=jekyll_blog \u4E2D\u7684 <code>jekyll_blog</code> \u662F\u5BF9\u5BB9\u5668\u7684\u547D\u540D\uFF0C\u65B9\u4FBF\u540E\u7EED\u64CD\u4F5C\u3002</p><p>-d \u8BA9\u5BB9\u5668\u5728\u540E\u53F0\u8FD0\u884C\u3002</p><p>-p \u6620\u5C04\u7AEF\u53E3\uFF1A80 \u662F\u5BB9\u5668\u5185\u5BF9\u5E94\u7684\u7AEF\u53E3\uFF0C39100 \u662F\u4E3B\u673A\u7AEF\u53E3\uFF0C\u4E5F\u5C31\u662F\u6700\u7EC8\u7528\u6237\u8BBF\u95EE\u7684\u7AEF\u53E3\uFF0C\u672C\u7AEF\u53E3\u53EF\u4EE5\u81EA\u7531\u9009\u62E9\u3002</p><p>--privileged=true \u5173\u95ED\u5B89\u5168\u6743\u9650\uFF0C\u5426\u5219\u4F60\u5BB9\u5668\u64CD\u4F5C\u6587\u4EF6\u5939\u6CA1\u6709\u6743\u9650\u3002</p><p>--<code>rockben/jekyll:latest</code> \u662F\u5BB9\u5668\u540D\u79F0\uFF0C\u53EF\u7701\u7565 <code>:latest</code>\u3002</p><p>\u8FD0\u884C\u5BB9\u5668\u540E\uFF0C\u8BBF\u95EE <code>seoipo.com:39100</code> \u5C31\u53EF\u4EE5\u770B\u5230\u955C\u50CF\u7F51\u9875\u3002\u5982\u679C\u6BCF\u6B21\u7528\u7AEF\u53E3\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u5728\u57DF\u540D DNS \u4E2D\u8BBE\u7F6E\u663E\u6027 URL\uFF0C\u5C06\u4E8C\u7EA7\u57DF\u540D <code>blog.seoipo.com</code> \u6307\u5411 <code>seoipo.com:39100</code></p><h3 id="docker-\u6269\u5C55\u9605\u8BFB" tabindex="-1"><a class="header-anchor" href="#docker-\u6269\u5C55\u9605\u8BFB" aria-hidden="true">#</a> Docker \u6269\u5C55\u9605\u8BFB</h3><p><strong>Docker \u547D\u4EE4\u7B26</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> // \u67E5\u770B\u6240\u6709\u6B63\u5728\u8FD0\u884C\u5BB9\u5668
<span class="token function">docker</span> stop containerId // containerId \u662F\u5BB9\u5668\u7684 ID

<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> // \u67E5\u770B\u6240\u6709\u5BB9\u5668
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span> // \u67E5\u770B\u6240\u6709\u5BB9\u5668 ID

<span class="token function">docker</span> stop <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span> //  stop \u505C\u6B62\u6240\u6709\u5BB9\u5668
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span> //   remove \u5220\u9664\u6240\u6709\u5BB9\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>docker run</code> \u8FDB\u9636\u8BBE\u7F6E</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span><span class="token operator">=</span>jekyll_blog <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">39100</span>:80 <span class="token parameter variable">-v</span> /www/wwwroot/jekyll:/jekyll <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true rockben/jekyll:latest /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-v \u6302\u8F7D\u76EE\u5F55/root/software \u672C\u5730\u76EE\u5F55 /software \u5BB9\u5668\u76EE\u5F55\uFF0C\u5728\u521B\u5EFA\u524D\u5BB9\u5668\u662F\u6CA1\u6709 software \u76EE\u5F55\u7684\uFF0Cdocker \u5BB9\u5668\u4F1A\u81EA\u5DF1\u521B\u5EFA --<code>/bin/bash</code> \u8FD9\u662F CMD \u547D\u4EE4\u884C\uFF0C\u53EF\u4E0D\u586B</p><h2 id="ssh-\u514D\u5BC6\u7801\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#ssh-\u514D\u5BC6\u7801\u767B\u5F55" aria-hidden="true">#</a> SSH \u514D\u5BC6\u7801\u767B\u5F55</h2><p>Travis \u4E0D\u80FD\u5229\u7528\u7528\u6237\u540D\u548C\u5BC6\u7801\u767B\u9646\uFF0C\u6211\u4EEC\u53EA\u6709\u5229\u7528<strong>SSH \u514D\u5BC6\u767B\u9646</strong>\u670D\u52A1\u5668\uFF0C\u66F4\u65B0\u5E76\u91CD\u542F Docker \u5BB9\u5668\u3002</p><p><strong>1\u3001\u751F\u6210\u516C\u94A5/\u79C1\u94A5\u5BF9</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh  <span class="token comment"># \u5207\u6362 .ssh \u76EE\u5F55\uFF0C\u76EE\u5F55\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u5982\u679C\u662F \`.\` \u8868\u793A\u6539\u6587\u4EF6\u5939\u662F\u9690\u85CF\u6587\u4EF6\u5939</span>
<span class="token function">mkdir</span> ~/.ssh  <span class="token comment">#\u5982\u679C .ssh \u6587\u4EF6\u5939\u4E0D\u5B58\u5728\uFF0C\u53EF\u4EE5\u6267\u884C\u6307\u4EE4\u81EA\u884C\u521B\u5EFA\u3002\u5982\u679C .ssh \u6587\u4EF6\u5DF2\u7ECF\u5B58\u5728\uFF0C\u8BE5\u547D\u4EE4\u4F1A\u6307\u51FA .ssh \u76EE\u5F55\uFF1A/root/.ssh</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa     <span class="token comment"># \u751F\u6210 RSA \u5BC6\u94A5\u5BF9\uFF0C\u540E\u9762\u6240\u6709\u7684\u76F4\u63A5\u4EE5\u9ED8\u8BA4\u5C31\u884C\uFF0Cpassphase \u4E00\u5B9A\u8981\u4E3A\u7A7A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2\u3001\u5C06\u751F\u6210\u7684\u516C\u94A5\u6DFB\u52A0\u4E3A\u53D7\u4FE1\u5217\u8868</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh  <span class="token comment"># \u5207\u6362.ssh \u76EE\u5F55</span>
<span class="token function">cat</span> id_rsa.pub <span class="token operator">&gt;&gt;</span> authorized_keys <span class="token comment">#\u5C06\u516C\u94A5\u5185\u5BB9\u8F93\u51FA\u5230 authorized_keys \u4E2D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3\u3001\u5728.ssh \u76EE\u5F55\u4E0B\u65B0\u589E\u914D\u7F6E\u6587\u4EF6 config</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh  <span class="token comment"># \u5207\u6362 .ssh \u76EE\u5F55</span>
<span class="token function">vim</span> config  <span class="token comment">#\u65B0\u5EFA\u5E76\u6253\u5F00\u76EE\u5F55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u70B9\u51FB <code>i</code> \u8FDB\u5165\u7F16\u8F91\u72B6\u6001\uFF0C\u8F93\u5165\u4E0B\u5217\u4EE3\u7801\u3002\u5B8C\u6BD5\u540E\uFF0C\u70B9\u51FB <code>Esc</code> \u9000\u51FA\u7F16\u8F91\u72B6\u51B5\uFF0C\u7136\u540E\u8F93\u5165 <code>:wq!</code> \u5F3A\u5236\u4FDD\u5B58\u540E\u79BB\u5F00\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Host <span class="token builtin class-name">test</span>
HostName <span class="token number">99.99</span>.99.99<span class="token punctuation">(</span>\u4F60\u7684\u670D\u52A1\u5668 <span class="token function">ip</span><span class="token punctuation">)</span>
<span class="token comment">#\u767B\u9646\u7684\u7528\u6237\u540D</span>
User travis
IdentitiesOnly <span class="token function">yes</span>
<span class="token comment">#\u767B\u9646\u4F7F\u7528\u7684\u5BC6\u94A5</span>
IdentityFile ~/.ssh/id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4\u3001\u5728 Linux \u670D\u52A1\u5668\u5B89\u88C5 Travis \u5BA2\u6237\u7AEF</strong>\uFF08rvm -&gt; ruby -&gt; gem -&gt;Travis\uFF09</p><p><code>gem install travis</code></p><p><strong>5\u3001\u670D\u52A1\u5668\u521B\u5EFA\u7A7A\u767D<code>.travis.yml</code>\u6587\u4EF6</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> /home/travis <span class="token comment">#\u65B0\u5EFA travis \u6587\u4EF6\u5939</span>
<span class="token function">touch</span> /home/travis/.travis.yml <span class="token comment">#\u5728 travis \u6587\u4EF6\u5939\u91CC\u521B\u5EFA\u7A7A\u767D .travis.yml \u6587\u4EF6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6\u3001\u670D\u52A1\u5668\u767B\u5F55 Travis\uFF0C\u6DFB\u52A0\u52A0\u5BC6\u7684\u79C1\u94A5\u81F3\u4EE3\u7801\u4ED3\u5E93</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/travis  <span class="token comment">#\u8FDB\u5165 .travis.yml \u6240\u5728\u6587\u4EF6\u5939</span>
travis login     <span class="token comment">#\u7528 GitHub \u8D26\u6237\u767B\u9646 travis</span>

<span class="token comment">#\u767B\u9646\u6210\u529F\u540E\u89E3\u5BC6\u79C1\u94A5\uFF0C--add \u53C2\u6570\u4F1A\u628A\u52A0\u5BC6\u7684\u79C1\u94A5\u89E3\u5BC6\u547D\u4EE4\u63D2\u5165\u5230.travis.yml\uFF0CTravis \u89E3\u5BC6\u65F6\u8981\u7528\u5230\u7684</span>
<span class="token comment">#-r \u4E4B\u540E\u662F Github \u6E90\u6587\u4EF6\u76EE\u5F55</span>
travis encrypt-file ~/.ssh/id_rsa <span class="token parameter variable">--add</span> <span class="token parameter variable">-r</span> rockbenben/rockbenben.github.io

<span class="token comment">#\u4FDD\u5B58\u52A0\u5BC6\u540E\u7684\u79C1\u94A5 id_rsa.enc\uFF0C\u4E0A\u4F20\u5230 Github \u6E90\u6587\u4EF6 repository \u4E2D</span>

<span class="token comment">#.travis.yml \u4E2D\u4E5F\u81EA\u52A8\u6DFB\u52A0\u4E86\u89E3\u5BC6\u547D\u4EE4</span>
<span class="token function">cat</span> /home/travis/.travis.yml  <span class="token comment">#\u6253\u5F00\u670D\u52A1\u5668\u7684 .travis.yml \u6587\u4EF6\u5E76\u4FDD\u5B58</span>
before_install:
- openssl aes-256-cbc <span class="token parameter variable">-K</span> <span class="token variable">$encrypted_</span>****_key <span class="token parameter variable">-iv</span> <span class="token variable">$encrypted_</span>****_iv
  <span class="token parameter variable">-in</span> id_rsa.enc <span class="token parameter variable">-out</span> ~/.ssh/id_rsa <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6210\u529F\u52A0\u5BC6\u540E\uFF0C\u4F1A\u63D0\u793A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Make sure to <span class="token function">add</span> id_rsa.enc to the <span class="token function">git</span> repository.
Make sure not to <span class="token function">add</span> ~/.ssh/id_rsa to the <span class="token function">git</span> repository.
Commit all changes to your .travis.yml.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>\u5C06\u65B0\u751F\u6210\u7684 <code>id_rsa.enc</code> \u6587\u4EF6\u4E0A\u4F20\u5230 Github \u6E90\u6587\u4EF6 repository \u4E2D</strong></p></li><li><p>\u5C06 <code>.travis.yml</code> \u4E2D\u7684 <code>openssl aes-256-cbc -K $encrypted_5c280379e96c_key -iv $encrypted_5c280379e96c_iv -in id_rsa.enc -out ~/.ssh/id_rsa -d</code> \u653E\u5165\u6700\u7EC8\u7684 <code>.travis.yml</code> \u6587\u4EF6\u4E2D\u3002</p><p><img src="http://tc.seoipo.com/20180504184508.png" alt="" loading="lazy"></p></li></ul><h2 id="travis-yml-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#travis-yml-\u914D\u7F6E" aria-hidden="true">#</a> travis.yml \u914D\u7F6E</h2><p>\u5F53\u9879\u76EE\u5185\u5B58\u5728 <code>.travis.yml</code> \u6587\u4EF6\u65F6\uFF0CTravis CI \u4F1A\u6309\u7167\u5176\u5B9A\u4E49\u5B8C\u6210\u81EA\u52A8 build \u8FC7\u7A0B\uFF0C\u6240\u4EE5\u5F00\u542F\u4E86\u4E0A\u8FF0\u914D\u7F6E\u4EE5\u540E\u8FD8\u8981\u5728 Github \u7684 Jekyll \u6E90\u6587\u4EF6\u9879\u76EE\u4E0B\u521B\u5EFA <code>.travis.yml</code> \u914D\u7F6E\u6587\u4EF6\u3002</p><p><img src="http://tc.seoipo.com/20180504141827.png" alt="" loading="lazy"></p><p><code>.travis.yml</code> \u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u6837\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>language: ruby
rvm:
- <span class="token number">2.3</span>.3

before_script:
- openssl aes-256-cbc <span class="token parameter variable">-K</span> <span class="token variable">$encrypted_5c280379e96c_key</span> <span class="token parameter variable">-iv</span> <span class="token variable">$encrypted_5c280379e96c_iv</span>
  <span class="token parameter variable">-in</span> id_rsa.enc <span class="token parameter variable">-out</span> ~/.ssh/id_rsa <span class="token parameter variable">-d</span>      <span class="token comment">#\u672C\u53E5\u662F\u670D\u52A1\u5668\u4E0A\u7684 Travis \u81EA\u52A8\u751F\u6210\u7684\uFF0C\u4F46\u9ED8\u8BA4\u751F\u6210\u7684\u547D\u4EE4\u53EF\u80FD\u4F1A\u5728/\u524D\u9762\u5E26\u8F6C\u4E49\u7B26\\\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u8FD9\u4E9B\u8F6C\u4E49\u7B26\uFF0C\u624B\u52A8\u5220\u6389\u6240\u6709\u7684\u8F6C\u4E49\u7B26\uFF0C\u5426\u5219\u53EF\u80FD\u5728\u540E\u9762\u5F15\u53D1\u83AB\u540D\u7684\u9519\u8BEF\u3002</span>
- <span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/id_rsa
- <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Host 106.15.190.249<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>StrictHostKeyChecking no<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.ssh/config <span class="token comment">#106.15.190.249 \u662F\u670D\u52A1\u5668 IP\uFF0C\u4FEE\u6539\u6210\u4F60\u81EA\u5DF1\u7684\u5C31\u884C</span>

<span class="token comment"># Assume bundler is being used, therefore</span>
<span class="token comment"># the \`install\` step will run \`bundle install\` by default.</span>
install:
- gem <span class="token function">install</span> jekyll
- gem <span class="token function">install</span> jekyll-paginate

script: jekyll build <span class="token comment">#&amp;&amp; htmlproofer ./_site #\u6307\u5B9A\u76EE\u5F55\u5BB9\u6613\u62A5\u9519</span>

after_success:
  - <span class="token function">git</span> clone https://github.com/rockbenben/rockbenben.github.io.git
  - <span class="token builtin class-name">cd</span> rockbenben.github.io <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> * <span class="token operator">&amp;&amp;</span> <span class="token function">cp</span> <span class="token parameter variable">-r</span> <span class="token punctuation">..</span>/_site/* <span class="token builtin class-name">.</span>
  - <span class="token function">git</span> config user.name <span class="token string">&quot;rockbenben&quot;</span>
  - <span class="token function">git</span> config user.email <span class="token string">&quot;qingwhat@gmail.com&quot;</span>
  - <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">--all</span> <span class="token builtin class-name">.</span>
  - <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Travis CI Auto Builder&quot;</span>
  - <span class="token function">git</span> push <span class="token parameter variable">--force</span> https://<span class="token variable">$DEPLOY_TOKEN</span>@github.com/rockbenben/blog.git master
  <span class="token comment"># Trigger all tags/branchs for this automated build.</span>
  - <span class="token function">curl</span> <span class="token parameter variable">-X</span> POST https://registry.hub.docker.com/u/rockben/jekyll/trigger/9b1e9527-0cf1-4756-8332-50f8dff37747/ <span class="token comment">#\u672C\u53E5\u7684\u94FE\u63A5\u662F hub.docker.com \u81EA\u52A8\u751F\u6210\uFF0C\u8FDB\u5165 docker \u9879\u76EE\u540E\uFF0CBuilding Settings - Build Triggers - Activate Triggers \uFF0C\u590D\u5236 Trigger URL</span>
  - <span class="token function">sleep</span> 5m <span class="token comment">#\u8D85\u8FC7 10 \u5206\u949F\uFF0Ctavis \u5C06\u5931\u53BB\u54CD\u5E94\u3002\u6B64\u5904\u662F\u5728\u7B49\u5F85 docker \u955C\u50CF\u66F4\u65B0</span>
  - <span class="token function">ssh</span> root@106.15.190.249 <span class="token parameter variable">-p</span> <span class="token number">27378</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token string">&quot;docker pull rockben/jekyll &amp;&amp; docker stop jekyll_blog &amp;&amp; docker rm jekyll_blog &amp;&amp; docker run --name=jekyll_blog -d -p 39100:80 --privileged=true rockben/jekyll:latest&quot;</span>  <span class="token comment">#ssh \u8FDE\u63A5\u540E\uFF0C\u91CD\u542F docker \u5BB9\u5668\uFF0Cjekyll_blog \u4E3A\u4E4B\u524D\u8BBE\u5B9A\u7684\u5BB9\u5668\u540D\u3002</span>
  <span class="token comment"># -p 27378 \u662F\u6211\u81EA\u8BBE\u7684\u670D\u52A1\u5668\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u662F 22</span>
  <span class="token comment"># - ssh root@106.15.190.249 -p 27378 -o StrictHostKeyChecking=no &quot;/www/wwwroot/jekyll_build.sh&quot; #\u6267\u884C jekyll \u91CD\u5EFA\u811A\u672C</span>
  <span class="token comment">#- ssh root@106.15.190.249 -o StrictHostKeyChecking=no &#39;cd ~/blog-front &amp;&amp; git pull &amp;&amp; npm install &amp;&amp; npm run build&#39;   #\u4F7F\u7528 ssh \u8FDE\u63A5\u670D\u52A1\u5668\uFF0Cgit pull?</span>

<span class="token comment"># branch whitelist, only for Github Pages</span>
branchs:
  only:
  - master  <span class="token comment">#\u6307\u5B9A\u53EA\u6709\u68C0\u6D4B\u5230 master \u5206\u652F\u6709\u53D8\u52A8\u65F6\u624D\u6267\u884C\u4EFB\u52A1</span>

env:
  global:
  - <span class="token assign-left variable">NOKOGIRI_USE_SYSTEM_LIBRARIES</span><span class="token operator">=</span>true <span class="token comment"># speeds up installation of html-proofer</span>

addons:
  ssh_known_hosts:
  - <span class="token number">106.15</span>.190.249 <span class="token comment">#\u53D7\u4FE1\u4E3B\u673A\uFF0C\u4F60\u7684 Linux \u670D\u52A1\u5668 ip</span>

sudo: <span class="token boolean">false</span> <span class="token comment"># route your build to the container-based infrastructure for a faster build</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),D=n("\u5177\u4F53 .travis.yml \u914D\u7F6E\uFF0C\u8BF7\u53C2\u8003 "),S={href:"https://docs.travis-ci.com/",target:"_blank",rel:"noopener noreferrer"},G=n("\u5B98\u65B9\u6587\u6863"),E=n("\u3002"),A=s("p",null,"\u53C2\u8003\u8D44\u6599&\u5F15\u7528\uFF1A",-1),B={href:"https://github.com/Huxpro/huxpro.github.io",target:"_blank",rel:"noopener noreferrer"},O=n("Jekyll \u6A21\u677F hux blog"),z={href:"https://zhuanlan.zhihu.com/p/25066056",target:"_blank",rel:"noopener noreferrer"},H=n("\u4E00\u70B9\u90FD\u4E0D\u9AD8\u5927\u4E0A\uFF0C\u624B\u628A\u624B\u6559\u4F60\u4F7F\u7528 Travis CI \u5B9E\u73B0\u6301\u7EED\u90E8\u7F72"),L={href:"https://mritd.me/2017/02/25/jekyll-blog-+-travis-ci-auto-deploy/",target:"_blank",rel:"noopener noreferrer"},$=n("Jekyll + Travis CI \u81EA\u52A8\u5316\u90E8\u7F72\u535A\u5BA2"),K={href:"https://juejin.im/post/5a9e1a5751882555712bd8e1",target:"_blank",rel:"noopener noreferrer"},N=n("Travis-CI \u81EA\u52A8\u5316\u6D4B\u8BD5\u5E76\u90E8\u7F72\u81F3\u81EA\u5DF1\u7684 CentOS \u670D\u52A1\u5668"),R={href:"https://segmentfault.com/a/1190000011218410",target:"_blank",rel:"noopener noreferrer"},P=n("Travis CI \u7CFB\u5217\uFF1A\u81EA\u52A8\u5316\u90E8\u7F72\u535A\u5BA2"),M={href:"https://juejin.im/post/5a2941ad6fb9a045030ffc95",target:"_blank",rel:"noopener noreferrer"},V=n("SSH \u514D\u5BC6\u767B\u5F55\u8FDC\u7A0B\u670D\u52A1\u5668"),J={href:"http://www.cnblogs.com/scofi/p/6617394.html",target:"_blank",rel:"noopener noreferrer"},U=n("SSH \u516C\u94A5\u767B\u5F55\u539F\u7406"),Y={href:"https://blog.csdn.net/yinweitao12/article/details/73165914",target:"_blank",rel:"noopener noreferrer"},Z=n("\u5982\u4F55\u5C06 dockerhub \u4E0E github \u5173\u8054"),F={href:"http://www.cnblogs.com/YasinXiao/p/7736075.html",target:"_blank",rel:"noopener noreferrer"},X=n("docker \u542F\u52A8\uFF0C\u7AEF\u53E3\u6620\u5C04\uFF0C\u6302\u8F7D\u672C\u5730\u76EE\u5F55"),W={href:"https://yeasy.gitbooks.io/docker_practice/",target:"_blank",rel:"noopener noreferrer"},Q=n("Docker \u2014 \u4ECE\u5165\u95E8\u5230\u5B9E\u8DF5");function ss(ns,as){const a=r("ExternalLinkIcon");return l(),o("div",null,[p,s("p",null,[d,s("a",u,[m,e(a)]),v]),b,s("p",null,[k,s("a",h,[g,e(a)])]),_,s("p",null,[f,s("a",y,[T,e(a)]),x,j,I,w,C]),q,s("p",null,[D,s("a",S,[G,e(a)]),E]),A,s("ul",null,[s("li",null,[s("p",null,[s("a",B,[O,e(a)])])]),s("li",null,[s("p",null,[s("a",z,[H,e(a)])])]),s("li",null,[s("p",null,[s("a",L,[$,e(a)])])]),s("li",null,[s("p",null,[s("a",K,[N,e(a)])])]),s("li",null,[s("p",null,[s("a",R,[P,e(a)])])]),s("li",null,[s("p",null,[s("a",M,[V,e(a)])])]),s("li",null,[s("p",null,[s("a",J,[U,e(a)])])]),s("li",null,[s("p",null,[s("a",Y,[Z,e(a)])])]),s("li",null,[s("p",null,[s("a",F,[X,e(a)])])]),s("li",null,[s("p",null,[s("a",W,[Q,e(a)])])])])])}var ts=t(c,[["render",ss],["__file","2018-05-03-jekyll_blog_autodeploy.html.vue"]]);export{ts as default};
