exports.definition = {
	config: {
		columns: {
		    "first_name": "text",
		    "last_name": "text",
		    "phone": "text",
		    "email": "text",
		    "grad_term": "text",
		    "grad_year": "INTEGER",
		    "major": "text",
		    "visited":"text",
		    "synced": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "applicantcache"
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