
document.getElementById('btn').onclick = function(){
    let birthDay = document.getElementById('day-input').value;
    let birthMonth = document.getElementById('month-input').value;
    let birthYear = document.getElementById('year-input').value;
    let errorOcurred = false;

    let currentYear = 2023;
    let currentMonth = 12;
    let currentDay = 22;

    let daysCount;
    let calculatedDay;
    let calculatedMonth;
    let calculatedYear;

    if(birthDay == ""){
        errorOcurred = true;
        showRed();
        document.getElementById('empty-msg-day').style.display = 'block';
        document.getElementById('invalid-msg-day').style.display = 'none';
    }else if(! (birthDay > 0 && birthDay <= 31)){
        errorOcurred = true;
        showRed();
        document.getElementById('invalid-msg-day').style.display = 'block';
        document.getElementById('empty-msg-day').style.display = 'none';
    }else{
        document.getElementById('empty-msg-day').style.display = 'none';
        document.getElementById('invalid-msg-day').style.display = 'none';
    }
    if(birthMonth == ""){
        errorOcurred = true;
        showRed();
        document.getElementById('empty-msg-month').style.display = 'block';
        document.getElementById('invalid-msg-month').style.display = 'none';
    }else if(! (birthMonth > 0 && birthMonth < 13)){
        errorOcurred = true;
        showRed();
        document.getElementById('empty-msg-month').style.display = 'none';
        document.getElementById('invalid-msg-month').style.display = 'block';
    }else{
        document.getElementById('empty-msg-month').style.display = 'none';
        document.getElementById('invalid-msg-month').style.display = 'none';
    }
    if(birthYear == ""){
        errorOcurred = true;
        showRed();
        document.getElementById('empty-msg-year').style.display = 'block';
        document.getElementById('invalid-msg-year').style.display = 'none';
    }else if(birthYear > 2023){
        errorOcurred = true;
        showRed();
        document.getElementById('invalid-msg-year').style.display = 'block';
        document.getElementById('empty-msg-year').style.display = 'none';
    }else{
        document.getElementById('empty-msg-year').style.display = 'none';
        document.getElementById('invalid-msg-year').style.display = 'none';
    }
    if(!errorOcurred){
        showDefault();
        //year calculation
        calculatedYear = currentYear - birthYear;
        if(currentMonth < birthMonth || (currentMonth == birthMonth && currentDay < birthDay)){
            calculatedYear -= 1;
        }
        document.getElementById('age-year-score').innerHTML = calculatedYear;
        document.getElementById('age-month-score').innerHTML = calculatedMonth;
        document.getElementById('age-day-score').innerHTML = calculatedDay;
    }
    
    function showRed(){
        document.getElementById('day-input').style.border = '1px solid red';
        document.getElementById('day-text').style.color = 'red';

        document.getElementById('month-input').style.border = '1px solid red';
        document.getElementById('month-text').style.color = 'red';

        document.getElementById('year-input').style.border = '1px solid red';
        document.getElementById('year-text').style.color = 'red';
    }

    function showDefault(){
        document.getElementById('day-input').style.border = '1px solid hsl(0, 0%, 86%)';
        document.getElementById('day-text').style.color = 'hsl(0, 1%, 44%)';

        document.getElementById('month-input').style.border = '1px solid hsl(0, 0%, 86%)';
        document.getElementById('month-text').style.color = 'hsl(0, 1%, 44%)';

        document.getElementById('year-input').style.border = '1px solid hsl(0, 0%, 86%)';
        document.getElementById('year-text').style.color = 'hsl(0, 1%, 44%)';
    }
}