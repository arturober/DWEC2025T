const form = document.getElementById('formProduct');
const imgPreview = document.getElementById('imgPreview');
const tbody = document.querySelector("#tabla tbody");
const template = document.getElementById('productTemplate');

form.image.addEventListener('change', () => {
    const file = form.image.files[0];
    if(!file) {
        form.image.setCustomValidity("");
        imgPreview.src = '';
        return;
    }

    if(!file.type.startsWith("image")) {
        form.image.setCustomValidity("El archivo debe ser de tipo imagen");
    } else if(file.size > 100000) {
        form.image.setCustomValidity("No puedes seleccionar imágenes de más de 100KB");
    } else {
        form.image.setCustomValidity(""); // No hay error
    }
    form.image.reportValidity(); 
    
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener('load', () => {
        imgPreview.src = reader.result;
    });
});

function addProduct(product) {
    const tr = template.content.cloneNode(true).firstElementChild;
    const tdName = tr.querySelector('.name');
    const tdPrice = tr.querySelector('.price');
    const img = tr.querySelector('img');
    const btnBorrar = tr.querySelector('.delete');

    tdName.textContent = product.name;
    tdPrice.textContent = product.price;
    img.src = product.image;

    btnBorrar.addEventListener('click', () => {
        tr.remove();
        // btnBorrar.closest('tr').remove();
    });
    
    tbody.append(tr);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const product = {
        name: form.productName.value,
        price: form.price.value,
        image: imgPreview.src
    };

    addProduct(product);

    form.reset();
    imgPreview.src = '';
});