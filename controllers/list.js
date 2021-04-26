const { response } = require('express');
const Patient = require('../models/Patient');

const getPatients = async (req, res = response) => {
  const patients = await Patient.find().populate('user', 'name');

  res.json({
    ok: true,
    patients,
  });
};

const addPatient = async (req, res = response) => {
  const patient = new Patient(req.body);

  try {
    patient.user = req.uid;

    const patientSave = await patient.save();

    res.json({
      ok: true,
      patient: patientSave,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contact the administrator',
    });
  }
};

const updatePatient = async (req, res = response) => {
  const patientId = req.params.id;
  const uid = req.uid;

  try {
    const patient = await Patient.findById(patientId);

    if (!patient) {
      res.status(404).json({
        ok: false,
        msg: 'Patient with this id not exists',
      });
    }

    if (patient.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'this user does not have sufficient permissions',
      });
    }

    const newPatient = {
      ...req.body,
      user: uid,
    };

    const patientUpdated = await Patient.findByIdAndUpdate(
      patientId,
      newPatient,
      { new: true }
    );

    res.json({
      ok: true,
      patient: patientUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contact the administrator',
    });
  }
};

const deletePatient = async (req, res = response) => {
  const patientId = req.params.id;
  const uid = req.uid;

  try {
    const patient = await Patient.findById(patientId);

    if (!patient) {
      return res.status(404).json({
        ok: false,
        msg: 'Patient with this id not exists',
      });
    }

    if (patient.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'this user does not have sufficient permissions',
      });
    }

    await Patient.findByIdAndDelete(patientId);

    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contact the administrator',
    });
  }
};

module.exports = {
  getPatients,
  addPatient,
  updatePatient,
  deletePatient,
};
