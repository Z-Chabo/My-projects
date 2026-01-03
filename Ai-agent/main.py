from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from pydantic import BaseModel
from langchain.messages import HumanMessage, AIMessage,AnyMessage
from agent import run_agent
from agent import getagent

getagent()





origins = ['https://portfolio1-b7j.pages.dev','https://portfolio1-b7j.pages.dev/']

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class Message(BaseModel):
   content:str
   type: Optional[str] = "human"
class QueryRequest(BaseModel):
   query:str
   history:List[Message]=[]

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Z-Bot AI Agent is running"}


@app.post("/aiAgent")
async def query_agent(request: QueryRequest):
   history_msgs:List[AnyMessage]=[]

   if request.history:
      for msg in request.history:
         if msg.type == 'ai':
            history_msgs.append(AIMessage(content=msg.content))
         else: # 'human' or None
            history_msgs.append(HumanMessage(content=msg.content))

   response=run_agent(request.query, history_msgs)

   return {"response":response}

if __name__ == "__main__":
    # This block is for local development only.
    # It will not run on Vercel.
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)