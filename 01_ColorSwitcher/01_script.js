const body = document.querySelector('body');

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    
    console.log(button);
    button.style.display = 'inline-block';
    button.style.height = '50px';
    button.style.width = '50px';
    button.style.border = '2px solid black';
    button.style.borderRadius = '100%';
    button.style.backgroundColor = button.id;

    button.addEventListener('click', (e) => {
        body.style.backgroundColor = e.target.id;
    });

    // button.addEventListener('click', (e) => {
        
    //     console.log("event : ", e);
    //     console.log("event target : ",e.target);
    //     console.log("event target ID : ",e.target.id);
    //     if (e.target.id === 'gray'){
    //         body.style.backgroundColor = 'gray';
    //     }
    //     if (e.target.id === 'white'){
    //         body.style.backgroundColor = 'white';
    //     }
    //     if (e.target.id === 'blue'){
    //         body.style.backgroundColor = 'blue';
    //     }
    //     if (e.target.id === 'yellow'){
    //         body.style.backgroundColor = 'yellow';
    //     }
    // });
});