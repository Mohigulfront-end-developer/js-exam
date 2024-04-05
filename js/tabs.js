const tabs = document.querySelectorAll(".tab li");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        //to remove active class from previous tab
        tabs.forEach((tab) => tab.classList.remove("active"));

        tab.classList.add("active");

        //to show content according to tab selected

        //to hide previous tab content

        contents.forEach((c) => c.classList.remove("active"));

        contents[index].classList.add("active");
    });
});

//to run the animation initially when the page loads
tabs[0].click();