const Profession = require('../models/Profession');
const Professional = require('../models/Professional');

module.exports = {

  async findAll(req, res) {
    let professionals;
    if (req.query.name) {
      professionals = await Professional.findAll({
        include: Profession,
        where: {
          name: req.query.name
        }
      });
    }       
    else  {
      professionals = await Professional.findAll({ include: Profession});
    }
    return res.json(professionals);
  },

  async findById(req, res) {
    const { id } = req.params;
    const professional = await Professional.findByPk(id, {include: Profession});
    
    if (!professional) {
      return res.status(400).json({ error: 'Professional not found' });
    }
    return res.json(professional);
  },

  async store(req, res) {
    console.log(req.body);
    const { name, email, phone, status, profession_id } = req.body;
    
    const id = profession_id;
    const profession = await Profession.findByPk(id);
    if (!profession)
      return res.status(400).json({ error: 'Profession not found' });

    const professional = await Professional.create({ profession_id: profession_id, name: name, email: email, phone: phone, status: status });
    return res.json(professional);
  },


  async update (req, res) {
    const { name, email, phone, status, profession_id } = req.body;
    const { id } = req.params;

    const profession = await Profession.findAll({
      where: {
        id: profession_id
      }
    });
    if (!profession)
      return res.status(400).json({ error: 'Profession not found' });

    const professional = await Professional.findByPk(id);
    if (!professional) {
      return res.status(400).json({ error: 'Professional not found' });
    }

    const updatedProfessional = await Professional.update({ profession_id: profession_id, name: name, email: email, phone: phone, status: status }, {
      where: {
        id: id
      }
    });
    return res.json(updatedProfessional);
  },

  async delete(req, res) {
    const { id } = req.params;

    const professional = await Professional.findByPk(id);
    if (!professional) {
      return res.status(400).json({ error: 'Professional not found' });
    }

    await Professional.destroy({
      where: {
        id: id
      }
    });
    return res.status(200).json({ success: 'Profissional removido com sucesso!'});
  },

};