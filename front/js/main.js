'use strict';

{

  const btn = document.getElementById('btn');
  
  btn.addEventListener('click',() => {
    // const results = ['大吉','吉','大凶','中吉','大凶','大凶','大凶','大凶','大凶','大凶','大凶','大凶'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.05){
      btn.textContent = '100';  //5%

    }else if (n < 0.2){
      btn.textContent = '50';  //15%
    }else{
      btn.textContent = '10'; //80%
    }
  });
  
}
  