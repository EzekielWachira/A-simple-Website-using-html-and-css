//Battery events
//Get the battery API
navigator.getBattery().then(function (battery) {
    battery.addEventListener('chargingchange', function () {
        console.log('New charging state: ', battery.charging);
    });

    battery.addEventListener('levelchange', function () {
        console.log('New battery level: ', battery.level * 100 + "%");
    });
    battery.addEventListener('chargintimechange', function () {
        console.log('New time left until full: ', battery.chargingTime, "seconds");
    });
    battery.addEventListener('dischargingtimechange', function () {
        console.log('New time until empty', battery.dischargingTime, "seconds");
    });
    
})