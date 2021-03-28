const express = require('express');
const {
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcamps,
  getBootcampsInRadius,
} = require('../controllers/bootcamps');
const { getCourses } = require('../controllers/courses');

// Include other resource router
const courseRouter = require('./courses');

const router = express.Router();

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/').get(getBootcamps).post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/courses').get(getCourses);
router.route('/:bootcampId/courses').get(getCourses);

module.exports = router;
