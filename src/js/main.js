import $ from 'jquery';

let ddtitle = $('.dd-title');
let arrow = $('.arrow');
let drop = $('.drop');

ddtitle.on('click',function(event){
  event.preventDefault();
  console.log('clicked title');
  var pageData = dropDown();
  drop.append(pageData);

});

arrow.on('click',function(event){
  event.preventDefault();
  console.log('clicked arrow');

});


function dropDown(){
  return`
    <div class='each'>
      <img src="">  
      <h6 class='lang'>Romania - Romana</h6>
      <img src="">  
      <h6 class='lang'>Espana - Espanol</h6>
      <img src="">  
      <h6 class='lang'>United Kingdom - English</h6>
      <img src="">  
      <h6 class='lang'>United States - English</h6>
      <img src="">  
      <h6 class='lang'>Deutschland - Deutch</h6>
      <img src="">  
      <h6 class='lang'>France - Francias</h6>
      <img src="">  
      <h6 class='lang'>Nederland - Nederlands</h6>

    </div>

  `;
};


