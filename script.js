const notificationBell = document.querySelector('.notifBell');
const alertMsg = document.querySelector('.alerts');
const user = document.querySelector('.user');
const userInfo = document.querySelector('.userDropdown');
const subPlan = document.querySelector('.subscriptionPlan')
const cancelPlan = document.querySelector('.cancelPlan')
const mainToggle = document.querySelector('.toggleArrows')

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

cancelPlan.addEventListener('click', () => {
    subPlan.style.display = 'none'
})


mainToggle.addEventListener('click', () => {
    mainToggle.classList.toggle('active')
})


const progressNumber = document.querySelector('.setupProgress span');
const checkCircles = document.querySelectorAll('.checkCircle');
const progressBar = document.querySelector('.progressBar')

let numberOfBlueCircles = 0;

Array.from(checkCircles).forEach(function (circle) {
    // Initialize the checked state as a data attribute
    circle.dataset.checked = '0';

    circle.addEventListener('click', (event) => {
        const theCircle = event.currentTarget;

        // Toggle the checked state using the data attribute
        if (theCircle.dataset.checked === '0') {
            theCircle.dataset.checked = '1';
            console.log(theCircle.dataset.checked);
            theCircle.style.backgroundColor = 'blue'; // Apply style when checked
            numberOfBlueCircles++; // Increment the count
        } else {
            theCircle.dataset.checked = '0';
            console.log(theCircle.dataset.checked);
            theCircle.style.backgroundColor = ''; // Reset style when unchecked
            numberOfBlueCircles--; // Decrement the count
        }

        console.log(`Number of blue circles: ${numberOfBlueCircles}`);
    });

    circle.addEventListener('click',() =>{
        if(numberOfBlueCircles === 1){
            progressNumber.innerHTML = `1/5 completed`
        } else if(numberOfBlueCircles === 2){
            progressNumber.innerHTML = `2/5 completed`
        } else if(numberOfBlueCircles === 3){
            progressNumber.innerHTML = `3/5 completed`
        } else if(numberOfBlueCircles === 4){
            progressNumber.innerHTML = `4/5 completed`
        } else if(numberOfBlueCircles === 5){
            progressNumber.innerHTML = `5/5 completed`
        } else{
            progressNumber.innerHTML = `0/5 completed`
        }
    })
    circle.addEventListener('click', () => {
        if(progressNumber.innerHTML == `1/5 completed`){
            progressBar.style.width = `20%`
        } else if(progressNumber.innerHTML == `2/5 completed`){
            progressBar.style.width = `40%`
        } else if(progressNumber.innerHTML == `3/5 completed`){
            progressBar.style.width = `60%`
        } else if(progressNumber.innerHTML == `4/5 completed`){
            progressBar.style.width = `80%`
        } else if(progressNumber.innerHTML == `5/5 completed`){
            progressBar.style.width = `100%`
        } else{
            progressBar.style.width = `0%`
        }
    })
});



