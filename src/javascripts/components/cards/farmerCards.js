import farmerData from '../../helpers/data/farmerData';

const farmerMaker = (farmerObject) => {
  const domString = `<div class="card farmer" style="width: 18rem;" id=${farmerObject.uid}>
                      <img class="card-img-top" src="${farmerObject.image}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">Farmer ${farmerObject.name}</h5>
                        <a href="#" class="btn btn-primary" id=${farmerObject.uid}>See ${farmerObject.name}'s Cows</a>
                        <a href="#" id="${farmerObject.firebaseKey}" class="btn btn-danger delete-farmer">Delete Cow</a>
                      </div>
                    </div>`;
  $('body').on('click', '.delete-farmer', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    farmerData.deleteFarmer(firebaseKey);
  });
  return domString;
};

export default { farmerMaker };
