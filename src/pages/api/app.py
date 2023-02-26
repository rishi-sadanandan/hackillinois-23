from Flask import Flask
from flask_cors import CORS

from transformers import WhisperProcessor, WhisperForConditionalGeneration
from datasets import load_dataset
from transformers import WhisperFeatureExtractor
from transformers import pipeline



whisper = pipeline('automatic-speech-recognition', model = 'openai/whisper-small.en')

import soundfile as sf

app = Flask(__name__)
CORS(app)

@app.route('/hello')
def hello():
    return 'Hello, world!'


@app.route('/transcribe', methods=['POST'])
def transcribe(audio):
    transcription = whisper(audio)
    return transcription

@app.route('/generate_beat')
def generate_beat():
    # use magenta to generate a melody
    
