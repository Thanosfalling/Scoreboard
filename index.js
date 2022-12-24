let homeTeamScoreDisplay = document.getElementById("homeScore")
let homeScoreCount = 0
let guestTeamScoreDisplay = document.getElementById("guestScore")
let guestScoreCount = 0

function addHomeOne(){
    homeScoreCount = homeScoreCount + 1
    homeTeamScoreDisplay.textContent = homeScoreCount
}
function addHomeTwo(){
    homeScoreCount = homeScoreCount + 2
    homeTeamScoreDisplay.textContent = homeScoreCount
}
function addHomeThree(){
    homeScoreCount = homeScoreCount + 3
    homeTeamScoreDisplay.textContent = homeScoreCount
}

function addGuestOne(){
    guestScoreCount = guestScoreCount + 1
    guestTeamScoreDisplay.textContent = guestScoreCount
}
function addGuestTwo(){
    guestScoreCount = guestScoreCount + 2
    guestTeamScoreDisplay.textContent = guestScoreCount
}

function addGuestThree(){
    guestScoreCount = guestScoreCount + 3
    guestTeamScoreDisplay.textContent = guestScoreCount
}

function newGame(){
   homeScoreCount = 0
   guestScoreCount = 0 
   homeTeamScoreDisplay.textContent = homeScoreCount
   guestTeamScoreDisplay.textContent = guestScoreCount
}