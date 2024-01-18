import { InputType, Field } from '@nestjs/graphql';

@InputType({ description: 'UpVote input' })
export class UpVotePostInput {
  @Field()
  postId: number;
}
