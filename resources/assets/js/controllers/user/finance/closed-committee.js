(function (FinanceCommitteeOperations) {

  var body = document.getElementsByTagName("body")[0],
    source = body.getAttribute("data-source");

  var controllerCallback = function () {

    Loader.RemoveLoadingScreen();
  }

  FinanceCommitteeOperations.RenderFinancePage(source, controllerCallback);

})(FinanceCommitteeOperations);