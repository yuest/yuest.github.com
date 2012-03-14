#无阻塞异步载入的 Gist Embed Code （jQuery 实现）
<!-- date: 2011-03-28 00:00 -->

GitHub Gist 是个很好用的分享简单代码的工具，在 [gist.github.com](http://gist.github.com/) 上发布分享的代码，还有旧版本存档（有 revisions 自然就会期待在线查看 diff 嘛，不过却没有，这点稍稍有点不方便），还可以有个 Embed Code 功能能提供一个 `<script src=...>` 标签让你把代码放到自己的网页上。

不过这个 Embed Code 是同步载入的，就是说浏览器渲染到此标签会等待此脚本载入并执行完成后再继续渲染后面的代码，并且网页上其他静态文件如 CSS 中的背景图片等貌似也会被阻塞下载，由此产生不太好的体验。并且此脚本就是两个 document.write 函数调用，我总觉的应该避免此函数的使用——要是在页面 DOM 载入完成之后调用，原本的网页内容就会被覆盖掉。

我写了几行代码（一个 jQuery 小插件），让它变成异步载入，在需要嵌入 Gist 代码的地方加入一个 div：`<div data-gist=your_gist_id><a href="http://gist.github.com/your_gist_id">your_gist_filename on GitHub Gist</a></div>`，代码载入完成后会把代码加到这个 div 内。

<div data-gist-id=889189><a href="http://gist.github.com/889189">889189 on GitHub Gist</a></div>

呃。看来，蛋疼的我很有把一件事情搞复杂的天赋……囧。
