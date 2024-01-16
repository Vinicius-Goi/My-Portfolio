from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv
from datetime import datetime


app = Flask(__name__)
app.secret_key = "goisanchez"

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.getenv("MAIL_USERNAME"),
    "MAIL_PASSWORD": os.getenv("MAIL_PASSWORD")
}

app.config.update(mail_settings)

mail = Mail(app)

class Contato:
    def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        formContato = Contato(
            request.form["nome"],
            request.form["email"],
            request.form["mensagem"]
        )

        msg = Message(
            subject= f"{formContato.nome} te enviou um email pelo portfólio",
            sender= app.config.get("MAIL_USERNAME"),
            recipients= ['goisanchezvinicius@gmail.com', app.config.get("MAIL_USERNAME")],
            body = f'''

            {formContato.nome} usando o email {formContato.email}, te enviou algo às {datetime.now().strftime("%H:%M")} no dia {datetime.now().strftime("%d/%m/%Y")}
            Mensagem:

            {formContato.mensagem}

            '''
        )
        mail.send(msg)
        flash('Email enviado com sucesso!')
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)