//navigator:

const now = new Date();
const option = {
    hour :'numeric',
    minutes:'numeric',
    day:'numeric',
    month:'2-digit',
    year:'numeric'
}

//ISO Language Code Table:(en-GB,ar-SY etc)
const time = new Intl.DateTimeFormat('en-GB',option).format(now);

console.log(time);

//International time format:
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
console.log(new Intl.DateTimeFormat('ar-SY', { dateStyle: 'full', timeStyle: 'long' }).format(date));