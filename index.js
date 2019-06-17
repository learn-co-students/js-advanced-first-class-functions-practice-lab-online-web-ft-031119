// Code your solution in this file!
function logDriverNames (drivers) {
	drivers.forEach(function(element){
		return console.log(element.name);
	})
}

function logDriversByHometown(array , hometown) {
	array.forEach(function(element){
		if (element.hometown === hometown) {
			return console.log(element.name);
		}
	})
}

function driversByRevenue(array) {
	return [...array].sort(function(a,b){
		return a.revenue - b.revenue ;
	})
}

const driversByName = function (drivers) {
  return [...drivers].sort(function(a,b){
  	let c = a.name;
  	let d = b.name;
  	return c.localeCompare(d);
  })
}

function totalRevenue(drivers) {
	let total = 0;
	return drivers.reduce(function (total, driver){
		return total + driver.revenue;
	}, 0);
}

function averageRevenue(drivers){
	return totalRevenue(drivers) / drivers.length;
}