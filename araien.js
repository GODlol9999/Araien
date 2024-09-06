
"use strict";
// Canvasの設定
var canvas = $('#draw-area');
var ctx = canvas[0].getContext('2d');

//半透明(透明度50%)の青い四角を表示
ctx.beginPath();
ctx.fillStyle = "rgba(" + [0, 0, 255, 0.5] + ")";
ctx.fillRect(1, 1, 32, 32);   

//無透明(透明度0%)の青い四角を表示  
ctx.beginPath();
ctx.fillStyle = "rgba(" + [0, 0, 255, 1] + ")";
ctx.fillRect(32, 32, 32, 32);

function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    if (sideMenu.style.width === "250px") {
        sideMenu.style.width = "0";
    } else {
        sideMenu.style.width = "250px";
    }
}  
