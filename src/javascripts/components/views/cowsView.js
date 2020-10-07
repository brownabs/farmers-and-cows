import cowData from '../../helpers/data/cowData';
import card from '../cards/cowCard';

const cowsView = () => {
  cowData.getAllCows()
    .then((response) => {
      if (response.length) {
        response.forEach((cow) => {
          $('#app').append(card.cowMaker(cow));
        });
      } else {
        $('#app').append('<h2>NO COWS</h2>');
      }
    });
};

export default { cowsView };
