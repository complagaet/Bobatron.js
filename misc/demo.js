window.addEventListener("load", () => {
    main.init();
})

let glob= {
    BT_ENABLED: true
}

let examples = {
    install: `<div><code><font size="2" face="Courier New"><font color="black">&lt;</font><font color="#006699"><b>script</b></font> <font color="#808080">type</font><font color="black">=</font><font color="blue">"text/javascript"</font> <font color="#808080">src</font><font color="black">=</font><font color="blue">"Bobatron.js"</font><font color="black">&gt;&lt;/</font><font color="#006699"><b>script</b></font><font color="black">&gt;</font><br /></font></code></div>`,
    html: `<div><code><font size="2" face="Courier New"><font color="black">&lt;</font><font color="#006699"><b>div</b></font> <font color="#808080">class</font><font color="black">=</font><font color="blue">"bobatron"</font><font color="black">&gt;</font><br /><font color="black">...</font><br /><font color="black">&lt;/</font><font color="#006699"><b>div</b></font><font color="black">&gt;</font><br /></font></code></div>`,
    launch: `<div><code><font size="2" face="Courier New"><font color="black">window.addEventListener(</font><font color="blue">"load"</font><font color="black">, () =&gt; {</font><br />&nbsp;&nbsp;&nbsp;&nbsp;<font color="black">bobatron.scanner()</font><br /><font color="black">})</font><br /><font color="black">window.addEventListener(</font><font color="blue">"resize"</font><font color="black">, () =&gt; {</font><br />&nbsp;&nbsp;&nbsp;&nbsp;<font color="black">bobatron.scanner()</font><br /><font color="black">})</font><br /></font></code></div>`,
    cm: `<div><code><font size="2" face="Courier New"><font color="black">&lt;</font><font color="#006699"><b>div</b></font> <font color="#808080">class</font><font color="black">=</font><font color="blue">"bobatron"</font> <font color="#808080">Bt-CM</font><font color="black">=</font><font color="blue">"1"</font><font color="black">&gt;</font><br /><font color="black">...</font><br /><font color="black">&lt;/</font><font color="#006699"><b>div</b></font><font color="black">&gt;</font><br /></font></code></div>`
}

let main = {
    init() {
        main.btSwitcher()
        main.cmDemo()
        main.examplesShow()

        main.conditionalBobatronScanner()

        window.addEventListener("resize", () => {
            main.conditionalBobatronScanner()
        })
    },
    examplesShow() {
        for (let [key, value] of Object.entries(examples)) {
            try {
                document.getElementById(`example_${key}`).innerHTML = value;
            } catch (e) {
                console.log(e);
            }
        }
    },
    conditionalBobatronScanner() {
        glob.BT_ENABLED ? bobatron.scanner() : main.bobatronSubstitution();
    },
    bobatronSubstitution() {
        bobatron.clearAll()
        for (let i = 0, o = document.getElementsByClassName("bobatron"); i < o.length; i++) {
            let cm = o[i].getAttribute("Bt-CM")
            if (cm != null) { cm = Number(cm) }
            else { cm = 1 }
            cm *= 29
            try {
                if (o[i].getAttribute("Bt-Color")) {
                    o[i].style.backgroundColor = `${o[i].getAttribute("Bt-Color")}`
                }
                o[i].style.borderRadius = `${cm}px`
            }
            catch(e) { console.log(e) }
        }
    },
    btSwitcher() {
        let switcher = document.getElementById("btSwitcher");

        glob.BT_ENABLED = switcher.checked;
        switcher.onchange = () => {
            glob.BT_ENABLED = switcher.checked;
            main.conditionalBobatronScanner()
        }
    },
    cmDemo() {
        let slider = document.getElementById("slider_cm"),
            test = document.getElementById("test_cm");

        test.setAttribute("Bt-CM", `${slider.value * 3 / 100 + 0.01}`)
        slider.oninput = () => {
            test.setAttribute("Bt-CM", `${slider.value * 3 / 100 + 0.01}`)
            main.conditionalBobatronScanner()
        }
    }
}