

const dropdown = document.querySelector(".dropdown");
const options = document.querySelector(".option");
const links = document.getElementsByTagName("a");

const showOptions = (() => {
  dropdown.onmouseover = function () {
    options.style.display = "grid";
  };
  options.onmouseover = function () {
    options.style.display = "grid";
  };
})();

const hideOptions = (() => {
  options.onmouseleave = function () {
    options.style.display = "none";
  };
})();

const slideContainer = document.querySelector(".slideshow");
let slideNum = 0;
let start;
const timedSlider = () => {
  let i;
  const images = document.querySelectorAll(".images-in-slideshow");
  //   if (num < 1) {
  //     slideNum = images.length;
  //   }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  slideNum++;
  if (slideNum > images.length) {
    slideNum = 1;
  }
  images[slideNum - 1].style.display = "block";
  start = setTimeout(timedSlider, 2000);
};


const imageSlider = (num) => {
  let i;
  const images = document.querySelectorAll(".images-in-slideshow");
    if (num < 1) {
      slideNum = images.length;
    }
    if (num > images.length) {
      slideNum = 1;
    }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[slideNum - 1].style.display = "block";
};

const changeSlide = (n) => {
  clearTimeout(start);
  imageSlider((slideNum += n));
};


const fwdBtn = document.getElementById("arrow-forward");
fwdBtn.addEventListener("click", () => {
  changeSlide(1);
});

const backBtn = document.getElementById("arrow-back");
backBtn.addEventListener("click", () => {
  changeSlide(-1);
});

timedSlider();

function Form(name, email, password) {
  this.Name = name;
  this.email = email;
  this.zip=zip;
  this.password=password;
  this.passwordConfirm = this.passwordConfirm;
  this.emailValid = false;
  this.nameValid = false;
  this.passwordValid = false;
  this.zip=false;

  this.checkName = function() {
    if(!this.Name){firstNameLabel.innerHTML=`First and last name: <br> *Please fill in field*`;
    firstNameLabel.style.color='red'}
    else if(this.Name){formFirstName.value=this.uppercase(this.Name);
    firstNameLabel.innerHTML=`First and last name:`
    firstNameLabel.style.color='black';
    this.nameValid=true;
    }
  };

  this.checkEmail = function() {
      let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(!this.email.match(mailformat)){
        emailLabel.innerHTML=`Email:<br>Email address is not valid`;
        emailLabel.style.color='red'
      } else if(this.email.match(mailformat)){
        emailLabel.innerHTML=`Email:`;
        emailLabel.style.color='black';
        this.emailValid=true;
      }
  };

  this.passwordMatch = function(){
    if(this.password!==this.passwordConfirm){
      confirmLabel.innerHTML=`Confirm Password:<br>Passwords do not match`;
      confirmLabel.style.color= 'red';
    } else if(this.password===this.passwordConfirm){
      confirmLabel.innerHTML=`Confirm Password:`;
      consfirmLabel.style.color='black';
    }
  }

  this.uppercase = function(str){
      let splitString = str.toLowerCase().split(' ');
      for (var i = 0; i < splitString.length; i++) {
          splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);     
      }
      return splitString.join(' '); 
  }

  this.validateZip = function(){
    let az = /[a-zA-Z]/;
    if ((this.zip.match(az))||(this.zip.length>10)){
      zipLabel.innerHTML=`Zipcode:<br>Zipcode is not valid.`;
    zipLabel.style.color='red';
    }else if(!this.zip.match(az)){
      zipLabel.innerHTML=`Zipcode:`;
      zipLabel.style.color='black';
    }
  }

}

const assignAndCheckFname =()=>{
  inputForm.Name = formFirstName.value;
  inputForm.checkFName();
} 

const checkPassword =()=>{
  inputForm.password = passwordField.value;
  inputForm.passwordConfirm = passwordConfirm.value;
  inputForm.passwordMatch();
}

const validateEmail=()=>{
  inputForm.email=emailAddress.value;
  inputForm.checkEmail();
}

const checkZipcode=()=>{
  inputForm.zip=zipcode.value;
  inputForm.validateZip();
}

const inputForm = new Form();


const formFirstName = document.getElementById('fname');
const firstNameLabel = document.getElementById('label-fname');
const passwordField = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const confirmLabel = document.getElementById('confirm-label');
const emailAddress = document.getElementById('email');
const emailLabel = document.getElementById('email-label');
const zipcode = document.getElementById('zip');
const zipLabel = document.getElementById('zip-label');
zipcode.onblur=checkZipcode;
emailAddress.onblur=validateEmail;
formFirstName.onblur= assignAndCheckFname;
passwordConfirm.onblur=checkPassword;
console.log(formFirstName)








