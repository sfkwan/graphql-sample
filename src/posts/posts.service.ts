import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  create(createPostInput: CreatePostInput) {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number): Post[] {
    return [
      { id, title: 'How to develop graphql', votes: 10 },
      { id: 12, title: 'How to develop nestjs', votes: 20 },
    ];
  }

  update(id: number, updatePostInput: UpdatePostInput): Post {
    return { id, title: 'How to develop graphql', votes: 10 };
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
