
document.getElementById('btn').onclick = function(){
    if(document.getElementById('day-input').value == ""){
        document.getElementById('day-input').style.border = '1px solid red';
        document.getElementById('day-text').style.color = 'red';
    }
    if(document.getElementById('month-input').value == ""){
        document.getElementById('month-input').style.border = '1px solid red';
        document.getElementById('month-text').style.color = 'red';
    }
    if(document.getElementById('year-input').value == ""){
        document.getElementById('year-input').style.border = '1px solid red';
        document.getElementById('year-text').style.color = 'red';
    }
}