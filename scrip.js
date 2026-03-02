const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "yes do it";
    gif.src="https://i.pinimg.com/originals/e3/b9/8a/e3b98a6c46e5e264dc38b93d198f4e5f.gif"
    
    // បាត់ប៊ូតុង
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
})

noBtn.addEventListener('mouseover', function() {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute"; // បន្ថែមនេះ
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
})