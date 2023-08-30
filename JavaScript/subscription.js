function val(){
    const form = document.forms['subsform'];

    const name = form['fullname'].value;
    const email = form['email'].value;
    const num = form['phone'].value;
    const pref = form['prefer'].value;
    const subs = form['subs'].checked;

    let errorname = ''
    let errormail = ''
    let errornum = ''
    let errorrad = ''
    let erroracc = ''

    if(!name){
        errorname = "*Name must be filled!"
        document.getElementById('errorname').innerHTML = errorname
    }
    else{
        errorname = ""
        document.getElementById('errorname').innerHTML = errorname
    }

    if(!email){
        errormail = "*E-mail must be filled!"
        document.getElementById('errormail').innerHTML = errormail
    }
    else{
        let i = 0
        let count = 0

        while(i < email.length){
            if(email[i] == '@' && i != 0 && i != (email.length - 1)){
                count++
            }
            i++
        }
        
        if(count == 1 && email[email.length-5] != '@'){
            if(email[email.length - 4] == '.' && email[email.length - 3] == 'c' && email[email.length - 2] == 'o' && email[email.length - 1] == 'm'){
                errormail = ""
                document.getElementById('errormail').innerHTML = errormail
            }  
        }
        else{
            errormail = "*E-mail is not valid!"
            document.getElementById('errormail').innerHTML = errormail
        }
    }

    if(!num){
        errornum = "*Phone number must be filled!"
        document.getElementById('errornum').innerHTML = errornum
    }
    else{
        if(num[0] == '+' && num[3] == ' '){
            let leng = num.length
            let i = 4
            let count = 0
            while(i < leng){
                if(num[i] >= 0 && num[i] <= 9){
                    count++
                }
                i++
            }

            if(count > 0 && count == leng-4){
                errornum = ""
                document.getElementById('errornum').innerHTML = errornum
            }
            else{
                errornum = "*Phone number is not valid!"
                document.getElementById('errornum').innerHTML = errornum
            }
        }
        else{
            errornum = "*Phone number is not valid!"
            document.getElementById('errornum').innerHTML = errornum
        }
    }

    if(!pref){
        errorrad = "*Please choose your product preference!"
        document.getElementById('errorrad').innerHTML = errorrad
    }
    else if(pref == "body" || pref == "skin" || pref == "both"){
        errorrad = ""
        document.getElementById('errorrad').innerHTML = errorrad
    }

    if(!subs){
        erroracc = "*You must agree to receive newsletter!"
        document.getElementById('erroracc').innerHTML = erroracc
    }
    else{
        erroracc = ""
        document.getElementById('erroracc').innerHTML = erroracc
    }


    if(errorname != "" || errormail != "" || errornum != "" || errorrad != "" || erroracc != ""){
        return false
    }









}