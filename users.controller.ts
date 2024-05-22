import { Body, Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('users')
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

   @Get() // GET /users
   findAll(){
    return []
   }
   @Get('interns') // GET /users/interns
   findAllInterns(){
    return []
   }
   @Get(':id') // GET /users/:id
   findOne(@Param('id') id : string){
        return {id}
    }
    @Post() // POST /users
    create(@Body() user : {}){
        return user
    }
}


