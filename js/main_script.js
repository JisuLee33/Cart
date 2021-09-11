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
    
    function imgBox(){
    const img = document.getElementsByTagName("li");
    let i= 0;
    while(i<img.length){
       img[i].innerHTML = `<img src='./image/main/detail/${i}.png' alt=${i}>` 
       i++;
        }
    }
    imgBox();

    function colorBox(){
        const color = document.getElementById("cBox");
        const colorName =["gray","pink","black","white"];
        let i = 0;
        while(i<colorName.length){
            color.innerHTML += "<input type='checkbox' id="+i+">"+colorName[i];
            $("#"+i+"").click(function(){
                alert(1);
                $("mainImg img").attr("src",`./image/main/color/${i}.png`);
            });
            i++;
        }
    }
    colorBox();

});

// function colorBox()