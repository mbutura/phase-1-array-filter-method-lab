// Code your solution here
function findMatching(driverArr, nameSought){
    return driverArr.filter(driver => driver.toLowerCase() === nameSought.toLowerCase());
}

function fuzzyMatch(driverArr, nameSought){
    return driverArr.filter(driver => driver.startsWith(nameSought));
}

function matchName(driverObjsArr, nameSought){
    return driverObjsArr.filter(driverObj => driverObj.name === nameSought);
}