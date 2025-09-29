        let div1 = document.getElementById("prinimg");
        let div2 = document.getElementById("div2");

        //EFFET PARALLAX AVEC PROPORTIONNALITE
        window.addEventListener("scroll", () => {
            document.querySelectorAll(".prinimgp1").forEach(div1 => {
                let rect = div1.getBoundingClientRect();
                let scrollPercent = rect.top / window.innerHeight;

                let offset = 50 + scrollPercent * -30;

                div1.style.backgroundPosition = `center ${offset}%`;
            });
        });


        window.addEventListener("scroll", () => {
            document.querySelectorAll(".divbackgroundp3").forEach(div2 => {
                let rect = div2.getBoundingClientRect();
                let scrollPercent = rect.top / window.innerHeight;

                let offset = 50 + scrollPercent * -30;

                div2.style.backgroundPosition = `center ${offset}%`;
            });
        });


        window.addEventListener("scroll", () => {
            document.querySelectorAll(".divbackgroundp5").forEach(div3 => {
                let rect = div3.getBoundingClientRect();
                let scrollPercent = rect.top / window.innerHeight;

                let offset = 50 + scrollPercent * -30;

                div3.style.backgroundPosition = `center ${offset}%`;
            });
        });


        // HOVER ONGLET
        let ongletaccueil = document.getElementById("ongletaccueil");
        ongletaccueil.style.color = "rgba(255, 255, 255, 0.500)";


        //RESPONSIVE
        let headerrespon  = document.getElementById("headerrespon");
        let headeronglet = document.getElementById("headeronglet");
        let divrespon = document.getElementById("divrespon");
        let imgrespon = document.getElementById("imgrespon");

        headerrespon.style.display = "none";
        divrespon.style.display = "none";

        const mq = window.matchMedia("(max-width: 1024px)");
        function handleWidthChange(e) {
            if (e.matches) {
                headeronglet.style.display = "none";

                headerrespon.style.display = "block";
            }
        }
        handleWidthChange(mq);
        mq.addEventListener("change", handleWidthChange);

        function menurespon() {
            if (imgrespon.src.includes("parametre.png")) {
                divrespon.style.display = "block";
                imgrespon.src = "image/croix.png";
            } else {
                divrespon.style.display = "none";
                imgrespon.src = "image/parametre.png";
            }
        }

        //BUTTON
        function direction(a, b) {
            let pourcentage;

            if (window.innerWidth <= 1024) {
                pourcentage = b;
            } else {
                pourcentage = a;
            }

            const hauteurPage = document.documentElement.scrollHeight - window.innerHeight;
            const position = (pourcentage / 100) * hauteurPage;

            window.scrollTo({
                top: position,
                behavior: "smooth"
            });
        }

        function service(){
            direction(19.25, 19);
            divrespon.style.display = "none";
            imgrespon.src = "image/parametre.png";
        }
        function apropos(){
            direction(57.7, 56.5);
            divrespon.style.display = "none";
            imgrespon.src = "image/parametre.png";
        }
        function contact(){
            direction(96.15, 96.35);
            divrespon.style.display = "none";
            imgrespon.src = "image/parametre.png";
        }

        function appel(){
            window.location.href = "tel:0784633261";
        }