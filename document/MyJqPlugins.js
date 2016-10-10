/**
 * Created by jiangnan on 2016/7/23.
 */

/**包含方法
 *
 * @type {{
 *      alterBgColor: $("#testTable").alterBgColor({"multiline":true}),
 *      initSearchInput: $("#textInput").initSearchInput({"class":"empty","text":"请输入你想搜索的内容..."}),
 *      autoTitle:$("#title").autoTitle(),
 *      autoTitleImg:$("#imgTitle").autoTitleImg(),
 *      maxLength:$('#mytextarea').maxLength(500),
 *
 *      ltrim: var text =  $.ltrim("  dfjksladfjl  "),
 *      rtrim: var text = $.rtrim(text),
 *      trim:  var text = $.trim(text),
 *      isPositiveInteger: text.isPositiveInteger(),//判断一个数是否正整数，返回bool值,
 *      isInteger: text.isInteger(),//判断一个数是否整数，返回bool值,
 *      isNumber: text.isNumber(),//判断一个数是否数字，返回bool值,
 *      trans: text.trans(),//暂时还不知道,
 *      replaceAll: "fdsa".replaceAll("s","1") results:"fd1a"  //替换原来字符串中的值,
 *      skipChar: 目前还不知道怎么用,
 *      isValidPwd: "fdsa".isValidPwd() //验证是否是密码，
 *      isValidMail ： 验证字符串是否是邮箱
 *      isSpaces : 验证字符串是否全部是空格
 *      isPhone : 验证字符串是否是手机
 *      isUrl : 验证是否是URL
 *      isExternalUrl : 验证是否是外部的URL
 * }}
 */

/** 对象方法封装*/
/**
 * 表格隔行变色插件
 *
 * 具体描述一些细节
 *
 * @param    {object}  json对象   传入参数
 *      {"odd":"odd",           奇数行的class,默认为odd
         "even":"even",         偶数行的class,默认为even
         "selected":"selected", 选中行的class,默认为selected
         "multiline":false      是否允许多行选中，默认为false
 *      }
 * @returns  void
 *
 * @Demo
 * $("#testTable").alterBgColor({"multiline":true});
 *
 * @date     2016-07-23
 * @author   oufeng<oufeng739976719@163.com>
 */
;(function ($) {
    $.fn.extend({
        "alterBgColor":function (options) {
            return this.each(function () {
                //这里放置插件代码
                //设置默认值
                options = $.extend({
                    "odd":"odd",
                    "even":"even",
                    "selected":"selected",
                    "multiline":false
                },options);
                $("tbody>tr",this).css("cursor","pointer");
                $("tbody>tr:odd",this).addClass(options.odd);
                $("tbody>tr:even",this).addClass(options.even);
                $("tbody>tr",this).click(function () {
                    //判断当前是否选中
                    var hasSelected = $(this).hasClass(options.selected);
                    //如果选中，则移出selected类，否则就加上selected类
                    if(hasSelected){
                        $(this).removeClass(options.selected)
                               .find("[type='checkbox']")
                               .prop("checked",false);
                    }
                    else {
                        //是否可以多行选中，true
                        if(options.multiline){
                            $(this).addClass(options.selected)
                                .find("[type='checkbox']")
                                .prop("checked",true);
                        }
                        //不可以多行选中
                        else {
                            $(this).addClass(options.selected)
                                .find("[type='checkbox']")
                                .prop("checked",true)
                                .end()
                                .siblings()
                                .removeClass(options.selected)
                                .find("[type='checkbox']")
                                .prop("checked",false);
                        }
                    }
                });
                //如果单选框默认情况下是选择的，则高色
                $('tbody>tr:has(:checked)',this).addClass(options.selected);
            });
        }
    });
})(jQuery);

/**
 * 搜索框文字效果
 *
 * 具体描述一些细节
 *
 * @param    {object}  json对象   传入参数
 *      {"text":"请输入相应的内容...",          输入框的提示信息,默认为"请输入相应的内容..."
         "class":"empty"                        输入框提示信息的样式类，默认为“empty”
 *      }
 * @returns  void
 *
 * @Demo
 * $("#textInput").initSearchInput({"class":"empty","text":"请输入你想搜索的内容..."});
 *
 * @date     2016-07-23
 * @author   oufeng<oufeng739976719@163.com>
 */
;(function ($) {
    $.fn.extend({
        "initSearchInput":function (options) {
            return this.each(function () {
                //设置默认值
                options = $.extend({
                    "text":"请输入相应的内容...",
                    "empty":"empty"
                },options);

                //设置默认值

                $(this).val(options.text)
                       .css("padding","2px 5px")
                       .addClass(options.empty);

                //鼠标移入
                $(this).hover(function () {
                    if($(this).val() == options.text){
                        $(this).val("").removeClass(options.empty);
                    }
                },function () {
                    if($(this).val() == ""){
                        $(this).val(options.text).addClass(options.empty);
                    }
                    else {
                        //add 2016-10-10 防止多次触发hover的leave事件
                        if($(this).val() != options.text){
                           $(this).removeClass(options.empty);   
                        }
                    }
                });
            });
        }
    });
})(jQuery);

/**
 * 图片和文字的title提醒
 *
 * @Demo
 * <input type="button" value="HHHHHHHHHH" title="哈哈哈哈哈哈哈" id="title"/>
 * <img title="图片预览" id="imgTitle" style="width: 600px;height: 600px" src="Resource Root/Include/img/20150216_102621.jpg"/>
 * $("#title").autoTitle();
 * $("#imgTitle").autoTitleImg();
 *
 * @date     2016-07-23
 * @author   oufeng<oufeng739976719@163.com>
 */
;(function ($) {
    $.fn.extend({
        "autoTitle":function (options) {
            return this.each(function () {
                var x = 10;
                var y = 20;
                $(this).mouseover(function (e) {
                    this.myTitle = this.title;
                    this.title = "";
                    //创建div元素
                    var tooltip = "<div id='oufeng_tooltip'>" + this.myTitle + "</div>";
                    $("body").append(tooltip);//追加到文档中
                    //追加到body中再设置样式；
                    $("#oufeng_tooltip").css({
                        "position": "absolute",
                        "border": "1px solid #333",
                        "background": "#FBFAFD",
                        "padding": "3px 5px",
                        "color": "#575757",
                        "display": "none",
                        "font-size": "11px",
                        "border-radius": "3px"
                    });
                    $("#oufeng_tooltip").css({
                        "top": (e.pageY + y) + "px",
                        "left": (e.pageX + x) + "px"
                    }).show("fast");//设置xy的坐标，并且显示,要设置绝对定位
                }).mouseout(function () {
                    this.title = this.myTitle;
                    $("#oufeng_tooltip").remove();//移除；
                }).mousemove(function (e) {
                    $("#oufeng_tooltip").css({
                        "top": (e.pageY + y) + "px",
                        "left": (e.pageX + x) + "px"
                    });
                });
            });
        },
        "autoTitleImg":function (options) {
            return this.each(function () {
                var x = 10;
                var y = 20;
                $(this).mouseover(function (e) {
                    this.myTitle = this.title;
                    this.title = "";
                    var imgTitle = this.myTitle ? "<br/>" + this.myTitle : "";
                    var src = this.href ? this.href : this.src;
                    var tooltip = "<div id='oufeng_tooltipImg'><img style='width:450px;height:400px' src='" + src + "' alt='产品预览图'/>" + imgTitle + "<\/div>"; //创建 div 元素
                    $("body").append(tooltip);	//把它追加到文档中
                    $("#oufeng_tooltipImg").css({
                        "position": "absolute",
                        "border": "1px solid #333",
                        "background": "#333",
                        "padding": "2px",
                        "color": "#fff",
                        "display": "none",
                        "border-radius": "3px"
                    });
                    $("#oufeng_tooltipImg").css({
                        "top": (e.pageY + y) + "px",
                        "left": (e.pageX + x) + "px"
                    }).show("fast");	  //设置x坐标和y坐标，并且显示
                }).mouseout(function () {
                    this.title = this.myTitle;
                    $("#oufeng_tooltipImg").remove();	 //移除
                }).mousemove(function (e) {
                    $("#oufeng_tooltipImg").css({
                        "top": (e.pageY + y) + "px",
                        "left": (e.pageX + x) + "px"
                    });
                });
            });
        }
    });
})(jQuery);

/**
 * 文本域字数限制插件
 *
 * @Demo
 * $('#mytextarea').maxLength(500);
 *
 * @date     2016-07-23
 * @author   oufeng<oufeng739976719@163.com>
 */
;(function ($) {
    $.fn.extend({
        "maxLength":function (max) {
            return this.each(function () {
                var type = this.tagName.toLowerCase();
                var inputType = this.type ? this.type.toLowerCase() : null;
                if (type == "input" && inputType == "text" || inputType == "password") {
                    this.maxLength = max;
                }
                else if (type == "textarea") {
                    this.onkeypress = function (e) {
                        var ob = e || event;
                        var keyCode = ob.keyCode;
                        var hasSelection = document.selection
                            ? document.selection.createRange().text.length > 0
                            : this.selectionStart != this.selectionEnd;
                        return !(this.value.length >= max
                        && (keyCode > 50 || keyCode == 32 || keyCode == 0 || keyCode == 13)
                        && !ob.ctrlKey && !ob.altKey && !hasSelection);
                    };
                    this.onkeyup = function () {
                        if (this.value.length > max) {
                            this.value = this.value.substring(0, max);
                        }
                    };
                }
                $(this).attr("maxLength",max);
            });
        }
    });
})(jQuery);

/** 全局方法封装*/
/**
 * 字符串去除左右空格方法
 *
 * 具体描述一些细节
 *
 *
 * @Demo
 * var text =  $.ltrim("  dfjksladfjl  ");
 * text = $.rtrim(text);
 * text = $.trim(text);
 *
 * @date     2016-07-23
 * @author   oufeng<oufeng739976719@163.com>
 */
;(function ($) {
    /*
    \s： space， 空格
    +： 一个或多个
    ^： 开始，^\s，以空格开始
    $： 结束，\s$，以空格结束
    |：或者
    /g：global， 全局
    replace() 替换
    */
    $.extend({
        ltrim:function (text) {
            //(text || "")：如果text为0，false或undefined,则为""
            return (text || "").replace( /^\s+/g, "" );
        },
        rtrim:function (text) {
            return (text || "").replace( /^\s+$/g, "" );
        },
        trim:function (text) {
            return (text || "").replace(/^\s+|\s+$/g, '');
        }
    });

    //$("#textInput").val().isInteger()
    $.extend(String.prototype, {
        isPositiveInteger:function(){
            return (new RegExp(/^[1-9]\d*$/).test(this));
        },
        isInteger:function(){
            return (new RegExp(/^\d+$/).test(this));
        },
        isNumber: function(value, element) {
            return (new RegExp(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/).test(this));
        },
        trim:function(){
            return this.replace(/(^\s*)|(\s*$)|\r|\n/g, "");
        },
        trans:function() {
            return this.replace(/</g, '<').replace(/>/g,'>').replace(/"/g, '"');
        },
        replaceAll:function(os, ns) {
            return this.replace(new RegExp(os,"gm"),ns);
        },
        skipChar:function(ch) {
            if (!this || this.length===0) {return '';}
            if (this.charAt(0)===ch) {return this.substring(1).skipChar(ch);}
            return this;
        },
        isValidPwd:function() {
            return (new RegExp(/^([_]|[a-zA-Z0-9]){6,32}$/).test(this));
        },
        isValidMail:function(){
            return(new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(this.trim()));
        },
        isSpaces:function() {
            for(var i=0; i<this.length; i+=1) {
                var ch = this.charAt(i);
                if (ch!=' '&& ch!="\n" && ch!="\t" && ch!="\r") {return false;}
            }
            return true;
        },
        isPhone:function() {
            return (new RegExp(/(^([0-9]{3,4}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0-9]{3,4}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d{3,8}$)/).test(this));
        },
        isUrl:function(){
            return (new RegExp(/^[a-zA-z]+:\/\/([a-zA-Z0-9\-\.]+)([-\w .\/?%&=:]*)$/).test(this));
        },
        isExternalUrl:function(){
            return this.isUrl() && this.indexOf("://"+document.domain) == -1;
        }
    });
})(jQuery);
