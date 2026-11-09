//your JS code here. If required.
const container = document.querySelector(".container");

        const colors = [
            "#e74c3c",
            "#8e44ad",
            "#3498db",
            "#e67e22",
            "#2ecc71",
            "#f1c40f"
        ];

    
        for (let i = 0; i < 800; i++) {
            const square = document.createElement("div");

            square.classList.add("square");

			
            square.addEventListener("mouseover", function () {

                const randomColor =
                    colors[Math.floor(Math.random() * colors.length)];

                square.style.backgroundColor = randomColor;

                
                setTimeout(() => {
                    square.style.backgroundColor = "#1d1d1d";
                }, 1000);

            });

            container.appendChild(square);
        }