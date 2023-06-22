var nomes=["Pai","mãe" , "filha"];
var imagens=[
    "https://w7.pngwing.com/pngs/119/816/png-transparent-father-s-day-father-and-child-father-s-day-child.png",
    "https://i.pinimg.com/originals/9d/85/12/9d85123ef12e98bf5a267222038b5b58.png",
    "https://greenpng.com/wp-content/uploads/2021/03/publicdomainq-0050726cjtadd-300x278.png"
]
function update() {
    var numbersOfFamilyMenberInArray = 3
    if(i > numbersOfFamilyMenberInArray)
    i = 0
    var updateimagens= imagem [i];
    var updatenomes= nomes [i];
    document.getElementById("familyMemberImagens").src=updatedimagens
    document.getElementById("familyMemberImagens").innerHTML=updatednomes
}
