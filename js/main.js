let operateurUtilise = ""
let dernierValeurEntrer = ""

let operation = document.getElementById("operation")
let resultat = document.getElementById("resultat")

//on affiche 0 par defaut sur l'ecran
resultat.innerHTML = 0

//pour gere le click des boutons chiffres
function chiffresclick() {
   let boutons = document.querySelectorAll(".chiffres") 
  
    document.addEventListener("keydown", (e) => {
        //forEach pour verifier si une touche appuyée correspond au texte sur boutons
        boutons.forEach((bouton)  => {
            if (e.key === bouton.textContent){
                bouton.classList.replace("btn-light", "btn-secondary")
                bouton.click()
            } else {   
                bouton.classList.replace("btn-secondary", "btn-light")

            }
            
        })
    })

    //on écoute les bouton au niveau du navigateur
   boutons.forEach((bouton) => {
    bouton.addEventListener("click", function () {
        if (resultat.innerHTML === "0") {
            resultat.innerHTML = this.textContent
        } else {
            resultat.innerHTML += this.textContent
        }
       })
   })
   }


   //coté operateur
   function Operateur() {
    let boutons = document.querySelectorAll(".operateur")
    document.addEventListener("keydown", (e) => {
        //forEach pour verifier si une touche appuyée correspond au texte sur boutons
        boutons.forEach((bouton)  => {
            if (e.key === bouton.textContent){
                bouton.classList.replace("btn-light", "btn-secondary")
                bouton.click()
            } else {   
                bouton.classList.replace("btn-secondary", "btn-light")

            }
            
        })
    })

    //on écoute les bouton au niveau du navigateur
   boutons.forEach ((bouton) => {
    bouton.addEventListener("click", function () {
        if (resultat.innerHTML !== "") {
            operation.innerHTML = resultat.innerHTML + this.textContent
            resultat.innerHTML = 0
            operateurUtilise = this.textContent
        }
       })
   })
   }
 

   //boutons pourcentage
   let pourcentage = document.querySelector('.pourcentage')
   pourcentage.addEventListener('click', function () {
    if (resultat.innerHTML !== "" && resultat.innerHTML !== "0") {
        resultat.innerHTML = Number(resultat.innerHTML) / 100
    }
   })
   

   //boutons supprimer un element
   let del = document.querySelector('.del')
   del.addEventListener('click', function () {
    if (resultat.innerHTML !== "" && resultat.innerHTML !== "0") {
         //La methode slice permet de supprimer un élément dans notre variable. -1 veut dire supprime le dernier element de la variable
        resultat.innerHTML = resultat.innerHTML.slice(0, -1)
    } else {
        resultat.innerHTML = 0
        dernierValeurEntrer = ""
    }
   })

   //boutons tout effacé
   let clear = document.querySelector(".clear")
   clear.addEventListener('click', function (){ 
        resultat.innerHTML = 0
        operation.innerHTML = ""
        dernierValeurEntrer = ""
   })


   //boutons pour egal
   function egal() {
    let egal = document.querySelector(".egal")
    egal.addEventListener('click', function() {
        if (dernierValeurEntrer !== "") {
          operation.innerHTML = resultat.innerHTML + operateurUtilise + dernierValeurEntrer
          resultat.innerHTML = eval(operation.innerHTML) 

        } else {
            dernierValeurEntrer = resultat.innerHTML
            operation.innerHTML += resultat.innerHTML
            resultat.innerHTML = eval(operation.innerHTML)
        }
    }) 
   }







chiffresclick()
Operateur()
egal()
