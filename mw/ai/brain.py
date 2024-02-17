import boto3
from prompts import idea_gen_prompt
from langchain.llms.bedrock import Bedrock
from langchain.memory import ConversationBufferMemory
from langchain.prompts import PromptTemplate
from langchain.chains import ConversationChain
from urllib3 import disable_warnings

region_name = "us-east-1" #us-east-1
aws_access_key_id = "ASIA3CW6ONM4E7KVLKHB" #Paste the aws access key id here
aws_secret_access_key = "mRSj7ogSND3OcXgMyU9bOmGl1uOvn/e6osHIbTxA" #Paste the aws secret access key here
aws_session_token = "IQoJb3JpZ2luX2VjEAMaCXVzLWVhc3QtMSJHMEUCIQD9+uFAqfCn7eKmI1yw2ZhL8fxjPBUQGTGPk8NqsK2VdQIgVDYY10ratqUykQ/Ve4dzHnftJ7/oM3q3wk9W57TvofMqrgMI3P//////////ARAAGgw3NjE3NDk0NjU5MTIiDFcoSQRjshL7SgZSNSqCAze31Go6xT5suwwSDp8AhKdB4E7SrAooeEpSHhZUtWNxM+QkEXNeS6sFNzsH8CHddx01NHaqyJlDBCWX++LxG1YOwq97o4KjfzSgWLIHMV7JR/OVojvwLPJKi7Ka0eTwvZjG2NoQfwNE+xUQ/son8SHArD1JGvc6O/yuXbjyFKC+eU1+L17eyZeyksNvJaLmehjr2dt/3biuMFZUU6s1KT++tuzzSOcFSLGM78QzZIdXhYK7xMQ7346AnwjX/KCHo9b9C+r8HRjbCbXDxjw2mX/PjK0qVlLDLua7AWt207sMnXUcfL24PK/auLQ1DWNvvFVHJrf7PMVxLVGCl3ygfl3x5LEAN8fCPF1i9lvWw+SLjy1+tfNiag6DoOXS271EW83sq+PdtlN3vHc3wPcftzoKMEliX1h9WORojFgpbIa8BlmiXELZh89qBrhe+CVg4sDHdo015S5DDUM6F6WYrn1/MIXxAsd7jnvrxPQU1OO8wErv+ghsGCmuz6KCuen+Gk66MOj0w64GOqYB5b4Jl2FMvSH+reTWdHih9vPAfW6mPhv5yHWBAzmqmtj0sNz/SxFmzEaPcpIh+Ok5QPpXGeWWoQIkt7l1dGM+GC/9c800cvXogpDKLA0zvbLXPmMOI08krcFkwSIdtfqj3yC4ysQJXKBDsP31Hx4qht7+qJbq10acXgD55GGgZcvEi6c721WLtfZG+xTxzwe9u4fwyVrrqYTMypAjI261rrGnZKZ/Og==" #Paste the session token here
session = boto3.Session (
	region_name = region_name,
	aws_access_key_id = aws_access_key_id,
	aws_secret_access_key = aws_secret_access_key,
	aws_session_token = aws_session_token
)

gen_ideas_prompt1 = PromptTemplate.from_template(idea_gen_prompt)

bedrock = session.client('bedrock-runtime') 

modelId = 'anthropic.claude-v2:1'
accept = 'application/json'
contentType = 'application/json'

memory = ConversationBufferMemory(ai_prefix="Assistant")

def gen_ideas(user_input):
    llm = Bedrock(
        model_id = modelId,
        client = bedrock,
        model_kwargs = {"max_tokens_to_sample": 500, "temperature": 0.5, "top_k": 250}
    )
    
    conversation = ConversationChain(llm = llm, verbose=False, memory=memory)   
    conversation.prompt = gen_ideas_prompt1
    return (conversation.predict(input=user_input))