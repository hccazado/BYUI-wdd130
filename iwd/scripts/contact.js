    const form = document.forms[0];
    const submitted = document.getElementById("submitted");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        submitted.innerHTML = "Thank you for reaching out, "+form.u_name.value.toUpperCase()+". Soon We'll be replying."
        submitted.style.display = "block";
    })