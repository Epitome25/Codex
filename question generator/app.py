from flask import Flask, render_template, request,url_for
from questionGenerator import generate_interview_questions


app = Flask(__name__, static_url_path='/static')

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        # Render the form template
        return render_template("index.html")
    else:
        # Process form data
        qty = request.form["qty"]
        techstack = request.form["techstack"]
        difficulty = request.form["difficulty"]
    
        # Validate qty (assuming it should be a positive integer)
        try:
            qty = int(qty)
            if qty <= 0:
                error_message = "Number of questions must be a positive integer."
                return render_template("index.html", error_message=error_message, qty=qty, techstack=techstack, difficulty=difficulty)
        except ValueError:
            error_message = "Number of questions must be a number."
            return render_template("index.html", error_message=error_message, qty=qty, techstack=techstack, difficulty=difficulty)

        interview_questions=generate_interview_questions(qty,techstack,difficulty)


        return render_template("results.html", interview_questions=interview_questions, success=True)  # Show success message

if __name__ == "__main__":
    app.run(debug=True)
