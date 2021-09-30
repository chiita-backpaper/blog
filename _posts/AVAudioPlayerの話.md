---
title: "AVAudioPlayerについて調べた話"
category: "iOS"
excerpt: "個人開発しているアプリの機能で使うかもしれないということで、AVAudioPlayerについてまとめました。"
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Taichi Uragami
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

AVAudioPlayer は以下のことを実現するときに利用する。
・ファイルやバッファから任意の時間のオーディオを再生する。
・再生されるオーディオの volume, panning, rate, and looping behavior のコントロールする。
・再生レベルの計量データにアクセスする。
・複数のプレーヤーの再生を同期させて複数の音を同時に再生する。

\*ストリーミングオーディオやポジショナルオーディオの再生など、高度な再生機能を必要とする場合は、代わりに AVAudioEngine を使う。

プロパティ等についてもまとめられたらいい
まずはマークダウンをちゃんと書けるようにならないと

https://developer.apple.com/documentation/avfaudio/avaudioplayer
