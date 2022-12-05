import {
    btnLogin,
    btnLogout,
    btnRegister,
    createLi,
    navAccount,
    userName,
} from '../document.mjs';

// må sjekke denne
export function loggedIn() {
    if (userName === null || undefined) {
        btnLogin.style.display = 'block';
        btnLogout.style.display = 'none';
        btnRegister.style.display = 'block';
        console.log('logged Out', userName);
    } else {
        btnLogin.style.display = 'none';
        btnLogout.style.display = 'block';
        btnRegister.style.display = 'none';
        navAccount.style.display = 'block';
        createLi.style.display = 'block';
        console.log('logged in OK', userName);
    }
}
// jQuery(window).load(function() {
//     //Set the login session
//     sessionStorage.setItem('status','loggedIn')
//   });

//   //Check the login session
//   if (sessionStorage.getItem('status') != null))
//       //redirect to page
//       console.log('You are logged in');
//   }
//   else{
//       //show validation message
//     console.log('You are not logged in');
//   }
