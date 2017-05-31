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

                    console.log(cars);

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

            car.destroy({
                success: function() {
                    showCarTable();
                }
            });

        };

        controller.listenTo(router, carToolActions.SHOW_CAR_TABLE, showCarTable);
        controller.listenTo(router, carToolActions.SHOW_CAR_FORM, showCarForm);

    };

    _.extend(window.CarToolController.prototype, Backbone.Events);

})(window, Backbone, _, carToolActions, Car, Cars, CarTableView, CarFormView);