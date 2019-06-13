function logDriverNames(drivers){
  drivers.forEach(function(driver){console.log(driver.name)})
}
function logDriversByHometown(drivers,hometown){
  logDriverNames(drivers.filter(function(driver){return driver.hometown === hometown}))
}
function driversByRevenue(drivers){
  drivers.sort(function(driver){return driver.revenue})
}
