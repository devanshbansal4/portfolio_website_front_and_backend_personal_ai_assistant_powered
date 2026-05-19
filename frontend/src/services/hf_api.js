const API_URL = import.meta.env.VITE_HF_API_URL;

export const wakeUpBackend = async () => {
    try{
        const response = await fetch(`${API_URL}/wakeup`);
        const data = await response.json();
        console.log("Backend Status :: ", data.message);
    }
    catch (error){
        console.error("Backend is asleep :: ", error)
    }
};

export const chatWithAI = async (query, onChunk) => {
    try{
        const response = await fetch(`${API_URL}/chat`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({query}),
        });

        if(!response.ok) throw new Error(`Error :: ${response.status}`);
        
        // streaming logic
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        
        while (true){
            const {done, value} = await reader.read();
            if(done) break;

            const chunkText = decoder.decode(value, {stream: true});
            onChunk(chunkText);
        }

    }
    catch(error){
        console.error("API Error :: ", error);
        onChunk("\n\n*Error in connecting to the server.")
    }
};