var myApplicants = Alloy.Collections.applicantcache;

function nextStep(){
	var currentTime = new Date();
	var applicant= Alloy.createModel('applicantcache',{
		first_name : $.firstNameInput.value, 
		last_name : $.lastNameInput.value,
		phone : $.phoneInput.value,
		email : $.emailInput.value,
		grad_term : $.gradTermInput.value,
		grad_year : $.gradYearInput.value,
		major : $.majorInput.value,
		visited : currentTime.getTime()
		});
	myApplicants.add(applicant);
	applicant.save();
	$.addApplicant.close();
}
var lastCall=0;
$.phoneInput.addEventListener('blur', function(e) {
        //this should slow down the event handler so it isnt called so much
        var now = new Date();
        if(lastCall>now.getTime()-1500){return;}
        lastCall=now.getTime();
        // Get current value
        var p = e.source.value;
        // Convert it to the pure number
        p = p.replace('(','').replace(')','').replace(' ','').replace('-','');
        var pl = p.length;
        if(pl >= 10) {
            // This is too long for a US phone number, blur the field
            e.source.value = '('+p.substr(0,3)+') '+p.substr(3,3)+'-'+p.substr(6,4);
          
        } else if(pl >= 7) {
            // Needs a dash
            e.source.value = '('+p.substr(0,3)+') '+p.substr(3,3)+'-'+p.substr(6,4);
        } else if(pl >= 4) {
            // Doesn't need dash yet
            e.source.value = '('+p.substr(0,3)+') '+p.substr(3,3);
        } 
    });