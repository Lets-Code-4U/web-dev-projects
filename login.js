let username;
let password;

document.getElementById("submit-btn").onclick = function () {
  username = document.getElementById("user-name").value;
  console.log(username);

  password = document.getElementById("user-password").value;
  console.log(password);
};

document.querySelector("#submit-btn").addEventListener("click",()=>{
  if(username==="Sarvesh")
