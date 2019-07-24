class ToolTip {

    constructor() {
        this._oP = null;
        this.time_1 = null;

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this._setCss = this._setCss.bind(this);
    }

    show(text, timer) {
        if (this._oP) {
            document.body.removeChild(this._oP);
            clearTimeout(this.time_1);
        }

        let cssText = `position: fixed;
        top: 50%; 
        left:50%;
        width: 260px; 
        padding: 3px 10px;
        line-height: 32px;
        margin-left: -130px; 
        margin-top: -16px;
        color: #fff; 
        font-size: 12px; 
        text-align: center;
        background: rgba(51, 51, 51, 0.8);
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        -webkit-transition:all 0.3s linear;
        transition:all 0.3s linear;
        z-index:99999999;
        `;
        
        this._oP = document.createElement("p");
        this._oP.innerHTML = text;
        this._setCss(cssText);
        document.body.appendChild(this._oP);
        timer && (this.hide(timer));
    }

    hide(timer) {
        this.time_1 = setTimeout(() => {
            if (this._oP) {
                //结合css的transition，会有一个渐变的视觉
                this._oP.style.opacity = "0";
                setTimeout(() => {
                    document.body.removeChild(this._oP);
                    this._oP = "";
                }, 300)
            }
        }, timer);
    }

    _setCss(csstext) {
        this._oP.style.cssText = csstext;
    }
}

export default new ToolTip();
