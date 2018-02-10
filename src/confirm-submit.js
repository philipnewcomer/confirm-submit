'use strict'

const selectors = {
  'a[data-confirm-submit]': 'click',
  'form[data-confirm-submit]': 'submit'
};

jQuery(document).ready(function($) {
  $.each(selectors, function(selector, eventName) {
    $(selector).on(eventName, handleAction);
  });

  function handleAction(event) {
    const message = $(this).data('confirmSubmit');
    if (!window.confirm(message)) {
      event.preventDefault();
    }
  }
});
