import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity.js';
import { JwtStrategy } from '../auth/jwt/jwt.strategy.js';
import { Rol } from '../roles/rol.entity.js';
//import { Order } from '../orders/order.entity.js';

@Module({
  // imports: [ TypeOrmModule.forFeature([User, Rol, Order]) ],
  imports: [ TypeOrmModule.forFeature([User, Rol]) ],
  providers: [UsersService, JwtStrategy],
  controllers: [UsersController]
})
export class UsersModule {}
