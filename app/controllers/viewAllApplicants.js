Alloy.Collections.applicantcache.fetch();
function cleanup() {
    $.destroy();
}
$.viewAllApplicants.open();
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