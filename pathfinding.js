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
        // Le constructeur
        constructor() {

            // On crée un élément point
            var element = document.createElement("div");
            element.classList.add("point")
            var h = Math.random() * 80 | 0 + 10;
            var w = Math.random() * 80 | 0 + 10;
            this.t = Math.random() * (100 - h) | 0;
            this.l = Math.random() * (100 - w) | 0;
            element.style.top = this.t + "%";
            element.style.left = this.l + "%";
            document.body.appendChild(element);

            this.e=element;



        }

        add_courant(){
            this.e.classList.add("courant")
        }


        static remove_courant(e){
            var olala = document.getElementsByClassName("courant")[0];
            olala.classList.remove("courant");

            e.classList.add("courant")

            var h = Math.random() * 80 | 0 + 10;
            var w = Math.random() * 80 | 0 + 10;
            var t = Math.random() * (100 - h) | 0;
            var l = Math.random() * (100 - w) | 0;
            olala.style.top = t + "%";
            olala.style.left = l + "%";

        }


        add_listener_change(){
            // Si on clique sur ce point, on appelle la fonction change
            this.e.addEventListener("click", function() {
                Point.remove_courant(element);
                //Point.change(element);
                console.log(Point.distance(p1, p2));
            });
        }

        static get_current(){
            var olala = document.getElementsByClassName("courant")[0];
            return olala;
        }

        get_distance_between(){

        }

        // Listener 
        add_listener_choice(){

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

        static get_current_point(array1 = ['a', 'b', 'c']){
            for (element of array1) {
                if (element.classList=="courant"){
                    return element;
                }
            }
        }
      }
      

    // Classe principale
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
    p10.add_courant();

    Point.distance(p1,p2);
    console.log(Point.distance(p1, p2));

    //Point.random_point(10);

    //Tableaux :
    //all_distances[9]
    //all_points[10]
    
    //Fonctions :
    //get_current_point(tableau_de_points)  :   retourne le point courant

    //main:
    //on définit une constante (nombre de points) -> ici 10
    //on crée un jeu (de 10 points)

    //jeu:
    //on crée un tableau de 10 points
    //on ajoute un point dans la catégorie "courant"
    //on crée un tableau avec toutes les distances par rapport au point courant
    //si click -> on vérifie que la distance par rapport au point courant est la plus faible
    //si non -> message d'erreur
    //si oui -> on enlève le point courant actuel, on le déplace
    //          on donne la catégorie "courant" au nouveau point

    /*
    
    //main :
    const number nombre_de_points = 10;
    jeu = new jeu(nombre_de_points);

    //jeu :

    const number nombre_de_pts;
    Point point_courant;

    tableau_de_points[nombre_de_points];
    for (i=0; i<10 ; i++){
        tableau_de_points[i]=new Point();
    }
    this.point_courant=tableau_de_points[0];
    this.point_courant.add_courant();

    tableau_de_distances[nombre_de_points-1];
    for (i=0; i<10-1 ; i++){
        tableau_de_distances[i]=diff(point_courant,tableau_de_points[i])
    }

    if diff(point_courant,point_pointé)!=min(tableau_de_distance){
        erreur;
    }
    */
});

