function startTime() {
    const today = new Date();
    const seperatorTmp = `<p class="blink">:</p>`;
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.querySelector('#txt').innerHTML =  h + seperatorTmp + m;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


  const month = ["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"];
  const weekday = ["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Freday","Lørdag"];

  const d = new Date();
  let wday = weekday[d.getDay()];
  let day = d.getDate();
 

  let name = month[d.getMonth()];
  document.querySelector('.week').innerHTML = wday + " d. " + day + " " + name;





