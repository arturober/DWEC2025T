const form = document.getElementById('formPersona');
const imgPreview = document.getElementById('imgPreview');

form.avatar.addEventListener('change', () => {
    const file = form.avatar.files[0];
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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.nombre.value;
    const hobbies = Array.from(form.hobbies)
        .filter(hobby => hobby.checked)
        .map(hobby => hobby.value);

    console.log(`Nombre: ${name}`);
    console.log(`Aficiones: ${hobbies}`);

    form.reset();
    imgPreview.src = '';
});