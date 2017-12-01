from flask import Flask, render_template
from raven.contrib.flask import Sentry


app = Flask(__name__)
sentry = Sentry(app, dsn='https://b2a850da2e9c4ec0af5ea60c4faecbe4:7d782fc1380148a59cbec3b623db5f58@sentry.io/253513')

@app.route('/')
def index():
    try:
        1 / 0
    except ZeroDivisionError:
        sentry.captureException()
    
    
    return render_template("index.html") 