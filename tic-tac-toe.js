window.onload = function(e){
    let boxes = document.querySelectorAll('#board > div');
    console.log("test");
    boxes.forEach(function(elem, index, list){
        //elem.addEventListener('onload', function(e){
         //   e.target.classList.add('square');
        //});
        elem.classList.add('square');
    });

    let boxes2 = document.querySelectorAll('#board > div');
    boxes2.forEach(function(elem, index, list){
        elem.addEventListener('click', function(e){
            console.log("check");
            console.log(e.target);
            //e.target.classList.remove('square');
            e.target.classList.add('square.X');
            e.target.innerHTML = "X";
    });
    });

    /*let boxes = document.querySelectorAll('#board > div');
    elem.addEventListener('click', function(e){
       e.target.classList.add('square.X');*/
};







