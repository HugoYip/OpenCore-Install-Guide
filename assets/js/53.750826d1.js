(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{401:function(a,t,s){a.exports=s.p+"assets/img/vbox-storage.b08bb16a.png"},580:function(a,t,s){"use strict";s.r(t);var e=s(10),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"virtualbox"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox"}},[a._v("#")]),a._v(" VirtualBox")]),a._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[a._v("#")]),a._v(" Requirements")]),a._v(" "),t("ul",[t("li",[a._v("VirtualBox")]),a._v(" "),t("li",[a._v("A computer running macOS")]),a._v(" "),t("li",[a._v("The desired macOS installation software installed to /Applications")]),a._v(" "),t("li",[a._v("A USB attached hard disk or SSD")])]),a._v(" "),t("h2",{attrs:{id:"converting-installation-media"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#converting-installation-media"}},[a._v("#")]),a._v(" Converting Installation Media")]),a._v(" "),t("p",[a._v("VirtualBox cannot directly use a raw disk image, so we're going to convert it to a "),t("code",[a._v("VDI")]),a._v(".")]),a._v(" "),t("p",[t("code",[a._v("cd")]),a._v(" to the location of the disk image and run the following:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('### Change "Install macOS Big Sur Beta" if the name of the .img file differs')]),a._v("\nVBoxManage convertfromraw "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Install macOS Big Sur Beta.img"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Install macOS Big Sur Beta.vdi"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--format")]),a._v(" VDI\n")])])]),t("h2",{attrs:{id:"installing-macos-in-virtualbox"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-macos-in-virtualbox"}},[a._v("#")]),a._v(" Installing macOS in VirtualBox")]),a._v(" "),t("p",[a._v("First, attach the USB disk that is your target for macOS installation, and create a virtual hard disk that references it to use with VirtualBox.  Note: You may need to remove the partitions of the disk before using it.  You will also need to edit the destination device.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("diskutil list\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# locate the external disk that matches, and replace /dev/disk3 below with the device path.")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" VBoxManage internalcommands createrawvmdk "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-filename")]),a._v(" RawHDD.vmdk "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rawdisk")]),a._v(" /dev/disk3\n")])])]),t("p",[a._v("Next, start VirtualBox as root and create a new macOS virtual machine.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" VirtualBox\n")])])]),t("ul",[t("li",[t("p",[a._v("Name: Big Sur")])]),a._v(" "),t("li",[t("p",[a._v("Type: macOS 64bit")])]),a._v(" "),t("li",[t("p",[a._v("2-4 CPU cores")])]),a._v(" "),t("li",[t("p",[a._v("4-8 GB RAM")])]),a._v(" "),t("li",[t("p",[a._v("Do not create a virtual disk.")])])]),a._v(" "),t("p",[a._v("Attach the disks that you've created in previous steps as shown:")]),a._v(" "),t("p",[t("img",{attrs:{src:s(401),alt:""}})]),a._v(" "),t("p",[a._v("Now, close VirtualBox and add the following properties to the VM to allow it to boot.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" VBoxManage modifyvm "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Big Sur"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--cpuidset")]),a._v(" 00000001 000306a9 04100800 7fbae3ff bfebfbff\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" VBoxManage setextradata "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Big Sur"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"VBoxInternal/Devices/efi/0/Config/DmiSystemProduct"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"iMacPro1,1"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" VBoxManage setextradata "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Big Sur"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"VBoxInternal/Devices/efi/0/Config/DmiSystemVersion"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.0"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" VBoxManage setextradata "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Big Sur"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"VBoxInternal/Devices/efi/0/Config/DmiBoardProduct"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Mac-7BA5B2D9E42DDD94"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" VBoxManage setextradata "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Big Sur"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"VBoxInternal/Devices/smc/0/Config/DeviceKey"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" VBoxManage setextradata "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Big Sur"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),t("p",[a._v("Start VirtualBox as root, and start the VM.  The installer should begin to boot.  Complete the installation as you would on any other device.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" VirtualBox\n")])])]),t("p",[a._v("When the installation is complete, and you are at the Welcome screen, send an ACPI shutdown signal to macOS and select shutdown.")]),a._v(" "),t("p",[a._v("Add your prepared EFI to the EFI partition on the USB device, and eject it.")]),a._v(" "),t("p",[a._v("Place the drive back in your hack and boot normally.")])])}),[],!1,null,null,null);t.default=n.exports}}]);