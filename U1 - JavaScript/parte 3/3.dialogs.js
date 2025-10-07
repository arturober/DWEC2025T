const btnAlert = document.getElementById("alert");
const btnConfirm = document.getElementById("confirm");
const btnPrompt = document.getElementById("prompt");
const confirmP = document.getElementById("respConfirm");
const promptP = document.getElementById("respPrompt");

btnAlert.addEventListener('click', () => {
    alert("Hola, qué tal?");
});

btnConfirm.addEventListener('click', () => {
    const resp = confirm("Estás aprendiendo JavaScript?");
    confirmP.textContent = resp ? 'Muy bien!' : 'Estudia más!';
});

btnPrompt.addEventListener('click', () => {
    const resp = prompt("Cómo te llamas?");
    promptP.textContent = resp ? `Hola ${resp}` : 'No has respondido!';
});