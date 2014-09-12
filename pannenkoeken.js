var viewModel = {
    template: ko.observable()
};
Sammy(function () {
    this.get("#ingredients", function () {
        viewModel.template("ingredients");
    });
    this.get("#bereiding", function () {
        viewModel.template("bereiding");
    });
    this.get("", function () {
        viewModel.template("ingredients");
    });
}).run();
var request = new XMLHttpRequest();
request.open("GET", "pannenkoeken.json", true);
request.onload = function () {
    if (this.status === 200) {
        var responseObject = JSON.parse(this.responseText);
        viewModel.ingredients = responseObject.ingredienten;
        viewModel.bereiding = responseObject.bereiding;
        ko.applyBindings(viewModel);
    }
}
request.send();