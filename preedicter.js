function predict(){
    var tot_hrs_per_day =document.getElementById('input1').value;
    var tot_hrs =document.getElementById('input2').value;
    var tot_hrs_attend =document.getElementById('input3').value;
    var leave =document.getElementById('input4').value;
    var deadline =document.getElementById('input5').value;
    var exact_percent;
    var res="you are safe";


    tot_hrs_per_day=parseInt(tot_hrs_per_day);
    tot_hrs=parseInt(tot_hrs);
    tot_hrs_attend=parseInt(tot_hrs_attend);
    leave=parseInt(leave);
    deadline=parseInt(deadline);

    var cur_percent=(tot_hrs_attend/tot_hrs)*100;
    cur_percent=cur_percent.toFixed(3);
    document.getElementById('input6').value=cur_percent;

    if(leave>=1){
        tot_hrs += leave;
        exact_percent= (tot_hrs_attend/tot_hrs)*100;
        exact_percent=exact_percent.toFixed(3);
        document.getElementById('input7').value=exact_percent;
    }
    if(leave<=0){
        document.getElementById('input7').value=cur_percent;
    }
    if(exact_percent>deadline){
        document.getElementById('input9').value="You Are Safe. Congrats And Keep Going";
    }
   else{
        document.getElementById('input9').value="You Are Not Safe. Please Attend The Classes";
    }

    for (var i =0; exact_percent<deadline ;i++){
            tot_hrs += tot_hrs_per_day;
            tot_hrs_attend += tot_hrs_per_day;
            exact_percent= (tot_hrs_attend/tot_hrs)*100;
            if(exact_percent>=deadline){
                document.getElementById('input8').value=i;
            }
    }

    
}