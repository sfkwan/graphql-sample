import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';

@Injectable()
export class AuthorsService {
  create(createAuthorInput: CreateAuthorInput) {
    return {
      id: 10,
      firstName: createAuthorInput.firstName,
      lastName: createAuthorInput.lastName,
    };
  }

  findAll() {
    return `This action returns all authors`;
  }

  findOne(id: number) {
    return {
      id,
      firstName: 'Preston',
      lastName: 'Kwan',
    };
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return {
      id,
      firstName: updateAuthorInput.firstName,
      lastName: updateAuthorInput.lastName,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
