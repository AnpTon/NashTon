document.getElementById("myselfbut").onclick = function() {
    if (document.getElementById("Myselfimg").style.display == "flex") {
        document.getElementById("Myselfimg").style.display = "none";
    } else {
        document.getElementById("Myselfimg").style.display = "flex";
    }
};
document.getElementById("petbut").onclick = function(){
    if (document.getElementById("Petsimg").style.display == "flex") {
        document.getElementById("Petsimg").style.display = "none";
    } else {
        document.getElementById("Petsimg").style.display = "flex";
    }
};
document.getElementById("MLbut").onclick = function(){
    if (document.getElementById("MLimg").style.display == "flex") {
        document.getElementById("MLimg").style.display = "none";
    } else {
        document.getElementById("MLimg").style.display = "flex";
    }
}