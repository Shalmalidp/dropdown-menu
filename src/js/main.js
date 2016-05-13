import $ from 'jquery';

let ddtitle = $('.dd-title');
let arrow = $('.arrow');
let drop = $('.drop');

ddtitle.on('click',function(event){
  event.preventDefault();
  //pageData.text('');
  console.log('clicked title');
  var pageData = dropDown();
  drop.append(pageData);

});

arrow.on('click',function(event){
  event.preventDefault();
  //pageData.text('');
  console.log('clicked title');
  var pageData = dropDown();
  drop.append(pageData);

});


function dropDown(){
  drop.text('');
  return`
    <div class='drop-down'> 
      <h6 class='lang'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/2000px-Flag_of_Romania.svg.png"><span>Romania - Romana</span></h6>   
      <hr>
      <h6 class='lang'><img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png"><span>Espana - Espanol</span></h6>        
      <hr>
      <h6 class='lang'><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"><span>United Kingdom - English</span></h6>
      <hr>
      <h6 class='lang'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/US_flag_48_stars.svg/220px-US_flag_48_stars.svg.png"><span>United States - English</span></h6>
      <hr>
      <h6 class='lang'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Flag_of_Germany_(3-2_aspect_ratio).svg/2000px-Flag_of_Germany_(3-2_aspect_ratio).svg.png"><span>Deutschland - Deutch</span></h6>
      <hr>
      <h6 class='lang'><img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"><span>France - Francias</span></h6>
      <hr>
      <h6 class='lang'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/2000px-Flag_of_the_Netherlands.svg.png"><span>Nederland - Nederlands</span></h6>
    </div>
  `;
};


