// 选项卡切换
function $(id) {
    return typeof id == "string"?document.getElementById(id):id;
}
window.onload = function() {
    var titleName = $("tab_title").getElementsByTagName("li");
    var tabContent = $("tab_content").getElementsByTagName("div");
    if(titleName.length != tabContent.length){
        return;
    }
    for(var i = 0; i < titleName.length; i++) {
        titleName[i].id = i;
        titleName[i].onmouseover = function() {
            for(var j = 0; j < titleName.length; j++){
                titleName[j].className = "";
                tabContent[j].style.display = "none";
            }
            this.className = "selector";
            tabContent[this.id].style.display = "block";
        }
    }
}