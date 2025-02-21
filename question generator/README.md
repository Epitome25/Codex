# Interview-Question-Generator
A webapp that will generate interview questions using Gemini for any techstack with varying experience

This Flask web application helps users generate interview questions(with answers) based on their needs.

## Features:

Number of Questions: Specify the desired number of questions to be generated.

Keywords: Enter comma-separated keywords related to the interview topic.

Difficulty Level: Choose from Beginner, Intermediate, or Experienced difficulty levels to tailor the questions.

## Integration with Gemini: 
Leverages the power of Gemini, a large language model, to generate relevant interview questions. I have made use of the 'gemini-pro' model.

Gemini-Pro is a powerful multimodal large language model developed by Google DeepMind. It excels at various tasks, including text generation, translation, and code analysis. Notably, Gemini-Pro offers several advantages for this application:

Superior Performance: Compared to previous models like PaLM 2, Gemini-Pro demonstrates superior performance on a range of benchmarks, making it a strong choice for complex language processing tasks.

Multimodality: Unlike text-only models, Gemini-Pro can process and understand information across different modalities, such as text, images, and code. This allows for a more nuanced understanding of interview topics and potentially leads to more diverse and relevant question generation.

Scalability: Designed for scalability, Gemini-Pro efficiently handles large amounts of data and complex tasks. This ensures the application can generate a sufficient number of interview questions efficiently.

This project provides a user-friendly interface to connect with Gemini and generate interview questions efficiently.

## Getting Started

To install the dependencies, use the following command in your terminal - pip install -r requirements.txt

Once all the dependencies have been installed successfully you can run the python file app.py using the command - python app.py

## Versions of libraries used-
google.generativeai -  0.4.1

flask - 2.0.3

pandas - 1.4.1

## Example Usage

Visit the application in your web browser.

Enter the desired number of questions.

Provide comma-separated keywords relevant to the interview topic.

Select the appropriate difficulty level.

Click the "Generate Questions" button.

## Benefits
Streamline interview preparation by generating relevant questions quickly.

Customize difficulty levels to match candidate experience.

Improve interview quality with diverse question types.

### Important note-

The API key used in the above project is disabled and will not work. Please generate your own API key on Google AI Studio and replace it with the one in the config file so the project works for you. :)
