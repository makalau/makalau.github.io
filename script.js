burguer = document.querySelector("#menu-icon");
mobileVersion = document.querySelector("#menu-mobile");

burguer.addEventListener("click", ()=>{
    if (mobileVersion.classList.contains("mobile-desactive")){
        mobileVersion.classList.remove("mobile-desactive");
        mobileVersion.classList.add("mobile-active");
        burguer.classList.remove("bi-list");
        burguer.classList.add("bi-x-lg");
      } 
      
      else if(mobileVersion.classList.contains("mobile-active")){
        mobileVersion.classList.remove("mobile-active");
        mobileVersion.classList.add("mobile-desactive");
        burguer.classList.remove("bi-x-lg")
        burguer.classList.add("bi-list");
      }
});

