(function(window, $, Backbone, CarToolController, CarToolRouter) {

    $(function() {

        new CarToolController($('main'), new CarToolRouter());
        Backbone.history.start({ pushState: false });

    });

    // $(document).ready(function() {
    

    // });

})(window, $, Backbone, CarToolController, CarToolRouter);