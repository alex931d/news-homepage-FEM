interface CardArticleProps {
  srcIMG: string | null;
  altIMG: string | null;
  h2: string;
  title: string;
  p: string | null;
}

function CardArticle({ srcIMG, altIMG, h2, title, p }: CardArticleProps) {
  return (
    <>
      <article>
        <img src={srcIMG || ""} alt={altIMG || ""} />
        <div className="card-container">
          <h2>{h2}</h2>
          <h3>{title}</h3>
          <p>
            {p}
            <br />
          </p>
        </div>
      </article>
    </>
  );
}
export default CardArticle;
