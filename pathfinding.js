document.addEventListener("DOMContentLoaded",function(){

    function change(e) {
        var h = Math.random() * 80 | 0 + 10;
        var w = Math.random() * 80 | 0 + 10;
        var t = Math.random() * (100 - h) | 0;
        var l = Math.random() * (100 - w) | 0;
        var R = Math.random() * 256 | 0;
        var G = Math.random() * 256 | 0;
        var B = Math.random() * 256 | 0;
        e.style.top = t + "vh";
        e.style.left = l + "vw";
    }

    var element = document.createElement("div");
    element.classList.add("point","courant")
    element.style.top ="20%";
    element.style.left ="40%";
    document.body.appendChild(element);

    var element2 = document.createElement("div2");
    element2.classList.add("point","courant")
    element2.style.top ="10%";
    element2.style.left ="10%";
    document.body.appendChild(element2);

    element.addEventListener("click", function() {
        change(element);
    });

    element2.addEventListener("click", function() {
        change(element2);
    });

});

