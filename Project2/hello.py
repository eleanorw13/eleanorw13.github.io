
from flask import Flask
app = Flask(__name__)

@app.route("/Users/eleanorw/dev/qccsoftwareengineerbootcamp/Project2")
def hello():
    return render_template("index.html") 

if __name__ == "__main__":
    app.run()