(function(window, $, Backbone, CarToolController, CarToolRouter) {

    $(function() {

        new CarToolController($('main'), new CarToolRouter());
        Backbone.history.start({ pushState: false });

    });

})(window, $, Backbone, CarToolController, CarToolRouter);