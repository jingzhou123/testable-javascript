//test this
function inputChangeFn(val) {
  //dosomthing with val
}

$('#input').on('change', function (e) {
  var val = e.target.value;
  inputChangeFn(val);
});
