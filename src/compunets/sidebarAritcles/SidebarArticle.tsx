import { forwardRef } from "react";
interface SidebarArticleProps {
  title: string;
  p: string;
  isNew: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

const SidebarArticle = forwardRef<HTMLDivElement, SidebarArticleProps>(
  (props, ref) => {
    return (
      <>
        <article ref={ref}>
          {props.isNew && <h1>New</h1>}
          <h2>{props.title}</h2>
          <p>{props.p}</p>
        </article>
      </>
    );
  }
);
export default SidebarArticle;
