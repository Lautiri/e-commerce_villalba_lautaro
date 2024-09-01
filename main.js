const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const h5 = card.querySelector("h5");
    const text = card.querySelector(".card-text");
    const img = card.querySelector(".card-iframe");

    if (h5.innerText.includes("Cachorrin Martinez") && text.innerText.includes("$181222Perricoins") && img.src.includes("https://gifer.com/embed/Hgf5")) {
        h5.innerText = "Cachorrin Martinez en ofertas";
        text.innerText = "Precio anterior ̶$1̶8̶1̶2̶2̶2̶ Perricoins \ Precio actual $140724";
        img.src = "https://gifer.com/embed/506K";
    } else if (h5.innerText.includes("Panchito Guerrero") && text.innerText.includes("$1914Perricoins") && img.src.includes("https://gifer.com/embed/7AaG")) {
        h5.innerText = "WarriorCat";
        text.innerText = "Precio anterior  ̶$̶1̶9̶1̶4̶ Perricoins \ Precio actual $1917";
        img.src = "https://gifer.com/embed/22Cl";
    } else if (h5.innerText.includes("El Github") && text.innerText.includes("$2008Perricoins") && img.src.includes("https://gifer.com/embed/Ao")) {
        h5.innerText = "El Doghub";
        text.innerText = "Precio anterior ̶$̶2̶0̶0̶8̶ Perricoins \ Precio actual $2024";
        img.src = "https://gifer.com/embed/fyFn";
    }
});

 
