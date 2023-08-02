/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Conduit API
 * Conduit API documentation
 * OpenAPI spec version: 1.0.0
 */
/**
 * The numbers of items to return.
 */
export type LimitParamParameter = number;

/**
 * The number of items to skip before starting to collect the result set.
 */
export type OffsetParamParameter = number;

export type GetArticlesParams = {
/**
 * Filter by tag
 */
tag?: string;
/**
 * Filter by author (username)
 */
author?: string;
/**
 * Filter by favorites of a user (username)
 */
favorited?: string;
/**
 * The number of items to skip before starting to collect the result set.
 */
offset?: OffsetParamParameter;
/**
 * The numbers of items to return.
 */
limit?: LimitParamParameter;
};

export type GetArticlesFeedParams = {
/**
 * The number of items to skip before starting to collect the result set.
 */
offset?: OffsetParamParameter;
/**
 * The numbers of items to return.
 */
limit?: LimitParamParameter;
};

export type NewCommentRequestBody = {
  comment: NewComment;
};

export type UpdateArticleRequestBody = {
  article: UpdateArticle;
};

export type NewArticleRequestBody = {
  article: NewArticle;
};

export type UpdateUserRequestBody = {
  user: UpdateUser;
};

export type NewUserRequestBody = {
  user: NewUser;
};

export type LoginUserRequestBody = {
  user: LoginUser;
};

/**
 * Unauthorized
 */
export type UnauthorizedResponse = unknown;

/**
 * No content
 */
export type EmptyOkResponseResponse = unknown;

export type UserResponseResponse = {
  user: User;
};

export type ProfileResponseResponse = {
  profile: Profile;
};

export type MultipleArticlesResponseResponse = {
  articles: Article[];
  articlesCount: number;
};

export type SingleArticleResponseResponse = {
  article: Article;
};

export type MultipleCommentsResponseResponse = {
  comments: Comment[];
};

export type SingleCommentResponseResponse = {
  comment: Comment;
};

export type TagsResponseResponse = {
  tags: string[];
};

export type GenericErrorModelErrors = {
  body: string[];
};

export interface GenericErrorModel {
  errors: GenericErrorModelErrors;
}

/**
 * Unexpected error
 */
export type GenericErrorResponse = GenericErrorModel;

export interface NewComment {
  body: string;
}

export interface UpdateArticle {
  title?: string;
  description?: string;
  body?: string;
}

export interface NewArticle {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
}

export interface Profile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Profile;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}

export interface UpdateUser {
  email?: string;
  password?: string;
  username?: string;
  bio?: string;
  image?: string;
}

export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

export interface NewUser {
  username: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

