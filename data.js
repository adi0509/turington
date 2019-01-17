function setTimer()
{
	var festDate = new Date("Feb 5, 2019 10:00:00").getTime();
	var countdown = setInterval(function() {
		var now = new Date().getTime();
		var distance = festDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

		document.getElementById("days").innerHTML = days;
		document.getElementById("hours").innerHTML = hours;
		document.getElementById("minutes").innerHTML = minutes;


		if (distance < 0) {
			clearInterval(countdownfunction);
			document.getElementById("timer").innerHTML = "WELCOME!!!!";
		}
	}, 1000);
}