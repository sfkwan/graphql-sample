import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field((type) => Int, { description: 'Post Id' })
  id: number;

  @Field({ description: 'Post title' })
  title: string;

  @Field((type) => Int, {
    nullable: true,
    description: 'Number of votes for the posts',
  })
  votes?: number;
}
