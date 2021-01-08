'use strict';

{

  function PointAdd(id,val){ //ポイントの増加
      $.ajax({
          type: 'PUT',
          timeout: 10000,
          url: "https://8wq7kom4q2.execute-api.ap-northeast-1.amazonaws.com/v2?id="+id+"&val="+val,
          headers: {
              "accept": "application/json"
          },
          dataType: 'json',
          cache: false,
      }).done(function(e){
          console.log(e);  
      });
  }

  const btn = document.getElementById('btn');
  var flag = false;
  
  btn.addEventListener('click',() => {
    // const results = ['大吉','吉','大凶','中吉','大凶','大凶','大凶','大凶','大凶','大凶','大凶','大凶'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if(flag == false){
      flag = true;
      var bonus;
      if (n < 0.05){
        //btn.textContent = '100';  //5%
        bonus = 10;
      }else if (n < 0.2){
        //btn.textContent = '50';  //15%
        bonus = 5;
      }else{
        //btn.textContent = '10'; //80%
        bonus = 1;
      }
      $('#message').text(bonus+"ポイント増加しました！");
      btn.textContent = bonus;
      PointAdd(1,bonus);
    }
  });
  
}
  