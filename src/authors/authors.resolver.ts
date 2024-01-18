import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from './entities/author.entity';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { PostsService } from '../posts/posts.service';
import { Post } from '../posts/entities/post.entity';
import { UpVotePostInput } from './dto/upVotePost.input';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Mutation(() => Author)
  createAuthor(
    @Args('createAuthorInput') createAuthorInput: CreateAuthorInput,
  ) {
    return this.authorsService.create(createAuthorInput);
  }

  @Query(() => [Author], {
    name: 'authors',
    description: 'returns all authors',
  })
  findAll() {
    return this.authorsService.findAll();
  }

  @Query(() => Author, {
    name: 'author',
    description: 'return author with specific ID',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOne(id);
  }

  @Mutation(() => Author)
  updateAuthor(
    @Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput,
  ) {
    return this.authorsService.update(updateAuthorInput.id, updateAuthorInput);
  }

  @Mutation(() => Author)
  removeAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.remove(id);
  }

  @ResolveField('posts', (returns) => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findOne(id);
  }

  @Mutation((returns) => Post)
  async upvotePost(@Args('upvotePostData') upvotePostData: UpVotePostInput) {
    return this.postsService.update(upvotePostData.postId, {
      id: upvotePostData.postId,
      title: 'mutation',
      votes: 100,
    });
  }
}
