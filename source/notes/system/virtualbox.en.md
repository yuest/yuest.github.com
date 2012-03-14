#Using VirtualBox on a Linux Host
<!-- date: 2011-03-21 00:00 -->

After installing the extension packs, you can enable the USB 2.0 (EHCI) controller. However the default USB controller doesn't work on a Linux host (the menu is grayed out and unclickable), so if you want to use USB devices in VirtualBox on a Linux host, follow these steps:

1. Download the extension packs from [the VirtualBox download page](http://www.virtualbox.org/wiki/Downloads).
2. Install it using command ` sudo VBoxManage extpack install <the-downloaded-file> `
3. Add your current user (on the Linux Host) to the group 'vboxusers'.
4. Set the guest system to enable the USB 2.0 controller.

Now you can use your USB devices in your guest system.
