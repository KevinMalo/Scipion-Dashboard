import express, { Application } from 'express';

import indexRoutes from './routes/indexRoutes';
import productRoutes from './routes/productRoutes';

class Server {

  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set('port', process.env.PORT || 3000);
  }

  routes(): void {
    this.app.use( '/', indexRoutes );
    this.app.use( '/api/products', productRoutes );
  }

  start(): void {
    this.app.listen( this.app.get('port'), () => {
      console.log(`Server on port ${this.app.get('port')} `);
    } );
  }

}

const server = new Server();
server.start();
