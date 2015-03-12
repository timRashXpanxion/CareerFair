var myApplicants = Alloy.Collections.applicant_cache;
var applicant= Alloy.createModel('applicant_cache',{
	first_name: 'Billy',
	last_name: 'Engineer',
	phone:"515-555-5555",
	email:"bob@gmail.com",
	grad_term:"Fall",
	grad_year:"2040",
	major:"Fiction Writing",
	visited:"2015-03-01 14:45:30",
	synced:false
	
});

myApplicants.add(applicant);
applicant.save();
$.index.open();
