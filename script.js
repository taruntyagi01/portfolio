const form=document.getElementById("contactForm")

form.addEventListener("submit" , async(e)=>{
    e.preventDefault();

    const data ={
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        service: form.service.value,
        message: form.message.value, 
    };
    try{
        const response = await
        fetch("https://portfolio-backend-1-kpk8.onrender.com/contact",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data),
        });
        const result= await response.json();
        alert(result.message);
        form.reset()

    }  catch (error) {
        alert("Failed to send message")
    }
})