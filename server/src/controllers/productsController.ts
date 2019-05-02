import { Request, Response } from 'express';
import pool from '../database'

class ProductsController {

  public index (req: Request, res: Response) {
    // res.send('Products');
    pool.query('DESCRIBE products');
    res.json('products');
  }

}

const productsController = new ProductsController();
export default productsController;
