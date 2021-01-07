import farmerData from '../../helpers/data/farmerData';
// eslint-disable-next-line import/no-cycle
import singleFarmerView from '../views/singleFarmerView';

const farmerMaker = (farmerObject) => {
  const domString = `<div class="card farmer" style="width: 18rem;" id=${farmerObject.uid}>
                      <img class="card-img-top" src="${farmerObject.image}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">Farmer ${farmerObject.name}</h5>
                        <a href="#" class="btn btn-primary see-farmer-cows" id=${farmerObject.uid}>See ${farmerObject.name}'s Cows</a>
                        <a href="#" id="${farmerObject.firebaseKey}" class="btn btn-danger delete-farmer">Delete Farmer</a>
                      </div>
                    </div>`;
  $('body').on('click', '.delete-farmer', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    farmerData.deleteFarmer(firebaseKey);
  });
  $('body').on('click', '.see-farmer-cows', (e) => {
    e.stopImmediatePropagation();
    const farmerId = e.currentTarget.id;
    singleFarmerView.singleFarmerView(farmerId);
  });
  return domString;
};

export default { farmerMaker };
