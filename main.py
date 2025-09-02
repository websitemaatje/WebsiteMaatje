from flask import Flask, render_template_string, send_from_directory
import os

app = Flask(__name__)

# Read the HTML file content
def get_html_content():
    with open('index.html', 'r', encoding='utf-8') as f:
        return f.read()

@app.route('/')
def index():
    return get_html_content()

@app.route('/style.css')
def style():
    return send_from_directory('.', 'style.css', mimetype='text/css')

@app.route('/script.js')
def script():
    return send_from_directory('.', 'script.js', mimetype='application/javascript')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)