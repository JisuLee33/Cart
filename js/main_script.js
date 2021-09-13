$(function(){
    //왼쪽 이미지 출력
    function imgBox(){
    const img = document.getElementsByTagName("li");
    let i= 0;
    while(i<img.length){
       img[i].innerHTML = `<img src='./image/main/detail/${i}.png' alt=${i}>` 
       i++;
        }
    }
    imgBox();

    //옵션 선택에 따른 사진 변경
    $("#choice").change(function(){
        let OpVal = $('option:selected', this).text();
        let img_src = "./image/main/color/"+OpVal+".png";
    $("#mainImg img").attr("src", img_src);    
    });

    //옵션 + 수량 선택 후 카트에 담기 
    $("#order").click(function(){
    const op = $("#choice option:selected");
    const number = $("#number");
    const insert = document.getElementById("insert")
    let result ="옵션 : "+ op.val() + " 수량 : " + number.val()+"개";
    const print = (op.val()!="" && number.val()!="") ? ($("#result").show() , insert.innerHTML=result) : alert("옵션과 갯수를 확인해 주세요");
    return print;
    });

    //카트 닫기 
    $("#exit").click(function(){
        $("#result").hide();
    });

});
