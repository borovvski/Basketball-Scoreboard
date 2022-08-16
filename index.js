let homeEl = document.getElementById("homeScore");
let guestEl = document.getElementById("guestScore");
let home = 0;
let guests = 0;

function incrementByOneHome() {
  home += 1;
  homeEl.textContent = home;
}
function incrementByTwoHome() {
  home += 2;
  homeEl.textContent = home;
}
function incrementByThreeHome() {
  home += 3;
  homeEl.textContent = home;
}
function incrementByOneGuests() {
  guests += 1;
  guestEl.textContent = guests;
}
function incrementByTwoGuests() {
  guests += 2;
  guestEl.textContent = guests;
}
function incrementByThreeGuests() {
  guests += 3;
  guestEl.textContent = guests;
}
