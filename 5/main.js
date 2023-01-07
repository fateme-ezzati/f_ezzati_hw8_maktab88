let form = document.getElementById('form')

function submit() {
    let nameErr = document.getElementById('nameErr')
    nameErr.innerText = ''
    let passErr = document.getElementById('passErr')
    passErr.innerText = ''
    let name = document.getElementsByName('fname')
    console.log(name[0])

    let pass1 = document.getElementsByName('pass1')
    let pass2 = document.getElementsByName('pass2')

    if (!name[0].value) {
        nameErr.innerText = ' !لطفا نام کاربری خود را وارد کنید'
    }

    if (!pass1[0].value || !pass2[0].value) {
        passErr.innerText = 'لطفا رمز عبور و تکرار آن را وارد کنید'
    } else if (pass1[0].value !== pass2[0].value) {
        passErr.innerText = 'مغایرت در رمز عبور'
    } else {
        if (pass1[0].value.length < 8) {
            passErr.innerText = 'رمز عبور باید حداقل 8 کارکتر باشد'
        }

        if (!pass1[0].value.split('').some((element) => typeof element === 'number')) {
            passErr.innerText = 'رمز عبور باید حداقل یک کارکترعددی داشته باشد'
        }

        if (!pass1[0].value.split('').some((element) => typeof element === 'number')) {
            passErr.innerText = 'رمز عبور باید حداقل یک کارکترعددی داشته باشد'
        }
    }


}

