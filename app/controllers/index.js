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
	
});
console.log(myApplicants);
myApplicants.add(applicant);
applicant.save();
var myThing= Alloy.Collections.thing;
var thingy=Alloy.createModel('thing',{stuff:'Fruit',color:"green"});
myThing.add(thingy);
thingy.save();
$.index.open();

function addApplicant(event){
	Ti.API.info('Hello You clicked add applicant ');
}

function gotoViewApplicants(event){
	Ti.API.info('Hello You clicked view applicant ');
}
