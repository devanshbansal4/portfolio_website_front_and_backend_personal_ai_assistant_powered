import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from generate_llm import generate_response
from query_faiss_index import query_db

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_methods=["*"],
    allow_origins=["*"],
    allow_headers=["*"],
    allow_credentials=True
)

class User_Request(BaseModel):
    query: str

@app.get("/wakeup")
def wakeup():
    return {"status": "success", "message": "RAG Model has been loaded, the LLM will be loaded when asked a question."}

@app.post("/chat")
def chat(request: User_Request):
    distances, relevant_chunks = query_db(request.query, topk=5)
    print("chunks obtained")

    llm_stream = generate_response(request.query, relevant_chunks)

    return StreamingResponse(llm_stream, media_type="text/event-stream")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000) # make port '7860' when deploying on HF

