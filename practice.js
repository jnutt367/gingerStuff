var obj = { prop: 10 };
gsap.to(obj, {
    duration: 1,
    prop: 200,
    //onUpdate fires each time the tween updates; we'll explain callbacks later.
    onUpdate: function() {
        console.log(obj.prop); //logs the value on each update.
    }
});

gsap.to(".black", {
    duration: 1,
    scale: ".5",
    y: "-400",
    backgroundColor: "orange"
});
gsap.fromTo(".green", { duration: 2, x: 2, y: 200, opacity: 0 }, { duration: 6, x: 5, y: -300, rotate: 45, backgroundColor: "orange", fill: "black", margin: "50", height: "100", width: "100", opacity: .9 });

gsap.to(".grey", { y: -300, textContent: "Hey, I still got it!", borderRadius: "15px", fontFamily: "fantasy", backgroundColor: "orange", opacity: "0.8", fontSize: "35", display: "grid", alignItems: "center", justifyContent: "center", });

gsap.fromTo(".jnutt", { y: 300, opacity: "0" }, { duration: 5, y: -300, opacity: "1", fontFamily: "fantasy", fontSize: "20px", color: "orange" });

gsap.fromTo(".red", { x: 100, textContent: "WOW" }, { x: 150, textContent: "Removal and Disposal of any & ALL medi-evil or other nuisances", fontFamily: "fantasy", borderRadius: "15px", backgroundColor: "orangeRed", color: "black", padding: "20", opacity: "0.8", fontSize: "35", display: "grid", alignItems: "center", justifyContent: "center", });

gsap.fromTo(".legend", { opacity: "0" }, { opacity: "1", fontSize: "35px" });