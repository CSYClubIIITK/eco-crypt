from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

nature_emojis = [
    '🌿', '🌻', '🍃', '🌸', '🍂', '🌺',
    '🍀', '🍁', '🍄', '🌹', '🌲', '🌴',
    '🍅', '🍆', '🌽', '🍊', '🍎', '🍓',
    '🍑', '🍍', '🍌', '🍉', '🍇', '🍈',
    '🍐', '🍏'
]

N = len(nature_emojis)

app = Flask(__name__)
CORS(app, resources={r"/encrypt": {"origins": "*"}})
CORS(app, resources={r"/decrypt": {"origins": "*"}})

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/encrypt', methods=['POST'])
def encrypt_text():
    try:
        data = request.get_json()
        modified_text = ''
        for i in data:
            modified_text += nature_emojis[(ord(i.lower()) - ord('a'))]
        return jsonify({'modified_text': modified_text})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/decrypt', methods=['POST'])
def decrypt_text():
    try:
        data = request.get_json()
        modified_text = ''
        for i in data:
            modified_text += chr(nature_emojis.index(i) + 97)
        return jsonify({'modified_text': modified_text})

    except Exception as e:
        # print(e)
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
