$(document).ready(function() {
    // var i=0;
    // var bArray = [];
    // var sArray = [30,40,50,60,70];
    // for (var k = 0; k < $('.s2 .visual-contents').width()+50; k++) {
    //     bArray.push(k);
    // }
    
    // function randomValue(arr) {
    //     return arr[Math.floor(Math.random() * arr.length)];
    // }
    // function bubbles(){ 
    //     var size = randomValue(sArray);
    //     $('.s2 .visual-contents').append('<div class="bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
    //     $('.bubble').animate({
    //         'bottom': '130%',
    //         'opacity' : '-=0.7'
    //     }, 3000, function(){
    //         $(this).remove();
    //     }
    //     );
    // }
    // setInterval(bubbles, 350);

    var win_width=$(window).width();
    if(win_width>480){
        var i=0;
        var bArray = [];
        var sArray = [30,40,50,60,70];
        for (var k = 0; k < $('.s2 .visual-contents').width()+50; k++) {
            bArray.push(k);
        }
        
        function randomValue(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
        function bubbles(){ 
            var size = randomValue(sArray);
            $('.s2 .visual-contents').append('<div class="bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
            $('.bubble').animate({
                'bottom': '130%',
                'opacity' : '-=0.7'
            }, 3000, function(){
                $(this).remove();
            }
            );
        }
        setInterval(bubbles, 350);
    }else{
        var i=0;
        var bArray = [];
        var sArray = [30,40,50,60,70];
        for (var k = 0; k < $('.s2 .visual-contents').width()+50; k++) {
            bArray.push(k);
        }
        
        function randomValue(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
        function bubbles(){ 
            var size = randomValue(sArray);
            $('.s2 .visual-contents').append('<div class="bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
            $('.bubble').animate({
                'bottom': '250%',
                'opacity' : '-=0.7'
            }, 3000, function(){
                $(this).remove();
            }
            );
        }
        setInterval(bubbles, 350);
    }
});
