// Task 1
let title = document.getElementById('tag-line');
let p = document.querySelectorAll(".bg-main-content h2");
let collect = title.textContent+"\n -------------------------------------------";

for (var i =0,num =p.length;i<num;i++){
	collect+="\n"+p[i].textContent;
}
alert(collect);

// Task 2
let b = document.querySelectorAll(".box");

collect=b[13].querySelector("h2").textContent+"\n ------------------"+"\n" ;
let p2 = b[13].querySelectorAll("p");
for (var i =0,num =p2.length;i<num;i++){
	collect+=p2[i].textContent+"\n\n";
}
alert(collect);
