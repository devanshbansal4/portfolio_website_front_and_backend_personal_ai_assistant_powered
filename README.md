# AI Developer Portfolio Template

This is a clean, dark-themed developer portfolio with a built-in AI assistant. Instead of just reading a static resume, visitors can chat with an AI version of you to ask about your experience, projects, and skills in real-time.

It uses RAG (Retrieval-Augmented Generation) under the hood. You feed it your actual resume and notes, and the AI only answers based on that data, so it won't hallucinate fake jobs or skills.

## Tech Stack
* **Frontend:** React (Vite) and plain CSS
* **Backend:** Python, FastAPI, FAISS (for local vector search), and the Groq API (Llama 3 for fast chat generation)

## How to run it locally

### 1. Set up the backend
Open a terminal and set up your Python environment:

on bash run :: 
cd backend
python -m venv myenv
source myenv/bin/activate  # On Windows use: myenv\Scripts\activate
pip install -r requirements.txt


In the .env file in the backend folder, add your free Groq API key ::
GROQ_API_KEY=your_key_here


Build your AI's database and start the server ::
python create_faiss_index.py
python app.py



2. Set up the frontend
Open a second terminal (keep the backend running) and start the React app:

In bash :: 
cd frontend
npm install
Create a .env.local file in the frontend folder to connect to your local backend:
VITE_HF_API_URL=http://127.0.0.1:8000


Put your personal details wherever required. 


Start the website:
npm run dev
