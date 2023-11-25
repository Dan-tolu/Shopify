const notificationBell = document.querySelector('.notifBell');
const alertMsg = document.querySelector('.alerts');
const user = document.querySelector('.user');
const userInfo = document.querySelector('.userDropdown');

notificationBell.addEventListener('click', () => {
    if (alertMsg.style.display === 'none') {
         alertMsg.style.display = 'block'
    } else {
              alertMsg.style.display = 'none'
    }
});

user.addEventListener('click', () => {
    if (userInfo.style.display === 'none') {
        userInfo.style.display = 'block';
    } else {
        userInfo.style.display = 'none';
    }
});

window.addEventListener('click', (event) => {
    if (userInfo.style.display === 'block' && !user.contains(event.target) && !userInfo.contains(event.target))  {
        userInfo.style.display = 'none';
    }
});
window.addEventListener('click', (event) => {
    if (alertMsg.style.display === 'block' && !notificationBell.contains(event.target) && !notificationBell.contains(event.target)) {
        alertMsg.style.display = 'none';
    }
});

const collapseBtn = document.querySelector('.collapseIcon')
const sections = document.querySelectorAll('section')
const mainBody = document.querySelector('#centerOfMainBody')
const setupGuild = document.querySelector('#topOfMainBody')
const leftSection = document.querySelector('#leftOfSection p')
const bottomSection = document.querySelector('#bottomOfSection')
const rightSection = document.querySelector('#rightOfSection')

collapseBtn.addEventListener('click', () =>{
    if(mainBody.style.display == 'block'){
        mainBody.style.display = 'none'
        setupGuild.style.height = '110px'
        collapseBtn.innerHTML = '<img src="https://crushingit.tech/hackathon-assets/icon-arrow-down.svg" alt="">'
    } else{
        mainBody.style.display = 'block'
        collapseBtn.innerHTML = '<img src="https://crushingit.tech/hackathon-assets/icon-arrow-up.svg" alt="">'
        
    }
}
)






// This is the place giving me problems, you can check the code out sha, and also if you can do your's no problem
// you can comment some of those constants above too

// let currentOpenSection = null;

// Array.from(sections).forEach(function(section){
//     section.addEventListener('click', (event) => {
//         const clickedSection = event.currentTarget;

//         if (currentOpenSection === clickedSection) {
//             clickedSection.style.height = '';
//             clickedSection.style.backgroundColor = '';
//             clickedSection.innerHTML = clickedSection.getAttribute('data-original-content');
//             currentOpenSection = null;
//         } else {
//             if (currentOpenSection) {
//                 currentOpenSection.style.height = '';
//                 currentOpenSection.style.backgroundColor = '';
//                 currentOpenSection.innerHTML = currentOpenSection.getAttribute('data-original-content');
//             }

//             clickedSection.style.height = '60px';
//             clickedSection.style.backgroundColor = 'white';
//             clickedSection.innerHTML = `
//                 <div class="topOfLeft">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="35" height="33" viewBox="0 0 32 32" fill="none">
//                         <circle cx="16" cy="16" r="12" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
//                     </svg>
//                     <b>Customize your online store</b>
//                 </div>
//             `;
            
//             currentOpenSection = clickedSection;
//         }
//     });
// });



