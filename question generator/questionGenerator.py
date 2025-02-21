import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()  # Load variables from .env file
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
# Configure the SDK with your API key by recovering the API key from a config file
genai.configure(api_key=GEMINI_API_KEY)

#Setting the Gen AI model to be used (one of- gemini-1.0-pro, gemini-1.0-pro-001,gemini-1.0-pro-latest,gemini-1.0-pro-vision-latest,gemini-pro,gemini-pro-vision)
model = genai.GenerativeModel('gemini-pro')

#function to generate the interview questions by connecting to the Gen AI model
def generate_interview_questions(qty,techstack,difficulty):
    prompt = f"Generate a list of {qty} interview questions(with answers) for techstack:{techstack} suitable for someone with experience:{difficulty}."
    response = model.generate_content(prompt)

    #formatting the output to make it look cleaner
    generated_questions=response.text.replace("**", "")
    generated_questions=generated_questions.strip()
    return generated_questions

# #function calls for testing individual module
# genairesponse=generate_interview_questions(0,"java","hard")
# print(genairesponse)
