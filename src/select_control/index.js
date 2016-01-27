require(['jquery'], function ($) {
  var model = {
    valLast: 'default',
    valNew: undefined
  };

  //mock the model, and test this
  function selectControlChangeFn(val) {
    model.valLast = model.valNew;
    model.valNew = val;
    //dosomthing with these values
  }

  $('#select-control').on('change', function () {
    var val = this.value;
    selectControlChangeFn(val);
  });
});
