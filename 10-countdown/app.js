const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector(".giveaway");
const deadline= document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4")


function getRemainingTime(){
let tempdate = new Date()
let tempyear=tempdate.getFullYear()
let tempmonth=tempdate.getMonth()
let tempday=tempdate.getDate()
let future_date=new Date(tempyear,tempmonth,tempday+10,10,30,0)

const year =future_date.getFullYear()
const hours = future_date.getHours()
const min = future_date.getMinutes()
const month = months[future_date.getMonth()]
const day = weekdays[future_date.getDay()]
const date = future_date.getDate()
giveaway.textContent= `giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${min}am`;

const today =new Date().getTime();
future_date = future_date.getTime();

let diff = future_date-today;
const oneday = 24*60*60*1000;
const onehour =60*60*1000;
const onemin = 60*1000;

let rem_days = Math.floor(diff/oneday);
diff = diff - rem_days*oneday;
let rem_hours = Math.floor(diff/onehour);
diff =diff-rem_hours*onehour;
let rem_min = Math.floor(diff/onemin)
diff=diff-rem_min*onemin;
let rem_sec= Math.floor(diff/1000)

const value = [rem_days, rem_hours, rem_min, rem_sec];
items.forEach(function(item, index){
    item.innerHTML=value[index]
})
}
let countdown = setInterval(getRemainingTime,10);
