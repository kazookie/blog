---
title: "PostfixとDovecotでメールサーバ構築する"
date: 2021-08-02T03:05:22+09:00
tags: ["ArchLinux"]
categories: ["tech"]
---

ArchLinux 上にメールサーバを構築した際の手順を記載します。
いきなりオープンネットに公開するのではなく、ローカルで動作確認、理解を深めてから
公開するまでの手順を記載します。

<!--more-->

## DNSレコードの設定
```
mx smtp.hacklab.jp 10
a smtp X.X.X.X
```

## Postfix
### インストール
```
# pacman -S postfix
```
### 設定
```
# vim /etc/postfix/main.cf
myhostname = mail.nospam.net
mydomain = nospam.net

```

## Dovecot

## Let's encrypto


## 参考サイト
[メールの仕組み - Geekなページ](https://www.geekpage.jp/technology/ip-base/mail-0.php)
[メールの仕組み(SMTP) - Geekなページ](https://www.geekpage.jp/technology/ip-base/mail-2.php)

[メールの仕組み(POP3) - Geekなページ](https://www.geekpage.jp/technology/ip-base/mail-1.php)
