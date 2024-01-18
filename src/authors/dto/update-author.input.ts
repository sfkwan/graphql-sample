import { CreateAuthorInput } from './create-author.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType({ description: 'Input for update author' })
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @Field(() => Int, { description: 'Author ID' })
  id: number;
}
