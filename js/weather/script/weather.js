$(document).ready(()=>{
	console.log("Test");
	$('#weather-form').submit((event)=>{
		event.preventDefault();
		const userCity = $('#city').val();
		weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=${apiKey}`;
		console.log(weatherUrl);
		$.getJSON(weatherUrl,(weatherData)=>{
			console.log(weatherData);
			const currTemp = weatherData.main.temp;
			const icon = weatherData.weather[0].icon;
			const high = weatherData.main.temp_max;
			const weatherHTML = `
				<div>
					<div class="col-sm-4">
						<img src="http://openweathermap.org/img/w/${icon}.png" />
					</div>
					<div class="col-sm-4">The current temp in ${weatherData.name} is ${currTemp}</div>
					<div class="col-sm-4">The high is forecasted at ${high}</div>
				</div>
			`
			$(`#weather-info`).html(weatherHTML);
		});
	});
});