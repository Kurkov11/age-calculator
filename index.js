
document.getElementById('btn').onclick = function(){
    if(document.getElementById('day-input').value == ""){
        document.getElementById('day-input').style.border = '1px solid red';
        document.getElementById('day-text').style.color = 'red';
        document.getElementById('empty-msg-day').style.display = 'block';
    }else{
        document.getElementById('day-input').style.border = '1px solid hsl(0, 0%, 86%)';
        document.getElementById('day-text').style.color = 'hsl(0, 1%, 44%)';
        document.getElementById('empty-msg-day').style.display = 'none';
    }
    if(document.getElementById('month-input').value == ""){
        document.getElementById('month-input').style.border = '1px solid red';
        document.getElementById('month-text').style.color = 'red';
        document.getElementById('empty-msg-month').style.display = 'block';
    }else{
        document.getElementById('month-input').style.border = '1px solid hsl(0, 0%, 86%)';
        document.getElementById('month-text').style.color = 'hsl(0, 1%, 44%)';
        document.getElementById('empty-msg-month').style.display = 'none';
    }
    if(document.getElementById('year-input').value == ""){
        document.getElementById('year-input').style.border = '1px solid red';
        document.getElementById('year-text').style.color = 'red';
        document.getElementById('empty-msg-year').style.display = 'block';
    }else{
        document.getElementById('year-input').style.border = '1px solid hsl(0, 0%, 86%)';
        document.getElementById('year-text').style.color = 'hsl(0, 1%, 44%)';
        document.getElementById('empty-msg-year').style.display = 'none';
    }
}