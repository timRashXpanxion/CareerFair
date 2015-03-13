/*
*/
var myApplicants = Alloy.Collections.applicantcache;
var applicant= Alloy.createModel('applicantcache',{
	first_name: 'Billy',
	last_name: 'Engineer',
	phone:"515-555-5555",
	email:"bob@gmail.com",
	grad_term:"Fall",
	grad_year:"2040",
	major:"Fiction Writing",
	visited:"2015-03-01 14:45:30",
	synced:0
	
}).save();
var applicant= Alloy.createModel('applicantcache',{
	first_name: 'Sam',
	last_name: 'Smart',
	phone:"515-555-2222",
	email:"sam@gmail.com",
	grad_term:"Fall",
	grad_year:"20",
	major:"MIS",
	visited:"2015-03-01 14:45:30",
	synced:0
	
}).save();
var applicant= Alloy.createModel('applicantcache',{
	first_name: 'Daryl',
	last_name: 'Dumb',
	phone:"515-222-5555",
	email:"daryl@gmail.com",
	grad_term:"Fall",
	grad_year:"Never",
	major:"Leisure Studies",
	visited:"2015-03-01 14:45:30",
	synced:0
	
}).save();

$.index.open();

function addNewApplicant(event){
	
	var addApplicantController = Alloy.createController("addApplicant",{}).getView();
	addApplicantController.open();
	Ti.API.info('Hello You clicked add applicant ');
}

function ViewAllApplicants(event){
	var viewAllApplicants=Alloy.createController("viewAllApplicants",{}).getView();
	viewAllApplicants.open();
	
	Ti.API.info('Hello You clicked view applicant ');
}
