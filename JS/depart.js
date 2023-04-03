// alert();
$(document).ready(function(){  //start of the function

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.querySelector("#navbar").style.padding = "0px 100px";
        document.querySelector("#navbar").style.backgroundColor = "rgba(0,0,0,0.6)";
        document.getElementById('one').style.color='white'
        document.getElementById('two').style.color='white'
    } 
    else{
        document.querySelector("#navbar").style.padding = "0px 100px";
        // document.querySelector("#navbar").style.background = "none";
        document.querySelector("#navbar").style.background = "none";
        document.getElementById('one').style.color='rgba(0,0,0,0.6);'
        document.getElementById('two').style.color='rgba(0,0,0,0.6);'
    }

}

$('#flip').click(function(){
    $('#panel').toggle('2000')
});

});//end of the function