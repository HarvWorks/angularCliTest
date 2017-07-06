var CareType = require('../models/doctor.js');

function CareTypesController(){
	this.index = function(req, res) {
		CareType.get_careType(function(status) {
			var index_status = status;
			if(index_status.error) {
				res.json(index_status);
			}
			else{
				res.json(index_status.data);
			}
		});
	};

	this.show = function(req, res) {
		CareType.get_careType(req.params.id, function(status) {
			var show_status = status;
			if(show_status.error) {
				res.json(show_status);
			}
			else{
				res.json(show_status.data);
			}
		});
	};

	this.create = function(req, res){
		CareType.create_careType(req.body, function(status) {
			var create_status = status;
			if(create_status.error) {
				res.json(create_status);
			}
			else{
				res.json(create_status);
			}
		});
	};

	this.update = function(req, res) {
		CareType.update_careType(req.params.id, req.body, function(status) {
			var update_status = status;
			if(update_status.error) {
				res.json(update_status);
			}
			else{
				res.json(update_status.data);
			}
		});
	};

	this.delete = function(req, res){
		CareType.delete_careType(req.params.id, function(status) {
			var delete_status = status;
			if(delete_status.error) {
				res.json(delete_status.errors);
			}
			else{
				res.json(delete_status.data);
			}
		});
	};
}

module.exports = new CareTypesController();
