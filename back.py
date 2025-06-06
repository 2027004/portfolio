from fastapi import FastAPI,Request
from pydantic import BaseModel
from typing import Optional
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
#next is database stuff
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session #optional line of code
from sqlalchemy import Column, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
## to here



# Create database engine and session
engine = create_engine("sqlite:///./portfolio.db", connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Define the database model
class Portfolio(Base):
    __tablename__ = "portfolios"

    uid = Column(String, primary_key=True, index=True)
    title = Column(String)
    biog = Column(String)
    background_color = Column(String)
    name_color = Column(String)
    biog_color = Column(String)
    #template
    #NamePositionRight
    #NamePositionLeft
    #NamePositionUp
    #NamePositionDown
    #BiogPositionRight
    #BiogPositionLeft
    #BiogPositionUp
    #BiogPositionDown
    #Box1Color
    #Box2Color
    #Box3Color
    #Box4Color
    #Box5Color
    #Box6Color
    #Box1Text
    #Box2Text
    #Box3Text
    #Box4Text
    #Box5Text
    #Box6Text
    

# Create the tables in the database
Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
# Define the expected JSON structure

#####
##### to here is the database
#####

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can specify your frontend URL here
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")


class UserValidate(BaseModel):
    title : Optional[str] = None
    biog : Optional[str] = None
    background_color : Optional[str] = None
    name_color : Optional[str] = None
    biog_color : Optional[str] = None
    #template: Optional[str]=None
    #NamePositionRight: Optional[str]=None
    #NamePositionLeft: Optional[str]=None
    #NamePositionUp: Optional[str]=None
    #NamePositionDown: Optional[str]=None
    #BiogPositionRight: Optional[str]=None
    #BiogPositionLeft: Optional[str]=None
    #BiogPositionUp: Optional[str]=None
    #BiogPositionDown: Optional[str]=None
    #Box1Color: Optional[str]=None
    #Box2Color: Optional[str]=None
    #Box3Color: Optional[str]=None
    #Box4Color: Optional[str]=None
    #Box5Color: Optional[str]=None
    #Box6Color: Optional[str]=None
    #Box1Text: Optional[str]=None
    #Box2Text: Optional[str]=None
    #Box3Text: Optional[str]=None
    #Box4Text: Optional[str]=None
    #Box5Text: Optional[str]=None
    #Box6Text: Optional[str]=None


@app.get("/")
async def front_image(request:Request):
    return templates.TemplateResponse("front.html", {"request": request})



@app.get("/my-page")
async def get_data(request: Request, db: Session = Depends(get_db)):
    uid = request.headers.get("Authorization")  # get UID from headers

    if not uid:
        raise HTTPException(status_code=400, detail="UID missing")

    # Query the database for the user's portfolio
    user = db.query(Portfolio).filter(Portfolio.uid == uid).first()

    if user:
        print("Returning name_color:", user.name_color)
        return {
            "title": f"{user.title}",
            "biog": user.biog,
            "background_color": user.background_color,
            "name_color": user.name_color or "white",
            "biog_color": user.biog_color,
            #"template": user.template,
            #"NamePositionRight":user.NamePositionRight,
            #"NamePositionLeft" : user.NamePositionLeft,
            #"NamePositionUp": user.NamePositionUp,
            #"NamePositionDown": user.NamePositionDown,
            #"BiogPositionRight": user.BiogPositionRight,
            #"BiogPositionLeft": user.BiogPositionLeft,
            #"BiogPositionUp": user.BiogPositionUp,
            #"BiogPositionDown": user.BiogPositionDown,
            #"Box1Color": user.Box1Color,
            #"Box2Color": user.Box2Color,
            #"Box3Color": user.Box3Color,
            #"Box4Color" : user.Box4Color,
            #"Box5Color": user.Box5Color,
            #"Box6Color": user.Box6Color,
            #"Box1Text": user.Box1Text,
            #"Box2Text": user.Box2Text,
            #"Box3Text": user.Box3Text,
            #"Box4Text": user.Box4Text,
            #"Box5Text": user.Box5Text,
            #"Box6Text": user.Box6Text,
        }
    else:
        # If user does not exist, return default values
        return {
            "title": "SLUH's page",
            "biog": "",
            "background_color": "",
            "name_color": "",
            "biog_color": ""
            #"template": "",
            #"NamePositionRight":"",
            #"NamePositionLeft" : "",
            #"NamePositionUp": "",
            #"NamePositionDown":"",
            #"BiogPositionRight":"",
            #"BiogPositionLeft": "",
            #"BiogPositionUp": "",
            #"BiogPositionDown": "",
            #"Box1Color": "",
            #"Box2Color": "",
            #"Box3Color": "",
            #"Box4Color" : "",
            #"Box5Color": "",
            #"Box6Color": "",
            #"Box1Text": "",
            #"Box2Text": "",
            #"Box3Text": "",
            #"Box4Text": "",
            #"Box5Text": ."",
            #"Box6Text": ."",
        }


@app.post("/my-page")
async def change_data(user_post: UserValidate, request: Request, db: Session = Depends(get_db)):
    uid = request.headers.get("Authorization")  # get UID from headers

    if not uid:
        raise HTTPException(status_code=400, detail="UID missing")

    # Check if user already exists in the database
    user = db.query(Portfolio).filter(Portfolio.uid == uid).first()

    if not user:
        # If user does not exist, create a new user record
        user = Portfolio(uid=uid, title="SLUH's page", biog="", background_color="", name_color="",biog_color="")
        db.add(user)
        db.commit()

    # Update the user's data with the new values
    if user_post.title is not None:
        user.title = user_post.title
    if user_post.biog is not None:
        user.biog = user_post.biog
    if user_post.background_color is not None:
        user.background_color = user_post.background_color
    if user_post.name_color is not None:
        user.name_color = user_post.name_color
    if user_post.biog_color is not None:
        user.biog_color = user_post.biog_color
    #if user_post.template is not None:
    #    user.template = user_post.template
    db.commit()  # Commit changes to the database

    return {
        "title": f"{user.title}'s Portfolio",
        "biog": user.biog,
        "background_color": user.background_color,
        "name_color": user.name_color,
        "biog_color": user.biog_color,
        #"template": user.template,
        #"NamePositionRight":user.NamePositionRight,
        #"NamePositionLeft" : user.NamePositionLeft,
        #"NamePositionUp": user.NamePositionUp,
        #"NamePositionDown": user.NamePositionDown,
        #"BiogPositionRight": user.BiogPositionRight,
        #"BiogPositionLeft": user.BiogPositionLeft,
        #"BiogPositionUp": user.BiogPositionUp,
        #"BiogPositionDown": user.BiogPositionDown,
        #"Box1Color": user.Box1Color,
        #"Box2Color": user.Box2Color,
        #"Box3Color": user.Box3Color,
        #"Box4Color" : user.Box4Color,
        #"Box5Color": user.Box5Color,
        #"Box6Color": user.Box6Color,
        #"Box1Text": user.Box1Text,
        #"Box2Text": user.Box2Text,
        #"Box3Text": user.Box3Text,
        #"Box4Text": user.Box4Text,
        #"Box5Text": user.Box5Text,
        #"Box6Text": user.Box6Text,
    }
