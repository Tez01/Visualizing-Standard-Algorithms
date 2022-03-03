from .routers import home
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles


app =   FastAPI()

# Used to handle static files. Mounts an independent application to handle static files
app.mount("/static", StaticFiles(directory = "static"), name = "static")

# Include created routes in the router folder to the main application.
app.include_router(home.router) 