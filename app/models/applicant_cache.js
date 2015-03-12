exports.definition = {
	config: {
		columns: {
		    "first_name": "text",
		    "last_name": "text",
		    "phone": "text",
		    "email": "text",
		    "grad_term": "text",
		    "grad_year": "int",
		    "major": "text",
		    "visited":"datetime",
		    "synced": "boolean"
		},
		adapter: {
			type: "sql",
			collection_name: "applicant_cache"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};