import { Application } from 'express';
import milhoja from './api/milhojas';
import user from './api/users';
import customer from './api/customers';

// import upload from './api/upload';


function routes(app:Application) {
  app.use('/api/customer', customer);
  app.use('/api/milhojas',milhoja);
  app.use('/api/user', user);

}

export default routes;
