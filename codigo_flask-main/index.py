from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/news')
def news():
    return render_template("news.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/register', methods=["GET", "POST"])
def register():
    if request.method == 'POST':
        return render_template("news.html")
    return  render_template("register.html")


if __name__ == "__main__":
    app.run(debug=True)