// Constructor
// function Chronometer() {

// }

// Chronometer.prototype.startClick = function () {

// };

// Chronometer.prototype.setMinutes = function () {
  
// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };


class Chronometer {
    constructor() {
        this.currentTime = 0
        this.intervalId = ""
    }
    
    startClick() {
        this.intervalId = setInterval(() => {
        this.currentTime += 1
        this.setTime()
      }, 1000)
    }

    setMinutes() {
      let minutes = Math.floor(this.currentTime / 60) 
      return minutes
    }
    setSeconds() {
      let seconds = Math.floor(this.currentTime % 60)
      return seconds
    }
    twoDigitsNumber(Number) {
      if(Number.toString().length === 1) {
        return "0" + Number
      } else
        return Number.toString()
    } 
    setTime() {}
    setMilliseconds() {}
    stopClick() {
      clearInterval(this.intervalId)
    }
    resetClick() {
      clearInterval(this.currentTime)
    }
    splitClick() {}
    splitClick() {}
  }