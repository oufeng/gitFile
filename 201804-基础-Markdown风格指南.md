---


---

<h1 id="markdown风格指南">Markdown风格指南</h1>
<p>Markdown的出色之处主要在于能够编写纯文本并且获得出色的格式化输出结果。为了让下一位作者更方便阅读和编辑，Markdown应尽可能简单并与整个资料库保持一致。</p>
<p>我们想要平衡以下三个目标:</p>
<ol>
<li><em>源代码具有良好的可读性和可移植性。</em></li>
<li><em>Markdown文件能随时间推移在团队之间保持可维护性。</em></li>
<li><em>语法简单且容易记忆。</em></li>
</ol>
<p>内容:</p>
<ol>
<li><a href="#%E6%96%87%E6%A1%A3%E5%B8%83%E5%B1%80">文档布局</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E8%A1%8C%E9%99%90%E5%88%B6">字符行限制</a></li>
<li><a href="#%E5%B0%BE%E9%9A%8F%E7%A9%BA%E6%A0%BC">尾随空格</a></li>
<li><a href="#%E6%A0%87%E9%A2%98">标题</a>
<ol>
<li><a href="#ATX%E9%A3%8E%E6%A0%BC%E6%A0%87%E9%A2%98">ATX风格标题</a></li>
<li><a href="#%E6%A0%87%E9%A2%98%E4%B8%AD%E7%9A%84%E9%97%B4%E9%9A%94">标题中的间隔</a></li>
</ol>
</li>
<li><a href="#%E5%88%97%E8%A1%A8">列表</a>
<ol>
<li><a href="#%E5%AF%B9%E9%95%BF%E5%88%97%E8%A1%A8%E4%BD%BF%E7%94%A8%E6%87%92%E4%BA%BA%E7%BC%96%E5%8F%B7%E6%B3%95">对长列表使用懒人编号法</a></li>
<li><a href="#%E5%B5%8C%E5%A5%97%E5%88%97%E8%A1%A8%E9%97%B4%E8%B7%9D">嵌套列表间距</a></li>
</ol>
</li>
<li><a href="#%E4%BB%A3%E7%A0%81">代码</a>
<ol>
<li><a href="#%E8%A1%8C%E5%86%85%E4%BB%A3%E7%A0%81">行内代码</a></li>
<li><a href="#%E4%BB%A3%E7%A0%81%E5%9D%97">代码块</a></li>
<li><a href="#%E8%AF%AD%E8%A8%80%E5%A3%B0%E6%98%8E">语言声明</a></li>
<li><a href="#%E9%81%BF%E5%85%8D%E6%8D%A2%E8%A1%8C">避免换行</a></li>
<li><a href="#%E5%88%97%E8%A1%A8%E5%86%85%E5%B5%8C%E4%BB%A3%E7%A0%81%E5%9D%97">列表内嵌代码块</a></li>
</ol>
</li>
<li><a href="#%E9%93%BE%E6%8E%A5">链接</a>
<ol>
<li><a href="#%E4%BD%BF%E7%94%A8%E5%85%B7%E6%9C%89%E6%8F%90%E7%A4%BA%E6%80%A7%E7%9A%84%E9%93%BE%E6%8E%A5%E6%A0%87%E9%A2%98">使用具有提示性的链接标题</a></li>
</ol>
</li>
<li><a href="#%E5%9B%BE%E5%83%8F">图像</a></li>
<li><a href="#%E7%9B%B8%E6%AF%94%E5%9B%BE%E7%89%87%E4%BC%98%E5%85%88%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8">相比图片优先使用列表</a></li>
<li><a href="#%E7%9B%B8%E6%AF%94HTML%E4%BC%98%E5%85%88%E4%BD%BF%E7%94%A8Markdown">相比HTML优先使用Markdown</a></li>
</ol>
<h2 id="文档布局">文档布局</h2>
<p>一般情况下，大多数文档会采用下面几种布局：</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token title important"><span class="token punctuation">#</span> 文档标题</span>

简短的介绍

[TOC]

<span class="token title important"><span class="token punctuation">##</span> 二级标题</span>

二级标题的内容

<span class="token title important"><span class="token punctuation">##</span> 插入外链</span>

<span class="token list punctuation">*</span> https://link-to-more-info
</code></pre>
<ol>
<li>
<p><code># 文档标题</code>: 第一个标题应当是一个一级标题，并且应该尽可能和文件名称保持一致。第一个一级标题会被用作页面<code>标题</code>。</p>
</li>
<li>
<p><code>作者</code>: <em>可选项</em>. 如果你想要说明对文档的所有权或者它是你的得意之作，就把你自己放到标题下吧，虽然版本修订记录通常就足够说明这一点了。</p>
</li>
<li>
<p><code>简短的介绍</code>:1~3句能够概括整个主题的话。想象你自己是一个完全的新手，刚刚接触你写的《Extending Foo》，并且需要知道你认为理所当然的最基本的假设。什么是Foo？我为什么要扩展它？</p>
</li>
<li>
<p><code>[TOC]</code>: 如果您使用支持目录的主机，例如Gitiles，请<code>[TOC]</code>在简短介绍之后加以说明。请参阅<br>
<a href="https://gerrit.googlesource.com/gitiles/+/master/Documentation/markdown.md#Table-of-contents">TOC文档</a>。</p>
</li>
<li>
<p><code>## 二级标题</code>: 你剩下的标题应该从二级标题开始开始使用。</p>
</li>
<li>
<p><code>## 另见</code>: 在底部为想了解更多相关知识或没有找到所需知识的用户放置各种链接。</p>
</li>
</ol>
<h2 id="字符行限制">字符行限制</h2>
<p>长URL和表是常见类型。（标题可能到导致过长，但我们鼓励保持简短）。否则，请修改您的文字：</p>
<pre class=" language-markdown"><code class="prism  language-markdown">Lorem ipsum dolor sit amet, nec eius volumus patrioque cu, nec et commodo
hendrerit, id nobis saperet fuisset ius.

<span class="token list punctuation">*</span>   Malorum moderatius vim eu. In vix dico persecuti. Te nam saperet percipitur
<span class="token code keyword" spellcheck="false">    interesset. See the [foo docs](https://gerrit.googlesource.com/gitiles/+/master/Documentation/markdown.md).</span>
</code></pre>
<p>通常在长链接前新起一行有利于可读性，并且能够最小化链接的溢出：</p>
<pre class=" language-markdown"><code class="prism  language-markdown">Lorem ipsum dolor sit amet. See the
<span class="token url">[foo docs](https://gerrit.googlesource.com/gitiles/+/master/Documentation/markdown.md)</span>
for details.
</code></pre>
<h2 id="尾随空格">尾随空格</h2>
<p>不要使用尾随空格，用尾随的反斜杠代替。</p>
<p>虽然 <a href="http://spec.commonmark.org/0.20/#hard-line-breaks">CommonMark spec</a> 判定一行末尾的两个空格等同于插入一个<code>&lt;br/&gt;</code>标签，但很多文件系统会有提交前的尾部空格检查，很多IDE也会把尾部空格清理掉。</p>
<p>最好的方法是完全避免使用<code>&lt;br/&gt;</code>的需要，习惯用新行表示段落。</p>
<h2 id="标题">标题</h2>
<h3 id="atx风格标题">ATX风格标题</h3>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token title important"><span class="token punctuation">##</span> Heading 2</span>
</code></pre>
<p>含有"=“或”-“下划线的标题维护起来会很讨厌，而且和其他标题语法不兼容。用户不知道”—"的意思是H1还是H2。</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token title important">Heading - do you remember what level? DO NOT DO THIS.
<span class="token punctuation">---------</span></span>
</code></pre>
<h3 id="标题中的间隔">标题中的间隔</h3>
<p>请在<code>#</code>后加空格，并和上下文保持间隔：</p>
<pre class=" language-markdown"><code class="prism  language-markdown">...text before。

<span class="token title important"><span class="token punctuation">#</span> Heading 1</span>

Text after...
</code></pre>
<p>缺少间隔会让源码阅读起来有点困难：</p>
<pre class=" language-markdown"><code class="prism  language-markdown">...text before。

<span class="token title important"><span class="token punctuation">#</span>Heading 1</span>

Text after... DO NOT DO THIS.
</code></pre>
<h2 id="列表">列表</h2>
<h3 id="对长列表使用懒人编号法">对长列表使用"懒人编号法"</h3>
<p>Markdown非常智能，可以让生成的HTML文件正确排列你的有序列表。对于比较长的、可能会修改的列表（尤其是很长的嵌套列表），请使用"懒人编号法"：</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">1.</span>  Foo.
<span class="token list punctuation">1.</span>  Bar.
<span class="token code keyword" spellcheck="false">    1.  Foofoo.</span>
<span class="token code keyword" spellcheck="false">    1.  Barbar.</span>
<span class="token list punctuation">1.</span>  Baz.
</code></pre>
<p>而对于比较短的、很少修改的有序列表，按顺序标号更好，因为这样源码读起来更加容易：</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">1.</span>  Foo.
<span class="token list punctuation">2.</span>  Bar.
<span class="token list punctuation">3.</span>  Baz.
</code></pre>
<h3 id="嵌套列表间距">嵌套列表间距</h3>
<p>嵌套列表时，对数字开头的列表和星号开头的列表都使用四个空格的缩进：</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">1.</span>  编号列表后要留两个空格。
<span class="token code keyword" spellcheck="false">    包含文本要留4个空格。</span>
<span class="token list punctuation">2.</span>  再一次两个空格。

<span class="token list punctuation">*</span>   星号后面留3个空格。
<span class="token code keyword" spellcheck="false">    包含文本要留4个空格。</span>
<span class="token code keyword" spellcheck="false">    1.  编号列表后要留两个空格。</span>
<span class="token code keyword" spellcheck="false">        嵌套列表的包含文本要留8个空格</span>
<span class="token code keyword" spellcheck="false">    2.  看起来不错，不是吗？</span>
<span class="token list punctuation">*</span>   星号后面留3个空格。
</code></pre>
<p>下面这种写法也能奏效，但看起来很乱：</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">*</span> 一个空格,
包含文本没有缩进。
<span class="token code keyword" spellcheck="false">     1. 没有嵌套规则... 不要这样做。</span>
</code></pre>
<p>即使没有嵌套，使用四个空格的缩进也会让包含文本的布局显得更加连续：</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">*</span>   Foo,
<span class="token code keyword" spellcheck="false">    wrapped。</span>

<span class="token list punctuation">1.</span>  两个空格
<span class="token code keyword" spellcheck="false">    和4个空格缩进。</span>
<span class="token list punctuation">2.</span>  再一次两个空格。
</code></pre>
<p>当然，如果列表规模很小、没有嵌套、只有单行，那么单个空格也足够了：</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">*</span> Foo
<span class="token list punctuation">*</span> Bar
<span class="token list punctuation">*</span> Baz.

<span class="token list punctuation">1.</span> Foo.
<span class="token list punctuation">2.</span> Bar.
</code></pre>
<h2 id="代码">代码</h2>
<h3 id="单行代码">单行代码</h3>
<p>`反引号` 并将从字面上呈现所有包含的内容。将它们用于短代码引用和字段名称：</p>
<pre class=" language-markdown"><code class="prism  language-markdown">你想运行 <span class="token code keyword" spellcheck="false">`really_cool_script.sh arg`</span>。

请注意 <span class="token code keyword" spellcheck="false">`foo_bar_whammy`</span> 字段。
</code></pre>
<p>只在抽象意义上指明一个文件类型时，使用单行代码而不是一个具体的文件：</p>
<pre class=" language-markdown"><code class="prism  language-markdown">记得更新您的 <span class="token code keyword" spellcheck="false">`README.md`</span>!
</code></pre>
<p>反引号"转义"是Markdown元字符最常用的方法; 在大多数需要转义的情况下，任何代码字体的转义都是有必要的。</p>
<h3 id="代码块">代码块</h3>
<p>对于比单行更长的代码引用，请使用代码块：</p>
<p>&lt; pre &gt; <code>python def Foo （ self ， bar ）： self 。栏=酒吧</code> &lt;/预&gt;</p>
<h4 id="语言声明">语言声明</h4>
<p>语言声明是最好的实践，以便语法荧光笔和编辑器都不必猜测。</p>
<h4 id="缩进的代码块有时更干净">缩进的代码块有时更干净</h4>
<p>四空格缩进也被解释为一个代码块。这样可以看起来更干净，并且在源代码中更容易阅读，但是无法指定语言。我们鼓励他们在编写很多简短的代码片段时使用它们：</p>
<pre class=" language-markdown"><code class="prism  language-markdown">你需要运行:

<span class="token code keyword" spellcheck="false">    bazel run :thing -- --foo</span>

然后:

<span class="token code keyword" spellcheck="false">    bazel run :another_thing -- --bar</span>

再次:

<span class="token code keyword" spellcheck="false">    bazel run :yet_again -- --baz</span>
</code></pre>
<h4 id="换行符">换行符</h4>
<p>由于大多数命令行代码段要被复制并直接粘贴到终端中，所以最好避免任何换行符。而是在行尾使用一个反斜杠：</p>
<pre>```shell
bazel run :target -- --flag --foo=longlonglonglonglongvalue \
--bar=anotherlonglonglonglonglonglonglonglonglonglongvalue
```
</pre>
<h4 id="列表内嵌代码块">列表内嵌代码块</h4>
<p>如果你要在列表中内嵌代码块，使用缩进来确保它不会破坏列表：</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">*</span>   Bullet.

<span class="token code keyword" spellcheck="false">    ```c++</span>
<span class="token code keyword" spellcheck="false">    int foo;</span>
<span class="token code keyword" spellcheck="false">    ```</span>

<span class="token list punctuation">*</span>   Next bullet.
</code></pre>
<p>你也可以用4个空格来创建内嵌代码块，只需要从列表缩进处额外加4个空格：</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">*</span>   Bullet.

<span class="token code keyword" spellcheck="false">        int foo;</span>

<span class="token list punctuation">*</span>   Next bullet.
</code></pre>
<h2 id="链接">链接</h2>
<p>长链接使Markdown难以阅读源码并在达到80个字符时会换行。<strong>尽可能缩短您的链接</strong>。</p>
<h3 id="使用具有提示性的链接标题">使用具有提示性的链接标题</h3>
<p>Markdown链接语法允许你像HTML一样设置链接，但你要正确地使用它。</p>
<p>当读者快速浏览像"link"或"here"这样的链接标题时，他们完全得不到任何信息，这只是一种对空间的浪费。</p>
<pre class=" language-markdown"><code class="prism  language-markdown">有关更多信息，请参阅语法只能: [link](syntax<span class="token italic"><span class="token punctuation">_</span>guide.md)。
或者，查找这里的风格指南 [here](style<span class="token punctuation">_</span></span>guide.md)。
可是并不建议你这样做。
</code></pre>
<p>正确的做法应该是：先按文章的意思写好句子，再回过头找出最合适的短语，把它标记成链接。</p>
<pre class=" language-markdown"><code class="prism  language-markdown">有关更多信息，请参见 [语法指南](syntax<span class="token italic"><span class="token punctuation">_</span>guide.md) 。
或者，查看 [风格指南](style<span class="token punctuation">_</span></span>guide.md).
</code></pre>
<h2 id="图像">图像</h2>
<p>尽可能少用图像，多使用简单的截图。这一建议的意思是纯文本能够让用户更快了解到信息的内容，而减少分心和来自作者的拖延。<br>
尽管如此，有时候图片对于表明你的意思还是很有帮助的。</p>
<p>查阅 <a href="https://gerrit.googlesource.com/gitiles/+/master/Documentation/markdown.md#Images">image syntax</a>了结更多。</p>
<h2 id="相比表格优先选择列表">相比表格优先选择列表</h2>
<p>Markdown中的任何表格都应该很小。复杂的大型表格很难在源代码中阅读，最重要的是<strong>表格修改更痛苦</strong>。</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token title important">Fruit | Attribute | Notes
<span class="token punctuation">---</span></span> | --- | --- | ---
Apple | <span class="token url">[Juicy](https://example.com/SomeReallyReallyReallyReallyReallyReallyReallyReallyLongQuery)</span>, Firm, Sweet | Apples keep doctors away.
Banana | <span class="token url">[Convenient](https://example.com/SomeDifferentReallyReallyReallyReallyReallyReallyReallyReallyLongQuery)</span>, Soft, Sweet | Contrary to popular belief, most apes prefer mangoes.

不建议这样使用。
</code></pre>
<p><a href="https://github.com/google/styleguide/blob/gh-pages/docguide/style.md#lists">列表</a>和子标题通常足够你用来呈现相同的信息，不那么紧凑，却要容易编辑得多：</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token title important"><span class="token punctuation">##</span> Fruits</span>

<span class="token title important"><span class="token punctuation">###</span> Apple</span>

<span class="token list punctuation">*</span> <span class="token url">[Juicy](https://SomeReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyLongURL)</span>
<span class="token list punctuation">*</span> Firm
<span class="token list punctuation">*</span> Sweet

Apples keep doctors away.

<span class="token title important"><span class="token punctuation">###</span> Banana</span>

<span class="token list punctuation">*</span> <span class="token url">[Convenient](https://example.com/SomeDifferentReallyReallyReallyReallyReallyReallyReallyReallyLongQuery)</span>
<span class="token list punctuation">*</span> Soft
<span class="token list punctuation">*</span> Sweet

Contrary to popular belief, most apes prefer mangoes.
</code></pre>
<p>但是，有时候小型表格还是很有用的。</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token title important">Transport | Favored by | Advantages
<span class="token punctuation">---</span></span> | --- | ---
Swallow | Coconuts | Otherwise unladen
Bicycle | Miss Gulch | Weatherproof
X-34 landspeeder | Whiny farmboys | Cheap since the X-38 came out
</code></pre>
<h2 id="相比html优先使用markdown语法">相比HTML优先使用Markdown语法</h2>
<p>尽可能使用标准Markdown语法，避免嵌入使用HTML。如果你无法实现你想要的效果，再好好考虑一下你是否真的需要它。因为除了大型表格，Markdown几乎已经可以满足任何需求。</p>
<p>任何HTML或Javascript的潜入都会降低可读性和可移植性。这反过来又限制了与其他工具集成的实用性，这些工具可能会将源文件呈现为纯文本。见 <a href="https://github.com/google/styleguide/blob/gh-pages/docguide/philosophy.md">哲学</a>。</p>
<p>Gitiles不会呈现HTML。</p>
<h2 id="参考">参考</h2>
<ul>
<li><a href="https://github.com/google/styleguide/blob/gh-pages/docguide/style.md">https://github.com/google/styleguide/blob/gh-pages/docguide/style.md</a></li>
<li><a href="https://www.jianshu.com/p/3beac9fd6496">https://www.jianshu.com/p/3beac9fd6496</a></li>
</ul>

