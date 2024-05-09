interface compunet {
  Hero: IArticle;
  lastestArticles: IArticle[];
  articles: ICardArticle[] | null;
}

interface IArticle {
  title: string;
  p: string;
  isNew: boolean;
}
interface ICardArticle {
  src: string | null;
  alt: string | null;
  id: string;
  title: string;
  p: string;
}
export type { compunet, IArticle, ICardArticle };
