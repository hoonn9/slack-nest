import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import passport from 'passport';
import session from 'express-session';

// e2e test 는 test db를 만들어서 한다.
// NODE_ENV가 test가 됨
describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.use(
      session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.SECRET,
        cookie: {
          httpOnly: true,
        },
      }),
    );
    app.use(passport.initialize());
    app.use(passport.session());

    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/users/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/api/users/login')
      .send({
        email: 'user@gmail.com',
        password: '1234',
      })
      .expect(201);
  });
  afterAll(async () => {
    await app.close();
  });
});
