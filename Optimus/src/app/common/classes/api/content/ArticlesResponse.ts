import { IArticlesResponse } from './IArticlesResponse';
import { Article } from '../../content/Article';
import { ArticleApi } from './ArticleApi';

export class ArticleResponse implements IArticlesResponse {
  data: ArticleApi[];
}