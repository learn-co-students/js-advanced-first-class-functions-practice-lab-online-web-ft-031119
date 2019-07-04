// Code your solution in this file!

const logDriverNames = drivers => drivers.forEach(driver =>
  console.log(driver.name))

// const logDriverNames = drivers => {
//   for (const driver of drivers) {
//     console.log(driver.name)
//   }
// }

const logDriversByHometown = (drivers, hometown) => {
  drivers.forEach(driver => {
    if (driver.hometown === hometown) console.log(driver.name)
  })
}

// const logDriversByHometown = function (drivers, entry) {
//   return drivers.filter(function (driver) {
//     if (driver.hometown === entry) {
//       console.log(driver.name)
//     }
//   })
// }

const driversByRevenue = drivers =>
  drivers.slice().sort((driver1, driver2) =>
    driver1.revenue - driver2.revenue);


const driversByName = drivers =>
  drivers.slice().sort((driver1, driver2) =>
    driver1.name.localeCompare(driver2.name));

const totalRevenue = drivers =>
  drivers.reduce((total, currentDriver) => {
    return currentDriver.revenue + total
  }, 0);

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
