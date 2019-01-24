var campo = [
    document.querySelector("#nomeid"),
    document.querySelector("#foneid"),
    document.querySelector("#emailid")
];
console.log(campo);

document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("oi");
});