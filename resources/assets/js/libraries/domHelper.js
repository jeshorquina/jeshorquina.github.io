(function (DomHelper) {

  DomHelper.AddClass = function (element, className) {

    element = mutateEl(element);
    if (!element.classList.contains(className)) {
      element.classList.add(className);
    }
  }

  DomHelper.RemoveClass = function (element, className) {

    element = mutateEl(element);
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  }

  DomHelper.HasClass = function (element, className) {

    element = mutateEl(element);
    return element.classList.contains(className);
  }

  DomHelper.ClearContent = function (element) {

    element = mutateEl(element);
    element.innerHTML = "";
  }

  DomHelper.InsertContent = function (element, value) {

    element = mutateEl(element);
    DomHelper.ClearContent(element);
    if (isString(value)) {
      appendHTML(element, value);
    }
    else {
      appendChild(element, value);
    }
  }

  DomHelper.AppendContent = function (element, value) {

    element = mutateEl(element);
    if (isString(value)) {
      appendHTML(element, value);
    }
    else {
      appendChild(element, value);
    }
  }

  DomHelper.InputValue = function (element, value) {

    element = mutateEl(element);
    element.value = value;
  }

  DomHelper.CreateElement = function (element, attributes, innerHTML) {

    var el = document.createElement(element);

    if (typeof attributes != "undefined") {
      Object.keys(attributes).forEach(function (keys) {
        el.setAttribute(keys, attributes[keys]);
      });
    }

    if (typeof innerHTML != "undefined") {
      if (Array.isArray(innerHTML)) {
        DomHelper.ClearContent(el)
        innerHTML.forEach(function (value) {
          DomHelper.AppendContent(el, value);
        })
      }
      else {
        DomHelper.InsertContent(el, innerHTML);
      }
    }

    return el;
  }

  DomHelper.RemoveElement = function (element) {

    element = mutateEl(element);
    element.outerHTML = "";
  }

  function appendHTML(element, addition) {

    element = mutateEl(element);
    element.innerHTML = element.innerHTML + addition;
  }

  function appendChild(element, addition) {

    element = mutateEl(element);
    element.appendChild(addition);
  }

  function mutateEl(element) {
    return (typeof element == 'string') ? document.getElementById(element) : element;
  }

  function isString(variable) {
    return typeof variable == 'string';
  }

})(this.DomHelper = (this.DomHelper == undefined) ? {} : this.DomHelper);
