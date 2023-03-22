let hQ = 42

function distanceFromHqInBlocks(pickUp) {
    let distanceFromHqInBlocks = Math.abs(pickUp - hQ)
    return distanceFromHqInBlocks
}

function distanceFromHqInFeet(pickUp) {
    let distance = distanceFromHqInBlocks(pickUp) 
    return (distance * 264)
}

function distanceTravelledInFeet(start,destination) {
    let travelled = Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(destination))
    return travelled
}

function calculatesFarePrice(start,destination) {
    let distanceTravel = distanceTravelledInFeet(start, destination)
    let feet = (distanceTravel - 400)
    if (feet < 0) {
        return 0
    }
    else if (feet > 0 && distanceTravel < 2000) {
        return (feet * .02)
    }
    else if (distanceTravel > 2000 && distanceTravel < 2500) {
        return 25
    }
    else (distanceTravel > 2500) 
        return 'cannot travel that far'
    
}