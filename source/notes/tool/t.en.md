#t - A Command-line Todo List Manager
<!-- date: 2011-03-30 00:00 -->

> `t` is a command-line todo list manager for people that want to finish tasks, not organize them.

That's the description by Steve Losh, the author of this tool. You can visit [his project page](http://stevelosh.com/projects/t/) to learn more about it.

I [forked it](http://github.com/yuest/t) and made three small modifications to this little program.

1. Import tasks from stdin, so you can do something like `cat tasklist | t`.
2. Use `t -f id1 id2 id3` to finish multiple tasks in one command.
3. When finish tasks using command above, the text of tasks will print to stdout, so now you can move task from one list to another: `t -f id1 id2 id3 | g`

To use my fork, you just need clone my repo from GitHub instead of the original one from Losh.

    git clone https://yuest@github.com/yuest/t.git

Then follow Losh's instruction to setup it.
