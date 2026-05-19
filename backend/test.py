import requests

def tester(): 
    url = 'http://127.0.0.1:8000/chat'
    payload = {'query': "tell me about YOUR_NAME's education and projects in detail ."}

    response = requests.post(url, json=payload, stream=True)
    response.raise_for_status()

    for chunk in response.iter_content(chunk_size=None):
          if chunk:
                print(chunk.decode('utf-8'), end='', flush=True)
    print()

def waker():
    url= 'http://127.0.0.1:8000/wakeup'
    
    response = requests.get(url)
    response.raise_for_status()

    print(response.json())


if __name__=="__main__":
    waker()
    tester()

