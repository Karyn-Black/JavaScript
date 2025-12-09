const nameListSource = document.querySelector("#nameList");

async function nameGet() {
  try {
    const nameWhat = await fetch("API.json");
    const nameData = await nameWhat.json();

    console.log(nameData);

    nameListSource.innerHTML = `
      <tr>
        <th>English</th>
        <th>Ancient Roman</th>
        <th>Latin</th>
        <th>Ancient Greek</th>
        <th>Greek Letters</th>
        <th>Sumerian</th>
        <th>Sanskrit</th>
        <th>Liked</th>
      </tr>
    `;

    for (let i = 0; i < nameData.length; i++) {
      const nameCurrent = nameData[i];

      nameListSource.innerHTML += `
        
        <tr>
          <td>${nameCurrent.english}</td>
          <td>${nameCurrent.roman}</td>
          <td>${nameCurrent.latin}</td>
          <td>${nameCurrent.greek}</td>
          <td>${nameCurrent.greekLetters}</td>
          <td>${nameCurrent.sumerian}</td>
          <td>${nameCurrent.sanskrit}</td>
          <td onclick='likePlanet()' class="picture ${nameCurrent.english}">
            <img
              class="planetImg"
              src="${nameCurrent.img}"
              alt="Clipart of a planet with a Thumps Up gesture"
              width="26"
              height="20"
            />
          </td>
        </tr>
      `;
    }
  } catch (e) {
    console.warn(e);
  }
}


// async function likeSelection() {
//    var element = document.getElementById("mercury");
//    element.classList.toggle("likedImg");
// }


// // Extract radio button values
// let likeSelection='';
//     const likeSelectionRadios = document.getElementsByName('liked');

//     for(let radio of likeSelectionRadio){
//         if(radio.checked){
//             liked = radio.value;
//             break;
//         }
//     };


// async function likeGet() {
//   picture.onclick = likePlanet;
//   console.log(picture);
// }

function likePlanet() {
  const tableCell = event.currentTarget;
  // console.log(tableCell);
  const tableImg = tableCell.querySelector('.planetImg')
  // const element = tableCell.closest('.planetImg');
  // console.log(tableImg);
  if(tableImg.classList.contains('likedImg')) {
    tableImg.classList.remove('likedImg');
  } else {
      tableImg.classList.add('likedImg');
  }
  
  
}

nameGet();
// likePlanet();