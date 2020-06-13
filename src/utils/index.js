export const getTodayDate = () => {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var years = today.getFullYear();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  
  if (day < 10)  day = "0" + day;
  if (month < 10)  month = "0" + month;
  if (hours < 10)  hours = "0" + hours;
  if (minutes < 10)  minutes = "0" + minutes;
  if (seconds < 10)  seconds = "0" + seconds;
  
  return `${day} / ${month} / ${years} - ${hours}:${minutes}:${seconds}`;
};
