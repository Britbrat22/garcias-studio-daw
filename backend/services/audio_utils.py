import tempfile
import librosa
import numpy as np
import shutil

async def analyze_vocals(file):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as tmp:
        shutil.copyfileobj(file.file, tmp)
        tmp_path = tmp.name

    try:
        y, sr = librosa.load(tmp_path)
        tempo, _ = librosa.beat.beat_track(y, sr=sr)
        key = librosa.feature.chroma_stft(y=y, sr=sr).mean(axis=1).argmax()
        return {
            "tempo": round(tempo),
            "key": key
        }
    except Exception as e:
        return {"error": str(e)}
