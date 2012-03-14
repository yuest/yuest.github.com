#一个命令行 todo list 小工具
<!-- date: 2011-03-30 00:00 -->

> `t` 是一个管理 todo list 的命令行工具，专为想要**完成任务**而非**整理任务**的人准备。

> `t` is a command-line todo list manager for people that want to finish tasks, not organize them.

这是我一个多星期前[在 Steve Losh 的主页上发现的小工具](http://stevelosh.com/projects/t/)，非常简单方便。

主要用法：首先是用命令 `t do something` 添加“do something”这个任务，`t` 显示全部任务列表，任务名前面是任务ID，任务完成后用 `t -f id` 来设定某任务已完成，也可以用 `t -e id do another thing` 来把任务改成“do another thing”，当然，也支持中文。

可以设定多个任务列表，如我把 `s` 设为 stuff，把 m 设为 maybe 等。

我还想要一个在列表间移动任务等功能以实现 GTD，于是[在 GitHub 上 fork 下来](http://github.com/yuest/t)，自己动手 hack 了一下。主要有三点改动。

1. 可以用命令行管道，接受从 stdin 进来的任务，于是可以从纯文本导入任务，如 `cat tasklist | t`；
2. `t -f` 可以接受多个任务ID，一条命令同时把几个任务设为已完成，如 `t -f id1 id2 id3`；
3. 完成任务的时候，任务会在 stdout 打印出来，于是结合前面两条命令，就可以在任务列表间移动任务了：`t -f id1 id2 id3 | m`

安装方法：

    git clone https://yuest@github.com/yuest/t.git #先 clone git repo
    mkdir ~/Dropbox/tasks #创建一个任务目录用来存放列表文件

然后在 .bashrc 添加 alias，我为简单实现 GTD 设置了 s, t, m 三个列表，另外把待写文章和生活娱乐项目单独分出来：

    alias t='python $HOME/local/t/t.py --task-dir $HOME/Dropbox/tasks --list tasks'
    alias l='python $HOME/local/t/t.py --task-dir $HOME/Dropbox/tasks --list leisure'
    alias s='python $HOME/local/t/t.py --task-dir $HOME/Dropbox/tasks --list stuff'
    alias m='python $HOME/local/t/t.py --task-dir $HOME/Dropbox/tasks --list maybe'
    alias w='python $HOME/local/t/t.py --task-dir $HOME/Dropbox/tasks --list writing'

现在就可以照前面所说的用 `t` 命令添加任务了，有兴趣的童鞋可以读读 [Steve Losh 的原项目主页](http://stevelosh.com/projects/t/)，不过我基本上已经把要点说完了，这可爱的小东西就是这么简单。
