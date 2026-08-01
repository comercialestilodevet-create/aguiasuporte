// ==========================
// CONFIGURAÇÃO WHATSAPP
// ==========================


const numeroWhatsApp = "+44 7796 034833"; 
// TROQUE PELO SEU NÚMERO


const mensagem = 
"Olá! Gostaria de saber mais sobre a consultoria Águia Suporte para Inglaterra.";


const linksWhats = document.querySelectorAll(
".whatsapp-btn, .btn-menu, .hero .btn-primary, .resultado .btn-primary, .cta .btn-primary"
);


linksWhats.forEach(link => {

    link.href =
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    link.target="_blank";

});




// ==========================
// ANIMAÇÃO AO SCROLL
// ==========================


const elementos = document.querySelectorAll(
".card, .step, .faq-item"
);


const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}


});


},
{
threshold:.15
}
);



elementos.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="all .6s ease";

observer.observe(el);

});




// ==========================
// HEADER SOMBRA AO ROLAR
// ==========================


window.addEventListener("scroll",()=>{


const header=document.querySelector("header");


if(window.scrollY>50){

header.style.boxShadow=
"0 5px 20px rgba(0,0,0,.15)";

}

else{

header.style.boxShadow=
"0 3px 15px rgba(0,0,0,.1)";

}


});
