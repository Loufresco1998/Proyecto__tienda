
/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementsById(toggleId),
         nav = document.getElementsById(navId)


   if(toggle && nav){
        toggle.addElementListener('click', ()=>{
          nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggled','nav-menu')
/*===== REMOVE MENU MOBILE =====*/
const nav_link =  document.querySelectorAll('m_link')

function linkAction(){
  // Active link
navLink.forEach(n => n.classList.remove('active'))
this.classList.add('active')
}

navLink.forEach(n => n.addElementListener('click', linkAction))
