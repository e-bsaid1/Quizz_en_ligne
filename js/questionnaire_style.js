// Fonction faisant un bilan de tous les scores obtenus : 
const form = document.querySelector("form");


// Empêcher le form d'être soumis
form.addEventListener("submit", function(event) {
  event.preventDefault();
 });

// Bloquer le bouton "Vérifier les réponses après un click dessus"
//submitBtn.addEventListener("click", GestionClick); 

function GestionClick() {
  var submitBtn = document.getElementById('submit');
  submitBtn.disabled ='true';
  window.alert('disabled');
};


function score_check_form() {
  var formulaire = document.getElementById('QuizFormulaire');
  var CasesCochees = formulaire.querySelectorAll('input[type="checkbox"]:checked');
  var PucesCochees = formulaire.querySelectorAll('input[type="radio"]:checked');

  /// Variable du score de la page 
  /// Variable donnant le score final
  var score_page = 0;
 
  for (var i = 0; i < CasesCochees.length; i++) {
      if(CasesCochees[i].classList.contains('right_answer')) {
        CasesCochees[i].classList.add('reponse_bonne');
        score_page++;
      }

      if(CasesCochees[i].classList.contains('false_answer')) {
        CasesCochees[i].classList.add('reponse_mauvaise');
      }

  }
  
  for (var i = 0; i < PucesCochees.length; i++) {
      if (PucesCochees[i].classList.contains('right_answer')) {
        PucesCochees[i].classList.add('reponse_bonne');
        score_page++;        
      }

      if (PucesCochees[i].classList.contains('false_answer')) {
        PucesCochees[i].classList.add('reponse_mauvaise');
      }

  }
  
  var compteur = document.getElementById('compteur');
  compteur.textContent = score_page;
  localStorage.setItem("score_page", score_page);
  var conversion_string_page = localStorage.getItem("score_page");
 
}

