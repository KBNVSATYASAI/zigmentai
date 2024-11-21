/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
*/
import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Handler } from 'aws-lambda';
import { AppModule } from './app.module';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init(); // Initialize the application
  const expressApp = app.getHttpAdapter().getInstance(); // Get Express instance
  server = serverlessExpress({ app: expressApp }); // Use serverless-express
}

// Bootstrap the application
bootstrap();

// Export the handler for serverless execution
export const handler: Handler = async (event, context) => {
  if (!server) {
    await bootstrap();
  }
  return server(event, context);
};
