(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{279:function(t,a,s){t.exports=s.p+"assets/img/format-usb.83a24b13.png"},454:function(t,a,s){t.exports=s.p+"assets/img/commandlinesoftwareupdateutility.e1679420.png"},455:function(t,a,s){t.exports=s.p+"assets/img/munki.cb5c523a.png"},456:function(t,a,s){t.exports=s.p+"assets/img/munki-process.c0791880.png"},457:function(t,a,s){t.exports=s.p+"assets/img/munki-done.581ad405.png"},458:function(t,a,s){t.exports=s.p+"assets/img/munki-dmg.893a0e5d.png"},459:function(t,a,s){t.exports=s.p+"assets/img/download.974b60da.png"},460:function(t,a,s){t.exports=s.p+"assets/img/boot-disk.73bf04f5.png"},461:function(t,a,s){t.exports=s.p+"assets/img/boot-done.48b57b22.png"},462:function(t,a,s){t.exports=s.p+"assets/img/efi-base.2af0e24a.png"},463:function(t,a,s){t.exports=s.p+"assets/img/mount-efi-usb.c855475e.png"},464:function(t,a,s){t.exports=s.p+"assets/img/base-efi.3b1f0304.png"},597:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"在macos中制作安装程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在macos中制作安装程序"}},[t._v("#")]),t._v(" 在macOS中制作安装程序")]),t._v(" "),a("p",[t._v("虽然你不需要重新安装macOS来使用OpenCore，但一些用户更喜欢使用全新的引导管理器升级。")]),t._v(" "),a("p",[t._v("首先，我们要找一个macOS的副本。如果你只是制作一个可引导的OpenCore U盘，而不是安装程序，你可以跳过这一步，直接格式化USB。对于其他人来说，你可以从App Store下载macOS，也可以使用Munki的脚本。")]),t._v(" "),a("h2",{attrs:{id:"下载macos-现代os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载macos-现代os"}},[t._v("#")]),t._v(" 下载macOS:现代OS")]),t._v(" "),a("p",[t._v("此方法允许您下载macOS 10.13及更新版本，10.12及更早版本请参见 "),a("a",{attrs:{href:"#downloading-macos-legacy-os"}},[t._v("下载 macOS: Legacy OS")]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("macOS 12及以上版本注")]),t._v(":由于最新macOS版本对USB堆栈进行了更改，因此在安装macOS之前，强烈建议您映射USB端口(使用USBToolBox)。\n"),a("ul",[a("li",[a("span",{staticStyle:{color:"red"}},[t._v(" 注意: ")]),t._v(" 在macOS 11.3及更新版本中，"),a("a",{attrs:{href:"https://github.com/dortania/bugtracker/issues/162",target:"_blank",rel:"noopener noreferrer"}},[t._v("XhciPortLimit被打破，导致引导循环"),a("OutboundLink")],1),t._v("。\n"),a("ul",[a("li",[t._v("如果你已经"),a("a",{attrs:{href:"https://sumingyd.github.io/OpenCore-Post-Install/usb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("映射了你的USB端口"),a("OutboundLink")],1),t._v("并且禁用了"),a("code",[t._v("XhciPortLimit")]),t._v("，你可以正常启动macOS 11.3+。")])])])])])]),t._v(" "),a("p",[t._v("在符合你想要安装的OS版本要求的macOS机器上，直接进入App Store:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#using-app-store"}},[t._v("使用 App Store")])])]),t._v(" "),a("p",[t._v("对于需要特定操作系统版本或无法从App Store下载的机器:")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#下载macos-现代os"}},[t._v("下载macOS:现代OS")])]),a("li",[a("a",{attrs:{href:"#使用-app-store"}},[t._v("使用 App Store")])]),a("li",[a("a",{attrs:{href:"#命令行软件更新实用程序"}},[t._v("命令行软件更新实用程序")])]),a("li",[a("a",{attrs:{href:"#munki的installinstallmacos实用程序"}},[t._v("Munki的InstallInstallMacOS实用程序")])]),a("li",[a("a",{attrs:{href:"#下载macos-传统os"}},[t._v("下载macOS:传统OS")])]),a("li",[a("a",{attrs:{href:"#设置安装程序"}},[t._v("设置安装程序")])]),a("li",[a("a",{attrs:{href:"#传统设置"}},[t._v("传统设置")])]),a("li",[a("a",{attrs:{href:"#设置opencore的efi环境"}},[t._v("设置OpenCore的EFI环境")])]),a("li",[a("a",{attrs:{href:"#现在所有这些都完成了-前往-设置efi-opencore-efi-md-来完成你的工作"}},[t._v("现在所有这些都完成了，前往设置EFI 来完成你的工作")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"使用-app-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-app-store"}},[t._v("#")]),t._v(" 使用 App Store")]),t._v(" "),a("p",[t._v("在符合你想要安装的操作系统版本要求的macOS机器上，直接进入App Store下载所需的操作系统版本，然后继续 "),a("a",{attrs:{href:"#setting-up-the-installer"}},[a("strong",[t._v("设置安装程序")])]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"命令行软件更新实用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行软件更新实用程序"}},[t._v("#")]),t._v(" 命令行软件更新实用程序")]),t._v(" "),a("p",[t._v("开一个终端窗口，然后复制并粘贴下面的命令:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("softwareupdate --list-full-installers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Please enter version number you wish to download:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$REPLY")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"softwareupdate --fetch-full-installer --full-installer-version "')]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$REPLY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:s(454),alt:""}})]),t._v(" "),a("p",[t._v("这将为您提供一个可供选择的可用版本列表。\n一旦下载，它将保存在您的应用程序文件夹。\n您可以继续"),a("a",{attrs:{href:"#setting-up-the-installer"}},[a("strong",[t._v("设置安装程序")])]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"munki的installinstallmacos实用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#munki的installinstallmacos实用程序"}},[t._v("#")]),t._v(" Munki的InstallInstallMacOS实用程序")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("运行macOS Monterey 12.3或以上版本的用户请注意")]),t._v(" "),a("p",[t._v("从macOS Monterey 12.3开始，苹果删除了对"),a("code",[t._v("python2.7")]),t._v("的支持， 因此如果没有它，"),a("code",[t._v("installinstallmacos.py")]),t._v("将出现以下错误:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("This tool requires the Python xattr module. Perhaps run 'pip install xattr' to install it.\n")])])]),a("p",[t._v("为了解决这个问题，我们建议通过在终端中运行"),a("code",[t._v("Xcode -select——install")]),t._v("来安装"),a("code",[t._v("Xcode命令行工具")]),t._v("，然后运行"),a("code",[t._v("pip3 install xattr")])]),t._v(" "),a("p",[t._v("之后你可以使用"),a("code",[t._v("python3")]),t._v("而不是"),a("code",[t._v("python")]),t._v("来运行下面相同的命令:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" ~/macOS-installer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/macOS-installer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://raw.githubusercontent.com/munki/macadmin-scripts/main/installinstallmacos.py "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" installinstallmacos.py "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" python3 installinstallmacos.py\n")])])])]),t._v(" "),a("p",[t._v("为了运行它，只需要在终端窗口中复制并粘贴下面的命令:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" ~/macOS-installer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/macOS-installer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://raw.githubusercontent.com/munki/macadmin-scripts/main/installinstallmacos.py "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" installinstallmacos.py "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" python installinstallmacos.py\n")])])]),a("p",[a("img",{attrs:{src:s(455),alt:""}})]),t._v(" "),a("p",[t._v("如你所见，我们得到了一个很好的macOS安装程序列表。如果你需要某个特定版本的macOS，可以通过在它旁边输入数字来选择它。在这个例子中，我们选择10:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(456),alt:""}})]),t._v(" "),a("p",[t._v("这将需要一段时间，因为我们正在下载整个8GB以上的macOS安装程序，所以强烈建议您在等待的同时阅读指南的其余部分。")]),t._v(" "),a("p",[t._v("完成后，你会发现在你的"),a("code",[t._v("~/macOS-Installer/")]),t._v("文件夹中有一个包含macOS安装程序的DMG，名为"),a("code",[t._v("Install_macOS_11.1-20C69.Dmg")]),t._v("。挂载它，你就会找到安装程序。")]),t._v(" "),a("ul",[a("li",[t._v("注意:我们建议移动安装 macOS.app 到 "),a("code",[t._v("/Applications")]),t._v(" 文件夹，因为我们将从那里执行命令。")]),t._v(" "),a("li",[t._v("注意 2:在Finder中运行Cmd+Shift+G可以让你轻松跳转到"),a("code",[t._v("~/macOS-installer")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(457),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(458),alt:""}})]),t._v(" "),a("p",[t._v("从这里，跳转到"),a("a",{attrs:{href:"#setting-up-the-installer"}},[t._v("设置安装程序")]),t._v(" 来完成你的工作。如果你想检查下载的完整性，你可以检查"),a("a",{attrs:{href:"https://github.com/notpeter/apple-installer-checksums",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个校验存储库"),a("OutboundLink")],1),t._v(", 不过请注意，这些校验和是众包的，可能不是检查真实性的可靠方法。")]),t._v(" "),a("h2",{attrs:{id:"下载macos-传统os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载macos-传统os"}},[t._v("#")]),t._v(" 下载macOS:传统OS")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("此方法允许您下载OS X的更老版本，目前支持所有OS X的英特尔版本(10.4到当前)")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/installer-guide/mac-install-pkg.html"}},[t._v("传统macOS:离线方法")]),t._v(" "),a("ul",[a("li",[t._v("10.7 - 10.12 支持，不包括 10.9")])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/installer-guide/mac-install-recovery.html"}},[t._v("传统macOS:在线方法")]),t._v(" "),a("ul",[a("li",[t._v("10.7 - 11 支持")])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/installer-guide/mac-install-dmg.html"}},[t._v("传统macOS:磁盘映像")]),t._v(" "),a("ul",[a("li",[t._v("10.4 - 10.6 支持")])])],1)])])]),t._v(" "),a("h2",{attrs:{id:"设置安装程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置安装程序"}},[t._v("#")]),t._v(" 设置安装程序")]),t._v(" "),a("p",[t._v("现在我们将格式化USB为macOS安装程序和OpenCore做准备。我们希望使用带有GUID分区映射的macOS Extended (HFS+)。这将创建两个分区:主分区"),a("code",[t._v("MyVolume")]),t._v("和第二个名为"),a("code",[t._v("EFI")]),t._v("的分区，它用作引导分区，固件将在其中检查引导文件。")]),t._v(" "),a("ul",[a("li",[t._v("注意1:通过格式化USB创建的"),a("code",[t._v("EFI")]),t._v("分区是隐藏的，直到你挂载它。稍后将在"),a("a",{attrs:{href:"#setting-up-opencores-efi-environment"}},[t._v("设置OpenCore的EFI环境")]),t._v("时挂载")]),t._v(" "),a("li",[t._v("注2:默认情况下，磁盘实用程序只显示分区-按Cmd/Win+2显示所有设备(或者你可以按查看按钮)")]),t._v(" "),a("li",[t._v("注3:“Legacy macOS: 在线方法”部分的用户可以跳转到"),a("a",{attrs:{href:"#setting-up-opencores-efi-environment"}},[t._v("设置OpenCore的EFI环境")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(279),alt:"格式化USB"}})]),t._v(" "),a("p",[t._v("接下来运行"),a("a",{attrs:{href:"https://support.apple.com/en-us/HT201372",target:"_blank",rel:"noopener noreferrer"}},[t._v("苹果"),a("OutboundLink")],1),t._v("提供的"),a("code",[t._v("createinstallmedia")]),t._v("命令。请注意，该命令是为名称为"),a("code",[t._v("MyVolume")]),t._v("的USB创建的:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Big"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sur.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Apple Silicon上安装macOS比Big Sur更早的用户请注意")]),t._v(" "),a("p",[t._v("如果"),a("code",[t._v("createinstallmedia")]),t._v("以"),a("code",[t._v("zsh:killed")]),t._v("或"),a("code",[t._v("killed:9")]),t._v("失败，那么很可能是安装程序的代码签名有问题。要解决这个问题，您可以运行以下命令:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Big"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sur.app/Contents/Resources/\ncodesign "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--deep")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Big"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sur.app\n")])])]),a("p",[t._v("你需要为Xcode安装命令行工具:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("xcode-select "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--install")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("这需要一些时间，所以你可能想要喝杯咖啡或继续阅读本指南(公平地说，你真的不应该在没有阅读完整内容之前一步一步地遵循本指南)。")]),t._v(" "),a("p",[t._v("你也可以将"),a("code",[t._v("createinstallmedia")]),t._v("路径替换为安装程序所在的路径(与驱动器名称相同)。")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("传统 createinstallmedia 命令")]),t._v(" "),a("p",[t._v("来自苹果自己的网站:"),a("a",{attrs:{href:"https://support.apple.com/en-us/HT201372",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何为macOS创建一个可引导安装程序"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ventura")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Ventura.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Monterey")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Monterey.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Big Sur")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Big"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sur.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Catalina")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Catalina.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mojave")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mojave.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# High Sierra")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" High"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sierra")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--applicationpath")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# El Capitan")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--applicationpath")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yosemite")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--applicationpath")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mavericks")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mavericks.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--applicationpath")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mavericks.app "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--nointeraction")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"传统设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统设置"}},[t._v("#")]),t._v(" 传统设置")]),t._v(" "),a("p",[t._v("对于不支持UEFI引导的系统，请参见以下内容:")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("设置传统引导")]),t._v(" "),a("p",[t._v("首先，你需要以下文件:")]),t._v(" "),a("ul",[a("li",[t._v("BootInstall_IA32.tool 或 BootInstall_X64.tool\n"),a("ul",[a("li",[t._v("可以在OpenCorePkg的"),a("code",[t._v("/utilities/LegacyBoot/")]),t._v("目录下找到")])])]),t._v(" "),a("li",[t._v("安装USB(上面创建的)")])]),t._v(" "),a("p",[t._v("在你的OpenCore build文件夹中，导航到"),a("code",[t._v("Utilities/LegacyBoot")]),t._v("。在这里你会找到一个名为"),a("code",[t._v("BootInstall_ARCH.tool")]),t._v("的文件。这样做的目的是将DuetPkg安装到所需的驱动器。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(459),alt:"BootInstall 位置"}})]),t._v(" "),a("p",[t._v("现在"),a("strong",[t._v("使用sudo")]),t._v("在终端中运行此工具(否则此工具可能会失败):")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace X64 with IA32 if you have a 32-Bit CPU")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ~/Downloads/OpenCore/Utilities/legacyBoot/BootInstall_X64.tool\n")])])]),a("p",[a("img",{attrs:{src:s(460),alt:"磁盘选择/写入新MBR"}})]),t._v(" "),a("p",[t._v("这将给您一个可用磁盘的列表，选择您的磁盘，并提示您写入一个新的MBR。选择yes"),a("code",[t._v("[y]")]),t._v("，你就完成了。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(461),alt:"安装完毕"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(462),alt:"基础EFI"}})]),t._v(" "),a("p",[t._v("这将为你提供一个包含"),a("strong",[t._v("bootia32")]),t._v("或"),a("strong",[t._v("bootx64")]),t._v("文件的EFI分区")])]),t._v(" "),a("h2",{attrs:{id:"设置opencore的efi环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置opencore的efi环境"}},[t._v("#")]),t._v(" 设置OpenCore的EFI环境")]),t._v(" "),a("p",[t._v("设置OpenCore的EFI环境很简单-你需要做的就是挂载我们的EFI系统分区。当我们使用GUID格式化时，这是自动生成的，但默认情况下是卸载的， 这就是我们的朋友"),a("a",{attrs:{href:"https://github.com/corpnewt/MountEFI",target:"_blank",rel:"noopener noreferrer"}},[t._v("挂载EFI"),a("OutboundLink")],1),t._v(" 发挥作用的地方:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(463),alt:"挂载EFI"}})]),t._v(" "),a("p",[t._v("你会注意到，打开EFI分区后，它是空的。这就是乐趣的开始。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(464),alt:"EEFI空分区"}})]),t._v(" "),a("h2",{attrs:{id:"现在所有这些都完成了-前往设置efi-来完成你的工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现在所有这些都完成了-前往设置efi-来完成你的工作"}},[t._v("#")]),t._v(" 现在所有这些都完成了，前往"),a("RouterLink",{attrs:{to:"/installer-guide/opencore-efi.html"}},[t._v("设置EFI")]),t._v(" 来完成你的工作")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);