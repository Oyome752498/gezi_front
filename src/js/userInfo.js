export const UserInfo = {
  messageAuthority: false
}
export const LoginHidden = function (){
  let appRootElment = document.getElementById("app")
  console.log(appRootElment);
  if(appRootElment.childNodes.length > 0 ){ 
     appRootElment.childNodes[0].hidden=true;
  }
}
export const LoginShow = function (){
  let appRootElment = document.getElementById("app")
  console.log(appRootElment);
  if(appRootElment.childNodes.length > 0 ){ 
  appRootElment.childNodes[0].hidden=false;
  }
}