ENDPOINT.Models.SearchResult = Backbone.Model.extend({

})


ENDPOINT.Models.Search = Backbone.Model.extend({
  initialize: function(opts){
    this.set({input: opts.input})
  },
  url: '/search'
})