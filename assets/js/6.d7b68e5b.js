(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{388:function(t,e,a){t.exports=a.p+"assets/img/homepage.f3cdc6f3.png"},389:function(t,e,a){t.exports=a.p+"assets/img/choose-os.2cf6dcf0.png"},390:function(t,e,a){t.exports=a.p+"assets/img/choose-virtual-disk.713a50d8.png"},391:function(t,e,a){t.exports=a.p+"assets/img/choose-virtual-disk-finder.8115284c.png"},392:function(t,e,a){t.exports=a.p+"assets/img/choose-virtual-disk-filled.2fe203cd.png"},393:function(t,e,a){t.exports=a.p+"assets/img/vm-settings-home.f0e96792.png"},394:function(t,e,a){t.exports=a.p+"assets/img/vm-settings-usb.dc5ae076.png"},395:function(t,e,a){t.exports=a.p+"assets/img/vm-folder.019f9113.png"},396:function(t,e,a){t.exports=a.p+"assets/img/vmx-initial.df35d9f7.png"},397:function(t,e,a){t.exports=a.p+"assets/img/vmx-find.d75e6155.png"},398:function(t,e,a){t.exports=a.p+"assets/img/vmx-edited.2452d78f.png"},399:function(t,e,a){t.exports=a.p+"assets/img/vm-in-use-error.bdc1952d.png"},400:function(t,e,a){t.exports=a.p+"assets/img/vm-boot-manager.31187279.png"},579:function(t,e,a){"use strict";a.r(e);var s=a(10),i=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vmware-fusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vmware-fusion"}},[t._v("#")]),t._v(" VMware Fusion")]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("ul",[e("li",[t._v("VMware Fusion")]),t._v(" "),e("li",[t._v("Java (both the JRE and JDK work)")]),t._v(" "),e("li",[t._v("A computer running macOS")]),t._v(" "),e("li",[t._v("The desired macOS installation software installed to /Applications")]),t._v(" "),e("li",[t._v("A USB attached hard disk or SSD, or an internal disk that can be passed through entirely")])]),t._v(" "),e("h2",{attrs:{id:"converting-installation-media"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#converting-installation-media"}},[t._v("#")]),t._v(" Converting Installation Media")]),t._v(" "),e("p",[t._v("VMware cannot directly use a raw disk image, so we'll create a linked VMDK, which will allow you to use it as a virtual hard drive in VMware Fusion.")]),t._v(" "),e("p",[t._v("Download raw2vmdk from "),e("a",{attrs:{href:"../../extra-files/raw2vmdk.jar"}},[t._v("here")]),t._v(", and put it in the same directory as the "),e("code",[t._v(".img")]),t._v(" file. Then, run the following command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('### Change "Install macOS Big Sur Beta" if the name of the .img file differs')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" raw2vmdk.jar "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Install macOS Big Sur Beta.img"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Install macOS Big Sur Beta.vmdk"')]),t._v("\n")])])]),e("p",[t._v("This will create a VMDK that references the "),e("code",[t._v(".img")]),t._v(" file (the raw disk image) for VMware to use. If you're going to move this vmdk or transfer it to another computer, you must move the img file along with it.")]),t._v(" "),e("h2",{attrs:{id:"installing-macos-big-sur-in-vmware-fusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-macos-big-sur-in-vmware-fusion"}},[t._v("#")]),t._v(" Installing macOS Big Sur in VMware Fusion")]),t._v(" "),e("p",[t._v("You have two options here: pass through a raw disk, or pass through an entire USB device. The steps are not that different for both, so they'll be combined here.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("(Skip this if you are doing USB passthrough) For raw disk passthrough, attach the disk that is your target for macOS installation, and  create a virtual hard disk that references it to use with Fusion.")]),t._v(" "),e("p",[t._v("Note: You may need to remove the partitions of the disk before using it.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("diskutil list\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# locate the external disk that matches, and replace /dev/disk3 below with the device path.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/VMware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Fusion.app/Contents/Library/vmware-rawdiskCreator create /dev/disk3 fullDevice RawHDD ide\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Next, start VMware Fusion. You should see the homepage. If not, close any window that opened and select "),e("code",[t._v("File")]),t._v(" > "),e("code",[t._v("New")]),t._v(" from the menu bar.\n"),e("img",{attrs:{src:a(388),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v('Select the "Create a custom virtual machine" option, and select macOS 10.15 (as 10.16/11 isn\'t available).\n'),e("img",{attrs:{src:a(389),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v('Select "Use an existing virtual disk" at the screen below.\n'),e("img",{attrs:{src:a(390),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v('Then, click "Choose virtual disk" and select the '),e("code",[t._v("Install macOS Beta.vmdk")]),t._v(' vmdk we made earlier. If you want to make sure VMware does not copy the disk to where you will be storing the VM (for example, if you are low on space), select "Share this virtual disk with the virtual machine that created it".\n'),e("img",{attrs:{src:a(391),alt:""}}),t._v("\nOnce done, it should look like this.\n"),e("img",{attrs:{src:a(392),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v('Hit Continue, then click "Customize Settings". Make sure to save the VM to somewhere that\'s not the disk you are passing through.')]),t._v(" "),e("p",[t._v("Once done, you should arrive at a screen that looks like this.\n"),e("img",{attrs:{src:a(393),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v('First, select "Processors & Memory", and set the memory to at least 4096 MB.')])]),t._v(" "),e("li",[e("p",[t._v('(If you are doing raw disk passthrough, skip this step) Select "Show All" and click "USB & Bluetooth". Plug in your USB device and under "Plug In Action", change it from "Ask what to do" to "Connect to the VM". It should look similar to this when done. (In this case, "VIA AmazonBasics Hard Drive Enclos" is my device.)\n'),e("img",{attrs:{src:a(394),alt:""}}),t._v("\nThen, close the window.")])]),t._v(" "),e("li",[e("p",[t._v('(If you are doing USB passthrough, skip steps 9 through 13) Close the window and close VMware Fusion. Locate the "macOS 10.15.vmwarevm" (or whatever you named it when saving) folder in Finder, and right click > "Show Package Contents".')]),t._v(" "),e("p",[t._v("The result should look like the image below.\n"),e("img",{attrs:{src:a(395),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("Open the vmx (not vmxf or vmx.lck folder) file in TextEdit. It should look something like this:\n"),e("img",{attrs:{src:a(396),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("Find the lines starting with "),e("code",[t._v("sata0:1")]),t._v(":\n"),e("img",{attrs:{src:a(397),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("Replace all the lines starting with "),e("code",[t._v("sata0:1")]),t._v(" with the following. Replace "),e("code",[t._v("<path/to/vmdk>")]),t._v(" with the full path to RawHDD.vmdk, created earlier above.")]),t._v(" "),e("p",[t._v("Tip: Find it in Finder, then right click, hold down option, and select 'Copy \"RawHDD.vmdk\" as Pathname' to get the full path easily.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('sata0:1.fileName = "<path/to/vmdk>"\nsata0:1.present = "TRUE"\nsata0:1.deviceType = "rawDisk"\n')])])]),e("p",[t._v("It should look something like the below when done.\n"),e("img",{attrs:{src:a(398),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("Save and quit TextEdit, and reopen VMware Fusion. Your VM should automatically open, but if not, open it from the Virtual Machine Library.")])]),t._v(" "),e("li",[e("p",[t._v('Select "Virtual Machine" > "Power On To Firmware" from the menu bar, so that we can boot to the VM BIOS.')]),t._v(" "),e("ul",[e("li",[e("p",[t._v("(For raw disk passthrough) If you get prompted for your password when you do this, enter it. Even though the prompt mentions Boot Camp disks, it is still working normally.")])]),t._v(" "),e("li",[e("p",[t._v("If you get an error that the resource is busy like below, run the following in Terminal and try again:")])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("diskutil list\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# replace /dev/disk3 below with the proper device path. for raw disk passthrough, it was found before")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" diskutil unmountDisk /dev/disk3\n")])])]),e("p",[e("img",{attrs:{src:a(399),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v('You should get to the VM Boot Manager, as shown below. Select the first hard drive ("EFI VMware Virtual SATA Hard Drive (0.0)). The VM should start booting the Big Sur installer.\n'),e("img",{attrs:{src:a(400),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v('Complete the installation as you would on any other device.\nthe installation is complete, and you are at the Welcome screen, select "Virtual Machine" > "Shut Down" from the menu bar.')]),t._v(" "),e("p",[t._v("If needed, add your prepared EFI to the EFI partition on the device, then eject it.")]),t._v(" "),e("p",[t._v("Place the drive back in your hack and boot normally. You now have Big Sur!")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);