from brain import gen_ideas

while True:
    user_question = input("\rType your response here: ") + "\n"
    if user_question == "quit\n":
        break
    answer = gen_ideas(user_question)
    print(answer)