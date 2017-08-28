## 前言
### 1、使用VSCORE来对MarkDown进行编写。
### 2、安装插件(Auto-Open Markdown Preview)。
### 3、安装插件(Instant Markdown)。
### 4、<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>来设置颜色主题。
<br>

## 1、标题:  
# h1级标题
## h2级标题
### h3级标题
#### h4级标题
##### h5级标题
###### h6级标题

## 2、换行
在文本中输入的换行会从最终生成的结果中删除，浏览器会根据可用空间自动换行。如果想强迫换行，可以在行尾插入至少两个空格。  
语法：空格+空格+回车 （也就是说行尾至少要有两个空格）或者可以连续两个回车 （一个 Markdown 段落的前后要有一个以上的空行（空行的定义是显示上看起来像是空的，便会被视为空行。比方说，若某一行只包含空格和制表符，则该行也会被视为空行）  

## 3、分割线：
----

## 4、超链接：
欢迎来到[Github](https://github.com/)  
欢迎来到[Github](https://github.com/ "多了title")

## 5、键盘键
<kbd>Ctrl+[</kbd> and <kbd>Ctrl+]</kbd>

## 6、code格式：反引号
Use the `printf()` function.  
``There is a literal backtick (`) here.反引号中的反引号(双反引号)``

## 7、强调
*斜体强调*<br>
**粗体强调**

## 8、图片
![Alt text](https://raw.githubusercontent.com/OuFeng/images/master/20170414%E6%96%87%E6%9C%AC%E6%BA%A2%E5%87%BA%E7%9C%81%E7%95%A5%E5%8F%B7.png "Title text")

## 9、段落(以一个空行开始，以一个空行结束，中间的就是一个段落。)

哈哈哈哈哈，我就是段落。

## 10、表格
Item     | Value
-------- | ---
Computer | $1600
Phone    | $12
Pipe     | $1

学号|姓名|分数
-|-|-
小明|男|75
小红|女|79
小陆|男|92

产品|价格
-|-:
Leanote 高级账号|60元/年
Leanote 超级账号|120元/年

## 11、无序列表：使用 - 加一个空格
- 无需列表1
- 无序列表2
- 无序列表3

## 12、有序列表：使用数字加一个英文句点
1. 有序列表
2. 有序列表
3. 有序列表
4. 有序列表
5. 有序列表

## 13、换行缩进形成代码区块
    这里先换行，然后缩进4个空格，之后的内容便可以原样显示了，适合用于显示代码内容。直到文本结束或最后一个存在缩进的行为止。

## 14、代码块
```
void BubbletSort(int*a,int len) {
    int m;
    for (bool bSwap=true; bSwap; len++) {
        bSwap = false;
        for (int j=1;j<len;j++) {
            if (a[j-1]>a[j]) {   
                m=a[j];
                a[j]=a[j-1];
                a[j-1]=m;
                bSwap=true;
            }
        }
    }
}
```

## 15、块引用
>给引用的文本开始位置都加一个 '>'，其他markdown元素一块使用，比如列表。**强调**

>- 块引用里使用列表，需要和上面的内容隔开一个空行
>- 记得加空格哦  

>第一级引用
>>第二级引用:Markdown 是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）和亚伦·斯沃茨（Aaron Swartz）。它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML(或者HTML)文档”。[1]这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。
Markdown同时还是一个由Gruber编写的Perl脚本：Markdown.pl。它把用markdown语法编写的内容转换成有效的、结构良好的XHTML或HTML内容，并将左尖括号('<')和&号替换成它们各自的字符实体引用。它可以用作单独的脚本，Blosxom和Movable Type的插件又或者BBEdit的文本过滤器.[1]
Markdown也已经被其他人用Perl和别的编程语言重新实现，其中一个Perl模块放在了CPAN(Text::Markdown)上。它基于一个BSD风格的许可证分发并可以作为几个内容管理系统的插件。

## 16、HTML原始码
第一个例子  
<div class="footer">
   © 2004 Foo Corporation
</div>

第二个例子  
<table>
    <tr>
        <th rowspan="2">值班人员</th>
        <th>星期一</th>
        <th>星期二</th>
        <th>星期三</th>
    </tr>
    <tr>
        <td>李强</td>
        <td>张的明</td>
        <td>王平</td>
    </tr>
</table>