const TEST_RSS_URL = `https://www.tv2nord.dk/rss`;
const RSS_URL = `https://rss.nytimes.com/services/xml/rss/nyt/World.xml`;
const list = document.querySelector('.news-list');

const app = {};

app.TV2NORDtmpl = (el, index) => `<div>
    <p class="news-title">${el.querySelector("title").textContent}</p> 
</div>
<hr class="b-line">`


app.renderTV2NORD = (data) => {

    
    console.log(data);
    const items = data.querySelectorAll("item");

    let newsitems = Array.prototype.slice.call(items).slice(0, 7);

    
    newsitems.forEach((el) => {

       list.innerHTML += app.TV2NORDtmpl(el);
    });

}

app.init = () => {

    // Henter data fra RSS_URL.
    // fetch(RSS_URL)
    // .then(response => response.text())
    // .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    // .then(data => app.renderNewyorkTimes(data))

    fetch(TEST_RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => app.renderTV2NORD(data))

    // Debugge RSS feed til consollen.
    fetch(TEST_RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => console.log('Testing Feed', data))

};

app.init();



