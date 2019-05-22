const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.tvid = !isEmpty(data.tvid) ? data.tvid : '';
  data.tvname = !isEmpty(data.tvname) ? data.tvname : '';
  data.showtype = !isEmpty(data.showtype) ? data.showtype : '';
  data.place = !isEmpty(data.place) ? data.place : '';
  data.link = !isEmpty(data.link) ? data.link : '';

  if (Validator.isEmpty(data.tvid)) {
    errors.tvid = 'TVID field is required';
  }
  if (Validator.isEmpty(data.tvname)) {
    errors.tvname = 'TVName field is required';
  }
  if (Validator.isEmpty(data.showtype)) {
    errors.showtype = 'ShowType field is required';
  }
  if (Validator.isEmpty(data.place)) {
    errors.place = 'Place field is required';
  }
  if (Validator.isEmpty(data.link)) {
    errors.link = 'Link field is required';
  } else if (!Validator.isURL(data.link)) {
    errors.link = 'Link field is not valid';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
