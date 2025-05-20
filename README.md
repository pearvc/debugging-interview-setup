# Debugging Interview Setup

This repository provides a setup for verifying that your Python or JavaScript environments are correctly configured for the interview. You can use either Python or JavaScript, depending on your preference. Clone this repo locally and follow the instructions below!

---

## Python Setup

### 1. (OPTIONAL, depending on your local workflow) Create or Activate a Virtual Environment
To avoid conflicts and to make it easy to reuse the same environment for other projects, use a virtual environment if you prefer (e.g. venv, conda, etc.). 

> **Note:** If using an environment, make sure you are able to use it in a different folder/repo, as you will need it to run the code the day of the interview.

### 2. Install Python Requirements
```sh
pip install -r requirements.txt
```

### 3. Test Python Requirements
Run the following script to check that all required packages can be imported:
```sh
python test_imports.py
```
If all imports succeed, you'll see a success message. If any fail, the script will print which ones failed. Make sure you have all dependencies, etc sorted out before the day of the interview.

---

## JavaScript/Node.js Setup

### 1. Install Node.js Dependencies
Make sure you have Node.js (v14 or higher) installed. Then run:
```sh
npm install
```

from within this directory.

### 2. Test Node.js Environment
Run the following script to check that your Node.js environment is set up correctly:
```sh
node test_imports.js
```
This will check for:
- Existence of `package.json`
- Existence of `node_modules` directory
- Node.js version compatibility

If all checks pass, you'll see a success message. Otherwise, the script will tell you what needs to be fixed.

---

## Troubleshooting
- If you encounter issues, please email your contact at Pear for help.
- For Python, check your active environment with `which python` or `which pip`. You may need to specify python3 or pip3. 
- For Node.js, check your version with `node --version`. 