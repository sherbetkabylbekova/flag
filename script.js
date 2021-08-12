const row = document.querySelector('.row')



fetch('https://restcountries.eu/rest/v2/all')
.then(res =>res.json())
.then(data => data.forEach(el =>
row.innerHTML += `<div class="col-3">
<img src="${el.flag}" class="img-flag">
<div>
<ul>
<li>Country:${el.name}</li>
<li>Population:${el.population}</li>
<li>Capital:${el.capital}</li>
</ul>
</div>
</div>
`) )