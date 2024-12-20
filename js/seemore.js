    document.addEventListener("DOMContentLoaded", () => {
        const testimonials = document.querySelectorAll(".testimonial-item");
        
        testimonials.forEach(item => {
            const content = item.querySelector("div.border-top");
            const seeMoreBtn = document.createElement("button");
            seeMoreBtn.classList.add("see-more-btn");
            seeMoreBtn.innerText = "See More";

            if (content.scrollHeight > 450) {
                item.appendChild(seeMoreBtn);

                seeMoreBtn.addEventListener("click", () => {
                    if (item.classList.contains("expanded")) {
                        item.classList.remove("expanded");
                        seeMoreBtn.innerText = "See More";
                    } else {
                        item.classList.add("expanded");
                        seeMoreBtn.innerText = "See Less";
                    }
                });
            }
        });
    });
