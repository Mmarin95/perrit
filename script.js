const botonPerrito = document.getElementById("boton-perrito");
const contenedorPerrito = document.getElementById("contenedor-perrito");
const imagenPerrito = document.getElementById("imagen-perrito");

botonPerrito.addEventListener("click", () => {
	fetch("https://www.reddit.com/r/dogpictures.json")
		.then(response => response.json())
		.then(data => {
			const imagenes = data.data.children.filter(child => child.data.url.includes(".jpg") || child.data.url.includes(".png")).map(child => child.data.url);
			if (imagenes.length > 0) {
				const indiceImagen = Math.floor(Math.random() * imagenes.length);
				const urlImagen = imagenes[indiceImagen];
				imagenPerrito.src = urlImagen;
				contenedorPerrito.style.display = "block";
			}
		})
		.catch(error => console.error(error));
});
