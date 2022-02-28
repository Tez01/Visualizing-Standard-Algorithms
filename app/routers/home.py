from fastapi import APIRouter, status
from fastapi.responses import HTMLResponse

router = APIRouter(
        prefix = "/home",
        tags = ['home']
)

@router.get("", status_code= status.HTTP_200_OK, response_class = HTMLResponse)
async def home():
        return        """
        <!DOCTYPE html>
<html lang="en">
        <head>
                <title>Home</title>
        </head>
        <body>
                <h1>This is the home page of my application</h1>
        </body>
</html>
        """

