// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(`${driver.name}`);
  })
}

function logDriversByHometown(drivers, cityName) {
  drivers.forEach(function(driver) {
    if (driver.hometown === cityName){
      console.log(`${driver.name}`)
    }
  })
}

function driversByRevenue(drivers){
  let newSortedArr = [...drivers];
  newSortedArr.sort(function(d1, d2) {
    return d1.revenue - d2.revenue;
  })
  return newSortedArr;
}

function driversByName(drivers) {
  let newSortedArr = [...drivers];
  newSortedArr.sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  })
  return newSortedArr;
}

function totalRevenue(drivers) {
  drivers.forEach(function(d) {
    console.log(`drivers = ${d.name}, ${d.revenue}`);
  })

  let total;
  total = drivers.reduce(function(sum, d) {
    console.log(`sum = ${sum}, d.revenum = ${d.revenue}`);
     return (sum + d.revenue);
  }, 0)
  return total;
}

function averageRevenue(drivers) {
  let total = totalRevenue(drivers);
  return (total/drivers.length);
}
