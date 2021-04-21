const Profession = require('../models/Profession');

module.exports = {
  async findAll(req, res) {
    const professions = await Profession.findAll();
    return res.json(professions);
  },

  async findById(req, res) {
    const { id } = req.params;
    const profession = await Profession.findByPk(id);
    if (!profession)
        return res.status(400).json({ error: 'Profession not found' });

    return res.json(profession);
  },

  async store(req, res) {    
    const { name, status } = req.body;
    const profession = await Profession.create({ name, status });
    return res.json(profession);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, status } = req.body;
    console.log(1)
    const profession = await Profession.findByPk(id);
    console.log(profession)
    if (!profession)
        return res.status(400).json({ error: 'Profession not found' });

    const updatedProfession = await Profession.update({ name, status }, {
        where: {
            id: id
        } 
    });
    return res.json(updatedProfession);
  }

  
};