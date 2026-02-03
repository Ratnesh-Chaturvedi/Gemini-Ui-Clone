import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Card from "../Cards/Card";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./Main.css";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <>
      <div className="main flex-1 min-h-[100vh] relative pb-[15vh] ">
        <div className="nav flex items-center justify-between text-2xl p-4">
          <p>Gemini</p>
          <img
            src={assets.user_icon}
            alt=""
            className="w-[40px] rounded-[50%]"
          />
        </div>

        {!showResult ? (
          <div className="main-container h-full relative  m-auto max-w-[800px]">
            <div className="greet mb-10">
              <p className="text-6xl text-[#f55454]">
                <span>Hello,User</span>
              </p>
              <p className="text-6xl  text-green-600 bg-gradient-to-r from-sky-500/20 to-sky-500/75">
                Welcome to Sasta Gemini?😁{" "}
              </p>
            </div>
            <div className="cards flex items-center justify-between  ">
              <Card
                title="Beautyful place to visit"
                src={assets.compass_icon}
              />
              <Card
                title="Suggest Best Football for beginner"
                src={assets.bulb_icon}
              />
              <Card title="chat with me" src={assets.message_icon} />
              <Card title="Improve the code structure" src={assets.code_icon} />
            </div>
          </div>
        ) : (
          <div className=" result p-[5%] max-h-[70vh] overflow-y-scroll ">
            <div className="mt-2 flex items-center gap-5">
              <img
                className="rounded-full w-[40px]"
                src={assets.user_icon}
                alt=""
              />
              <h3 className="text-[16px]">{recentPrompt}</h3>
            </div>
            <div className="flex items-start gap-[20px] mt-3 ">
              <img
                className="rounded-full w-[40px]"
                src={assets.gemini_icon}
                alt=""
              />
              {loading ? (
                <div className="loader w-full flex flex-col gap-4">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className="  text-[16px]  rounded p-2"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom mt-10 absolute w-[80%] left-[10%] bottom-[5%]">
          <div className=" promp-box h-auto  bg-white rounded-3xl px-5 py-1 flex items-center justify-between ">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className=" w-[80%] outline-0 overflow-y-scroll "
              type="text"
              placeholder="Enter your Prompt here"
            />
            <div className="flex items-center justify-center gap-2">
              <img
                className="w-[20px] cursor-pointer"
                src={assets.gallery_icon}
                alt=""
              />
              <img
                className="w-[20px] cursor-pointer"
                src={assets.mic_icon}
                alt=""
              />
              <img
                className={`w-[20px] cursor-pointer ${
                  input.trim().length > 0 ? "" : "hidden"
                }`}
                onClick={() => onSent(input)}
                src={assets.send_icon}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Main;
