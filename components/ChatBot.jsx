"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosClose, IoMdSend } from 'react-icons/io';
const chatBoxLogo = '/rajasthan-travel-helpline.png';
const ChatBot = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  // Handle closing the chat
  const handleCloseChat = () => {
    setIsChatVisible(false);
  };

  useEffect(() => {
    const toggleChatVisibility = () => {
      setTimeout(() => {
        setIsChatVisible(true);

      }, 10000); // 3 seconds delay
    };

    toggleChatVisibility();

    return () => clearTimeout(toggleChatVisibility);
  }, []);



  return (
    <>
      {/* <div className="container-fluid"> */}
      <div className="bg-black bottom-contact-container bottom-contact-02 overflow-hidden d-flex  align-items-center p-0">
        <a
          href="https://api.whatsapp.com/send/?phone=919166555888&text&type=phone_number&app_absent=0"
          target="_blank"
          className='rounded-5 p-0'
          onClick={() => setIsChatVisible(true)}
          aria-label="whatsapp"
        >
          <FaWhatsapp className="fixed-footer-icon" />
        </a>
      </div>
      {/* WhatsApp chat container */}
      {isChatVisible && (
        <div className="container chat-container">
          <div className="row d-flex flex-column justify-content-center align-items-center overflow-hidden">
            <div className="col px-0">
              <button
                className="p-1 px-2 rounded-5 close-btn fw-bold"
                onClick={handleCloseChat}
              >
                <IoIosClose />
              </button>
              <p className="text-capitalize p-3 px-4">
                <span className="p-4 position-relative"></span> Rajasthan
                Travel Helpline
              </p>

              <div className="chat-img overflow-hidden">
                <Image src={chatBoxLogo} alt="Chat Profile" width={600} height={300} layout='resposive' />
              </div>
              <div className="chat-body">
                <div className="chat-left">
                  <p>Hello, How can I help you today?</p>
                </div>
              </div>
            </div>
            <div className="bg-white py-1 d-flex justify-content-center align-items-center">
              <a
                href="https://api.whatsapp.com/send/?phone=919166555888&text&type=phone_number&app_absent=0"
                target="_blank"
                aria-label="go to whatsapp"
                className="w-100 text-center p-2 px-3 my-2 rounded-5 chat-btn d-flex justify-content-center align-items-center gap-2"
              >
                Start chat <IoMdSend />
              </a>
            </div>
          </div>
        </div>
      )}
      {/* </div> */}
    </>
  );
};

export default ChatBot;
