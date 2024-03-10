window.addEventListener("load", () => {
    main.init();
})

let glob= {
    BT_ENABLED: true
}

let main = {
    init() {
        main.btSwitcher()
        main.cmDemo()

        main.conditionalBobatronScanner()

        window.addEventListener("resize", () => {
            main.conditionalBobatronScanner()
        })
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