define(function(require){
    let btn = document.createElement('button');
    btn.addEventListener('click', function(){
        var my_module = require(['mycustommodule'], function(mycustommodule){
mycustommodule('calling from the app');
        });
        //my_module('calling from the app');
    });

    btn.textContent = 'Click Me To Lazy Load';
    document.body.appendChild(btn);
    
})