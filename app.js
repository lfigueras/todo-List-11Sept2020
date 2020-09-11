



    let displayDate = document.getElementById('date');
    let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let daysInAWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let today = new Date();
    displayDate.innerHTML = daysInAWeek[today.getDay()] + ', ' + monthNames[today.getMonth()] +
    ' ' + today.getDate() + ', ' + today.getFullYear();    
