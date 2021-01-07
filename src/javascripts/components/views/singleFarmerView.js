import farmerData from '../../helpers/data/farmerData';
import cowData from '../../helpers/data/cowData';
// eslint-disable-next-line import/no-cycle
import cowCard from '../cards/cowCard';

const singleFarmerView = (farmerId) => {
  $('#app').empty();
  farmerData.getSingleFarmer(farmerId)
    .then((farmer) => {
      $('#app').append(`
      <div class='d-flex flex-column justify-content-center'>
      <h1>${farmer.name}'s Cows</h1>
      <div class='flex-row' id='farmer-cows'></div>
      <div>
      `);
      cowData.getFarmersCows(farmer.uid)
        .then((resp) => {
          resp.forEach((r) => {
            $('#farmer-cows').append(cowCard.cowMaker(r));
          });
        });
    });
};

export default { singleFarmerView };
