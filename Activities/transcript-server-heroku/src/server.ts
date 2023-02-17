import Express from 'express';
import * as http from 'http';
import CORS from 'cors';
import { AddressInfo } from 'net';
import swaggerUi from 'swagger-ui-express';
import { ValidateError } from 'tsoa';
import fs from 'fs/promises';
import { RegisterRoutes } from '../generated/routes';
import { initialize } from './transcriptManager';

export class InvalidParametersError extends Error {
  public message: string;

  public constructor(message: string) {
    super(message);
    this.message = message;
  }
}


// Create the server instances
const app = Express();
app.use(CORS());
const server = http.createServer(app);

initialize();

// Set the default content-type to JSON
app.use(Express.json());

// Add a /docs endpoint that will display swagger auto-generated documentation
app.use('/docs', swaggerUi.serve, async (_req: Express.Request, res: Express.Response) => {
  const swaggerSpec = await fs.readFile('generated/swagger.json', 'utf-8');
  return res.send(swaggerUi.generateHTML(JSON.parse(swaggerSpec)));
});

// Register the TownsController routes with the express server
RegisterRoutes(app);

// Add a middleware for Express to handle errors
app.use(
  (
    err: unknown,
    _req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction,
  ): Express.Response | void => {
    if (err instanceof ValidateError) {
      return res.status(422).json({
        message: 'Validation Failed',
        details: err?.fields,
      });
    }
    if(err instanceof InvalidParametersError){
      return res.status(400).json({
        message: 'Invalid parameters',
        details: err?.message
      })
    }
    if (err instanceof Error) {
      console.trace(err);
      return res.status(500).json({
        message: 'Internal Server Error',
      });
    }

    return next();
  },
);

// Start the configured server, defaulting to port 8081 if $PORT is not set
server.listen(process.env.PORT || 8081, () => {
  const address = server.address() as AddressInfo;
  // eslint-disable-next-line no-console
  console.log(`Listening on ${address.port}`);
});
