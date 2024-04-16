// Lier Outlook à bilan.HTML
/**
 * Cette fonction construit et affiche l'email. 
 * 
 */
function afficherEmail() {
    let suggestion = document.getElementById("suggestion");
    valeurSuggestion = suggestion.value;
    const email = 'benanfanesaid@gmail.com';
    let mailto = `mailto:${email}?subject=Suggestions?body=${valeurSuggestion}` 
    location.href = mailto;
}



let btnEmail = document.getElementById("EnvoyerMessage");
btnEmail.addEventListener("click", (event) => {
    event.preventDefault();
    afficherEmail();
});

