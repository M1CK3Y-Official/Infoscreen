fetch ("http://api.weatherapi.com/v1/forecast.json?key=c6a8d1d2d262401582b72232230805&q=Viborg&days=3&aqi=no&alerts=no")

.then((response) => response.json())
    .then((data) => {

              // Current weather card
      console.log(data.current);

      const icon = data.current.condition.icon;
      const iconTmpl = `<img src="${icon}" class="icon">`;
      document.querySelector('.c-icon').innerHTML = iconTmpl;

      const condi = data.current.condition.text;
      const conditionTmpl = `<p class="condition">${condi}</p>`;
      document.querySelector('.c-condition').innerHTML = conditionTmpl;
      
      const temp = data.current.temp_c;
      const tempTmpl = `<p class="temp">${temp}&deg;</p>`;
      document.querySelector('.c-temp').innerHTML = tempTmpl;
      
              // Week weather cards

      console.log(data.forecast.forecastday[0]);

      const iconDay1 = data.forecast.forecastday[0].day.condition.icon;
      const iconTmplDay1 = `<img src="${iconDay1}" class="icon">`;
      document.querySelector('.w-icon1').innerHTML = iconTmplDay1;

      const iconDay2 = data.forecast.forecastday[1].day.condition.icon;
      const iconTmplDay2 = `<img src="${iconDay2}" class="icon">`;
      document.querySelector('.w-icon2').innerHTML = iconTmplDay2;

      const iconDay3 = data.forecast.forecastday[2].day.condition.icon;
      const iconTmplDay3 = `<img src="${iconDay3}" class="icon">`;
      document.querySelector('.w-icon3').innerHTML = iconTmplDay3;


      const avgtemp1 = data.forecast.forecastday[0].day.avgtemp_c;
      const avgtempTmpl1 = `<p class="avgtmp1">${avgtemp1}&deg;</p>`;
      document.querySelector('.w-temp1').innerHTML = avgtempTmpl1;

      const avgtemp2 = data.forecast.forecastday[1].day.avgtemp_c;
      const avgtempTmpl2 = `<p class="avgtmp2">${avgtemp2}&deg;</p>`;
      document.querySelector('.w-temp2').innerHTML = avgtempTmpl2;

      const avgtemp3 = data.forecast.forecastday[2].day.avgtemp_c;
      const avgtempTmpl3 = `<p class="avgtmp3">${avgtemp3}&deg;</p>`;
      document.querySelector('.w-temp3').innerHTML = avgtempTmpl3;


      const wday1 = data.forecast.forecastday[0].date;
      const wdayTmpl1 = `<p>${wday1}</p>`;
      document.querySelector('.w-day1').innerHTML = wdayTmpl1;

      const wday2 = data.forecast.forecastday[1].date;
      const wdayTmpl2 = `<p>${wday2}</p>`;
      document.querySelector('.w-day2').innerHTML = wdayTmpl2;

      const wday3 = data.forecast.forecastday[2].date;
      const wdayTmpl3 = `<p>${wday3}</p>`;
      document.querySelector('.w-day3').innerHTML = wdayTmpl3;
//       
      
//       const temp = data.current.temp_c;
//       const tempTmpl = `<p class="temp">${temp}&deg;</p>`;
//       document.querySelector('.c-temp').innerHTML = tempTmpl;  
    });




