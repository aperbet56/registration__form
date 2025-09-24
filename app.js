// Regex
const regexName = /^[A-Z][A-Za-z\é\è\ê\ô\-]+$/;
const regexCity = /^[a-zA-Z',.\s-]{1,25}$/;
const regexTelephone = /^(33|0)(6|7|9)\d{8}$/;
const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
const regexPassword =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

// Récupération des différents éléments HTML5
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const city = document.querySelector("#city");
const phoneNumber = document.querySelector("#telephone");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmation = document.querySelector("#confirm");
const footerCopyrightYear = document.querySelector(".footer__text__year");

/**
 * Fonction firstNameValidation pour la validation du champ prénom
 * @param {String} firstName
 */
const firstNameValidation = (firstName) => {
  // Ecoute de l'événement "change" sur l'input firstName
  firstName.addEventListener("change", (e) => {
    e.preventDefault();
    if (regexName.test(firstName.value) == false) {
      document.querySelector("#firstNameErrorMsg").textContent =
        "Veuillez saisir un prénom valide, ex : Pierre";
      return false;
    } else {
      document.querySelector("#firstNameErrorMsg").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction firstNameValidation
firstNameValidation(firstName);

/**
 * Déclaration de la fonction lastNameValidation pour la validation du champ nom
 *  @param {String} lastName
 */
const lastNameValidation = (lastName) => {
  // Ecoute de l'événement "change" sur l'input lastName
  lastName.addEventListener("change", (e) => {
    e.preventDefault();
    if (regexName.test(lastName.value) == false) {
      document.querySelector("#lastNameErrorMsg").textContent =
        "Veuillez saisir un nom valide, ex : Dupont";
      return false;
    } else {
      document.querySelector("#lastNameErrorMsg").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction lastNameValidation
lastNameValidation(lastName);

/**
 * Déclaration de la fonction cityValidation pour la validation du champ ville
 * @param {String} city
 */
const cityValidation = (city) => {
  // Ecoute de l'événement "change" sur l'input city
  city.addEventListener("change", (e) => {
    e.preventDefault();
    if (regexCity.test(city.value) == false) {
      document.querySelector("#cityErrorMsg").textContent =
        "Veuillez saisir une ville valide, ex : Lyon";
      return false;
    } else {
      document.querySelector("#cityErrorMsg").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction cityValidation
cityValidation(city);

/**
 * Déclaration de la fonction telephoneValidation pour la validation du champ numéro de téléphone
 * @param {Number} phoneNumber
 */
const telephoneValidation = (phoneNumber) => {
  // Ecoute de l'événement "change" sur l'input telephone
  phoneNumber.addEventListener("change", (e) => {
    e.preventDefault();
    if (regexTelephone.test(phoneNumber.value) == false) {
      document.querySelector("#phoneNumberErrorMsg").textContent =
        "Veuillez saisir un numéro de téléphone valide, ex : 06 00 00 00 00";
      return false;
    } else {
      document.querySelector("#phoneNumberErrorMsg").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction telephoneValidation
telephoneValidation(phoneNumber);

/**
 * Déclaration de la fonction emailValidation pour la validation du champ email
 * @param {String} email
 */
const emailValidation = (email) => {
  // Ecoute de l'événement "change" sur l'input email
  email.addEventListener("change", (e) => {
    e.preventDefault();
    if (regexEmail.test(email.value) == false) {
      document.querySelector("#emailErrorMsg").textContent =
        "Veuillez saisir un email valide, ex : exemple@contact.com";
      return false;
    } else {
      document.querySelector("#emailErrorMsg").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction emailValidation
emailValidation(email);

/**
 * Déclaration de la fonction passwordValidation pour la validation du champ email
 * @param {String} password
 */
const passwordValidation = (password) => {
  // Ecoute de l'événement "change" sur l'input password
  password.addEventListener("change", (e) => {
    e.preventDefault();
    if (regexPassword.test(password.value) == false) {
      document.querySelector("#passwordErrorMsg").textContent =
        "Votre mot de passe doit contenir entre 8 et 16 caractères dont une majuscule, une minuscule, un chiffre et un caractère spécial.";
      return false;
    } else {
      document.querySelector("#passwordErrorMsg").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction emailValidation
passwordValidation(password);

/**
 * Déclaration de la fonction passwordValidation pour la validation du champ email
 * @param {String} confirmation
 */
const confirmValidation = (confirmation) => {
  // Ecoute de l'événement "change" sur l'input password
  confirmation.addEventListener("change", (e) => {
    e.preventDefault();
    if (confirmation.value !== password.value) {
      document.querySelector("#confirmErrorMsg").textContent =
        "Vos mots de passe ne correspondent pas";
      return false;
    } else {
      document.querySelector("#confirmErrorMsg").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction emailValidation
confirmValidation(confirmation);

const send = () => {
  // Récupération du bouton "S'inscrire !"
  const btn = document.querySelector("#registration");
  // Ecoute de l'événement "click" sur le bouton "S'inscrire !"
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      regexName.test(firstName.value) == false ||
      regexName.test(lastName.value) == false ||
      regexCity.test(city.value) == false ||
      regexTelephone.test(phoneNumber.value) == false ||
      regexEmail.test(email.value) == false ||
      regexPassword.test(password.value) == false ||
      confirmation.value !== password.value
    ) {
      alert("Veuillez remplir correctement les champs");
    } else {
      const contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        city: city.value,
        telephone: phoneNumber.value,
        email: email.value,
        password: password.value,
      };
      console.log(contact);
      alert("Inscription confirmée!");
      // Rechargement de la page
      window.location.reload();
      firstName.value = "";
      lastName.value = "";
      city.value = "";
      telephone.value = "";
      email.value = "";
      password.value = "";
      confirmation.value = "";
      window.scrollTo(0, 0);
    }
  });
};
// Appel de la fonction send()
send();

// Déclaration de la fonction getCurrentYear qui va permettre l'affichage dynamique de l'année
const getCurrentYear = () => {
  // Récupération de la date actuelle stockée dans la constante date
  const date = new Date();
  //console.log(date);

  // Récupération de l'année stockée dans la constante year
  const year = date.getFullYear();
  //console.log(year);

  // Affichage dynamique de l'année en cours
  footerCopyrightYear.textContent = `${year}`;
};
// Appel de la fonction getCurrentYear()
getCurrentYear();
