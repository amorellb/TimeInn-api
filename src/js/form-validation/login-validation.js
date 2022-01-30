import * as helper from '../helper.js';
import * as validationHelper from '../form-validation/validation-helper.js';

const btnSignUp = document.querySelector('.btn-register');
const overlay = document.querySelector('.overlay');
const alertMsgLogin = document.querySelector('.login-alert');
const alertMsgPP = document.querySelector('.pp-alert');
const checkboxInput = document.querySelector('.pp-checkbox');

const emailInput = document.querySelector('.email-input');
const passInput = document.querySelector('.pass-input');
const btnLogin = document.querySelector('.btn-login');

export const loginBtnHandler = function (usersArr, setTokenFnc) {
  if (!btnLogin || !emailInput || !passInput) return;
  btnLogin.addEventListener('click', e => {
    e.preventDefault();
    const user = validationHelper.checkUserData(
      emailInput.value,
      passInput.value,
      usersArr
    );
    sendMsg(user, setTokenFnc);
  });
};

const sendMsg = function (checkedUser, setTokenFnc) {
  if (!alertMsgLogin) return;
  if (!checkedUser) {
    helper.toggleAlertVisibility(overlay, alertMsgLogin);
    setTimeout(() => {
      helper.toggleAlertVisibility(overlay, alertMsgLogin);
    }, 3000);
  } else if (checkedUser) {
    helper.setCookie(`user=${checkedUser.name}; path=/; SameSite=Lax;`);
    setTokenFnc(checkedUser.email, checkedUser.password);
    setTimeout(() => {
      window.location.replace('index.html');
    }, 1000);
  }
};

/**
 * A function to send the user from the login page to the sign up page
 */
export const sendToSignUpPage = function () {
  if (!btnSignUp || !checkboxInput || !overlay || !alertMsgPP) return;
  btnSignUp.addEventListener('click', () => {
    if (checkboxInput.classList.contains('checked')) {
      window.location.replace('signup.html');
    } else {
      helper.toggleAlertVisibility(overlay, alertMsgPP);
      setTimeout(() => {
        helper.toggleAlertVisibility(overlay, alertMsgPP);
      }, 3000);
    }
  });
};

export const checkboxHandler = function () {
  if (!checkboxInput) return;
  checkboxInput.addEventListener('click', () => {
    checkboxInput.classList.toggle('checked');
  });
};
