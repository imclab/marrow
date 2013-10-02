;(function(win, doc, app){

  /**
   * Main View
   * You can define here what you want for any pages
   * @type {object}
   */
  app.Views.Main = Backbone.View.extend({

    el: 'html',

    events: {
      'click .org-js-Link--pushstate': 'navigate'
    },

    initialize: function() {
    },

    navigate: function(e) {
      e.preventDefault();
      var currentEl = e.currentTarget
        , $currentEl = $(currentEl)
        , url = $currentEl.attr('href')
        , title = $currentEl.attr('data-title')

      doc.title = title

      app.Routers.Instances.router.navigate(url, true)
    }
  });


})(window, window.document, window.app || (window.app = {}))
