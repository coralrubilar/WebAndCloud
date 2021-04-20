
var colors = ['#00FFFF', '#FF7F50', '#D2691E','#00FFFF', '#DC143C', '#E9967A','#FF1493', '#FF00FF', '#FF69B4','#BA55D3','#00FF00'];
var index =0;



function createSquare() {
    var newObj = document.createElement("div");
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    newObj.style.backgroundColor = random_color;
    var father = document.getElementById("responsive_layout");
    if(index==0){
        var img = document.createElement("img");
        img.src = "images/plus-64.png";
        img.id="addSquare";
        newObj.appendChild(img);
    }
    if((index+1)%3 == 0){
        var img = document.createElement("img");
        img.src = "images/star-48.png";
        img.className="star";
        newObj.appendChild(img);
    }

    father.appendChild(newObj);
    newObj.className = "square";
    index++;
}


function initialize() {
    var sum_it = 6*2;
    for (var i = 0; i < sum_it; i++) {
        createSquare();
    }
    document.getElementById("addSquare").addEventListener("click", createSquare);

}


$(document).on("click", "#responsive_layout div:not(:first-child)", function(){
	var q=this.style.backgroundColor == 'white';
	this.style.backgroundColor =  q ? colors[$(this).index()] : 'white';
	if(!q)
		$(this).addClass('imageback').fadeTo(1000, 1)
	else
		$(this).removeClass('imageback').fadeTo(1000, 1)
});