(function(window, Backbone, _, carToolActions, Car, Cars, CarTableView, CarFormView) {

    window.CarToolController = function(rootElement, router) {

        var controller = this;

        controller.$el = $(rootElement);

        var removeCurrentViewIfExists = function() {

            if (controller.currentView) {
                controller.stopListening(controller.currentView);
                controller.currentView.remove();
            }

        };

        var showCarTable = function() {

            removeCurrentViewIfExists();

            var cars = new Cars();

            cars.fetch({
                success: function() {

                    controller.currentView = new CarTableView({
                        collection: cars
                    });

                    controller.listenTo(controller.currentView, carToolActions.SHOW_CAR_FORM, showCarForm);
                    controller.listenTo(controller.currentView, carToolActions.DELETE_CAR_ROW, deleteCarRow);

                    controller.$el.empty().append(controller.currentView.render().$el);

                    router.navigate('');
                }
            });
        };

        var showCarForm = function() {

            removeCurrentViewIfExists();

            controller.currentView = new CarFormView();

            controller.listenTo(controller.currentView, carToolActions.SUBMIT_CAR_FORM, submitCarForm);

            controller.$el.empty().append(controller.currentView.render().$el);

            router.navigate('add-car');
        };

        var submitCarForm = function(car) {

            car.save(null, {
                success: function() {
                    showCarTable();
                }
            });

        };

        var deleteCarRow = function(carId) {

            console.log(carId);

            var car = new Car({ id: carId });

            // write the code to delete a car from the rest service
            // in the success call back function, call the show car table function

        };

        controller.listenTo(router, carToolActions.SHOW_CAR_TABLE, showCarTable);
        
        // write the code for the controller to listen for the show car form
        // event from router
        // when the event fires, run the show car form function
        controller.listenTo(router, carToolActions.SHOW_CAR_FORM, showCarForm);

    };

    _.extend(window.CarToolController.prototype, Backbone.Events);

})(window, Backbone, _, carToolActions, Car, Cars, CarTableView, CarFormView);