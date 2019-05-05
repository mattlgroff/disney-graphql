const fetch = require('node-fetch');

const resolvers = {
  Query: {
    attraction: (obj, { park, permalink }) => attractionDetail(park, permalink),
    parkAttractions: (obj, { name }) => parkAttractions(name),
  },
  AttractionListItem: {
    detail: ({ park, permalink }) => attractionDetail(park, permalink),
  },
  AttractionDetail: {
    otherParkAttractions: ({ park }) => parkAttractions(park),
  },
  ParkName: {
    animalKingdom: 'animal-kingdom',
    epcot: 'epcot',
    hollywoodStudios: 'hollywood-studios',
    magicKingdom: 'magic-kingdom',
  },
};

const attractionDetail = (park, attraction) =>
  fetch(`https://touringplans.com/${park}/attractions/${attraction}.json`)
    .then(res => res.json())
    .then(attraction => {
      return {
        ...attraction,
        park,
      };
    });

const parkAttractions = parkName =>
  fetch(`https://touringplans.com/${parkName}/attractions.json`)
    .then(res => res.json())
    .then(attractions =>
      attractions.map(attraction => {
        return { ...attraction, park: parkName };
      }),
    );

module.exports = resolvers;
