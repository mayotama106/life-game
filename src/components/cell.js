function Cells() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {  
    }
  }
}

/* 
どうゆうデータがあるか
  // board
  //   -列数
  //   -行数
  cell
    - 周りのセルの状態
    - 自分の状態
  時間系
    - 世代数
必要な情報
　どのセルが生きているかどうか
    ー　行列
    ー　true,falseの配列(生きている：true)
  セル自身
    ー　自身の場所
*/
