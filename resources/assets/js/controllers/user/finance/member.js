(function (FinanceMemberOperations, Loader) {

  var body = document.getElementsByTagName("body")[0],
    source = body.getAttribute("data-source");

  var addLedgerEntryCallback = function (event) {
    event.preventDefault();
    FinanceMemberOperations.AddLedgerEntry(source, this, controllerCallback);
  }

  var controllerCallback = function () {

    document
      .getElementById("add-ledger-entry-form")
      .addEventListener("submit", addLedgerEntryCallback);

    Loader.RemoveLoadingScreen();
  }

  FinanceMemberOperations.RenderFinancePage(source, controllerCallback);

})(FinanceMemberOperations, Loader);