import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { IArticle, compunet, ICardArticle } from "./types/types";
import articleIMG1 from "../assets/image-retro-pcs.jpg";
import articleIMG2 from "../assets/image-top-laptops.jpg";
import articleIMG3 from "../assets/image-gaming-growth.jpg";
interface ContextState {
  state: compunet;
  updateState: Dispatch<SetStateAction<compunet>>;
}

interface ContextValue extends ContextState {}

const article: IArticle = {
  title: "The Bright Future of Web 3.0?",
  p: " We Dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people but is it really forfilling its promise?",
  isNew: false,
};
const article1: IArticle = {
  title: "Hydrogen Vs Electric Cars",
  p: "Will Hydrogen-fuled Cars ever catch up to EVs?",
  isNew: true,
};
const article2: IArticle = {
  title: "The Downside of AI Artistry",
  p: "What are the possible adverse effects of on-demand AI image generation",
  isNew: false,
};
const article3: IArticle = {
  title: "is Vc Funding Drying Up?",
  p: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  isNew: false,
};
const cardArticle1: ICardArticle = {
  src: articleIMG1,
  alt: "",
  id: "01",
  title: "Reviving Retro PCs",
  p: "are given modern upgrades",
};
const cardArticle2: ICardArticle = {
  src: articleIMG2,
  alt: "",
  id: "02",
  title: "Top 10 Laptops of 2022",
  p: "Our best picks for various needs and budgets.",
};
const cardArticle3: ICardArticle = {
  src: articleIMG3,
  alt: "",
  id: "03",
  title: "The Growth of Gaming",
  p: "How the pandemic has sparked fresh opportunities.",
};
const dummyProject: compunet = {
  Hero: article,
  lastestArticles: [article1, article2, article3],
  articles: [cardArticle1, cardArticle2, cardArticle3],
};

const initialState: ContextState = {
  state: dummyProject,
  updateState: () => {},
};

const GameContext = createContext<ContextValue | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, updateState] = useState(initialState.state);

  return (
    <GameContext.Provider
      value={{
        state,
        updateState,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
}
