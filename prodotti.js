//FILTRO 
    document.querySelector('form').addEventListener('change', function(event) {
      
      var category = document.querySelector('#category').value;
      var price = document.querySelector('input[name=price]:checked').value;
      
      console.log('Categoria selezionata:', category);
      console.log('Prezzo selezionato:', price);
      
      var products = document.querySelectorAll('.product');
      
      products.forEach(function(product) {
        var productCategory = product.getAttribute('data-category');
        var productPrice = parseFloat(product.getAttribute('data-price'));
        
        var displayProduct = true;
        
        if (category !== 'all' && category !== productCategory) {
          displayProduct = false;
        }
        
        if (price === '<10' && productPrice >= 10) {
          displayProduct = false;
        } else if (price === '10-50' && (productPrice < 10 || productPrice > 50)) {
          displayProduct = false;
        } else if (price === '>50' && productPrice <= 50) {
          displayProduct = false;
        }
        
        if (displayProduct) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });

