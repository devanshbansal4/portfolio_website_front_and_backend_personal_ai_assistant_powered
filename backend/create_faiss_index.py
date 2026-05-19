import os
import numpy as np
import faiss 
from sentence_transformers import SentenceTransformer
import pickle

def load_files(folder):
    text = []
    for file in os.listdir(folder):
        path = os.path.join(folder, file)
        with open(path, "r", encoding='utf-8') as f:
            text.append(f.read())
            
    return text
    
def clean_data(info):
    cleaned_info = info.replace("\r", "").strip()

    return cleaned_info

def paragraph_generator(info):
    return [para.strip() for para in info.split("\n\n") if para.strip()]

# SEMANTIC CHUNKING (PARAGRAPH WISE) 
def chunk_paras(paragraphs):
    chunks = []
    
    for para in paragraphs:
        para = para.strip()

        if para:
            chunks.append(para)
    
    return chunks

# THIS CREATES CHUNKS OF A FIXED (NOT ALWAYS) SIZE.
# def chunk_paras(paragraphs, chunk_size, overlap):
#     chunks = []
#     current_chunk = []

#     for para in paragraphs:
#         words = para.split()

#         if len(words) > chunk_size:
#             for i in range(0, len(words), chunk_size - overlap):
#                 chunks.append(" ".join(words[i:i+chunk_size]))
#             continue
            
#         current_chunk.extend(words)
#         if len(current_chunk) >= chunk_size:
#             chunks.append(" ".join(current_chunk))
#             current_chunk = current_chunk[-overlap:]

#     if current_chunk:
#         chunks.append(" ".join(current_chunk))

#     return chunks

def main(folder):
    text = load_files(folder)
    all_chunks = []

    for info in text:
        info = clean_data(info)
        paragraphs = paragraph_generator(info)
        chunks = chunk_paras(paragraphs)

        all_chunks.extend(chunks)
    
    return all_chunks

def build_faiss_index(chunks):
    model = SentenceTransformer("./bge-small-en-v1.5") # when making the chunks locally 

    embeddings = model.encode(chunks, show_progress_bar = True)
    embeddings = np.array(embeddings).astype('float32')

    faiss.normalize_L2(embeddings)

    dim = embeddings.shape[1] # embeddings are a 2D matrix 
    index = faiss.IndexFlatIP(dim)
    index.add(embeddings)

    return index, chunks

def save_index(index, chunks, save_path="faiss_store"):
    os.makedirs(save_path, exist_ok=True)
    faiss.write_index(index, os.path.join(save_path, "index.faiss"))
    with open(os.path.join(save_path, "chunks.pkl"), "wb") as f:
        pickle.dump(chunks, f)
    print("FAISS index saved.")

if __name__ == "__main__":
    folder = r"./rag_raw_data"
    chunks = main(folder)
    print(f"{len(chunks)} chunks created.")

    index, chunks = build_faiss_index(chunks)
    save_index(index, chunks)
    print(f"{index.ntotal} indices and {len(chunks)} chunks saved.")
