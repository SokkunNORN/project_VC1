    
     // ###################################################################################
     // #                  Author by: Sokun NORN                                          #
     // #                                                                                 #
     // ###################################################################################

// !!!!!!!!!!!!function form contact us user name that have onclick and onkeyup!!!!!!!!!!!!
function toMessageName() {
    var userName = form.userName.value;
    var characterUserName = 0;
    let message = document.getElementById('messageName');

    for (let i = 0; i < userName.length; i++) {
        characterUserName++;
    }

    if (characterUserName < 4) {
        message.innerHTML = 'Your name is at least 4 characters';
        message.style.color = '#f00';

    } else if (characterUserName > 10) {
            message.innerHTML = 'Your name is less than 10 characters';
            message.style.color = '#f00';

    } else {
            message.innerHTML = 'Your name is correct';
            message.style.color = "#0f0";
    }

    if (form.userName.value == '') {
        message.innerHTML = 'Your name is required';
    }
}

// !!!!!!!!!!!!!!function form contact us email (onclick and onkeyup)!!!!!!!!!!!!!!!
function toMessageEmail(inputEmail) {
    var typeEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let message = document.getElementById('messageEmail');

    if (inputEmail.value.match(typeEmail)) {
        message.innerHTML = 'Email is correct';
        message.style.color = '#0f0';
    } else if (form.email.value == '') {
        message.innerHTML = 'Email is required';
        message.style.color = '#f00';
    } else{
        message.innerHTML = 'Email is invalid';
        message.style.color = '#f00';
    }    

}

// !!!!!!!!!!!!!!this function for message command validation!!!!!!!!!!!!
function toMessage() {
    var characterMessage = form.enterMessage.value;
    var numberMessage = 0;
    let message = document.getElementById('messageCommand');

    for (let i = 0; i < characterMessage.length; i++) {
        numberMessage++;
    }

    if (numberMessage < 20) {
        message.innerHTML = 'Message is at least 20 characters';
        message.style.color = '#f00';
    } else if (numberMessage > 900) {
        message.innerHTML = 'Message is less than 300 characters';   
        message.style.color = '#f00';
    } else {
        message.innerHTML = 'Message is correct';    
        message.style.color = '#0f0';
    }

    if (form.enterMessage.value == '') {
        message.innerHTML = 'Message is required';
        message.style.color = '#f00';
    }

}


function contactUs(inputEmail) {

    // !!!!!!!!!!!!!!!type username form validation!!!!!!!!!!!!!!!!
    var userName = form.userName.value;
    var characterUserName = 0;
    let messageName = document.getElementById('messageName');

    for (let i = 0; i < userName.length; i++) {
        characterUserName++;
    }

    // !!!!!!!!!!!!!!!!!!!!part of message!!!!!!!!!!!!!!!!!!!!!!
    var characterMessage = form.enterMessage.value;
    var numberMessage = 0;
    let messageCommand = document.getElementById('messageCommand');    

    for (let i = 0; i < characterMessage.length; i++) {
        numberMessage++;
    }

    // !!!!!!!!!!!!!!!!!!!part of email!!!!!!!!!!!!!!!!!!!!!!!!!!! 
    var typeEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let messageEmail = document.getElementById('messageEmail');

    // !!!!!!!!!!!!!!!!permission button contact us!!!!!!!!!!!!!!!!!
    if (form.userName.value == '' | form.enterMessage.value == '' | form.email.value == '') { 

        if (form.userName.value == '') {
            messageName.innerHTML = 'Your name is required';
            messageName.style.color = '#f00';
        }  

        if (form.enterMessage.value == '') {
            messageCommand.innerHTML = 'Message is required';
            messageCommand.style.color = '#f00';
        }

        if (form.email.value == '') {
            messageEmail.innerHTML = 'Email is required';
            messageEmail.style.color = '#f00';
        } 
        alert('Sorry, please enter all informations');

    } else if (characterUserName < 4 | characterUserName > 10 | 
    numberMessage < 20 | numberMessage > 900 | 
    typeEmail.test(form.email.value) == false) {
        
        if (characterUserName < 4) {
            messageName.innerHTML = 'Your name is at least 4 characters';
            messageName.style.color = '#f00';

        } else if (characterUserName > 10) {
            messageName.innerHTML = 'Your name is less than 10 characters';
            messageName.style.color = '#f00';
        }

        if (numberMessage < 20) {
            messageCommand.innerHTML = 'Message is at least 20 characters';
            messageCommand.style.color = '#f00';
        } else if (numberMessage > 900) {
            messageCommand.innerHTML = 'Message is less than 300 characters';   
            messageCommand.style.color = '#f00';
        }

        if (typeEmail.test(form.email.value) == false) {
            messageEmail.innerHTML = 'Email is invalid';
            messageEmail.style.color = '#f00';
        }
        alert('Sorry, your information is not correct');

    } else {
        alert('Thank for your comment for improving our service');
        document.getElementById('enterName').value = '';
        document.getElementById('enterEmail').value = '';
        document.getElementById('enterMessage').value = '';
        document.getElementById('messageName').innerHTML = '';
        document.getElementById('messageEmail').innerHTML = '';
        document.getElementById('messageCommand').innerHTML = '';

    }
     
}

// !!!!!!!!!!!!!!!function clear value input and textarea!!!!!!!!!!!!!!!!!!!!!
function buttonClear() {

    let messageName = document.getElementById('messageName');
    let messageCommand = document.getElementById('messageCommand');
    let messageEmail = document.getElementById('messageEmail');

    document.getElementById('enterName').value = '';
    document.getElementById('enterEmail').value = '';
    document.getElementById('enterMessage').value = '';
    messageName.innerHTML = 'Your name is required';
    messageName.style.color = '#f00';
    messageCommand.innerHTML = 'Message is required';
    messageCommand.style.color = '#f00';
    messageEmail.innerHTML = 'Email is required';
    messageEmail.style.color = '#f00';
}