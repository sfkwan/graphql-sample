import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from '../../posts/entities/post.entity';

@ObjectType()
export class Author {
  @Field((type) => Int, { description: 'Author ID' })
  id: number;
  @Field({ nullable: true, description: 'Author first name' })
  firstName?: string;
  @Field({ nullable: true, description: 'Author last name' })
  lastName?: string;
  @Field((type) => [Post])
  posts: [Post];
}
