import CardArticle from "../CardArticle/CardArticle";
import bannerIMG from "../../assets/image-web-3-desktop.jpg";
import { useGameContext } from "../context";
import SidebarArticle from "../sidebarAritcles/SidebarArticle";
import { IArticle, ICardArticle } from "../types/types";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
gsap.registerPlugin(ScrollTrigger);
function Body() {
  const mainRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    gsap.set(cardsRef.current, {
      autoAlpha: 0,
      transformOrigin: "50% 50%",
      x: 30,
    });

    const TL = gsap.timeline({
      defaults: {
        stagger: {
          amount: 0.7,
        },
        autoAlpha: 1,
        opacity: 0.6,
        x: 10,
      },
    });

    TL.to(cardsRef.current, {
      opacity: 1,
      x: 0,
    });
  }, []);
  const { state } = useGameContext();
  return (
    <>
      <main className="center">
        <div className="top-section-container" ref={mainRef}>
          <div className="left-container">
            <img className="banner" src={bannerIMG} alt="banner" />
            <div className="wrapper">
              <div className="headerContainer">
                <a href="#">{state.Hero.title}</a>
              </div>
              <article className="btn-article">
                <p>{state.Hero.p}</p>
                <a className="btn" href="#">
                  read more
                </a>
              </article>
            </div>
          </div>
          <div className="right-container">
            {state.lastestArticles.map((article: IArticle, index: number) => (
              <SidebarArticle
                key={index}
                ref={(el) => el && (cardsRef.current[index] = el)}
                title={article.title}
                p={article.p}
                isNew={article.isNew}
              />
            ))}
          </div>
        </div>
        <div className="bottom-container">
          {state.articles ? (
            <>
              {state.articles.map((article: ICardArticle, index: number) => (
                <CardArticle
                  key={index}
                  srcIMG={article.src}
                  altIMG={article.alt}
                  h2={article.id}
                  title={article.title}
                  p={article.p}
                />
              ))}
            </>
          ) : (
            <>
              <p>no articles</p>
            </>
          )}
        </div>
      </main>
    </>
  );
}
export default Body;
