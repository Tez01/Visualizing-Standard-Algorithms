from .routers import home
from fastapi import FastAPI


app =   FastAPI()

app.include_router(home.router) 