import express           from 'express';
import citizenController from '../controllers/citizen.controller';

var router = express.Router();

/* Route: [/api/citizen] */

router.route('/').get(citizenController.check);
router.route('/').post(citizenController.postCitizenById);
router.route('/postGenerateNewPassword').post(citizenController.postGenerateNewPassword);
router.route('/generateUserAccount').post(citizenController.postGenerateUserAccount);
router.route('/total').get(citizenController.getTotalCitizen);

export default router;