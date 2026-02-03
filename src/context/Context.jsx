import { createContext, useState } from "react";
import runChat from "../config/gemini.js";
import { marked } from "marked";
export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState("");
  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };
  const delaypara = (idx, nextword) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextword);
    }, 75 * idx);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setPrevPrompt((prev) => [...prev, input]);
    const responseText = await runChat(input);
    const formattedResponse = marked(responseText);
    const textArr = formattedResponse.split(" ");
    for (let i = 0; i < textArr.length; i++) {
      delaypara(i, textArr[i] + " ");
    }

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
