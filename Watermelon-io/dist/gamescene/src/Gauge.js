"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gauge = void 0;
var Gauge = /** @class */ (function () {
    function Gauge() {
        this.fillAmount = 0;
        this.display = false;
        this.width = 100;
        this.height = 10;
        this.borderWidth = 2;
        this.drawGauge();
    }
    Gauge.prototype.Display = function (display) {
        this.display = display;
        this.drawGauge();
    };
    Object.defineProperty(Gauge.prototype, "FillAmount", {
        set: function (value) {
            this.fillAmount = Math.max(0, Math.min(1, value));
            this.drawGauge();
        },
        enumerable: false,
        configurable: true
    });
    Gauge.prototype.setGaugeSize = function (width, height) {
        this.width = width;
        this.height = height;
        this.drawGauge();
    };
    //ここで描画
    Gauge.prototype.drawGauge = function () {
        var gaugeElement = document.querySelector('.Cgauge');
        if (gaugeElement) {
            if (this.display) {
                //可視状態を変更する
                gaugeElement.style.visibility = "visible";
                gaugeElement.style.width = "".concat(this.width, "px");
                gaugeElement.style.height = "".concat(this.height, "px");
                gaugeElement.style.position = 'relative';
                gaugeElement.style.border = "".concat(this.borderWidth, "px solid black");
                var fillHeight = this.fillAmount * (this.height - 2 * this.borderWidth);
                var fillElement = document.createElement('div');
                fillElement.style.width = "".concat(this.width - 2 * this.borderWidth, "px");
                fillElement.style.height = "".concat(fillHeight, "px");
                fillElement.style.position = 'absolute';
                fillElement.style.left = "".concat(this.borderWidth, "px");
                fillElement.style.bottom = "".concat(this.borderWidth, "px");
                // ゲージの色をFillAmountに応じて変化させるクラスを追加
                fillElement.classList.add('fill');
                gaugeElement.innerHTML = '';
                gaugeElement.appendChild(fillElement);
            }
            else {
                //可視状態を変更する
                gaugeElement.style.visibility = "hidden";
            }
        }
    };
    return Gauge;
}());
exports.Gauge = Gauge;
