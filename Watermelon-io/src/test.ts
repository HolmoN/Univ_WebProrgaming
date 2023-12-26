import { GameCall } from "./GameCall";
window.onload = () =>
{
   let testcall = new GameCall();
   testcall.DisplayReady(false);
   testcall.DisplayStart(false);
   testcall.DisplayFinish(true);
   testcall.DisplayWL(false,false);
  
}
