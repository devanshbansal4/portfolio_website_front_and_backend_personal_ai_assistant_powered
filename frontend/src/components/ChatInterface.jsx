import { useState, useRef, useEffect } from "react";
import {chatWithAI} from '../services/hf_api';
import MessageBubble from "./MessageBubble";

function ChatInterface(){
    

    const [messages, setMessages] = useState([
        {role: 'ai', text: "Hey! I'm YOUR_NAME's AI Assistant. Ask me anything about his experience, projects, education, or skills."}
    ]);
    const [input, setInput] = useState("");
    
    const chatContainerRef = useRef(null);
    useEffect(() => {
        if(chatContainerRef.current){
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [messages]);


    const handleSend = async (e) => {
        e.preventDefault();
        if(!input.trim()) return;

        const userText = input;
        setInput("")
        
        setMessages(prev => [...prev, {role: 'user', text: userText}]);
        setMessages(prev => [...prev, {role: 'ai', text: ""}]);

        await chatWithAI(userText, (newWord) => {
            setMessages(prev => {
                const updatedMessages = [...prev];
                const lastIndex = updatedMessages.length - 1;

                updatedMessages[lastIndex] = {
                    ...updatedMessages[lastIndex],
                    text: updatedMessages[lastIndex].text + newWord
                };

                return updatedMessages;
            });
        });
    };


return(
<div style={{
    display: 'flex', flexDirection: 'column', height: '500px',
    backgroundColor: '#1E293B', borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    border: '1px solid #334155', overflow: 'hidden',
    borderLeft: '3px solid #38BDF8',
}}>

    {/* Top Header Bar */}
    <div style={{padding: '1rem 1.5rem', backgroundColor: '#0F172A', borderBottom: '1px solid #334155', fontWeight: '600', fontSize: '1.05rem', color: '#F8FAFC'}}>
        TL;DR - Talk to my AI Assistant
    </div>

    {/* Scrollable Chat History */}
    <div ref={chatContainerRef} style={{flex: 1, overflowY:'auto', padding: '1.5rem'}}>
        {messages.map((msg, index) => (
            <MessageBubble key={index} role={msg.role} text={msg.text} />
        ))}
    </div>

    {/* Input Box */}
    <form onSubmit={handleSend} style={{display:'flex', padding: '1rem',  borderTop: '1px solid #334155', backgroundColor: '#0F172A'}}>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            style={{
                flex: 1, padding: '0.8rem', borderRadius: '8px', backgroundColor: '#1E293B',
                color: '#F8FAFC', border: '1px solid #334155', marginRight: '0.75rem', outline: 'none'
            }}
        />
        <button
            type="submit"
            style={{
                padding: '0 1.5rem', backgroundColor: '#38BDF8', color: '#0F172A',
                border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold',
                fontSize: '0.95rem'
            }}
            >
            Send
        </button>
    </form>
    
</div>
);
}

export default ChatInterface;

