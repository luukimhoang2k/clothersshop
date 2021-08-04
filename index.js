let domEvent = document.querySelectorAll("div img")
console.log(domEvent);
let index = 0;
domEvent.forEach(item => item.addEventListener("click", function (e) {
    const lightImage = document.querySelector("img")
    let lightSrc = "";
    const image = e.target.src;
    const template = `<div class="lightbox">
    <div class="lightbox-content">
    <i class="fa fa-angle-left lightbox-prev"></i>
        <img src="${image}"
            alt="">
    <i class="fa fa-angle-right lightbox-next"></i>
    </div>
</div>`
    document.body.insertAdjacentHTML("beforeend", template);
    let removeImage = document.querySelector(".lightbox");
    removeImage.addEventListener('click', (e) => {
        if (e.target.classList.contains("lightbox")) {
            e.target.parentNode.removeChild(e.target);
        }
        else if (e.target.classList.contains("lightbox-next")) {
            lightSrc = lightImage.getAttribute("src");;
            index = [...domEvent].findIndex(item => item.getAttribute("src") === lightSrc);
            index += 1;
            console.log(index);
            const newSrc = [...domEvent][index].getAttribute("src");
            lightImage.setAttribute("src", newSrc);

        }
    })
}));
