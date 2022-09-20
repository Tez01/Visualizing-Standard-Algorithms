from fastapi import APIRouter, status, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates")

router = APIRouter(
        prefix = "/home",
        tags = ['home']
)

@router.get("", status_code= status.HTTP_200_OK, response_class = HTMLResponse)
async def home(request: Request):
        return templates.TemplateResponse("shared/layout.html", {"request": request})

# @router.get("/{anyOtherPath}")
# async def goToHome(request: Request, anyOtherPath: str):
#         print("Full path + "+ anyOtherPath)
#         return RedirectResponse("/home/")
        