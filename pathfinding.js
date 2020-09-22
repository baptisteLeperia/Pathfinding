document.addEventListener("DOMContentLoaded",function(){

    class Game {
        constructor(){
            var eventTarget = document.createElement("div");
            eventTarget.addEventListener("keydown", event => {
                if (event.isComposing || event.keyCode === 229) {
                return;
                }
                // back screen
            });
        }

    }


    class Point {
        constructor() {
            var element = document.createElement("div");
            element.classList.add("point")
            var h = Math.random() * 80 | 0 + 10;
            var w = Math.random() * 80 | 0 + 10;
            this.t = Math.random() * (100 - h) | 0;
            this.l = Math.random() * (100 - w) | 0;
            element.style.top = this.t + "%";
            element.style.left = this.l + "%";
            document.body.appendChild(element);

            element.addEventListener("click", function() {
                Point.change(element);
                console.log(Point.distance(p1, p2));
            });
        }

        static change(e) {
            var h = Math.random() * 80 | 0 + 10;
            var w = Math.random() * 80 | 0 + 10;
            var t = Math.random() * (100 - h) | 0;
            var l = Math.random() * (100 - w) | 0;
            e.style.top = t + "%";
            e.style.left = l + "%";
        }
      
        static distance(a, b) {
          const dx = a.l - b.l;
          const dy = a.t - b.t;
          return Math.hypot(dx, dy);
        }
      }
      
    const g = new Game();

    const p1 = new Point();
    const p2 = new Point();
    const p3 = new Point();
    const p4 = new Point();
    const p5 = new Point();
    const p6 = new Point();
    const p7 = new Point();
    const p8 = new Point();
    const p9 = new Point();
    const p10 = new Point();

    Point.distance(p1,p2);
    console.log(Point.distance(p1, p2));

    //Point.random_point(10);




});

