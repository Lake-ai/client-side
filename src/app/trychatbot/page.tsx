"use client";

import React, { useEffect, useRef, useState } from "react";
import ChatBotComponent from "./ChatBotComponent";
import Navbar from "../Components/Navbar";
import Prompt from "@/app/Components/Prompt";
import DocsModal from "./Docs/DocsModal";
import { toast } from "react-toastify";

const Page: React.FC = () => {
  const [UserId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const UserIds: string | null = localStorage.getItem("UserId");
      setUserId(UserIds);
    } else {
      toast.error("Please Login !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, []);
  const [config, setConfig] = useState<{
    apiKey: string;
    initialMessage: string;
    chatbotTitle: string;
    LLM:string;
    brandImage: string;
    suggestions: string[];
    rateLimitDuration: number;
  }>({
    apiKey: typeof window !== 'undefined' ? localStorage.getItem('apiKey') ?? '' : '',
    initialMessage: "Hello! How Can I Assist You ?",
    chatbotTitle: "Chat bot",
    LLM:"OpenAI",
    brandImage:
      "https://cdn.jsdelivr.net/gh/Lake-ai/cdn-interface/chatbot.png",
    suggestions: [],
    rateLimitDuration: 5000,
  });
  const [Value, setValue] = useState<{
    apiKey: string;
    initialMessage: string;
    chatbotTitle: string;
    LLM: string;
    brandImage: string;
    suggestions: string[];
    rateLimitDuration: number;
  }>({
    apiKey: "",
    initialMessage: "Hello! How Can I Assist You ?",
    chatbotTitle: "Chat bot",
    LLM:"OpenAI",
    brandImage:
      "https://www.kindpng.com/picc/m/179-1798038_chatbots-builder-pricing-crozdesk-free-chatbot-hd-png.png",
    suggestions: [],
    rateLimitDuration: 5000,
  });
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(config);
    setIsModalVisible(true);
    setValue(config);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const apiKeyInputRef = useRef<HTMLInputElement | any>();

  const handlePasteClick = () => {
    if (apiKeyInputRef.current) {
      navigator.clipboard.readText().then((clipboardText) => {
        apiKeyInputRef.current.value = clipboardText;
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (event.target as HTMLElement).classList.contains("modal-background")
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLLMChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setConfig((prev) => ({
      ...prev,
      LLM: e.target.value,
    }));
  };

  return (
    <>
      <Navbar />
      {UserId ? (
        <>
          {isModalVisible && <DocsModal onClick={closeModal} {...Value} />}
          <div className="sm:pt-20 pt-48 overflow-y-auto flex items-center justify-center">
            <div className="bg-white bg-opacity-50 rounded p-8 w-96">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label>
                  <div className="font-sans font-semibold text-md p-2">
                    Chatbot Title:
                  </div>
                  <input
                    className="block bg-pink-400 bg-opacity-10 rounded p-2 w-full"
                    placeholder="Chatbot Title"
                    value={config.chatbotTitle}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        chatbotTitle: e.target.value,
                      }))
                    }
                  />
                </label>
                <label>
                  <div className="font-sans font-semibold text-md p-2">
                    Chatbot LLM:
                  </div>
                  <select
                    className="block bg-pink-400 bg-opacity-10 rounded p-2 w-full"
                    value={config.LLM}
                    onChange={handleLLMChange}
                  >
                    <option value="OpenAI">OpenAI</option>
                    <option value="Gemini">Gemini</option>
                  </select>
                </label>
                <label>
                  <div className="font-sans font-semibold text-md p-2">
                    Brand Image URL:
                  </div>
                  <input
                    className="block bg-pink-400 bg-opacity-10 rounded p-2 w-full"
                    placeholder="Brand Image URL"
                    value={config.brandImage}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        brandImage: e.target.value,
                      }))
                    }
                  />
                </label>
                <label>
                  <div className="font-sans font-semibold text-md p-2">
                    Suggestions:
                  </div>
                  <textarea
                    className="block bg-pink-400 bg-opacity-10 rounded p-2 w-full"
                    placeholder="Enter suggestions (one per line)"
                    value={config.suggestions.join("\n")}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        suggestions: e.target.value.split("\n"),
                      }))
                    }
                  />
                </label>
                <label>
                  <div className="font-sans font-semibold text-md p-2">
                    Rate Limit Duration (in MS):
                  </div>
                  <input
                    className="block bg-pink-400 bg-opacity-10 rounded p-2 w-full"
                    placeholder="Rate Limit Duration"
                    type="number"
                    value={config.rateLimitDuration}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        rateLimitDuration: Number(e.target.value),
                      }))
                    }
                  />
                </label>
                <button
                  type="submit"
                  className="mt-4 bg-pink-500 text-white rounded p-2"
                >
                  Integrate
                </button>
              </form>
            </div>
            <ChatBotComponent {...config} />
          </div>
        </>
      ) : (
        <Prompt />
      )}
    </>
  );
};

export default Page;
