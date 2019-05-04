import { Request, Response } from 'express';
import pool from '../database'

class ProductsController {

  public async list (req: Request, res: Response): Promise<void> {
    const products = await pool.query('SELECT * FROM products');
    res.json( products );
  }

  public async create(req: Request, res: Response): Promise<void> {
    console.log( req.body );
    await pool.query('INSERT INTO products set ?', [req.body]);
    res.json({ message: 'Producto guardado'});
  }

  public delete(req: Request, res: Response): void {
    res.json('delete product ${req.params.id}');
  }

  public update(req: Request, res: Response): void {
    res.json(`update product ${req.params.id}`);
  }

  public async getOne(req: Request, res: Response): Promise<any> {
    const {id} = req.params;
    const product: Object[] = await pool.query('SELECT * FROM products where sku = ?', [id]);
    if (product.length > 0) {
      return res.json(product[0]);
    }
    res.status(404).json({message:'Este producto no existe'})
  }

}

const productsController = new ProductsController();
export default productsController;
