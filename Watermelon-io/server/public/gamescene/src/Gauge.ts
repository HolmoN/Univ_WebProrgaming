import { IGauge } from "./Interface/IGauge";

export class Gauge implements IGauge {
    private fillAmount: number;
    private display: boolean;
    private width: number;
    private height: number;
    private borderWidth: number;

    constructor() {
        this.fillAmount = 0;
        this.display = false;
        this.width = 100;
        this.height = 10;
        this.borderWidth = 2;
        this.drawGauge();
    }

    Display(display: boolean): void {
        this.display = display;
        this.drawGauge();
    }

    set FillAmount(value: number) {
        this.fillAmount = Math.max(0, Math.min(1, value));
        this.drawGauge();
    }

    setGaugeSize(width: number, height: number): void {
        this.width = width;
        this.height = height;
        this.drawGauge();
    }

    //ここで描画
    private drawGauge(): void {
        const gaugeElement = document.querySelector('.Cgauge') as HTMLElement;
        if (gaugeElement) {
            if (this.display) {
                //可視状態を変更する
                gaugeElement.style.visibility = "visible";

                gaugeElement.style.width = `${this.width}px`;
                gaugeElement.style.height = `${this.height}px`;
                gaugeElement.style.position = 'relative';
                gaugeElement.style.border = `${this.borderWidth}px solid black`;

                const fillHeight = this.fillAmount * (this.height - 2 * this.borderWidth);
                const fillElement = document.createElement('div');
                fillElement.style.width = `${this.width - 2 * this.borderWidth}px`;
                fillElement.style.height = `${fillHeight}px`;
                fillElement.style.position = 'absolute';
                fillElement.style.left = `${this.borderWidth}px`;
                fillElement.style.bottom = `${this.borderWidth}px`;

                // ゲージの色をFillAmountに応じて変化させるクラスを追加
                fillElement.classList.add('fill');

                gaugeElement.innerHTML = '';
                gaugeElement.appendChild(fillElement);
            }
            else{
                //可視状態を変更する
                gaugeElement.style.visibility = "hidden";
            }
        }
    }
}