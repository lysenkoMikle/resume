<script>
     let product = {
     name: "Phone",
     brand: "Samsung",
     price: 1000,
     sale: 10,
     }
      let res;
      function truePrice() {
        res = product.price - (product.price / product.sale);
        }  
     truePrice();
    console.log(product);
    alert("цена со скидкой= "+ res);
  </script>
--------------------------------------------
<script>
function createTable(rows,cols,color) {
      document.write('<table>');
      for (let i=1; i<=rows; i++) {
        document.write('<tr>');
        for (let j=1; j<=cols; j++) {
          if (i==1|| j==1){
            document.write('<th style="background-color: '+ color + '">');
            document.write(i * j);
            document.write('</th>');
          }
          else {
          document.write('<td>');
          document.write(i*j);
          document.write('</td>');}
        }
      }
        document.write('</tr>');
        document.write('</table>');
      }
      createTable (15,15,"blue");
</script>
