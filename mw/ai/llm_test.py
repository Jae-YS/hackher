from brain import respond, generate_stack

while True:
    user_question = input("\rType your response here: ") + "\n"
    if user_question == "quit\n":
        break
    answer = generate_stack(user_question)
    print(answer)