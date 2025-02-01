var color_in_ls = localStorage.getItem("wbms_color");
if (color_in_ls == null){
    mdui.setColorScheme('#9FB1F1');
    document.getElementById('cc').value = '#9FB1F1';
    localStorage.setItem('wbms_color', '#9FB1F1');
}else{
    mdui.setColorScheme(color_in_ls);
}
function setcc(){
    document.getElementById('cc').value = color_in_ls;
}
function colorchange(){
    localStorage.setItem('wbms_color', document.getElementById('cc').value);
    color_in_ls = localStorage.getItem("wbms_color");
    mdui.setColorScheme(color_in_ls);
}