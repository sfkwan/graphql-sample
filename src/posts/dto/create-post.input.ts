import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field({ description: 'Post title' })
  title: string;

  @Field((type) => Int, {
    nullable: true,
    description: 'Number of votes for the posts',
  })
  votes?: number;
}
