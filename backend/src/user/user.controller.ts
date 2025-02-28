import { Controller, Post, Body, UseGuards, Get, Req, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
  
@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Post('register')
    async register(@Body() body: {username: string; password: string; firstname:string; lastname: string;
        email: string;  nik: string; npwp: string; gender: string;
    }) {
        return this.userService.createUser(body.username, body.password, body.firstname, body.lastname,
            body.email, body.nik, body.npwp, body.gender
        );
    }

    @Get('getisauthenticated')
    @UseGuards(AuthGuard('jwt'))
    async getIsAuthenticated(@Request() req) {
        return {
            message: 'Authorized User',
            username: req.user.username,
        };
    }
}