# PastAirFuture 

**Clone and run**

This is an Electron application that needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.


## To Use

Clone this repo and run with Docker or using npm.

With npm:
```bash
# Clone this repository
git clone 
# Go into the repository
cd PastAirFuture
# Install dependencies
npm i
# Run the app
npm run start
```

With Docker:
```bash
# Clone repository
git clone
# Go into the repository
cd PastAirFuture
# Build Docker image
docker build .
# Run docker image
docker run -d -p 3000:3000 <name of image>
```

## Running mongo:


- Ensure that mongodb is installed and reday to use.
- Download [dump-tar-file](https://drive.google.com/file/d/1pj9n9wFtuwIWhy5M4QChAJNEIUQcsmCH/view?usp=sharing)
- Extract tar file using command: tar -xvzf dump.tar.gz
- Import into a mongo database using ```mongoimport -d mydb -c things --type csv --file dump.csv --headerline```


