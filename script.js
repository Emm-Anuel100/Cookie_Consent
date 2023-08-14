const cookieBox = document.querySelector(".wrapper");
   acceptBtn = cookieBox.querySelector(".item");

   acceptBtn.addEventListener("click", ()=>{
      // setting cookie for one month
      document.cookie = "CookieBy=Goo; max-age="+60*60*24*30;
      if (document.cookie) {
         cookieBox.classList.add("hide"); // hide cookie if set
      }
      else{
         alert("cookie can't be set");
      }
   })
   // //if cookie is set and not expired
   const checkCookie = document.cookie.indexOf("CookieBy=GooCookies");
   // if cookie is set show it else hide it
   checkCookie != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");  