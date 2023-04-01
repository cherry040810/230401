let points = [[0, 5], [5,10], [10,10],[15,5],[15,0],[10,-5],[5,-10],[0,-15],[-5,-10],[-10,-5],[-15,0],[-15,5],[-10,10],[-5,10]]; //list資料，

function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
  background(255);
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  push(); //紀錄當前畫布狀態
  scale(mouseX/width, mouseY/height); //隨著滑鼠移動改變圖形大小
  scale(1, -1); //上下翻轉
  for (let k = 1; k <= 5; k++) { //產生五層圖
    push(); //紀錄當前畫布狀態
    scale(k/5); //調整圖形大小
    for (let i = 0; i < points.length-1; i++) {
      let t = map(i, 0, points.length-2, 0, 1); // 計算漸層顏色的插值
      let color1 = color(255, 0, 110); // 漸層的起始顏色
      let color2 = color(58, 134, 255); // 漸層的結束顏色
      let lineColor = lerpColor(color1, color2, t); // 計算漸層顏色
      stroke(lineColor); // 設定線的顏色
      strokeWeight(5);
      line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
    }
    let t = 1;
    let color1 = color("#e7c6ff"); // 漸層的起始顏色
    let color2 = color("#b8c0ff"); // 漸層的結束顏色
    let lineColor = lerpColor(color1, color2, t); // 計算漸層顏色
    stroke(lineColor); // 設定線的顏色
    strokeWeight(5);
    line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
    pop(); //回復畫布狀態
  }
  pop(); //回復畫布狀態
  textSize(32); //設定文字大小
  textAlign(CENTER); //設定文字對齊方式
  push(); //紀錄當前畫布狀態
  scale(1, 1); //上下翻轉
  fill("#8fbfe0");
  text("淡江大學教育科技學系",0 ,0); //在畫布上繪製文字
  pop(); //回復畫布狀態
}