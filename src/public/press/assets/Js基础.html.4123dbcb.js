import{_ as n,o as s,c as a,e as t}from"./app.0512a451.js";const p={},o=t(`<h1 id="js\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#js\u57FA\u7840" aria-hidden="true">#</a> Js\u57FA\u7840</h1><h3 id="\u7ED1\u5B9Athis\u6307\u5411" tabindex="-1"><a class="header-anchor" href="#\u7ED1\u5B9Athis\u6307\u5411" aria-hidden="true">#</a> \u7ED1\u5B9Athis\u6307\u5411</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6556\u5174&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&quot;?&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token string">&quot;\u98CE\u66B4\u9F99&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u59D3\u540D</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u5E74\u9F84:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u6280\u80FD:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>skill<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u91D1\u989D:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>price<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u59D3\u540D\u6556\u5174,\u5E74\u9F84:?,\u6280\u80FD:\u98CE\u66B4\u9F99,\u91D1\u989D:undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5BF9\u8C61\u4E2D\u4F7F\u7528this\u6307\u5411\u4E3A\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\uFF0C\u5F53\u5BF9\u8C61\u4E2D\u82E5\u4E0D\u5B58\u5728\u8BE5\u5C5E\u6027\u5219\u4E3Aundefined</p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7bind\u3001call\u3001apply\u6765\u8FDB\u884C\u7684\u53C2\u6570\u6539\u53D8\uFF0C\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> anger <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5E0C\u74E6\u5A1C&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token string">&quot;\u55B7\u706B\u9F99&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> money <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u827E\u8FBE\u65AF&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&quot;?&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token string">&quot;\u5927\u9E4F\u5C55\u7FC5&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u59D3\u540D\u6556\u5174,\u5E74\u9F84:?,\u6280\u80FD:\u98CE\u66B4\u9F99,\u91D1\u989D:undefined</span>
<span class="token comment">// bind \u76F8\u8F83\u4E8Ecall\u4E0Eapply\u7684\u4F7F\u7528\uFF0C\u591A\u51FA\u6765\u4E86\u4E00\u4E2A\u62EC\u53F7\u8FD0\u884C</span>
obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>anger<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u59D3\u540D\u5E0C\u74E6\u5A1C,\u5E74\u9F84:18,\u6280\u80FD:\u55B7\u706B\u9F99,\u91D1\u989D:8</span>
obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>anger<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u59D3\u540D\u5E0C\u74E6\u5A1C,\u5E74\u9F84:18,\u6280\u80FD:\u55B7\u706B\u9F99,\u91D1\u989D:8</span>
obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u59D3\u540D\u827E\u8FBE\u65AF,\u5E74\u9F84:?,\u6280\u80FD:\u5927\u9E4F\u5C55\u7FC5,\u91D1\u989D:7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E09\u79CD\u6539\u53D8this\u6307\u5411\u7684\u65B9\u6CD5\u62EC\u53F7\u5185\u90FD\u662F\u4F20\u5165\u5BF9\u5E94\u9700\u8981\u7ED1\u5B9A\u7684\u5BF9\u8C61\u540D\u79F0\uFF0C\u4E4D\u4E00\u770B\u597D\u50CF\u662F\u76F8\u540C\u7684\uFF0C\u4F46\u662F\u8FD8\u662F\u6709\u7EC6\u5FAE\u7684\u4E0D\u540C\u4E4B\u5904\u3002</p><ul><li><p>call\u7684\u540E\u7EED\u53C2\u6570\u4F20\u9012\u53EA\u9700\u8981\u50CF\u6211\u4EEC\u4F20\u9012\u591A\u4E2A\u53C2\u6570\u4E00\u6837\u8FDB\u884C\u4F20\u9012\u5373\u53EF\u3002\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
     <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u59D3\u540D</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u5E74\u9F84:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u6280\u80FD:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>skill<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u91D1\u989D:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>price<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u5B9A\u4F4D:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>position<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>anger<span class="token punctuation">,</span><span class="token string">&#39;\u8089\u76FE&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u59D3\u540D\u5E0C\u74E6\u5A1C,\u5E74\u9F84:18,\u6280\u80FD:\u55B7\u706B\u9F99,\u91D1\u989D:8,\u5B9A\u4F4D:\u8089\u76FE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>apply\u7684\u540E\u7EED\u53C2\u6570\u4F20\u9012\u5219\u9700\u8981\u4F7F\u7528\u6570\u7EC4\u7684\u65B9\u5F0F\u8FDB\u884C\u4F20\u9012\u3002\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>money<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;\u8089\u76FE&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u59D3\u540D\u827E\u8FBE\u65AF,\u5E74\u9F84:?,\u6280\u80FD:\u5927\u9E4F\u5C55\u7FC5,\u91D1\u989D:7,\u5B9A\u4F4D:\u8089\u76FE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>bind\u5219\u4E0Ecall\u7684\u53C2\u6570\u4F20\u9012\u65B9\u5F0F\u76F8\u540C\u3002\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&#39;\u6CD5\u5E08&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u59D3\u540D\u6556\u5174,\u5E74\u9F84:?,\u6280\u80FD:\u98CE\u66B4\u9F99,\u91D1\u989D:undefined,\u5B9A\u4F4D:\u6CD5\u5E08</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,8),e=[o];function c(i,l){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","Js\u57FA\u7840.html.vue"]]);export{r as default};
