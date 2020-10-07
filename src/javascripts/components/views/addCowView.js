import form from '../forms/cowForm';

const addCowView = () => {
  $('#app').html('<div id="cow-form">Put Cow Form Here</div>');
  form.cowForm();
};
export default { addCowView };
