function Total() {

    let femalePrice = parseFloat(document.querySelector('.femaleJacketPrice').textContent.substring(1));
    let malePrice = parseFloat(document.querySelector('.maleJacketPrice').textContent.substring(1));

    let quantityFemale = document.querySelector('.quantity-f').value;
    let quantityMale = document.querySelector('.quantity-m').value;

    document.getElementById('femalePrice').textContent = 'R' + (femalePrice * quantityFemale).toFixed(2);

    document.getElementById('malePrice').textContent = 'R' + (malePrice * quantityMale).toFixed(2);
  }

  function OrderTotal() {

    let femaleTotal = parseFloat(document.getElementById('femalePrice').textContent.substring(1));
    let maleTotal = parseFloat(document.getElementById('malePrice').textContent.substring(1));
    let totalPrice = femaleTotal + maleTotal;
    document.getElementById('TotalPrice').textContent = 'R' + totalPrice.toFixed(2);
  }