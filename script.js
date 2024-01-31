// for(i=i; i <=20; i++) {
//     if(i%2==0) {
//         console.log('Great');
//     }
// } 

// var theAvengers = [`Captain America`, `Iron Man`, `Thor`, `Hulk`, `Hawk Eye`, `Black Widow`]
// console.log(theAvengers);

// var justiceLeague = [`Super Man`, `Batman`, `Wonder Woman`, `Cyborg`, `Flash`, `Martian Manhunter`]
// console.log(justiceLeague);

// var student = [`AINA PROMISE`, `17`, `Light`, `single`, 1000000, true]
// console.log(student);

// var foods = [`Jollof Rice`, `Pounded Yam`, `Beans and Dodo`, `Porridge`, `Semo and Ewedu`, `Bread & Tea`]

// foods.pop()
// foods.shift()
// foods.push(`Amala with Gbegiri`)
// foods.unshift(`Rice`)
// console.log(foods);

// var arrTest = ['Tolu', 'Tade', 'sola']

var cart = []
var carts = []

function addItems() {
  if (inp.value === '' && inpu.value === '') {
    error.style.display = "block";
    err.style.display = "none";
    erro.style.display = "none";
  } else if (inpu.value === '') {
    erro.style.display = "block";
    error.style.display = "none";
    err.style.display = "none";
  } else if (inp.value === '') {
    err.style.display = "block";
    error.style.display = "none";
    erro.style.display = "none";
  } else {
    err.style.display = "none";
    erro.style.display = "none";
    error.style.display = "none";
    ent.style.display = "block";
    buttons.style.display = "block"

    cart.push(inp.value);
    carts.push(inpu.value);

    document.getElementById('inp').value = '';
    document.getElementById('inpu').value = '';

    console.log(cart);
    console.log(carts);

    var tableContent = "<table border='1' class = 'table-bordered table-striped text-center container-fluid mx-auto col-lg-12 col-12 '><tr bgcolor='darkgrey'><th class='col-1'>S/N</th><th class='col-3'>Item Name</th><th class='col-3'>Item Price</th><th class='col-5' id ='action'>Action</th></tr>";

    for (let i = 0; i < cart.length && i < carts.length; i++) {
      tableContent += `
          <tr bgcolor='lightgrey' background-color="black">
            <td>${i + 1}.</td>
            <td>${cart[i]}</td>
            <td>\u20A6${carts[i]}</td>
            <td id='action'><button class="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editItem(${i})">Edit</button>
            <button onclick="dele(${i})" class="btn btn-outline-danger">Delete</button></td>
          </tr>
        `;
    }

    tableContent += "</table>";
    show.innerHTML = tableContent;
  }

}

function calc() {
  if (carts.length === '') {
    alert('Item Price list is empty')
  }
  totalDisplay.style.display = "block"
  var confirmation = confirm("Are you sure to calculate total price? No more re-calculation after you enter until you refresh the page.");
  if (confirmation) {
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
      total += parseInt(carts[i]) || 0; // I used parseInt to handle potential non-numeric values

      let totalHTML = `<span style="font-size: 15px; color: black; font-weight: bold;">Dear Customer, Thank you for purchasing from PSQUAD SHOPRITE ENTERPRISES as your Price </span><div style="font-size: 18px; color: green; font-weight: bold;">Total is: \u20A6${total}</div><span style="font-size: 15px; color: black">Kindly make your Transactions and a Submit a file of Proof to one of the following banks and the file Input below as we process your Payments before <b>Delivery</b></span><p>
    <ul style="font-size: 15px;">
    <li>ACCESS BANK: 0123456789</li>
    <li>UNION BANK: 0987654321</li>
    <li>OPAY: 8177254321</li>
    </ul>
    Name: PSQUAD SHOPRITE ENTERPRISES</p>
    <div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02">
  <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>`;

      // Display the total HTML
      document.getElementById("totalDisplay").innerHTML = totalHTML;
    }
    console.log("Total:", total);
  }
  deleteAll.style.display = 'none'
  // shopRite.style.display = 'none'
  // action.style.display = 'none'
}

function dele(index) {
  cart.splice(index, 1);
  carts.splice(index, 1);
  displayCart();
}

//   function firstItem() {
//     if (cart.length === 0) {
//       alert("Item list is empty");
//     } else {
//       console.log(inp.value);
//       console.log(inpu.value);

//       cart.shift();
//       carts.shift();

//       document.getElementById('inp').value = '';
//       document.getElementById('inpu').value = '';

//       console.log(cart);
//       console.log(carts);

//       var tableContent = "<table border='1' class = 'table-bordered table-striped text-center'><tr bgcolor='darkgrey'><th>S/N</th><th>Item Name</th><th>Item Price</th></tr>";

//       for (var i = 0; i < cart.length; i++) {
//         tableContent += `
//           <tr bgcolor="lightgrey">
//             <td>${i + 1}.</td>
//             <td>&nbsp;${cart[i]}</td>
//             <td>&nbsp;\u20A6${carts[i]}</td>
//           </tr>
//         `;
//       }

//       tableContent += "</table>";
//       show.innerHTML = tableContent;
//     }
//   }


//   function lastItem() {
//     if (cart.length === 0) {
//       alert("Item list is empty");
//     } else {
//       console.log(inp.value);
//       console.log(inpu.value);

//       cart.pop();
//       carts.pop();

//       document.getElementById('inp').value = '';
//       document.getElementById('inpu').value = '';

//       console.log(cart);
//       console.log(carts);

//       var tableContent = "<table border='1' class = 'table-bordered table-striped text-center'><tr bgcolor='darkgrey'><th>S/N</th><th>Item Name</th><th>Item Price</th></tr>";

//       for (var i = 0; i < cart.length; i++) {
//         tableContent += `
//           <tr bgcolor='lightgrey'>
//             <td>${i + 1}.</td>
//             <td>&nbsp;${cart[i]}</td>
//             <td>&nbsp;\u20A6${carts[i]}</td>
//           </tr>
//         `;
//       }

//       tableContent += "</table>";
//       show.innerHTML = tableContent;
//     }
//   }


//   function sumItem() {
//     if (inp.value === '') {
//       alert("Pls Input an Item!");
//     } else {
//       err.style.display = "none";
//       console.log(inp.value);
//       console.log(inpu.value);

//       cart.unshift(inp.value);
//       carts.unshift(inpu.value);

//       document.getElementById('inp').value = '';
//       document.getElementById('inpu').value = '';

//       console.log(cart);
//       console.log(carts);

//       var tableContent = "<table border='1' class = 'table-bordered table-striped text-center'><tr bgcolor='darkgrey'><th>S/N</th><th>Item Name</th><th>Item Price</th></tr>";

//       for (var i = 0; i < cart.length; i++) {
//         tableContent += `
//           <tr bgcolor"lightgrey">
//             <td>&nbsp;${i + 1}.</td>
//             <td>&nbsp;${cart[i]}</td>
//             <td>\u20A6${carts[i]}</td>
//           </tr>
//         `;
//       }

//       tableContent += "</table>";
//       show.innerHTML = tableContent;
//     }
//   }


function delItem() {
  if (cart.length === 0) {
    alert("Item list is empty");
  } else {
    var confirmation = confirm("Are you sure you want to proceed?");
    if (confirmation) {
      err.style.display = "none";
      console.log(inp.value);
      console.log(inpu.value);

      cart.splice(0, cart.length);
      carts.splice(0, carts.length);

      document.getElementById('inp').value = '';
      document.getElementById('inpu').value = '';

      console.log(cart);
      console.log(carts);

      show.innerHTML = "<table border='1' class = 'table-bordered table-striped text-center container-fluid mx-auto col-lg-12 col-12 '><tr bgcolor='darkgrey'><th class='col-1'>S/N</th><th class='col-3'>Item Name</th><th class='col-3'>Item Price</th><th class='col-5'>Action</th></tr>";
    }
  }
}



//   function allItem() {
//     if (cart.length === 0) {
//         alert("Item list is empty")
//     };
//     var ask = Number(document.getElementById('deleteInput').value);
//     moWork.style.display = 'none';

//     if (ask === 0 || isNaN(ask) || ask === '') {
//       moError.style.display = 'block';
//       moErro.style.display = 'none';
//       moWork.style.display = 'none';
//     } else if (ask > cart.length) {
//       moErro.style.display = 'block';
//       moError.style.display = 'none';
//       moWork.style.display = 'none';
//     } else {
//       cart.splice(ask - 1, 1);
//       carts.splice(ask - 1, 1);
//       document.getElementById('deleteInput').value = ''; // Clear the input field
//       moWork.style.display = 'block';
//       moErro.style.display = 'none';
//       moError.style.display = 'none';
//       displayCarts();
//       displayCartse();
//     }
//   }






// Declare global variables to store the current index for editing



function editItem(index) {
  currentIndex = index;
  document.getElementById("newItem").value = '';
  document.getElementById("newPrice").value = '';

}

function saveEditedItem() {
  let editedItemName = document.getElementById("newItem").value;
  let editedItemPrice = document.getElementById("newPrice").value;

  if (editedItemName === '' || editedItemPrice === '') {
    why.style.display = "block";
    return true;
  }

  cart[currentIndex] = editedItemName;
  carts[currentIndex] = editedItemPrice;

  why.style.display = "none";

  displayCart();
}


function displayCart() {
  var tableContent = "<table border='1' class='table-bordered table-striped text-center container-fluid mx-auto col-lg-12 col-12'><tr bgcolor='darkgrey'><th class='col-1'>S/N</th><th class='col-3'>Item Name</th><th class='col-3'>Item Price</th><th class='col-5'>Action</th></tr>";

  for (let i = 0; i < cart.length && i < carts.length; i++) {
    tableContent += `
      <tr bgcolor='lightgrey' background-color="black">
        <td>&nbsp;${i + 1}.</td>
        <td>&nbsp;${cart[i]}</td>
        <td>&nbsp;\u20A6${carts[i]}</td>
        <td>
          <button class="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editItem(${i})">Edit</button>
          <button onclick="dele(${i})" class="btn btn-outline-danger">Delete</button>
        </td>
      </tr>
    `;
  }

  tableContent += "</table>";
  show.innerHTML = tableContent;
}






// for (index = 0; index < cartoon.length; index++) {
//     var element = cartoon[index];
//     console.log(index, element);
// }

// cartoon.map((fo,i)=>{
//     console.log(i,fo);
// })

// cartoon.map(function(fo, i){
//     console.log(i, fo);
// })
