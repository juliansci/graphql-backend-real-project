const { get } = require("mongoose");

module.exports = {
  generateEntities: (quantity, entityGenerator) => {
    const entities = [];
    for (let i = 0; i < quantity; i++) {
      entities.push(entityGenerator(i));
    }
    return entities;
  },
  getEntitiesId: entities => {
    return entities.map(entity => entity.id);
  }
}