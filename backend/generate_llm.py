import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()


llm_client = OpenAI(
    api_key=os.environ.get("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1",
)

def generate_response(user_query, relevant_chunks):
    context = "\n\n".join(relevant_chunks)

    system_instructions = (
        "You are a friendly and professional AI assistant representing YOUR_NAME on his portfolio website. "
        "Use the provided CONTEXT to answer the USER QUESTION about his skills, experience, or background. "
        "If the answer is not in the CONTEXT, politely say you don't know and encourage them to contact me directly. "
        "Keep your answers concise and conversational. "
        "You MUST NOT hallucinate or lie about any factual details that are not present in the CONTEXT given to you."
    )

    prompt = f"CONTEXT:\n{context}\n\nUSER QUESTION:\n{user_query}"

    messages = [
        {"role": "system", "content": system_instructions},
        {"role": "user", "content": prompt} 
    ]

    try:
        response = llm_client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=messages,
            temperature=0.7,
            stream=True
        )

        for chunk in response:
            token = chunk.choices[0].delta.content
            if token is not None:
                yield token

    except Exception as e:
        yield f"\n\n[API Error: {str(e)}]"
