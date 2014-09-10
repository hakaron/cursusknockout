var viewModel = {
    fruitsoorten: [{ naam: "Aalbessen", calorie: 38 },
                   { naam: "Aardbeien", calorie: 36 },
                   { naam: "Abrikozen", calorie: 60 },
                   { naam: "Ananas", calorie: 58 }],
    gekozenFruit: ko.observable(),
    detail: function (fruit) {
        viewModel.gekozenFruit(fruit);
    }
};
ko.applyBindings(viewModel);