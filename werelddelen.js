var viewModel = {
    werelddelen: [{naam: "Azië", oppervlakte: 43608000},
                  {naam: "Afrika", oppervlakte: 30335000},
                  {naam: "Noord-Amerika", oppervlakte: 25349000},
                  {naam: "Zuid-Amerika", oppervlakte: 21069501},
                  {naam: "Antarctica", oppervlakte: 13661000},
                  {naam: "Europa", oppervlakte: 10498000},
                  {naam: "Oceanië", oppervlakte: 8468300}],
    gekozenWerelddeel: ko.observable(),
    detail: function (werelddeel) {
        viewModel.gekozenWerelddeel(werelddeel);
    }
};
ko.applyBindings(viewModel);