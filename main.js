let h1 = document.querySelector("h1")

h1.innerText = "Home"

let  array = [];
function bucle(){
  for (let i=1 ; i < 10 ; i++) {
    array.push(`<div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card" style="width: 18rem;">
      <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="auto ${i}">
      <div class="card-body">
        <p class="card-text">el auto ${i} tiene un precio asignado de ${i}000000$</p>
        <a href="#" class="btn btn-primary bg-secondary border-0">Ver más</a>
        </div>
       </div>
      </div>
    </div>);`)
    
  }
  }
  bucle();
console.log(array);

document.querySelector('.container').innerHTML = array.join("");

