const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

let container = document.getElementsByClassName("flex-container justify")[0];

for (let i = 0; i < works.length; i++) {
    let eachArt = document.createElement("div");
    let author = document.createElement("h3");
    let tips = document.createElement("h4");
    let description = document.createElement("h3");
    let lifetime = document.createElement("h5");
    let inner_box = document.createElement("div");
    let button = document.createElement("button");
    eachArt.className = "item";
    inner_box.className = "inner-box";
    author.innerText = works[i].author;
    tips.innerText = "Genre:" + works[i].tips;
    description.innerText = "Popular Photos";
    lifetime.innerText = "Lifetime:" + works[i].lifetime;
    author.style.display = "inline";
    lifetime.style.display = "inline";
    button.innerText = "Visit";
    inner_box.append(author, lifetime,description);
    for (let j = 0; j < works[i].photos.length; j++) {
        let img = document.createElement("img");
        img.src = works[i].photos[j];
        img.width = 100;
        img.height = 100;
        img.style.margin = "5px";
        inner_box.append(img);
    }
    eachArt.append(tips, inner_box, button);
    container.append(eachArt);
}