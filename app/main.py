from .routers import home
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, RedirectResponse


app =   FastAPI()

# Used to handle static files. Mounts an independent application to handle static files
app.mount("/static", StaticFiles(directory = "static"), name = "static")

# Include created routes in the router folder to the main application.
app.include_router(home.router) 

@app.get("/")
async def goToHome(request: Request):
        # Redirect to home
        return RedirectResponse("/home")