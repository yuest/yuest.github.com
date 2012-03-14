#在 Linux 主机中使用 VirtualBox
<!-- date: 2011-03-19 00:00 -->

##USB Controller

在 Linux 主机中使用 VirtualBox，默认的 USB Controller 不能使用，也就是说不能在虚拟机里的系统上用 USB。这不是扯的吗，我的网银咋办？我的 iPod 咋同步？Google 了一下，知道了解决问题需要安装 extension packs，以下是解决步骤：

1. 到[VirtualBox 官网下载页面](http://www.virtualbox.org/wiki/Downloads)下载这个 Extension Packs.
2. 用以下命令安装： ` sudo VBoxManage extpack install <下载到的文件名> `
3. 将你 Linux 上使用的用户添加到 vboxusers 组。
4. 在某个虚拟机的设置里 USB 页面 Enable USB 2.0 (EHCI) Controller。

打完收工。

##拷贝 vdi 文件

可以直接使用 `cp` 命令，也可以在文件管理器里直接复制粘贴 vdi 文件，也可以用命令 `VBoxManage clonehd "DiskToClone.vdi" "ClonedDisk.vdi"`，这些方法都是拷贝 vdi 文件，这时因为文件的 uuid 一样，无法再次添加到 VirtualBox，需要运行如下命令重新设置这个文件的 UUID：

    VBoxManage internalcommands sethduuid copied.vdi

##拷贝过来的 Linux 无法使用网卡

删除 `/etc/udev/rules.d/70-persistent-net.rules` 文件重启，因为这个文件会缓存网卡信息，拷到新机上就不对了。
