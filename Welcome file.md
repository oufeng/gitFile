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
<p><code>简短的介绍</code> 1~3句能够概括整个主题的话。想象你自己是一个完全的新手，刚刚接触你写的《Extending Foo》，并且需要知道你认为理所当然的最基本的假设。什么是Foo？我为什么要扩展它？。</p>
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
<h2 id="尾随空白">尾随空白</h2>
<p>不要使用尾随空格，用尾随的反斜杠代替。</p>
<p>虽然 <a href="https://link.jianshu.com?t=http://spec.commonmark.org/0.20/#hard-line-breaks">CommonMark spec</a> 判定一行末尾的两个空格等同于插入一个<code>&lt;br/&gt;</code>标签，但很多文件系统会有提交前的尾部空格检查，很多IDE也会把尾部空格清理掉。</p>
<p>最好的方法是完全避免使用<code>&lt;br/&gt;</code>的需要，习惯用新行表示段落。</p>
<h2 id="标题">标题</h2>
<h3 id="atx风格标题">ATX风格标题</h3>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token title important"><span class="token punctuation">##</span> Heading 2</span>
</code></pre>
<p>含有“=”或“-”下划线的标题维护起来会很讨厌，而且和其他标题语法不兼容。用户不知道“—”的意思是H1还是H2。</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token title important">Heading - do you remember what level? DO NOT DO THIS.
<span class="token punctuation">---------</span></span>
</code></pre>
<h3 id="标题中的间隔">标题中的间隔</h3>
<p>请在<code>#</code>后加空格，并和上下文保持间隔：</p>
<pre class=" language-markdown"><code class="prism  language-markdown">...text before.

<span class="token title important"><span class="token punctuation">#</span> Heading 1</span>

Text after...
</code></pre>
<p>缺少间隔会让源码阅读起来有点困难：</p>
<pre class=" language-markdown"><code class="prism  language-markdown">...text before.

<span class="token title important"><span class="token punctuation">#</span>Heading 1</span>
Text after... DO NOT DO THIS.
</code></pre>
<h2 id="列表">列表</h2>
<h3 id="对长列表使用“懒人编号法”">对长列表使用“懒人编号法”</h3>
<p>Markdown非常智能，可以让生成的HTML文件正确排列你的有序列表。对于比较长的、可能会修改的列表（尤其是很长的嵌套列表），请使用“懒人编号法”：</p>
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
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">1.</span>  2 spaces after a numbered list.
<span class="token code keyword" spellcheck="false">    4 space indent for wrapped text.</span>
<span class="token list punctuation">2.</span>  2 spaces again.

<span class="token list punctuation">*</span>   3 spaces after a bullet.
<span class="token code keyword" spellcheck="false">    4 space indent for wrapped text.</span>
<span class="token code keyword" spellcheck="false">    1.  2 spaces after a numbered list.</span>
<span class="token code keyword" spellcheck="false">        8 space indent for the wrapped text of a nested list.</span>
<span class="token code keyword" spellcheck="false">    2.  Looks nice, don't it?</span>
<span class="token list punctuation">*</span>   3 spaces after a bullet.
</code></pre>
<p>The following works, but it’s very messy:</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">*</span> One space,
with no indent for wrapped text.
<span class="token code keyword" spellcheck="false">     1. Irregular nesting... DO NOT DO THIS.</span>
</code></pre>
<p>Even when there’s no nesting, using the 4 space indent makes layout consistent<br>
for wrapped text:</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">*</span>   Foo,
<span class="token code keyword" spellcheck="false">    wrapped.</span>

<span class="token list punctuation">1.</span>  2 spaces
<span class="token code keyword" spellcheck="false">    and 4 space indenting.</span>
<span class="token list punctuation">2.</span>  2 spaces again.
</code></pre>
<p>However, when lists are small, not nested, and a single line, one space can<br>
suffice for both kinds of lists:</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">*</span> Foo
<span class="token list punctuation">*</span> Bar
<span class="token list punctuation">*</span> Baz.

<span class="token list punctuation">1.</span> Foo.
<span class="token list punctuation">2.</span> Bar.
</code></pre>
<h2 id="code">Code</h2>
<h3 id="inline">Inline</h3>
<p>`Backticks` designate <code>inline code</code>, and will render all wrapped content<br>
literally. Use them for short code quotations and field names:</p>
<pre class=" language-markdown"><code class="prism  language-markdown">You'll want to run <span class="token code keyword" spellcheck="false">`really_cool_script.sh arg`</span>.

Pay attention to the <span class="token code keyword" spellcheck="false">`foo_bar_whammy`</span> field in that table.
</code></pre>
<p>Use inline code when referring to file types in an abstract sense, rather than a<br>
specific file:</p>
<pre class=" language-markdown"><code class="prism  language-markdown">Be sure to update your <span class="token code keyword" spellcheck="false">`README.md`</span>!
</code></pre>
<p>Backticks are the most common approach for “escaping” Markdown metacharacters;<br>
in most situations where escaping would be needed, code font just makes sense<br>
anyway.</p>
<h3 id="codeblocks">Codeblocks</h3>
<p>For code quotations longer than a single line, use a codeblock:</p>
<pre>```python
def Foo(self, bar):
  self.bar = bar
```
</pre>
<h4 id="declare-the-language">Declare the language</h4>
<p>It is best practice to explicitly declare the language, so that neither the<br>
syntax highlighter nor the next editor must guess.</p>
<h4 id="indented-codeblocks-are-sometimes-cleaner">Indented codeblocks are sometimes cleaner</h4>
<p>Four-space indenting is also interpreted as a codeblock. These can look<br>
cleaner and be easier to read in source, but there is no way to specify the<br>
language. We encourage their use when writing many short snippets:</p>
<pre class=" language-markdown"><code class="prism  language-markdown">You'll need to run:

<span class="token code keyword" spellcheck="false">    bazel run :thing -- --foo</span>

And then:

<span class="token code keyword" spellcheck="false">    bazel run :another_thing -- --bar</span>

And again:

<span class="token code keyword" spellcheck="false">    bazel run :yet_again -- --baz</span>
</code></pre>
<h4 id="escape-newlines">Escape newlines</h4>
<p>Because most commandline snippets are intended to be copied and pasted directly<br>
into a terminal, it’s best practice to escape any newlines. Use a single<br>
backslash at the end of the line:</p>
<pre>```shell
bazel run :target -- --flag --foo=longlonglonglonglongvalue \
--bar=anotherlonglonglonglonglonglonglonglonglonglongvalue
```
</pre>
<h4 id="nest-codeblocks-within-lists">Nest codeblocks within lists</h4>
<p>If you need a codeblock within a list, make sure to indent it so as to not break<br>
the list:</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">*</span>   Bullet.

<span class="token code keyword" spellcheck="false">    ```c++</span>
<span class="token code keyword" spellcheck="false">    int foo;</span>
<span class="token code keyword" spellcheck="false">    ```</span>

<span class="token list punctuation">*</span>   Next bullet.
</code></pre>
<p>You can also create a nested code block with 4 spaces. Simply indent 4<br>
additional spaces from the list indentation:</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token list punctuation">*</span>   Bullet.

<span class="token code keyword" spellcheck="false">        int foo;</span>

<span class="token list punctuation">*</span>   Next bullet.
</code></pre>
<h2 id="links">Links</h2>
<p>Long links make source Markdown difficult to read and break the 80 character<br>
wrapping. <strong>Wherever possible, shorten your links</strong>.</p>
<h3 id="use-informative-markdown-link-titles">Use informative Markdown link titles</h3>
<p>Markdown link syntax allows you to set a link title, just as HTML does. Use it<br>
wisely.</p>
<p>Titling your links as “link” or “here” tells the reader precisely nothing when<br>
quickly scanning your doc and is a waste of space:</p>
<pre class=" language-markdown"><code class="prism  language-markdown">See the syntax guide for more info: [link](syntax<span class="token italic"><span class="token punctuation">_</span>guide.md).
Or, check out the style guide [here](style<span class="token punctuation">_</span></span>guide.md).
DO NOT DO THIS.
</code></pre>
<p>Instead, write the sentence naturally, then go back and wrap the most<br>
appropriate phrase with the link:</p>
<pre class=" language-markdown"><code class="prism  language-markdown">See the [syntax guide](syntax<span class="token italic"><span class="token punctuation">_</span>guide.md) for more info.
Or, check out the [style guide](style<span class="token punctuation">_</span></span>guide.md).
</code></pre>
<h2 id="images">Images</h2>
<p>Use images sparingly, and prefer simple screenshots. This guide is designed<br>
around the idea that plain text gets users down to the business of communication<br>
faster with less reader distraction and author procrastination. However, it’s<br>
sometimes very helpful to show what you mean.</p>
<p>See <a href="https://gerrit.googlesource.com/gitiles/+/master/Documentation/markdown.md#Images">image syntax</a>.</p>
<h2 id="prefer-lists-to-tables">Prefer lists to tables</h2>
<p>Any tables in your Markdown should be small. Complex, large tables are difficult<br>
to read in source and most importantly, <strong>a pain to modify later</strong>.</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token title important">Fruit | Attribute | Notes
<span class="token punctuation">---</span></span> | --- | --- | ---
Apple | <span class="token url">[Juicy](https://example.com/SomeReallyReallyReallyReallyReallyReallyReallyReallyLongQuery)</span>, Firm, Sweet | Apples keep doctors away.
Banana | <span class="token url">[Convenient](https://example.com/SomeDifferentReallyReallyReallyReallyReallyReallyReallyReallyLongQuery)</span>, Soft, Sweet | Contrary to popular belief, most apes prefer mangoes.

DO NOT DO THIS
</code></pre>
<p><a href="#lists">Lists</a> and subheadings usually suffice to present the same information<br>
in a slightly less compact, though much more edit-friendly way:</p>
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
<p>However, there are times when a small table is called for:</p>
<pre class=" language-markdown"><code class="prism  language-markdown"><span class="token title important">Transport | Favored by | Advantages
<span class="token punctuation">---</span></span> | --- | ---
Swallow | Coconuts | Otherwise unladen
Bicycle | Miss Gulch | Weatherproof
X-34 landspeeder | Whiny farmboys | Cheap since the X-38 came out
</code></pre>
<h2 id="strongly-prefer-markdown-to-html">Strongly prefer Markdown to HTML</h2>
<p>Please prefer standard Markdown syntax wherever possible and avoid HTML hacks.<br>
If you can’t seem to accomplish what you want, reconsider whether you really<br>
need it. Except for <a href="#prefer-lists-to-tables">big tables</a>, Markdown meets almost<br>
all needs already.</p>
<p>Every bit of HTML or Javascript hacking reduces the readability and portability.<br>
This in turn limits the usefulness of integrations with<br>
other tools, which may either present the source as plain text or render it. See<br>
<a href="philosophy.md">Philosophy</a>.</p>
<p>Gitiles does not render HTML.</p>

