/**修改历史
 * Created by jf_ou on 2016/8/2.
 */

/**包含方法
 *
 * @type {{extend: MyJsPlugins.extend, deepCopy: MyJsPlugins.deepCopy}}
 */
var MyJsPlugins = {
    /** YUI封装的方法*/
    /**
     *
     * @Demo
     function Foo(bar){
        this.bar = bar
     }
     Foo.prototype.b = 'foo bar b';
     var foo = new Foo('Simon');
    //接受的参数是构造函数
     var SubFoo = MyJsPlugins.extend(Foo);
     SubFoo.prototype.c = 'foo bar c';
     var subFoo = new SubFoo('Sub Simon');
     */
    extend:function(Base) {
        var Class = function() {
            Base.apply(this, arguments);
        }, F;
        if(Object.create) {
            Class.prototype = Object.create(Base.prototype);
        } else {
            F = function() {};
            F.prototype = Base.prototype;
            Class.prototype = new F();
        }
        Class.prototype.constructor = Class;
        return Class;
    },
    /** Jquery封装的方法*/
    /**
     *
     * @Demo
     function Foo(bar){
        this.bar = bar
     }
     Foo.prototype.b = 'foo bar b';
     var foo = new Foo('Simon');

     //不拷贝原型，接受的参数是子类对象
     var child = MyJsPlugins.deepCopy(foo,{},false);
     //拷贝原型，接受的参数是子类对象
     var child = MyJsPlugins.deepCopy(foo,{},true);
     */
    deepCopy:function (p, c, isProto) {
        var c = c || {};
        var isProto = isProto || false;
        for (var i in p) {
            if (typeof p[i] === 'object') {
                c[i] = (p[i].constructor === Array) ? [] : {};
                MyJsPlugins.deepCopy(p[i], c[i]);
            } else {
                //原型里面的方法也拷贝
                if(isProto){
                    c[i] = p[i];
                }
                //原型里面的方法不拷贝
                else {
                    if(p.hasOwnProperty(i)){
                        c[i] = p[i];
                    }
                }
            }
        }
        return c;
    }
};
