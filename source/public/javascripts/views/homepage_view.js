ENDPOINT.Views.HomeView = Backbone.View.extend({
	events: {
		"click #search": "clickSearch"
	},

	initialize: function(){
	},

	template: _.template($('#home-template').html()),

	render: function() {
		this.$el.html(this.template());
		return this;
	},

	clickSearch: function() {
		ENDPOINT.router.navigate("searchResults", true)
	}
})