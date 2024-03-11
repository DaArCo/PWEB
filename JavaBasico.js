const currentDate = document.querySelector(".data-actual");
daysTag = document.querySelector(".dies");
prevNextIcon = document.querySelectorAll(".iconos span");

// aconseguim la data actual amb l'any i el més
let date = new Date(),
currYear = date.getFullYear();
currMonth = date.getMonth();

const months = ["Gener","Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Septembre", "Octubre", "Novembre", "Decembre"]

const renderCalendar = () => {
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); //Últim dia del més
    let liTag = "";

    for (let i = 1; i <= lastDateOfMonth; i++){
        liTag += `<li>${i}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(simbolo => {
    simbolo.addEventListener("click", () => {
        currMonth = simbolo.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else{
            date = new Date();
        }
        renderCalendar();
    });
});