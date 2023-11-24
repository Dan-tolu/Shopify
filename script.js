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
