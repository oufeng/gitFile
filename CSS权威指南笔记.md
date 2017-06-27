## 第一章：CSS和文档
> * CSS分替换元素和非替换元素
> * CSS2.1还使用另外两种基本元素类型，块级元素和行内元素

## 第二章：选择器
> * 属性选择器
    **H1[class]{color:silver;}** `所有拥有类的h1元素`
    **input[type=button]{color:red}** `所有type=button的input元素`
> * 子串匹配属性选择器
    **[foo^="red"]** `选择foo属性以red开头的元素`
    **[foo$="red"]** `选择foo属性以red结尾的元素`
    **[foo*="red"]** `选择foo属性包含red的元素`
> * 特定属性选择类型
    **img[src |="figure"]** `以figure开头或者等于figure的属性`
> * 区分后代元素以及筛选相同匹配的元素
    **div.sidebar{color:red}** `匹配类名为sidebar的div元素，匹配的标签肯定是div元素`
    **div .sidebar{color:red}** `中间有空格，匹配div元素中类名为sidebar的后代元素，匹配的标签不一定是div元素`
> * 兄弟元素，个人理解为只能选择身后的兄弟元素
    **h1 + p** `匹配紧接着h1元素的P元素`
> * 伪类和伪元素
    **静态**
    **a:link{color:red;}** `匹配超链接`
    **a:visited{color:red;}** `匹配已经访问过的超链接`
    **动态**
    **a:focus{color:red;}** `获取焦点`
    **a:hover{color:red;}** `鼠标停留`
    **a:active{color:red;}** `激活状态，鼠标点击与释放之间发生的事件`
    **a:visited{color:red;}** `匹配已经访问过的超链接`
    `出场顺序最好不要变,link,visited,focus,hover,active`
    **选择父元素的首个子元素**
    **p:first-child{font-weigth:bold}** `匹配首元素系p的元素`
    **伪元素选择器**
    **p:first-letter{color:red}** `设置块级元素首字母的样式`
    **p:first-line{color:red}** `设置块级元素第一行文字的样式`
    **p:before {content:"}}"；color:red}** `前面加一对红色中括号`
    **p:after {content:"}}"；color:red}** `后面加一对红色中括号`
    
## 第三章：结构和层叠
> * 选择器的特殊性(样式冲突时如何选择的问题)
    **id属性值 加 100**
    **类、属性、伪类 加 10**
    **标签、伪元素 加 1**
    **结合符和通配选择器 加 0**
