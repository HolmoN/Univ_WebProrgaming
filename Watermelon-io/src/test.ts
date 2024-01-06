import { GameCall } from "./GameCall";
window.onload = () =>
{
   let testcall = new GameCall();

   document.addEventListener('keydown', (event) => {
      if (event.key === 'w' || event.key === 'W') {
        // W キーが押された時の処理
         console.log("w");
         //testcall.DisplayReady(true);
         //testcall.DisplayStart(true);
         //testcall.DisplayFinish(true);
         testcall.DisplayWL(true,true);
      }
   });
}
