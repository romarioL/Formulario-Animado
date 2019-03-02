function animatedForm() {
   const arrows = document.querySelectorAll('.fa-arrow-down')


   arrows.forEach(arrow => {
   	arrow.addEventListener('click', () => {
   		const input = arrow.previousElementSibling
   		const parent = arrow.parentElement
   		const nextForm = parent.nextElementSibling

   		//validação

   		if(input.type === "text" && validateUser(input)) {
            // console.log('Está funcionando')
            nextSlide(parent, nextForm)
   		}else if(input.type ==="email" && validateEmail(input)) {
             nextSlide(parent, nextForm)
   		}else if(input.type === "password" && validateUser(input)){
   			nextSlide(parent, nextForm)
   		}else{
   			parent.style.animation = "shake 0.5s ease"
   		}

       // isso serve para tornar possível a repetição da animação
   		parent.addEventListener('animationend', () => {
   			parent.style.animation = '';
   		})
   	})
   })
}

function validateUser(user) {
     if(user.value.length < 6) {
        console.log('Coloque pelo menos seis caracteres!')
        error('rgb(189, 87, 87)')
     }else {
     	error('rgb(87, 189, 130)')
     	return true


     }
}

function validateEmail(email) {
	const validation = /^[^0-9][A-z0-9_]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/;
	if(validation.test(email.value)) {
		error('rgb(87, 189, 130)')
		return true 
	}else {
		 error('rgb(189, 87, 87)')
	}
}

function nextSlide(parent, nextForm) {
    parent.classList.add('innactive')
    parent.classList.remove('active')
    nextForm.classList.add('active')
}


function error(color) {
    document.body.style.backgroundColor = color
}


animatedForm()