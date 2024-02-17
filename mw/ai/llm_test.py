from brain import respond

while True:
    user_question = input("\rType your response here: ") + "\n"
    if user_question == "quit\n":
        break
    answer = respond(user_question)
    print(answer)