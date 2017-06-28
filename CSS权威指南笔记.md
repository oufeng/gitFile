## 第一章：CSS和文档
> * CSS分替换元素和非替换元素
> * CSS2.1还使用另外两种基本元素类型，块级元素和行内元素

## 第二章：选择器
> * 属性选择器<br>
    **H1[class]{color:silver;}** `所有拥有类的h1元素`<br>
    **input[type=button]{color:red}** `所有type=button的input元素`<br><br>
> * 子串匹配属性选择器<br>
    **[foo^="red"]** `选择foo属性以red开头的元素`<br>
    **[foo$="red"]** `选择foo属性以red结尾的元素`<br>
    **[foo\*="red"]** `选择foo属性包含red的元素`<br><br>
> * 特定属性选择类型<br>
    **img[src |="figure"]** `以figure开头或者等于figure的属性`<br><br>
> * 区分后代元素以及筛选相同匹配的元素<br>
    **div.sidebar{color:red}** `匹配类名为sidebar的div元素，匹配的标签肯定是div元素`<br>
    **div .sidebar{color:red}** `中间有空格，匹配div元素中类名为sidebar的后代元素，匹配的标签不一定是div元素`<br><br>
> * 兄弟元素，个人理解为只能选择身后的兄弟元素<br>
    **h1 + p** `匹配紧接着h1元素的P元素`<br><br>
> * 伪类和伪元素<br>
    **静态**<br>
    **a:link{color:red;}** `匹配超链接`<br>
    **a:visited{color:red;}** `匹配已经访问过的超链接`<br>
    **动态**<br>
    **a:focus{color:red;}** `获取焦点`<br>
    **a:hover{color:red;}** `鼠标停留`<br>
    **a:active{color:red;}** `激活状态，鼠标点击与释放之间发生的事件`<br>
    **a:visited{color:red;}** `匹配已经访问过的超链接`<br>
    `出场顺序最好不要变,link,visited,focus,hover,active`<br>
    **选择父元素的首个子元素**<br>
    **p:first-child{font-weigth:bold}** `匹配首元素系p的元素`<br>
    **伪元素选择器**<br>
    **p:first-letter{color:red}** `设置块级元素首字母的样式`<br>
    **p:first-line{color:red}** `设置块级元素第一行文字的样式`<br>
    **p:before {content:"}}"；color:red}** `前面加一对红色中括号`<br>
    **p:after {content:"}}"；color:red}** `后面加一对红色中括号`<br>
    
## 第三章：结构和层叠
> * 选择器的特殊性(样式冲突时如何选择的问题)<br>
    **id属性值 加 100**<br>
    **类、属性、伪类 加 10**<br>
    **标签、伪元素 加 1**<br>
    **结合符和通配选择器 加 0**<br><br>
    **h1{color:red}             //1**<br>
	**body h1{color:red}        //2**<br>
    **h2.grape {color:red}      //11**<br>
    **h2{color:red}             //1**<br>
    **html>body table tr[id="totals"] td ul > li {color:maroon;}             //0017**<br>
    **Li#answer{color:navy}     //101**<br><br>
> * 声明重要性最为匹配，次者为内联样式<br>
	**p.dark{color:#333 !important}  //秒杀其他属性，唯我独尊**<br>
	**0特殊性比没有特殊强，通配符就比继承值强**<br>
    **避免继承样式出问题，最好就是一开始声明通配符**<br><br>
> * 层叠的排序<br>
    **1：读者的重要声明**<br>
	**2：创作人员的重要声明**<br>
	**3：创作人员的正常声明**<br>
	**4：读者的正常声明**<br>
	**5：用户代理的声明**<br> 
	
## 第四章：值和单位<br>
> * WEB安全色: 16进制 00 33 66 99 CC的三元组都是WEB安全色<br><br>
> * 像素理论<br>
    **1：像素是组成图象的最基本单元要素：点**<br>
	**2：分辨率是指在长和宽的两个方向上各拥有的像素个数**<br>
	**3：一个像素有多大呢？主要取决于显示器的分辨率，相同面积不同分辨率的显示屏，其像素点大小就不相同**<br>
	**4：PPI : 图像分辨率的单位，表示的是每英寸所拥有的像素数目**<br>
	CSS2建议将90ppi作为参考像素<br>
	CSS2.1建议将96ppi作为参考像素<br>
	
## 第五章：字体<br>
> * 归类为5种通用的字体系列，每个系列又有一些区分<br>
    **1：Serif字体**<br>
    Serif是有衬线字体，意思是在字的笔画开始、结束的地方有额外的装饰，而且笔画的粗细会有所不同。<br><br>
	**2：Sans-serif字体**<br>
	Sans-serif是无衬线字体。与衬线字体相反，这种字体通常是机械的和统一线条的，它们往往拥有相同的曲率，笔直的线条，锐利的转角<br><br>
	**3：Monospace字体**<br>
	Monospace字体是不成比例的。它通常用于模拟打字机打出的文本。老式的点阵机的输出，甚至是更老式的视频显示终端<br><br>
	**4：Cursive字体**<br>
	这些字体试图模仿人的手写体。通常有曲线和sedf字体中没有的笔划装饰组成<br><br>
	**5：Fantasy字体**<br>
	这些字体无法用任何特征来定义，只有一点是确定的，那就是我们无法很容易地将其归到任何一种其他字体<br><br>
> * 指定字体系列<br>
    **1：p{font-family:times,timesNR,Georgia,serif;}  //按照顺序匹配**<br>
	**2：h2{font-family:Wedgie,'Karrank%'}//有特殊符号的字体名要加引号**<br><br>
> * font-weight字体加粗是如何起作用<br>
    **1：字体加粗度包括100-900 共9个值**<br>
    然而这些数字并没有指定的加粗度，100，200，300可能与400都映射到同样的粗细；只要一个关键字对应的变形不会比前一个关键字所对应的更细，CSS规范都是允许的；另外，还可以选填normal,bold的值，normal对应400，bold对应700；
各种字体的加粗度由字体系列本身指定；<br><br>
    **2：让字体更大:font-weight:bolder**<br>
    **3：让字体更细:font-weight:lighter**<br><br>
> * font-size字体大小<br>
    可选值：*px、xx-small、x-small、small、medium、large、x-large、xx-large;<br>
    缩放因子的大小取决于用户的浏览器，往往是1.2；相对于其父元素;<br>
    字体的继承可以嵌套，慎用;<br><br>
> * 字体风格 font-style 斜体/直立/倾斜/继承<br><br>
> * 行高,font-size总是在line-height之前的<br>
## 第六章：文本属性<br>
> * 文本缩进主要用于段落的开头，text-indent<br>
    能继承，百分数慎用；<br>
	主要应用于块级元素，行内元素不起作用；也能设置负值；<br><br>
> * 文本对齐，text-align;除了left center right 之外，还有justify属性值，根据单元行的宽度拉伸字体间的距离，填满左右边界之间的空间<br><br>
> * 行高 line-height,主要用于垂直对齐<br>
    **行高: 具体来说是指两行文字间基线之间的距离；四线三格的第三条线**<br><br>
    **为什么div里面有文字就会有高度昵？**<br>
    根本不是文字撑开了div的高度，而是line-height！(可自行测试)<br><br>
    **为什么line-height行高怎么就产生高度了呢？**<br>
    在inline box模型中，有个line boxes，这玩意是看不见的，这个玩意的工作就是包裹每行文字。一行文字一个line boxes。例如“艾佛森退役”这5个字，如果它们在一行显示，你艾佛森再牛逼，对不起，只有一个line boxes罩着你；但“春哥纯爷们”这5个字，要是竖着写，一行一个，那真是够爷们，一个字罩着一个line boxes，于是总计五个line boxes。line boxes什么特性也没有，就高度。所以一个没有设置height属性的div的高度就是由一个一个line boxes的高度堆积而成的。<br><br>
    **行高的垂直居中性**<br>
    无论line boxes占据的高度是多少，其占据的空间都是与文字内容共用水平中垂线的；可利用文字与图片水平居中对齐。<br><br>
    **如何设置更好地设置行高的值**<br>
    150%虽然和1.5在值上是一样的，但是它们也是有差别的，差别在于继承性，使用百分比会计算line-height的值，然后以px像素为单位继承下去，而1.5则是先继承1.5这个值，遍历到了该标签再计算去line-height的像素值。最好指定缩放因子<br><br>
> * 行高vertical-align,基线对齐<br>
    **1：vertical-align：sub**<br>
    会使本身元素的基线相对于父元素的基线降低，降低多少取决于用户代理<br>
	**2：vertical-align：super**<br>
    会使本身元素的基线相对于父元素的基线上升，上升多少取决于用户代理；<br>
    **3：vertical-align：bottom**<br>
    会使本身元素的行内框的底端与行框的底端对齐；<br>
    **4：vertical-align：top**<br>
    会使本身元素的行内框的顶端与行框的顶端对齐；<br>
    **5：vertical-align：text-bottom**<br>
    会使本身元素的行内框的底端与文本框的底端对齐；<br>
    **6：vertical-align：text-top**<br>
    会使本身元素的行内框的顶端与文本框的顶端对齐；<br>
    **7：vertical-align：middle**<br>
    父元素的中部；<br><br>
> * 字符间隔和字母间隔<br>
    word-spacing: *px;   //可能会受text-align的影响；<br>
    letter-spacing: *px; <br><br>
> * 文本转换 text-transform<br>
    Uppercase lowercase capitalize(首字母) none<br><br>
> * 文本装饰 text-decoration<br>
    Underline overline line-through blink none<br><br>
> * white-space属性<br>
> * direction 文本方向<br>

