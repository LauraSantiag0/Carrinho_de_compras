

var saia, fotosaia, contagem, contagem1, contagem4, contagem3, contagem2, vestido, fotovestido, camisa, calca, fotocamisa, fotocal_C3_A7a;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


contagem3 = 0;

contagem4 = 0;

'';

contagem2 = 0;

contagem = 0;

contagem1 = 0;


document.getElementById('buyskirt').addEventListener('click', (event) => {
  let element_total = document.getElementById('total');
  contagem = (typeof contagem === 'number' ? contagem : 0) + 20;
  element_total.innerText = contagem;

});
saia = ['https://img.ltwebstatic.com/images3_pi/2022/03/18/16475998060b643ec5423e88f4fcff2df0f1dc4cc9_thumbnail_600x.webp', 'https://img.ltwebstatic.com/images3_pi/2022/03/18/1647599811dc1f20df7cd861018e44862cf1c31dd4_thumbnail_600x.webp'];
fotosaia = [saia];
vestido = ['https://img.ltwebstatic.com/images3_pi/2022/02/28/1646033815fad65b29e595272a73d9603d7ecaca85_thumbnail_600x.jpg', 'https://img.ltwebstatic.com/images3_pi/2022/02/28/164603381839e8ce818c422d6f85b9a4e661cd2180_thumbnail_600x.webp'];
fotovestido = [vestido];
camisa = ['https://img.ltwebstatic.com/images3_pi/2023/03/08/1678252948b38bcce4d44e8275bfda4a2060cbd522_thumbnail_600x.jpg', 'https://img.ltwebstatic.com/images3_pi/2023/03/08/16782529513d1272f2472e0071aa6a4f93066af948_thumbnail_600x.webp'];
fotocamisa = [camisa];
calca = ['https://img.ltwebstatic.com/images3_pi/2023/05/31/16854951292d08adfcddffac736fbaf1272243aad4_thumbnail_600x.jpg', 'https://img.ltwebstatic.com/images3_pi/2023/05/31/168549513365580e2fce4b20015c8ac08318335fed_thumbnail_600x.webp'];
fotocal_C3_A7a = [calca];


document.getElementById('buydress').addEventListener('click', (event) => {
  let element_total2 = document.getElementById('total');
  contagem = (typeof contagem === 'number' ? contagem : 0) + 50;
  element_total2.innerText = contagem;

});

document.getElementById('buysirt').addEventListener('click', (event) => {
  let element_total3 = document.getElementById('total');
  contagem = (typeof contagem === 'number' ? contagem : 0) + 5;
  element_total3.innerText = contagem;

});

document.getElementById('buytrousers').addEventListener('click', (event) => {
  let element_total4 = document.getElementById('total');
  contagem = (typeof contagem === 'number' ? contagem : 0) + 25;
  element_total4.innerText = contagem;

});
let element_skirtimg = document.getElementById('skirtimg');
element_skirtimg.setAttribute("src", randomMember(saia));


document.getElementById('1').addEventListener('click', (event) => {
  let element_skirtimg2 = document.getElementById('skirtimg');
  element_skirtimg2.setAttribute("src", saia[0]);

});
let element_dressimg = document.getElementById('dressimg');
element_dressimg.setAttribute("src", randomMember(vestido));


document.getElementById('2').addEventListener('click', (event) => {
  let element_skirtimg3 = document.getElementById('skirtimg');
  element_skirtimg3.setAttribute("src", saia.slice(-1)[0]);

});
let element_shirtimg = document.getElementById('shirtimg');
element_shirtimg.setAttribute("src", randomMember(camisa));


document.getElementById('3').addEventListener('click', (event) => {
  let element_dressimg2 = document.getElementById('dressimg');
  element_dressimg2.setAttribute("src", vestido[0]);

});
let element_trousersimg = document.getElementById('trousersimg');
element_trousersimg.setAttribute("src", randomMember(calca));


document.getElementById('4').addEventListener('click', (event) => {
  let element_dressimg3 = document.getElementById('dressimg');
  element_dressimg3.setAttribute("src", vestido.slice(-1)[0]);

});

document.getElementById('7').addEventListener('click', (event) => {
  let element_trousersimg2 = document.getElementById('trousersimg');
  element_trousersimg2.setAttribute("src", calca[0]);

});

document.getElementById('5').addEventListener('click', (event) => {
  let element_shirtimg2 = document.getElementById('shirtimg');
  element_shirtimg2.setAttribute("src", camisa[0]);

});

document.getElementById('8').addEventListener('click', (event) => {
  let element_trousersimg3 = document.getElementById('trousersimg');
  element_trousersimg3.setAttribute("src", calca.slice(-1)[0]);

});

document.getElementById('6').addEventListener('click', (event) => {
  let element_shirtimg3 = document.getElementById('shirtimg');
  element_shirtimg3.setAttribute("src", camisa.slice(-1)[0]);

});

document.getElementById('buyskirt').addEventListener('click', (event) => {
  let element_skirtqtd = document.getElementById('skirtqtd');
  contagem1 = (typeof contagem1 === 'number' ? contagem1 : 0) + 1;
  element_skirtqtd.innerText = contagem1;

});

document.getElementById('buydress').addEventListener('click', (event) => {
  let element_dressqtd = document.getElementById('dressqtd');
  contagem2 = (typeof contagem2 === 'number' ? contagem2 : 0) + 1;
  element_dressqtd.innerText = contagem2;

});

document.getElementById('buysirt').addEventListener('click', (event) => {
  let element_shirtqtd = document.getElementById('shirtqtd');
  contagem3 = (typeof contagem3 === 'number' ? contagem3 : 0) + 1;
  element_shirtqtd.innerText = contagem3;

});

document.getElementById('buytrousers').addEventListener('click', (event) => {
  let element_trousersqtd = document.getElementById('trousersqtd');
  contagem4 = (typeof contagem4 === 'number' ? contagem4 : 0) + 1;
  element_trousersqtd.innerText = contagem4;

});

document.getElementById('comentario').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = document.getElementById('name').value;

  element_list.appendChild(new_li);
  let element_list2 = document.getElementById('list');
  let new_ul = document.createElement('ul');
  new_ul.innerText = document.getElementById('text').value;

  element_list2.appendChild(new_ul);

});
