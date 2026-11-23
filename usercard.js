
const cardcontainer=document.querySelector(".card-container");
const status=document.querySelector(".status");

async function cards(){

     status.textContent="web page is loaded plse wait...";
     try{
     const response =await fetch('https://randomuser.me/api/?results=3');
     if(!response.ok){
          throw new Error("failed to fetch user");
        }

       const data =await response.json();
       
      cardcontainer.innerHTML="";
      status.textContent="";   

       const cardlist =document.createElement("div");
       cardlist.classList.add("card-list");

      data.results.forEach(user => {

          const carddetails =document.createElement("div");
          carddetails.classList.add("card-details");
          
          // img
          const cardimg =document.createElement("img");
          cardimg.classList.add("card-image");

           cardimg.src=user.picture.large;
           cardimg.alt=user.cardimg;

           const cardinfo =document.createElement("div");
           cardinfo.classList.add("card-info");

          //  name
                const cardname =document.createElement("h3");
                cardname.classList.add("card-name");
                cardname.textContent=`${user.name.first} ${user.name.last}`; 

          // mail
                const cardmail =document.createElement("p");
                cardmail.classList.add("card-email");
                 cardmail.textContent=user.email;

          // phone
          const cardphone =document.createElement("p");
          cardphone.classList.add("p");
          cardphone.textContent=user.phone;

          // website
          const cardwebsite=document.createElement("p");
          cardwebsite.classList.add("p");
          cardwebsite.textContent=user.website;

                 carddetails.appendChild(cardimg);
                 cardlist.appendChild(carddetails);
                 carddetails.appendChild(cardinfo);
                 cardinfo.appendChild(cardname);
                 cardinfo.appendChild(cardmail);
                 cardinfo.appendChild(cardphone);
                 cardinfo.appendChild(cardwebsite);
             

          });
          cardcontainer.appendChild(cardlist);
    
  
     }catch(err){
          console.log(err);
          cardcontainer.innerHTML=`<P> unable to load users plese try again ..`;
     }
}
cards();

const btn=document.querySelector(".card-btn");
btn.addEventListener("click",(e)=>{
     e.preventDefault();
  cards();
  
})
