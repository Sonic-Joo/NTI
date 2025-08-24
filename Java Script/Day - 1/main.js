function printData() {
  let name = document.getElementById("name");
  let price = document.getElementById("price");
  let disc = document.getElementById("disc");

  let total = `Product Name is ${name.value}, Product Price is ${price.value},
  and Product Disc is ${disc.value}`;

  document.getElementById("output").innerHTML += `<p>${total}</p>`;

  name.value = "";
  price.value = "";
  disc.value = "";
}