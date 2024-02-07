document.addEventListener("DOMContentLoaded", function () {
    var buscaElement = document.querySelector("#busca");
    buscaElement.addEventListener("input", buscar_filme);
});
async function buscar_filme() {
  try {
    var titulo = document.getElementById("busca").value;

    const url = "http://www.omdbapi.com/?apikey=70223818&s=" + titulo;

    const response = await fetch(url);
    const data = await response.json();

    const imgContainer = document.getElementById("imagem");

    if (data.Search && data.Search.length > 0) {
      imgContainer.innerHTML = "";

      data.Search.forEach((movie) => {
        const img = document.createElement("img");
        const p = document.createElement("p");
        p.innerText = movie.imdbID;
        img.className = "img";
        img.src = movie.Poster;
        // console.log(movie);
        imgContainer.appendChild(img);
        if (movie.Poster == 'N/A') {
            img.src = '';
            img.alt = movie.Title;
            img.classList.add('some');
        }
      });
    } else {
        imgContainer.innerHTML = "";
    }
  } catch (error) {
    console.error("Ocorreu um erro:", error.message);
  }
}
