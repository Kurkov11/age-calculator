
document.getElementById('btn').onclick = function(){
    let birthDay = document.getElementById('day-input').value;
    let birthMonth = document.getElementById('month-input').value;
    let birthYear = document.getElementById('year-input').value;
    let errorOcurred = false;

    let currentYear = 2023;
    let currentMonth = 12;
    let currentDay = 25;

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
        function findAge(current_date, current_month, current_year, birth_date,  
            birth_month, birth_year)  
{  
   // days of every month  
   month = [31, 28, 31, 30, 31, 30, 31,  
                       31, 30, 31, 30, 31 ] 
 
   // if birth date is greater than current date  
   // then do not count this month and add 30  
   // to the date so as to subtract the date and  
   // get the remaining days  
   if (birth_date > current_date) {  
       current_date = current_date + month[birth_month - 1];  
       current_month = current_month - 1;  
   }  
 
   // if birth month exceeds current month, then do  
   // not count this year and add 12 to the month so  
   // that we can subtract and find out the difference  
   if (birth_month > current_month) {  
       current_year = current_year - 1;  
       current_month = current_month + 12;  
   }  
 
   // calculate date, month, year  
   var calculated_date = current_date - birth_date;  
   var calculated_month = current_month - birth_month;  
   var calculated_year = current_year - birth_year;  
 
   calculatedDay = calculated_date;
   calculatedMonth = calculated_month;
   calculatedYear = calculated_year;
}  

findAge(currentDay, currentMonth, currentYear,  
           birthDay, birthMonth, birthYear);  
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