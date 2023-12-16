import { Gauge } from "./Gauge";

// TestGauge クラスのインスタンスを作成
const gauge = new Gauge();

gauge.setGaugeSize(20, 200);

gauge.Display(false);

// テスト用にゲージのランダムな変化を実現する関数
const updateFillAmount = () => {
    const newFillAmount = Math.random() * 3 - 1;
    gauge.FillAmount = newFillAmount;
    console.log('Updated FillAmount:', newFillAmount);
};

// （テスト用）500ミリ秒ごとにゲージのフィル量を変更
setInterval(updateFillAmount, 500); 
