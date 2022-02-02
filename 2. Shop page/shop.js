let item1 = document.querySelector("#item1");
let item1price = document.querySelector("#item1price");
let item1button = document.querySelector("#item1button");

let item2 = document.querySelector("#item2");
let item2price = document.querySelector("#item2price");
let item2button = document.querySelector("#item2button");

let item3 = document.querySelector("#item3");
let item3price = document.querySelector("#item3price");
let item3button = document.querySelector("#item3button");

let item4 = document.querySelector("#item4");
let item4price = document.querySelector("#item4price");
let item4button = document.querySelector("#item4button");

let item5 = document.querySelector("#item5");
let item5price = document.querySelector("#item5price");
let item5button = document.querySelector("#item5button");

let item6 = document.querySelector("#item6");
let item6price = document.querySelector("#item6price");
let item6button = document.querySelector("#item6button");

let item7 = document.querySelector("#item7");
let item7price = document.querySelector("#item7price");
let item7button = document.querySelector("#item7button");

let item8 = document.querySelector("#item8");
let item8price = document.querySelector("#item8price");
let item8button = document.querySelector("#item8button");

let item9 = document.querySelector("#item9");
let item9price = document.querySelector("#item9price");
let item9button = document.querySelector("#item9button");

let inputtotal = document.querySelector(".h1");

let payment = document.querySelector("#payment");
let paymentend = document.querySelector("#paymentend");

let itemsnames = document.querySelector(".itemsnames");
let itemsprices = document.querySelector(".itemsprices");

item1button.addEventListener("click", adding);

function adding() {
  let itemname = document.createElement("li");
  let itemprice = document.createElement("li");
  itemname.innerHTML = item1.innerHTML;
  itemprice.innerHTML = item1price.innerHTML;
  itemsnames.append(itemname);
  itemsprices.append(itemprice);
  inputtotal.value =
    Number(inputtotal.value) + Number(parseInt(item1price.innerHTML));
}

item2button.addEventListener("click", adding2);

function adding2() {
  let itemname = document.createElement("li");
  let itemprice = document.createElement("li");
  itemname.innerHTML = item2.innerHTML;
  itemprice.innerHTML = item2price.innerHTML;
  itemsnames.append(itemname);
  itemsprices.append(itemprice);
  inputtotal.value =
    Number(inputtotal.value) + Number(parseInt(item2price.innerHTML));
}

item3button.addEventListener("click", adding3);

function adding3() {
  let itemname = document.createElement("li");
  let itemprice = document.createElement("li");
  itemname.innerHTML = item3.innerHTML;
  itemprice.innerHTML = item3price.innerHTML;
  itemsnames.append(itemname);
  itemsprices.append(itemprice);
  inputtotal.value =
    Number(inputtotal.value) + Number(parseInt(item3price.innerHTML));
}

item4button.addEventListener("click", adding4);

function adding4() {
  let itemname = document.createElement("li");
  let itemprice = document.createElement("li");
  itemname.innerHTML = item4.innerHTML;
  itemprice.innerHTML = item4price.innerHTML;
  itemsnames.append(itemname);
  itemsprices.append(itemprice);
  inputtotal.value =
    Number(inputtotal.value) + Number(parseInt(item4price.innerHTML));
}

item5button.addEventListener("click", adding5);

function adding5() {
  let itemname = document.createElement("li");
  let itemprice = document.createElement("li");
  itemname.innerHTML = item5.innerHTML;
  itemprice.innerHTML = item5price.innerHTML;
  itemsnames.append(itemname);
  itemsprices.append(itemprice);
  inputtotal.value =
    Number(inputtotal.value) + Number(parseInt(item5price.innerHTML));
}

item6button.addEventListener("click", adding6);

function adding6() {
  let itemname = document.createElement("li");
  let itemprice = document.createElement("li");
  itemname.innerHTML = item6.innerHTML;
  itemprice.innerHTML = item6price.innerHTML;
  itemsnames.append(itemname);
  itemsprices.append(itemprice);
  inputtotal.value =
    Number(inputtotal.value) + Number(parseInt(item6price.innerHTML));
}

item7button.addEventListener("click", adding7);

function adding7() {
  let itemname = document.createElement("li");
  let itemprice = document.createElement("li");
  itemname.innerHTML = item7.innerHTML;
  itemprice.innerHTML = item7price.innerHTML;
  itemsnames.append(itemname);
  itemsprices.append(itemprice);
  inputtotal.value =
    Number(inputtotal.value) + Number(parseInt(item7price.innerHTML));
}

item8button.addEventListener("click", adding8);

function adding8() {
  let itemname = document.createElement("li");
  let itemprice = document.createElement("li");
  itemname.innerHTML = item8.innerHTML;
  itemprice.innerHTML = item8price.innerHTML;
  itemsnames.append(itemname);
  itemsprices.append(itemprice);
  inputtotal.value =
    Number(inputtotal.value) + Number(parseInt(item8price.innerHTML));
}

item9button.addEventListener("click", adding9);

function adding9() {
  let itemname = document.createElement("li");
  let itemprice = document.createElement("li");
  itemname.innerHTML = item9.innerHTML;
  itemprice.innerHTML = item9price.innerHTML;
  itemsnames.append(itemname);
  itemsprices.append(itemprice);
  inputtotal.value =
    Number(inputtotal.value) + Number(parseInt(item9price.innerHTML));
}


