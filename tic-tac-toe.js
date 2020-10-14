window.onload = function(e){
    let boxes = document.querySelectorAll('#board > div');
    console.log("test");
    boxes.forEach(function(elem, index, list){
        console.log("check");
        //elem.addEventListener('onload', function(e){
         //   e.target.classList.add('square');
        //});
        elem.classList.add('square');
    });
};




