import{_ as e,o,c,a as n,d as t,b as s,e as a,r as l}from"./app.0512a451.js";const i={},u=n("h1",{id:"es6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#es6","aria-hidden":"true"},"#"),s(" ES6")],-1),r=s("ECMAScript 6.0\uFF08\u4EE5\u4E0B\u7B80\u79F0 ES6\uFF09\u662F JavaScript \u8BED\u8A00\u7684\u4E0B\u4E00\u4EE3\u6807\u51C6\uFF0C\u5DF2\u7ECF\u5728 2015 \u5E74 6 \u6708\u6B63\u5F0F\u53D1\u5E03\u4E86\u3002\u5B83\u7684\u76EE\u6807\uFF0C\u662F\u4F7F\u5F97 JavaScript \u8BED\u8A00\u53EF\u4EE5\u7528\u6765\u7F16\u5199\u590D\u6742\u7684\u5927\u578B\u5E94\u7528\u7A0B\u5E8F\uFF0C\u6210\u4E3A\u4F01\u4E1A\u7EA7\u5F00\u53D1\u8BED\u8A00\u3002"),k={href:"https://es6.ruanyifeng.com/#docs/intro",target:"_blank",rel:"noopener noreferrer"},d=s("ECMAScript6\u7B80\u4ECB"),m=a(`<h2 id="es2015" tabindex="-1"><a class="header-anchor" href="#es2015" aria-hidden="true">#</a> ES2015</h2><h3 id="es6-\u4E0E-ecmascript-2015-\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#es6-\u4E0E-ecmascript-2015-\u7684\u5173\u7CFB" aria-hidden="true">#</a> ES6 \u4E0E ECMAScript 2015 \u7684\u5173\u7CFB</h3><blockquote><p>ECMAScript 2015\uFF08\u7B80\u79F0 ES2015\uFF09\u8FD9\u4E2A\u8BCD\uFF0C\u4E5F\u662F\u7ECF\u5E38\u53EF\u4EE5\u770B\u5230\u7684\u3002\u5B83\u4E0E ES6 \u662F\u4EC0\u4E48\u5173\u7CFB\u5462\uFF1F</p><p>ES6 \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\uFF0C\u5728 2015 \u5E74 6 \u6708\u53D1\u5E03\u4E86\uFF0C\u6B63\u5F0F\u540D\u79F0\u5C31\u662F\u300AECMAScript 2015 \u6807\u51C6\u300B\uFF08\u7B80\u79F0 ES2015\uFF09\u30022016 \u5E74 6 \u6708\uFF0C\u5C0F\u5E45\u4FEE\u8BA2\u7684\u300AECMAScript 2016 \u6807\u51C6\u300B\uFF08\u7B80\u79F0 ES2016\uFF09\u5982\u671F\u53D1\u5E03\uFF0C\u8FD9\u4E2A\u7248\u672C\u53EF\u4EE5\u770B\u4F5C\u662F ES6.1 \u7248\uFF0C\u56E0\u4E3A\u4E24\u8005\u7684\u5DEE\u5F02\u975E\u5E38\u5C0F\uFF08\u53EA\u65B0\u589E\u4E86\u6570\u7EC4\u5B9E\u4F8B\u7684<code>includes</code>\u65B9\u6CD5\u548C\u6307\u6570\u8FD0\u7B97\u7B26\uFF09\uFF0C\u57FA\u672C\u4E0A\u662F\u540C\u4E00\u4E2A\u6807\u51C6\u3002\u6839\u636E\u8BA1\u5212\uFF0C2017 \u5E74 6 \u6708\u53D1\u5E03 ES2017 \u6807\u51C6\u3002</p><p>ES6 \u65E2\u662F\u4E00\u4E2A\u5386\u53F2\u540D\u8BCD\uFF0C\u4E5F\u662F\u4E00\u4E2A\u6CDB\u6307\uFF0C\u542B\u4E49\u662F 5.1 \u7248\u4EE5\u540E\u7684 JavaScript \u7684\u4E0B\u4E00\u4EE3\u6807\u51C6\uFF0C\u6DB5\u76D6\u4E86 ES2015 -&gt; \u5982\u4ECA \u7B49\u7B49\uFF0C\u800C ES2015 \u5219\u662F\u6B63\u5F0F\u540D\u79F0\uFF0C\u7279\u6307\u8BE5\u5E74\u53D1\u5E03\u7684\u6B63\u5F0F\u7248\u672C\u7684\u8BED\u8A00\u6807\u51C6\u3002\u6240\u4EE5ES6\u6CDB\u6307\u201C\u4E0B\u4E00\u4EE3 JavaScript \u8BED\u8A00\u201D\u3002</p></blockquote><h3 id="\u8868\u8FBE\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u8868\u8FBE\u58F0\u660E" aria-hidden="true">#</a> \u8868\u8FBE\u58F0\u660E</h3><ul><li><p>\u58F0\u660E</p><ul><li><p>\u58F0\u660E\u65B9\u9762\u80AF\u5B9A\u9003\u4E0D\u5F00var\u7684\u6570\u636E\u5B9A\u4E49</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>num<span class="token punctuation">)</span>  <span class="token comment">// 10 -&gt; var\u5B9A\u4E49\u7684\u6839\u53D8\u91CF\u4F1A\u5728window\u4E2D\u6302\u8F7D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>let\u547D\u4EE4\u7528\u4E8E\u58F0\u660E<strong>\u53D8\u91CF</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>num<span class="token punctuation">)</span> 
<span class="token comment">// undefined -&gt; let\u5B9A\u4E49\u7684\u5219\u4E0D\u4F1A\u6302\u8F7Dwindow\u4E2D,\u800C\u662F\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u4E2D\u6267\u884C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>const\u547D\u4EE4\u7528\u4E8E\u58F0\u660E<strong>\u5E38\u91CF</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> num 
<span class="token comment">// \u62A5\u9519:Uncaught SyntaxError: Missing initializer in const declaration  </span>
<span class="token comment">// const\u5B9A\u4E49\u6570\u636E\u540E\u9700\u8981\u7ACB\u523B\u8FDB\u884C\u8D4B\u503C </span>
<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">10</span> <span class="token comment">// \u6B63\u786E\u4E66\u5199\u65B9\u6CD5</span>
<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">20</span> 
<span class="token comment">// const\u5B9A\u4E49\u7684\u6570\u636E\u4E0D\u5141\u8BB8\u91CD\u590D\u5B9A\u4E49</span>
<span class="token comment">// \u62A5\u9519:Identifier &#39;num&#39; has already been declared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u58F0\u660E\u63D0\u5347</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">// \u4F7F\u7528const\u6216\u8005let\u6765\u5B9A\u4E49\u6570\u636E \u5728\u53D8\u91CF\u5B9A\u4E49\u4E4B\u524D\u4F7F\u7528\u5219\u4F1A\u76F4\u63A5\u62A5\u9519</span>
<span class="token comment">// ReferenceError: Cannot access &#39;num&#39; before initialization</span>
<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>testNum<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\u5219\u4E3A undefined \u5E76\u4E0D\u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u7EC8\u6B62</span>
<span class="token keyword">var</span> testNum <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="\u89E3\u6784\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6784\u8D4B\u503C" aria-hidden="true">#</a> \u89E3\u6784\u8D4B\u503C</h3>`,6),v=a(`<li><p>\u5B57\u7B26\u4E32\u89E3\u6784</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5B57\u7B26\u4E32\u89E3\u6784</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;\u65E9\u65E5\u9000\u4F11&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// \u65E9</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// \u65E5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// \u9000</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token comment">// \u4F11</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5BF9\u8C61\u89E3\u6784</p><ul><li><p>\u666E\u901A\u7528\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5BF9\u8C61\u89E3\u6784</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;\u65E9&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">&quot;\u65E5&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&quot;\u9000&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token string">&quot;\u4F11&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u5982\u679C\u4E0D\u662F\u7528\u89E3\u6784\u8D4B\u503C\u7684\u60C5\u51B5\u4E0B\u6211\u4EEC\u9700\u8981</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> obj<span class="token punctuation">.</span>a
<span class="token operator">...</span>
<span class="token keyword">const</span> d <span class="token operator">=</span> obj<span class="token punctuation">.</span>d
<span class="token comment">// \u4F7F\u7528\u89E3\u6784\u8D4B\u503C\u5219\u53EF\u4EE5\u5C06\u4EE3\u7801\u91CF\u6709\u6548\u7684\u7F29\u51CF</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// \u65E9</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// \u65E5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// \u9000</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token comment">// \u4F11</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u91CD\u65B0\u547D\u540D\uFF1A\u5982\u679C\u6570\u503C\u540D\u548C\u81EA\u8EAB\u60F3\u8981\u5B9A\u4E49\u7684\u53D8\u91CF\u540D\u4E0D\u540C\u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u5728\u89E3\u6784\u65F6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5982\u679C\u89E3\u6784\u8D4B\u503C\u7684\u6570\u636E\u5C5E\u6027\u540D\u548C\u81EA\u5DF1\u60F3\u8981\u5B9A\u4E49\u7684\u53D8\u91CF\u540D\u4E0D\u540C\uFF0C\u5219\u53EF\u4EE5\u91CD\u65B0\u8D4B\u503C\u5982\u4E0B\u6240\u793A</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span>study<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e <span class="token punctuation">}</span> <span class="token operator">=</span> obj
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>study<span class="token punctuation">)</span> <span class="token comment">// \u65E9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u9ED8\u8BA4\u503C\uFF1A\u5728\u8D4B\u503C\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u51FA\u73B0undefined\u6216\u8005null\u7684\u65F6\u5019\uFF0C\u4E3A\u4E86\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u7684\u65B9\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token operator">=</span> obj
<span class="token comment">// \u8BBE\u7F6E\u9ED8\u8BA4\u503C\u7684\u65B9\u5F0F\u662F\u5F53\u89E3\u6784\u540E\u6CA1\u6709\u503C\u4F20\u5165\u7684\u60C5\u51B5\u4E0B,</span>
<span class="token comment">// \u4F1A\u6709\u4E00\u4E2A\u9ED8\u8BA4\u503C\u4FDD\u5E95\u907F\u514D\u7A0B\u5E8F\u51FA\u73B0\u610F\u60F3\u4E0D\u5230\u7684\u9519\u8BEF\u3002</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6613\u9519\u70B9\uFF1A\u88AB\u89E3\u6784\u7684\u5BF9\u8C61\u4E0D\u80FD\u4E3Aundefined\u6216\u8005null\u5426\u5219\u4F1A\u62A5\u9519\u7EC8\u6B62\u4EE3\u7801\u8FD0\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">undefined</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span>study<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: Cannot destructure property &#39;a&#39; of &#39;obj&#39; as it is undefined.</span>

<span class="token comment">// \u89E3\u51B3\u65B9\u6848 \u901A\u8FC7\u4F7F\u7528\u6216\u8FD0\u7B97\u7B26\u7ED9\u5B9A\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u6216\u8005\u9ED8\u8BA4\u5BF9\u8C61</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span>study<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e <span class="token punctuation">}</span> <span class="token operator">=</span> obj <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>\u6570\u7EC4\u89E3\u6784</p><ul><li><p>\u57FA\u7840\u7528\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d <span class="token punctuation">]</span> <span class="token operator">=</span> arr
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F20\u9012\u9ED8\u8BA4\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
<span class="token comment">// \u6B64\u6570\u7EC4\u5171\u6709\u4E09\u9879 5 5 \u7A7A</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token punctuation">]</span> <span class="token operator">=</span> arr
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
<span class="token comment">// \u4F20\u9012\u9ED8\u8BA4\u503C\u540E\u5219\u4F1A\u81EA\u52A8\u5C06\u9ED8\u8BA4\u503C\u4F20\u5165</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">]</span> <span class="token operator">=</span> arr
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4EA4\u6362\u53D8\u91CF\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a:&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a:2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;b:&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b:1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>\u51FD\u6570\u89E3\u6784\u8D4B\u503C</p><ul><li><p>\u51FD\u6570\u6570\u7EC4\u89E3\u6784</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0,1</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100,100</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0,100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u51FD\u6570\u5BF9\u8C61\u89E3\u6784\u8D4B\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>y<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 0 1</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">500</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 500 1</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 0 100</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 100 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li>`,4),b=s("\u5269\u4F59\u53C2\u6570"),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters",target:"_blank",rel:"noopener noreferrer"},f=s("MDN"),y=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y<span class="token punctuation">,</span><span class="token operator">...</span>rest</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5176\u4E2D ... \u4E3A\u6269\u5C55\u8FD0\u7B97\u7B26 \u540E\u7EED\u4F1A\u8FDB\u884C\u4ECB\u7ECD</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">// 1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token comment">// 2</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span> <span class="token comment">// [3,4,5,6,7,8,9]</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p><strong>undefined</strong>\u548C<strong>null</strong>\u65E0\u6CD5\u8F6C\u5316\u4E3A\u5BF9\u8C61\uFF0C\u56E0\u6B64\u65E0\u6CD5\u8FDB\u884C\u89E3\u6784</p><p>\u5982\u679C\u89E3\u6784\u4E0D\u6210\u529F\uFF08\u6CA1\u6709\u503C\u53EF\u4EE5\u63A5\u6536\uFF09\u7684\u60C5\u51B5\u4E0B\uFF0C\u53D8\u91CF\u83B7\u53D6\u5230\u7684\u503C\u4E3A<strong>undefined</strong></p><p>\u89E3\u6784\u8D4B\u503C\u7684\u89C4\u5219\uFF1A\u53EA\u8981\u7B49\u53F7\u53F3\u8FB9\u7684\u503C\u4E0D\u662F\u5BF9\u8C61\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u4F18\u5148\u8F6C\u6362\u4E3A\u5BF9\u8C61\u7684\u683C\u5F0F</p></div>`,2);function h(j,w){const p=l("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[r,n("a",k,[d,t(p)])]),m,n("ul",null,[v,n("li",null,[n("p",null,[b,n("a",g,[f,t(p)])]),y])])])}var x=e(i,[["render",h],["__file","ES6.html.vue"]]);export{x as default};
