// Obtener las imágenes y el modal
		var images = document.querySelectorAll('.image-item img');
		var modal = document.createElement('div');
		modal.classList.add('modal');
		var modalContent = document.createElement('img');
		modalContent.classList.add('modal-content');
		var closeModal = document.createElement('span');
		closeModal.classList.add('close');
		closeModal.textContent = '×';
		modal.appendChild(modalContent);
		modal.appendChild(closeModal);
		document.body.appendChild(modal);

		// Agregar evento de clic en las imágenes para mostrar el modal
		images.forEach(function(img) {
			img.addEventListener('click', function() {
				modal.style.display = "block";
				modalContent.src = img.src;
			});
		});

		// Agregar evento para cerrar el modal
		closeModal.addEventListener('click', function() {
			modal.style.display = "none";
		});
		
		// Obtener el ícono de hamburguesa y el menú
		const hamburger = document.getElementById("hamburger");
		const menu = document.getElementById("menu");

		// Cuando el ícono de hamburguesa es clickeado
		hamburger.addEventListener("click", () => {
			// Alternar la visibilidad del menú
			menu.classList.toggle("active");
		});

		// Opcional: Para cerrar el menú si se hace clic fuera de él
		document.addEventListener("click", (event) => {
			if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
				menu.classList.remove("active");
			}
		});