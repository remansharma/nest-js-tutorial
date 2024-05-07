import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../modules/users/user.entity';
import { Post } from 'src/modules/posts/post.entity';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development;
           break;
        case TEST:
           config = databaseConfig.test;
           break;
        case PRODUCTION:
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
        }
        console.log(config);

        // https://sequelize.org/docs/v6/other-topics/dialect-specific-things/


        const sequelize = new Sequelize(config);
      //   sequelize.authenticate().then(() => {
      //    console.log('Connection has been established successfully.');
      // }).catch((error) => {
      //    console.error('Unable to connect to the database: ', error);
      // });
        sequelize.addModels([User, Post]);
        await sequelize.sync();
        return sequelize;
    },
}];