import React, { useState, useContext } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
function SideBar() {
  const [extend, setExtend] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    onSent(prompt);
  };
  return (
    <>
      <div className="sidebar min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] p-4 ">
        <div className="top">
          <div
            className="menu block ml-[10px] cursor-pointer  "
            onClick={() => {
              setExtend(!extend);
            }}
          >
            <img
              src={assets.menu_icon}
              className=" items-center w-[20px]"
              alt=""
            />

            <div
              onClick={() => newChat()}
              className={`newChat mt-4 cursor-pointer inline-flex gap-[10px] px-[10px] py-[10px] ${
                extend ? " bg-[#9ec1fd] rounded-[50px] " : ""
              } items-center `}
            >
              <img
                className={`${
                  extend
                    ? " w-[20px]  rounded-[50px]  bg-[#9ec1fd] "
                    : "w-[20px] h-[20px] p-1  bg-[#9ec1fd] rounded-[50%]"
                } `}
                src={assets.plus_icon}
                alt=""
              />
              {extend ? <p>New Chat</p> : null}
            </div>
            {extend ? (
              <div className="recentChat flex flex-col ">
                <p className="recent-title mt-[30px] mb-[20px] font-bold">
                  Recent
                </p>
                {prevPrompt.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => loadPrompt}
                    className=" recent-entry chats"
                  >
                    <img
                      className="w-[20px] "
                      src={assets.message_icon}
                      alt=""
                    />
                    <p>{item.slice(0, 18)}...</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className="bottom  flex-col">
          <div className="bottom-items recent-entry ">
            <img className="w-[20px]" src={assets.question_icon} alt="" />
            {extend ? (
              <p onClick={() => alert("visit google gemini docs for help")}>
                Help
              </p>
            ) : null}
          </div>
          <div className="bottom-items recent-entry">
            <img className="w-[20px]" src={assets.history_icon} alt="" />
            {extend ? <p>History</p> : null}
          </div>
          <div className="bottom-items recent-entry">
            <img className="w-[20px]" src={assets.setting_icon} alt="" />
            {extend ? (
              <p onClick={() => alert("ye kam na karti mittar")}>Setting</p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
