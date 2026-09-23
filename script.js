let currentPage = 0;

function showPage() {

    document.getElementById("title").innerHTML =
        pages[currentPage].title;

    const photo = document.getElementById("photo");

photo.classList.remove("fade");

photo.src = pages[currentPage].image;

setTimeout(()=>{

    photo.classList.add("fade");

},10);

    document.getElementById("text").innerHTML =
        pages[currentPage].text.replace(/\n/g,"<br>");

}

function nextPage(){

    currentPage++;

    if(currentPage >= pages.length){

        currentPage = 0;

    }

    showPage();

}

showPage();
for(let i=0;i<8;i++){

    createHeart();

}
function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.className="heart";

    heart.style.left=Math.random()*100+"%";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },4000);

}
function playMusic(){

document.getElementById("ytplayer").src=
"https://www.youtube.com/embed/JhwD08bjfus?autoplay=1&loop=1&playlist=JhwD08bjfus";

}
const musicBtn = document.getElementById("musicBtn");
const bgm = document.getElementById("bgm");

musicBtn.addEventListener("click", () => {

    bgm.play();

    musicBtn.innerHTML = "🎵 กำลังเล่นเพลง";

})
