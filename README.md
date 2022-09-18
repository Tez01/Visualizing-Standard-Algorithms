# Visualizing-Standard-Algorithms
## Demo
![](https://github.com/Tez01/Visualizing-Standard-Algorithms/blob/main/demo.gif)
## Download the repository
 * Use the following command to clone the repository in your local computer from github  
 `git clone <cloned address>`
 ## Setup
 ### Create a virtual environment
 * Open a terminal window and cd to the cloned repository directory.
 * Use the following command to install a virtual environment inside the cloned repository (Before this make sure python is installed and added to system variables in host).  
 `c:\>python -m venv c:\path\to\myenv`
### Activate virtual environment
* Depending upon the terminal used, use the following commands to activate the virtual environment.  
For POSIX:  
`source <venv>/bin/activate`  
For Windows:  
&nbsp;&nbsp;CMD:  
&nbsp;&nbsp;`C:\> <venv>\Scripts\activate.bat`  
&nbsp;&nbsp;Powershell  
&nbsp;&nbsp;`PS C:\> <venv>\Scripts\Activate.ps1`  

### Install dependencies
* Use the following command to install dependencies inside the virtual environment.  
`pip install -r requirements.txt`

## Run the server
* Finally, run the uvicorn server using the following command  
`uvicorn app.main:app --reload`
* Open a web browser window at _http://127.0.0.1:8000/home_ to access the home page of frontend.
