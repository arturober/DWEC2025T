const form = document.getElementById('formPersona');
const imgPreview = document.getElementById('imgPreview');

form.avatar.addEventListener('change', () => {
    const file = form.avatar.files[0];
    if(!file) {
        imgPreview.src = '';
        return;
    }
    
    if(imgPreview.src) {
        URL.revokeObjectURL(imgPreview.src);
    }
    imgPreview.src = URL.createObjectURL(file);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('nombre');
    const hobbies = data.getAll('hobbies');

    console.log(`Nombre: ${name}`);
    console.log(`Aficiones: ${hobbies}`);

    form.reset();
    imgPreview.src = '';
});