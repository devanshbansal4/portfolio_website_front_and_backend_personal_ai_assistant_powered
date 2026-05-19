import faiss
import numpy as np 
import pickle
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("./bge-small-en-v1.5") # when testing locally 
# model = SentenceTransformer("BAAI/bge-small-en-v1.5") when running on HF
index = faiss.read_index("./faiss_store/index.faiss")
with open("./faiss_store/chunks.pkl", "rb") as f:
    all_chunks = pickle.load(f)

def query_db(query, topk):
    query_vector = model.encode([query])
    query_vector = np.array(query_vector).astype('float32')
    faiss.normalize_L2(query_vector)

    distances, indices = index.search(query_vector, topk)

    relevant_chunks = []
    for idx in indices[0]:
        if idx != -1:
            relevant_chunks.append(all_chunks[idx])
    
    return distances, relevant_chunks

