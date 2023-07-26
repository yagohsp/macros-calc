import express from 'express';

import controllers from './controllers';
import validators from './validators';

const router = express.Router();

router
  .route('/')
  .get(controllers.readAll)
  .post(validators.create, controllers.create);

router.route('/:id').get(validators.readOne, controllers.readOne);
router.route('/:id').delete(validators.delete, controllers.readOne);

export { router as alimentos };
