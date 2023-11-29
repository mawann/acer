var today = new Date();
var targetDate = new Date('2023-11-30');
var infoElement = document.getElementById('info');

if (
  today.getDate() === targetDate.getDate() &&
  today.getMonth() === targetDate.getMonth() &&
  today.getFullYear() === targetDate.getFullYear()
) {
  infoElement.innerText = 'SMK PGRI 1 Tangerang';
};
