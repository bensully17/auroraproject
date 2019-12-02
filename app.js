var baseUrl = 'http://services.swpc.noaa.gov'
var time = ''
 

// function northHemi() {
//   fetch(baseUrl + '/images/animations/ovation-north/latest.jpg')
//   .then(function(result){
//     ovationImage.setAttribute('src', result.url)
//     ovationImage.setAttribute('id', 'ovImg')
//   })
// }

// function southHemi() {
//   fetch(baseUrl + '/images/animations/ovation-south/latest.jpg')
//   .then(function(result){
//     ovationImage.setAttribute('src', result.url)
//     ovationImage.setAttribute('id', 'ovImg')
//   })
// }
// northHemi()

for (let i = 0; i < 1; i++) {
  let main = document.querySelector('main')
  let newSections = document.createElement('section')
  main.appendChild(newSections)
}

newSections = document.querySelectorAll('main > section')
newSections[0].setAttribute('id', 'webcam')
// newSections[1].setAttribute('id', 'options')
// newSections[2].setAttribute('id', 'label')
// newSections[3].setAttribute('id', 'data')
// newSections[1].setAttribute('id', 'charts')

let mnwebcam = document.querySelector('#webcam')
let webcamView = document.createElement('img')
let statusMessage = document.createElement('div')
statusMessage.setAttribute('id', 'webcamStatus')
statusMessage.innerHTML = 'I apologize for the downtime. The heating system is not funtioning properly. I anticipate having this fully fixed by the end of the month. Thank you!'
webcamView.setAttribute('id', 'webcamView')
mnwebcam.appendChild(webcamView)
mnwebcam.appendChild(statusMessage)
webcamView.setAttribute('src', 'http://northwoodsauroracam.com/images/image.jpg')

// let mainOptions = document.querySelector('#options')
// for (i= 0; i < 2; i++) {
//   let newOptionButton = document.createElement('button')
//   mainOptions.appendChild(newOptionButton)  
// }
// let label = document.querySelector('#label')
// let newLabelH1 = document.createElement('h1')
// label.appendChild(newLabelH1)
// let labelH1 = document.querySelector('#label > h1')
// labelH1.textContent = 'Arriving at Earth Now:'

// for (let i = 0; i < 4; i++) {
//   let mainData = document.querySelector('#data')
//   let newDiv = document.createElement('div')
//   mainData.appendChild(newDiv)
//   for (let j = 0; j < 3; j++) {
//     var newInnerDiv = document.createElement('div')
//     let newDivs = document.querySelectorAll('#data > div')
//     newDivs[i].appendChild(newInnerDiv)
//   }
// }

// let charts = document.querySelector('#charts')
// for (i = 0; i < 2; i++) {
//   let newChartDiv = document.createElement('div')
//   charts.appendChild(newChartDiv)
// }

// let ovation = document.querySelectorAll('#charts > div')[0]
// let ovationImage = document.createElement('img')
// ovation.appendChild(ovationImage)
// ovation.setAttribute('id', 'ovation')

// for (i = 0; i < 2; i++){
//   let buttonsDiv = document.querySelectorAll('#charts > div')[1]
//   buttonsDiv.setAttribute('id', 'buttons')
//   let newButtons = document.createElement('button')
//   newButtons.setAttribute('class', 'button')
//   buttonsDiv.appendChild(newButtons)
// }
// const buttons = document.querySelectorAll('.button')
// buttons[0].textContent = 'Northern Hemisphere'
// buttons[1].textContent = 'Southern Hemisphere'
// buttons[0].addEventListener('click', northHemi)
// buttons[1].addEventListener('click', southHemi)

// let optionButton = document.querySelectorAll('#options > button')
// newDivs = document.querySelectorAll('#data > div')
// newDivs[0].setAttribute('id', 'speed')
// newDivs[1].setAttribute('id', 'density')
// newDivs[2].setAttribute('id', 'bz')
// newDivs[3].setAttribute('id', 'intensity')

// let speedText = document.querySelectorAll('#speed > div')
// speedText[0].setAttribute('class', 'key')
// speedText[1].setAttribute('class', 'value')
// speedText[2].setAttribute('class', 'units')

// let densityText = document.querySelectorAll('#density > div')
// densityText[0].setAttribute('class', 'key')
// densityText[1].setAttribute('class', 'value')
// densityText[2].setAttribute('class', 'units')

// let bzText = document.querySelectorAll('#bz > div')
// bzText[0].setAttribute('class', 'key')
// bzText[1].setAttribute('class', 'value')
// bzText[2].setAttribute('class', 'units')

// let intensityText = document.querySelectorAll('#intensity > div')
// intensityText[0].setAttribute('class', 'key')
// intensityText[1].setAttribute('class', 'value')
// intensityText[2].setAttribute('class', 'units')

// let speedKey = document.querySelector('#speed > .key')
// let densityKey = document.querySelector('#density > .key')
// let bzKey = document.querySelector('#bz > .key')
// let intensityKey = document.querySelector('#intensity > .key')

// speedKey.textContent = 'Solar Wind Speed:'
// densityKey.textContent = 'Solar Wind Density:'
// bzKey.textContent = 'Solar Wind Magnetic Field:'
// intensityKey.textContent = 'Calculated Intensity:'

// let speedUnits = document.querySelector('#speed > .units')
// let densityUnits = document.querySelector('#density > .units')
// let bzUnits = document.querySelector('#bz > .units')
// let intensityUnits = document.querySelector('#intensity > .units')


// speedUnits.textContent = 'km/s'
// densityUnits.textContent = 'p/cm'+'\u00B3' 
// bzUnits.textContent = 'nT'
// intensityUnits.textContent = '1'
// intensityUnits.style.color = 'rgb(209, 209, 209, 0)'



// fetch(baseUrl + '/products/solar-wind/plasma-1-day.json')
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(result){
//     array = result[result.length - 1]
//     var time = array [0]
//     let trialTime = moment.utc(time);
//     let timePassedSat
//     let timeNow = moment()
//     let answer = []
//     let smallestTime = 100000000000000
    
//     for (const index in result){      
//       let arrivalTime = moment.utc(result[index][0]).add(((1500000/(result[index][2]))*1000), 'milliseconds')
//       let differenceTime = Math.abs(moment.utc(arrivalTime) - timeNow)
//       if (differenceTime < smallestTime) {
//         smallestTime = differenceTime
//         answer = result[index]
//       }
      
//     }

//     indexArrival = result.indexOf(answer)    
//     var speed = array[2]
//     let speedArrivingNow = answer[2]
//     var density = array[1]
//     let densityArrivingNow = answer[1]
//     speedValue.textContent = speedArrivingNow 
//     densityValue.textContent = densityArrivingNow
//     spd = ((Math.pow(parseFloat(speed), 2)/100) + (Math.pow(parseFloat(density), 2)*100))    
//     spdArrivingNow = ((Math.pow(parseFloat(speedArrivingNow), 2)/100) + (Math.pow(parseFloat(densityArrivingNow), 2)*100))
    
  
// fetch(baseUrl + '/products/solar-wind/mag-1-day.json')
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(result){
//     var array1 = result[result.length - 1]
//     var time = array1[0]
//     bz = array1[3]
//     bzArrivingNow = result[indexArrival][3]
//     bzValue.textContent = bzArrivingNow 
//     bz = Math.pow((parseFloat(bz)), 3)*100
//     let bzNowCalc = Math.pow((parseFloat(bzArrivingNow)), 3)*50
//     var intensity = (spd - bz)/1000
//     intensity = intensity.toFixed(3)
//     if (intensity < 0) {
//       intensity = 0
//     }
//     let intensityArrivingNow = (spdArrivingNow - bzNowCalc)/1000
//     intensityArrivingNow = intensityArrivingNow.toFixed(3)    
//     intensityValue.textContent = intensityArrivingNow
//     optionButton[0].textContent = 'Arriving at Earth in ' + parseInt(1500000/speed/60) + ' minutes'
//     optionButton[1].textContent = 'Arriving at Earth Now'
//     optionButton[1].addEventListener('click', dataArrivingNow)
//     optionButton[0].addEventListener('click', dataPassingSat)
//     function dataArrivingNow () {
//       speedValue.textContent = speedArrivingNow
//       densityValue.textContent = densityArrivingNow
//       bzValue.textContent = bzArrivingNow
//       intensityValue.textContent = intensityArrivingNow
//       labelH1.textContent = optionButton[1].textContent + ':'
//     }
//     function dataPassingSat () {
//       speedValue.textContent = speed
//       densityValue.textContent = density
//       bzValue.textContent = array1[3]
//       intensityValue.textContent = intensity
//       labelH1.textContent = optionButton[0].textContent + ':'

//     }
//   })
// })

// var header = document.querySelector('header')
// var spd = 0
// var bz = 0

// var intensity = document.createElement('div')
// const speedValue = document.querySelector('#speed > .value')
// const densityValue = document.querySelector('#density > .value')
// const bzValue = document.querySelector('#bz > .value')
// const intensityValue = document.querySelector('#intensity > .value')


