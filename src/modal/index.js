var modal, model, eventEmitter, openModalFn;

model = {
  isOpen: false
};

//just an example
eventEmitter = (function() {
  return $(Object.create(null));
}());

//test this
function clickFn() {
  model.isOpen = true;
  eventEmitter.trigger('open.modal', {
    data: 'any data you want pass'
  });
}

function openModal() {
  $('#modal').modal('show') ;
}

//this is an DOM related function
openModalFn = (function() {
  var created;

  function fn(e, bundle) {
    openModal();
    if (!created) {
      $('#modal').on('hide.bs.modal', closeModalFn);
      created = true;
    }
  }

  return fn;
}());

//test this
function closeModalFn(e, modal) {
  model.isOpen = false;
  eventEmitter.trigger('close.modal');
}

function dosomthing() {

}

eventEmitter.on('open.modal', openModalFn);
eventEmitter.on('close.modal', dosomthing);

$('#button').click(clickFn);
