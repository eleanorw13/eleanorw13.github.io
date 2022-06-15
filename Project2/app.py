# importing Flask and other modules
from flask import Flask, request, render_template
 
# Flask constructor
app = Flask(__name__)  
 
# A decorator used to tell the application
# which URL is associated function
@app.route('/', methods =["GET", "POST"])
def Project2():
    if request.method == "POST":
       # getting input with name = fname in HTML form
       first_name = request.form.get("fname")
       # getting input with name = lname in HTML form
       last_name = request.form.get("lname")
       email_name = request.form.get("emailaddr")
       topping_name = request.form.get("topping")
       drink_name = request.form.get("beverage")
       return "Your name: " + first_name + ","+ last_name + "<br>" +  "Email:" + email_name + "<br>" + "Favorite Topping: " + topping_name + "Favorite Drink:" + drink_name
       
       
    return render_template("form.html")
 
if __name__=='__main__':
   app.run()
