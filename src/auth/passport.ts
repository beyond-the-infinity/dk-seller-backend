import bcrypt from 'bcryptjs';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import configuration from '../configs/configuration';
import { UserRepository } from './entities/user.entity';

passport.use(
  new LocalStrategy(
    { usernameField: 'phone' },
    async (phone, password, done) => {
      try {
        const user = await UserRepository.findOne({ where: { phone } });
        if (!user) {
          return done(null, false, { message: 'Incorrect email or password' });
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          return done(null, false, { message: 'Incorrect email or password' });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configuration.jwtSecret,
    },
    async (jwtPayload, done) => {
      try {
        const user = await UserRepository.findOneBy({ id: jwtPayload.id });
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    },
  ),
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await UserRepository.findOneBy({ id });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
