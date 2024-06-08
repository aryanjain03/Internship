import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { get } from 'http';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// we are getting something back to prove that our routes are correct   

@Controller('users')
export class UsersController {

    constructor(private readonly usersService : UsersService) {}

    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

   @Get() // GET /users or /users?role=value
   findAll(@Query('role') role ?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
    return this.usersService.findAll(role)
   }
//    @Get('interns') // GET /users/interns
//    findAllInterns(){
//     return []
//    }
//    @Get(':id') // GET /users/:id 
//    findOne(@Param('id') id : string){
//        return this.usersService.findOne(+id) // + converts string to number
//     }
   @Get(':id') // GET /users/:id 
   findOne(@Param('id', ParseIntPipe) id : number){
       return this.usersService.findOne(id) // ParseIntPipe is used instead of '+'
    }
    @Post() // POST /users
    create(@Body(ValidationPipe) user : CreateUserDto){
        return this.usersService.create(user)
    }   
    @Patch(':id') // PATCH /users/:id
    update(@Param('id', ParseIntPipe) id : number, @Body(ValidationPipe) userUpdate : UpdateUserDto){
        return this.usersService.update(id, userUpdate)
    }
    @Delete(':id') // DELETE /users/:id
    delete(@Param('id', ParseIntPipe) id : number){
        return this.usersService.delete(id)
    }
}


