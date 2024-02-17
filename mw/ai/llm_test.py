from brain import respond, generate_stack

while True:
    user_question = input("\rType your response here: ") + "\n"
    if user_question == "quit\n":
        break
<<<<<<< HEAD
    answer = generate_stack(user_question)
    print(answer)
=======
    answer = respond(user_question)
    print(answer)

>>>>>>> 25e6f4a1415e4318717c7ac3b094f63b885b9da0
