/**
 * Created by krivopustov on 26.02.14.
 */
(function() {
    "use strict";

    app.OperationModel = Backbone.Model.extend({
        defaults: {
            id: "",
            opType: "E",
            opDate: app.toServerDate(new Date())
        }
    });

    app.OperationsCollection = Backbone.Collection.extend({
        model: app.OperationModel,

        entityName: "akk$Operation",
        jpqlQuery: "select o from akk$Operation o order by o.opDate desc",
        maxResults: 100,
        view: "operation-browse"
    });
}());