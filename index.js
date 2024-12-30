let homeEl = document.getElementById(home-el)
let guestEl = document.getElementById(guest-el)
let score=0

function one() {
    teamScore = score + 1
    homeEl.textContent = teamScore
    }

function two() {
    teamScore = score + 2
    homeEl.textContent = teamScore
    }
function three() {
    teamScore = score + 3   
    homeEl.textContent = teamScore
    }
function ones() {
    teamScore = score + 1
    guestEl.textContent = teamScore
    }
function twos() {
    teamScore = score + 2
    guestEl.textContent = teamScore
    }
function threes() {
    teamScore = score + 3
    guestEl.textContent = teamScore
    }