#让 Firefox 支持 ellipsis （限长文字溢出加省略号）
<!-- date: 2011-03-27 00:00 -->

text-overflow: ellipsis 效果在网页上还是挺常用的吧，就是在需要限定宽度的一行文字中，如果文字过长，就截取到相应长度，后面加三个点（… 或 &amp;hellips;）。比如在表格什么的会常用到。这样的效果可以使用下面的 CSS 实现：

    .ellipsis {
        display: block; /* or inline-block 必须是 block 或 inline-block*/
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;    /* Opera */
        text-overflow:    ellipsis;    /* IE, Safari (WebKit) */
    }

如果需要考虑支持 IE6 的话（杀了我吧），`width` 属性是必须设置的，比如 `width: 100%;`。

遗憾的是，[Firefox 并不支持 text-overflow: ellipsis;](https://developer.mozilla.org/en/CSS/text-overflow)，到 4.0 都不支持。我写了一个 jQuery 插件来在 Firefox 上实现这个效果。基本上是参照 [Devon Govett 的](http://devongovett.wordpress.com/2009/04/06/text-overflow-ellipsis-for-firefox-via-jquery/)，只是在效率上做了优化，用了二分查找的思路（O(logN) 的复杂度，oh yeah～），而原来那个是一个字符一个字符地尝试，汗死= =||

另外，如果改变容器宽度，文字长度也应该相应改变才对，不过我把这事留给插件使用者了，只要在 resize 过后再调用一下插件就好了。

以下是代码：

<div data-gist-id="889145"><a href="http://gist.github.com/889145">ellipsis.js on GitHub Gist</a></div>
