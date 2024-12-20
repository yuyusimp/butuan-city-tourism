    document.addEventListener("DOMContentLoaded", function () {
        const testimonialItems = document.querySelectorAll(".testimonial-item");

        testimonialItems.forEach((item) => {
            const seeMoreBtn = document.createElement("button");
            seeMoreBtn.className = "see-more-btn";
            seeMoreBtn.textContent = "See More";
            item.appendChild(seeMoreBtn);

            seeMoreBtn.addEventListener("click", function () {
                if (item.classList.contains("expanded")) {
                    item.classList.remove("expanded");
                    seeMoreBtn.textContent = "See More"; // Switch to "See More"
                } else {
                    item.classList.add("expanded");
                    seeMoreBtn.textContent = "See Less"; // Switch to "See Less"
                }
            });
        });
    });

