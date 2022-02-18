"use strict";
var point2D = { x: 0, y: 10 };
var point3D = { x: 0, y: 10, z: 20 };
function iTakePoint2D(point) {
    console.log(point);
}
class Hoge {
    constructor() {
        this.x = 3;
        this.y = 5;
        this.z = 65;
    }
}
var hoge = new Hoge();
hoge.x = 3;
hoge.y = 4;
hoge.z = 3;
iTakePoint2D(point2D); // 全く同じ構造なので問題なし
iTakePoint2D(point3D); // 追加のプロパティがあっても問題なし
iTakePoint2D(hoge); // エラー: `y` が存在しない
