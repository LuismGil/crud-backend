/* 
  List Routes
  /api/list
*/

const { Router } = require('express');
const { validateJWT } = require('../middlewares/validateJwt');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validateFields');

const {
  getPatients,
  addPatient,
  updatePatient,
  deletePatient,
} = require('../controllers/list');

const router = Router();

router.use(validateJWT);

// Obtain patient list
router.get('/', getPatients);

// addPatient a new patient
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('cpf', 'CPF is required').not().isEmpty(),
    validateFields,
  ],

  addPatient
);

// Update patient
router.put('/:id', updatePatient);

// Delete patient

router.delete('/:id', deletePatient);

module.exports = router;
