"use strict"; 

const header = document.getElementsByTagName("header");  
console.log(header); 

const mobileMenu = document.getElementById("e_mobile_menu"); 
const mobileMenuBurgerButton = document.getElementById("e_mobile_menu_button"); 

mobileMenuBurgerButton.addEventListener("click", function() {
    if (mobileMenuBurgerButton.dataset.enabled == "true") { 
        mobileMenu.style.top = null; 
        mobileMenuBurgerButton.dataset.enabled = "false"; 
        header[0].classList.remove("bg-white/25"); 
        header[0].classList.remove("backdrop-blur-sm");
        return; 
    }
    header[0].classList.add("bg-white/25"); 
    header[0].classList.add("backdrop-blur-sm");
    mobileMenuBurgerButton.dataset.enabled = "true"; 
    mobileMenu.style.top = 0; 
})


if (document.body.getAttribute("main-body") == "") {
    const landingSectionDialogButton = document.getElementById("landing_contact_dialog_button"); 
    const contactSectionDialogButton = document.getElementById("contact_contact_dialog_button"); 
    const contactDialog = document.getElementById("contact_dialog"); 
    const contactCloseDialogButton = document.getElementById("conact_close_dialog_button"); 

    landingSectionDialogButton.addEventListener("click", openContactDialog);
    contactSectionDialogButton.addEventListener("click", openContactDialog);
    contactCloseDialogButton.addEventListener("click", closeContactDialog); 

    function openContactDialog() {
        if (contactDialog instanceof HTMLDialogElement) {
            let contactForm = contactDialog.children[0].children[0];  
            contactDialog.open = true; 
            contactDialog.style.visibility = "visible"; 
            contactForm.style.visibility = "visible"; 
            setTimeout(() => {
                contactDialog.style.opacity = "1"; 
                contactDialog.style.transition = "0.25s ease"; 
            }, 250)
            setTimeout(() => {
                contactForm.style.opacity = "1"; 
                contactForm.style.transition = "0.5s ease"; 
            }, 500); 
            document.body.classList.add("overflow-hidden"); 
        }
    }
    
    function closeContactDialog() {
        if (contactDialog instanceof HTMLDialogElement) { 
            let contactForm = contactDialog.children[0].children[0];   
            setTimeout(() => {
                contactDialog.style = null;  
            }, 500); 
            setTimeout(() => {            
                contactForm.style.visibility = "invisible";
                contactDialog.style.visibility = "invisible"; 
                contactDialog.open = false;
                document.body.classList.remove("overflow-hidden"); 
            }, 750)
        }
    }

    const contactCursor = document.getElementById("e_cta_cursor_pointer"); 
    
    document.body.addEventListener("scroll", function() {
        console.log(contactCursor.getBoundingClientRect().y); 
        if (contactCursor.getBoundingClientRect().y  > 600) {
            contactCursor.style.transform = "translateY(30px)"; 
            contactCursor.style.rotate = "-6deg"; 
        } else {
            contactCursor.style = null; 
        }
       
    })
}

if (document.body.getAttribute("service-body") == "") { 
    
    const serviceImages = document.getElementsByClassName("e-view-image"); 

    setTimeout(() => {
        serviceImages[0].classList.add("opacity-100"); 
        serviceImages[1].classList.add("opacity-100"); 
    }, 250); 

    document.body.addEventListener("scroll", function() {

        for (let i = 2; i < 6; i++) {
            if (serviceImages[i].getBoundingClientRect().y - 330 < 0) {
                serviceImages[i].classList.add("opacity-100"); 
            } else {
                serviceImages[i].classList.remove("opacity-100"); 
            }
        }
    })

}