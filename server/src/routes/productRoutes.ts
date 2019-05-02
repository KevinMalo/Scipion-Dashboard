import { Router } from 'express';
import productsController from '../controllers/productsController';

class ProductRoutes {

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', productsController.index);
  }

}

const productRoutes = new ProductRoutes();
export default productRoutes.router;
