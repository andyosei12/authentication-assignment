const express = require('express');
const {
  getItem,
  createItem,
  getAllItems,
  updateItem,
  deleteItem,
} = require('../controllers/inventory');
const { checkIsNormalUser, checkIsAdmin } = require('../middlewares/user');

const router = express.Router();

router.get('/', checkIsNormalUser, getAllItems);
router.post('/', checkIsAdmin, createItem);
router.get('/:id', checkIsNormalUser, getItem);
router.patch('/:id', checkIsAdmin, updateItem);
router.delete('/:id', checkIsAdmin, deleteItem);

router.get('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
  });
});

module.exports = router;
