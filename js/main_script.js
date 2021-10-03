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
    
    const price = document.getElementById("price");
    let inputPrice = 99000;
    price.innerHTML = inputPrice;

    //옵션 + 수량 선택 후 카트에 담기 
    
    $("#order").click(function(){
    const op = $("#choice option:selected");
    const number = $("#number");
    const insert = document.getElementById("insert");
    const arr = [];

    let opResult ="옵션 : "+ op.val() + " 수량 : " + number.val()+"개";
    let prResult ="가격 : "+ (number.val()*inputPrice.val());

    // let price = "가격 : "+ 
    const print = (op.val()!="" && number.val()!="") 
                  ? ($("#result").show() , arr.push(insert.innerHTML += opResult + "<br>" + prResult)) 
                  : alert("옵션과 갯수를 확인해 주세요");
    console.log(arr);
    return print;
    });

    //카트 닫기 
    $("#exit").click(function(){
        $("#result").hide();
    });

});
