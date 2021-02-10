function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE
  let allFilters = document.querySelectorAll('.filter-button')
  for (i = 0; i < allFilters.length; i++){
    let filterButton = allFilters[i]
    // console.log(filterButton)
  
  filterButton.addEventListener('click', async function(event){
    event.preventDefault()

    let rideType = event.target.innerHTML
    // console.log(rideType)

    let response = await fetch(`https://kiei451.com/api/rides.json`)
    let json = await response.json()
    let rides = json

      document.querySelector('.rides').innerHTML = '' //--clearing any existing rides HTML from previous click
      // renderRides(rides)
      console.log(`${rideType} was clicked`)

      if (rideType == 'All Rides'){
        renderRides(rides)
      } else {}
      newArray = []
      for (j = 0; j < rides.length; j++){
        ride = rides[j]
        // console.log(ride)
        if (levelOfService(ride) == 'Noober Purple'){
          newArray.push(ride)
          renderRides(newArray)
        } else if (levelOfService(ride) == 'Noober Pool'){
          newArray.push(ride)
          renderRides(newArray)
        } else if (levelOfService(ride) == 'NooberXL'){
          newArray.push(ride)
          renderRides(newArray)
        } else if (levelOfService(ride) == 'Noober X'){
          newArray.push(ride)
          renderRides(newArray)
        }
        
      }
    
  })
}
  // let allRidesFilter = document.querySelector('#all-filter')
  // allRidesFilter.addEventListener('click', async function(event){
  //   event.preventDefault()

  // let response = await fetch(`https://kiei451.com/api/rides.json`)
  // let json = await response.json()
  // let rides = json
  // // console.log(rides)
  // document.querySelector('.rides').innerHTML = '' //--clearing any existing rides HTML from previous click
  // renderRides(rides)
  // console.log('All Rides was clicked')
  // for (i = 0; i < allFilters.length; i++) {
  //   allfilter = allFilters[i]
  //   allfilter.classList.remove('bg-gray-300')
  // }
  // allRidesFilter.classList.add('bg-gray-300')
  // })
  // // Purple Rides
  // let purpleRidesFilter = document.querySelector('#noober-purple-filter')
  // purpleRidesFilter.addEventListener('click', async function(event){
  //   event.preventDefault()

  // let response = await fetch(`https://kiei451.com/api/rides.json`)
  // let json = await response.json()
  // let rides = json
  // // console.log(rides)
  // newArray = []
  // for (i =0; i < rides.length; i++) {
  //   ride = rides[i]
  //   if (levelOfService(ride) == "Noober Purple"){
  //     newArray.push(ride)
  //   }  else {}
  // }
  // document.querySelector('.rides').innerHTML = '' //--clearing any existing rides HTML from previous click
  // renderRides(newArray)
  // // console.log(newArray)
  // console.log('Noober Purple was clicked')
  // for (i = 0; i < allFilters.length; i++) {
  //   allfilter = allFilters[i]
  //   allfilter.classList.remove('bg-gray-300')
  // }
  // purpleRidesFilter.classList.add('bg-gray-300')
  // })
  // // Pool Rides
  // let poolRidesFilter = document.querySelector('#noober-pool-filter')
  // poolRidesFilter.addEventListener('click', async function(event){
  //   event.preventDefault()

  // let response = await fetch(`https://kiei451.com/api/rides.json`)
  // let json = await response.json()
  // let rides = json
  // // console.log(rides)
  // newArray = []
  // for (i =0; i < rides.length; i++) {
  //   ride = rides[i]
  //   if (levelOfService(ride) == "Noober Pool"){
  //     newArray.push(ride)
  //   }  else {}
  // }
  // document.querySelector('.rides').innerHTML = '' //--clearing any existing rides HTML from previous click
  // renderRides(newArray)
  // // console.log(newArray)
  // console.log('Noober Pool was clicked')
  // for (i = 0; i < allFilters.length; i++) {
  //   allfilter = allFilters[i]
  //   allfilter.classList.remove('bg-gray-300')
  // }
  // poolRidesFilter.classList.add('bg-gray-300')
  // })
  // // XL Rides
  // let xlRidesFilter = document.querySelector('#noober-xl-filter')
  // xlRidesFilter.addEventListener('click', async function(event){
  //   event.preventDefault()

  // let response = await fetch(`https://kiei451.com/api/rides.json`)
  // let json = await response.json()
  // let rides = json
  // // console.log(rides)
  // newArray = []
  // for (i =0; i < rides.length; i++) {
  //   ride = rides[i]
  //   if (levelOfService(ride) == "Noober XL"){
  //     newArray.push(ride)
  //   }  else {}
  // }
  // document.querySelector('.rides').innerHTML = '' //--clearing any existing rides HTML from previous click
  // renderRides(newArray)
  // // console.log(newArray)
  // console.log('Noober XL was clicked')
  // for (i = 0; i < allFilters.length; i++) {
  //   allfilter = allFilters[i]
  //   allfilter.classList.remove('bg-gray-300')
  // }
  // xlRidesFilter.classList.add('bg-gray-300')
  // })
  // // X Rides
  // let xRidesFilter = document.querySelector('#noober-x-filter')
  // xRidesFilter.addEventListener('click', async function(event){
  //   event.preventDefault()

  // let response = await fetch(`https://kiei451.com/api/rides.json`)
  // let json = await response.json()
  // let rides = json
  // // console.log(rides)
  // newArray = []
  // for (i =0; i < rides.length; i++) {
  //   ride = rides[i]
  //   if (levelOfService(ride) == "Noober X"){
  //     newArray.push(ride)
  //   }  else {}
  // }
  // document.querySelector('.rides').innerHTML = '' //--clearing any existing rides HTML from previous click
  // renderRides(newArray)
  // // console.log(newArray)
  // console.log('Noober X was clicked')
  // for (i = 0; i < allFilters.length; i++) {
  //   allfilter = allFilters[i]
  //   allfilter.classList.remove('bg-gray-300')
  // }
  // xRidesFilter.classList.add('bg-gray-300')
  // })
})

