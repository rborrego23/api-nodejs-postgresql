const { Category, Product } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const categories = await Category.findAll({ include: Product });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener categorias.', error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, { include: Product });
    if (!category) return res.status(404).json({ message: 'Categoria no encontrada.' });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener categoria.', error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) return res.status(400).json({ message: 'El campo name es requerido.' });

    const newCategory = await Category.create({ name, description });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear categoria.', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: 'Categoria no encontrada.' });

    await category.update(req.body);
    res.status(200).json({ message: 'Categoria actualizada correctamente.', category });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar categoria.', error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: 'Categoria no encontrada.' });

    await category.destroy();
    res.status(200).json({ message: 'Categoria eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar categoria.', error: error.message });
  }
};
