const { Product, Category } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const products = await Product.findAll({ include: Category });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos.', error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, { include: Category });
    if (!product) return res.status(404).json({ message: 'Producto no encontrado.' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener producto.', error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, price, stock, categoryId } = req.body;
    if (!name || price === undefined) {
      return res.status(400).json({ message: 'Los campos name y price son requeridos.' });
    }

    const newProduct = await Product.create({ name, price, stock, categoryId });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear producto.', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado.' });

    await product.update(req.body);
    res.status(200).json({ message: 'Producto actualizado correctamente.', product });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar producto.', error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado.' });

    await product.destroy();
    res.status(200).json({ message: 'Producto eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto.', error: error.message });
  }
};
