// function head(){
//     const header = document.getElementById("main");
//     header.innerHTML += "<nav>navigation</nav>";
//     nav.innerHTML += "<div>logo</div>";
// }
// head();


// function head(){
//     const header = document.getElementById("main");
//     // header.innerHTML += "<nav>navigation</nav>";
//     // nav.innerHTML += "<div>logo</div>";
// }
// head();



// function colorBox(){
//     const color = document.getElementById("cBox");
//     const colorName = new Array("gray","pink","black","white");
//     let i = 0;
//     while(i<4){
//     color.innerHTML += "<input type='checkbox'>"+colorName[i]+"<div class='+colorBox"+i+"'></div>"
//     i++;
//     }
// }
// colorBox();
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

    //
    ;

    function colorBox(){
        const color = document.getElementById("input_box");
        const colorImg = document.getElementById("mainImg");
        const colorName =["Rosegold","Mint","Purple","Red","Skyblue"];

        // $.each(colorName, function(i, el){
        //     console.log(i)
        //     console.log(el)
        // });

        $.each(colorName, function(i, el){
            colorImg.innerHTML += '<img src="./image/main/color/'+i+'.png">';
            $("#mainImg img").eq(0).show();
            // color.innerHTML += '<input type="checkbox" name="color" id="'+i+'">'+ el
            // +colorName[i];
            $("#color"+i).click(function(){
                // alert(1);
                
                $("#mainImg img").hide();
                $("#mainImg img").eq(i).show();
                
                // if ($().val() = true){
                //     alert(1);
                //     $(this).not().attr("checked", false);
                // }
            });
            
        })
    }
    colorBox();

});

// function colorBox()