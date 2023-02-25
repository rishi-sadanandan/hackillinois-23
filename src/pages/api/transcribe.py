

# write a vercel serverless function with the python runtime that spits hello world
# https://vercel.com/docs/serverless-functions/introduction
    
from http.server import BaseHTTPRequestHandler
from transformers import WhisperProcessor, WhisperForConditionalGeneration
from datasets import load_dataset
from transformers import WhisperFeatureExtractor
from transformers import pipeline
whisper = pipeline('automatic-speech-recognition', model = 'openai/whisper-small.en')
import soundfile as sf


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        self.wfile.write('Hello, world!'.encode('utf-8'))
        return
    
def transcribe(audio):
    transcription = whisper(audio)
    return transcription

def generate_beat():
    # use magenta to generate a beat
    