 let showHidePassword=document.querySelector('#showhidepassword')
    showHidePassword.addEventListener('change',test1)

    let eyeImage=document.querySelector('#eye-image')
    eyeImage.addEventListener('click',test1)
    function test1()
    {
        let passwordElement=document.querySelector('#pass1')
        let passwordLabel=document.querySelector('#pass-label')
        if(showHidePassword.checked)
        {
             passwordElement.type="text"
             eyeImage.src="../../images/eye.png"
        }
        else
        {
            passwordElement.type="password"
            eyeImage.src="../../images/hide_eye.png"
        }
    }