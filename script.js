document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const members = document.querySelectorAll(".team-member");
    const logo = document.querySelector(".logo");
    const title = document.querySelector("h1");

    setTimeout(() => {
        container.style.opacity = "1";
        container.style.transform = "translateY(0)";
        logo.style.opacity = "1";
        logo.style.transform = "scale(1)";
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
        members.forEach((member, index) => {
            setTimeout(() => {
                member.style.opacity = "1";
                member.style.transform = "translateX(0)";
            }, index * 300);
        });
    }, 500);
});