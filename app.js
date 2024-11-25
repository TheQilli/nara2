const provinces = [
    {
      name: "Dubrovacko-neretvanska zupanija", 
      provinceImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Dubrovnik-Neretva.svg/85px-Dubrovnik-Neretva.svg.png",
      provincePopulation: 454798
    },
    {
      name: "Zagrebačka županija", 
      provinceImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Zagreb_County.svg/85px-Coat_of_arms_of_Zagreb_County.svg.png",
      provincePopulation: 317536
    },
    {
      name: "Primorsko-goranska županija", 
      provinceImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Primorje-Gorski_Kotar_County_coat_of_arms.png/85px-Primorje-Gorski_Kotar_County_coat_of_arms.png",
      provincePopulation: 296836
    },
    {
      name: "Osječko-baranjska županija", 
      provinceImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Osijek-Baranja_County_Arms.png/85px-Osijek-Baranja_County_Arms.png",
      provincePopulation: 264410
    },
    {
      name: "Istarska županija", 
      provinceImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Grb_Istarske_%C5%BEupanije.svg/85px-Grb_Istarske_%C5%BEupanije.svg.png",
      provincePopulation: 208055
    }
  ];

function displayHtml() {
  const provincesDiv = document.querySelector('.provinces-div')
  provincesDiv.innerHTML = ""
  for (let index = 0; index < provinces.length; index++) {
    const province = provinces[index];
    const genHTML = generateHtml(province)
    provincesDiv.innerHTML += genHTML
  }
} 

function generateHtml(province) {
  const generatedHtml = `<div class="province-div">
    <img src="${province.provinceImage}" alt="" class="province-img">
    <h1 class="provinceName">${province.name}</h1>
    <p class="provinceNum">${province.provincePopulation}</p>
   </div>`
   return generatedHtml
}