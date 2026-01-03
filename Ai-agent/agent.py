from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.messages import SystemMessage, AnyMessage
from langchain.agents import create_agent
from langchain.tools import tool
from langgraph.checkpoint.memory import InMemorySaver
from typing import List

zeidans_information="""Zeidan is 24 years right he is going to be 25 in 2026 . He loves playing chess as a hobby. He is extremly friendly and loves to help people around him
He is a canadian citizen of syrian heritage. He can speak English, Arabic,Aramaic and French. He is studying software engineering at concordia. He is going to enter his third year.
of software engineering studying
""" 
agent=None
checkpointer = InMemorySaver()

@tool
def get_zeidans_information()->str:
    """Use this tool to get information about Zeidan. This is your primary source of knowledge."""
    return f"{zeidans_information}"

# Create the prompt template for the agent
SYSTEM_PROMPT = SystemMessage("""You are a personal assistant for a person named Zeidan. Your name is Z-Bot.
Your only source of information about Zeidan is what you get from the `get_zeidans_information` tool.
You must use this tool to answer any questions about Zeidan.
Be friendly and helpful.
""")

checkpointer=InMemorySaver()


def getagent():
    global agent
    model = ChatGoogleGenerativeAI(model="gemini-2.5-flash-lite")
    agent = create_agent(
        model=model,
        system_prompt=SYSTEM_PROMPT,
        tools=[get_zeidans_information],
        checkpointer=checkpointer)
    

def run_agent(query: str, history: List[AnyMessage]):
    """Invokes the agent with a query and conversation history."""
    config = {"configurable": {"thread_id": "main_thread"}}
    # The agent returns a list of messages. We are interested in the last one.
    response = agent.invoke({"messages": history + [("user", query)]}, config=config)
    return response['messages'][-1].content
