import { InputType, Field } from '@nestjs/graphql';

@InputType({ description: 'Input for create author' })
export class CreateAuthorInput {
  @Field({ nullable: true, description: 'Author first name' })
  firstName?: string;
  @Field({ nullable: true, description: 'Author last name' })
  lastName?: string;
}
