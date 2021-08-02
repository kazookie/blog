---
title: "QNAP TS-221,TS-119P+にArchLinuxをインストールする"
date: 2021-07-25T00:00:00+09:00
tags: ["ArchLinux", "ARM", "QNAP"]
categories: ["Linux"]
thumbnail: ""
---

QNAP TS-221とTS-119P+にArchLinuxをインストールすることができたので、手順や躓いた点などのメモです。
<!--more-->


## 背景
自宅で利用していたPentium G5500ファイルサーバですが、
場所を取る・発熱が多い・ファンの音が煩いので、実家の自室
に置くことにしました。

代わりに以前使っていたQNAPのNASを利用しようと思いまいたが、利用当初はオンラインアップデートをすると文鎮化した経験やWebUIが頻繁にフリーズしまともに利用できないなどの問題があり、利用を躊躇していました。


## 参考リンク
- [デバイスのスペック](https://www.cyrius.com/debian/kirkwood/qnap/)
- [シリアル通信について](https://www.cyrius.com/debian/kirkwood/qnap/ts-119/serial/)

## シリアル通信
screen /dev/tty.usbserial-AH01KS97 115200,cs8,-parenb,-cstopb
