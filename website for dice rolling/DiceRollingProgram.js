function roll(){
    let x=Math.floor((Math.random()*6)+1);
    let t=document.getElementById("textBox");
    t.value=x;
    let img=document.getElementById("1")
    switch(x){
        case 1:img.src="téléchargement.png";
        break;
        case 2:img.src="téléchargement 2.png";
        break;
        case 3:img.src="téléchargement 3.png";
        break;
        case 4:img.src="téléchargement 4.png";
        break;
        case 5:img.src="téléchargement 5.png";
        break;
        case 6:img.src="téléchargement 6.png";
        break;
    }
}

