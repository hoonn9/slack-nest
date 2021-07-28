import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exeception.filter';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import FileStore from 'session-file-store';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = app.get(ConfigService).get<number>('PORT') || 3000;

  app.enableCors({
    origin: true,
    credentials: true,
  });

  if (process.env.NODE_ENV === 'production') {
    app.enable('trust proxy');
    app.use(helmet({ contentSecurityPolicy: false }));
  } else {
    // app.use(morgan('dev'));
    // app.use(
    //   cors({
    //     origin: true,
    //     credentials: true,
    //   })
    // );
  }

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());

  app.use(cookieParser());
  const fileStore = FileStore(session);

  const sessionOptions: session.SessionOptions = {
    name: 'connect.sid',
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
    },
  };

  if ((process.env.NODE_ENV = 'production')) {
    sessionOptions.cookie.secure = true;
    sessionOptions.proxy = true;
  }

  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.SECRET,
      cookie: {
        httpOnly: true,
      },
      store: new fileStore(),
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Slack API')
    .setDescription('Slack 개발을 위한 API 문서입니다.')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => {
    console.log('listening on port:', port);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
