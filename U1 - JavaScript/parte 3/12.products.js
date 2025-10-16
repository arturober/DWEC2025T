const form = document.getElementById('formProduct');
const imgPreview = document.getElementById('imgPreview');
const tbody = document.querySelector("#tabla tbody");

form.image.addEventListener('change', () => {
    const file = form.image.files[0];
    if(!file) {
        imgPreview.src = '';
        return;
    }
    
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener('load', () => {
        imgPreview.src = reader.result;
    });
});

function addProduct(product) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdImage = document.createElement('td');
    const img = document.createElement('img');
    const tdBorrar = document.createElement('td');
    const btnBorrar = document.createElement('button');

    btnBorrar.textContent = 'Borrar';
    tdBorrar.append(btnBorrar);
    btnBorrar.addEventListener('click', () => {
        tr.remove();
    });

    tdName.textContent = product.name;
    tdPrice.textContent = product.price;
    img.src = product.image;
    tdImage.append(img);

    tr.append(tdImage, tdName, tdPrice, tdBorrar);
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