const clockIn = document.querySelector('#clock-IN');
const clockUsa = document.querySelector('#clock-USA');
const clockUk = document.querySelector('#clock-UK');
const clockJp = document.querySelector('#clock-JP');
const clockCh = document.querySelector('#clock-CH');
const clockRa = document.querySelector('#clock-RA');


setInterval(function () {
    // console.log(date.toLocaleTimeString());
    // clockIn.innerHTML = date.toLocaleTimeString("IN");
    const date = new Date();
    clockIn.innerHTML = date.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
    });
    clockUsa.innerHTML = date.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
    });
    clockUk.innerHTML = date.toLocaleTimeString("en-US", {
    timeZone: "Europe/London",
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
    });
    clockJp.innerHTML = date.toLocaleTimeString("en-US", {
    timeZone: "Asia/Tokyo",
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
    });
    clockCh.innerHTML = date.toLocaleTimeString("en-US", {
    timeZone: "Asia/Shanghai",
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
    });
    clockRa.innerHTML = date.toLocaleTimeString("en-US", {
    timeZone: "Europe/Moscow",
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
    });

}, 1000);
