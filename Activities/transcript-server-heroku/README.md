# Transcript Server (Implemented) - Heroku Deployment

The goal of this activity is to deploy the transcript API server to the Heroku PaaS. 

Heroku will detect that this is an NPM project, will automatically install dependencies and then run `npm start`. The application will be availabe at the URL of your choice.

## Create a Heroku Account

First, go to [Heroku.com](https://www.heroku.com) and create an account.

Heroku is providing free credits for students:
   1. If you have not already, [register for the GitHub student pack](https://education.github.com/pack)
   2. [Signup for Heroku's student/github pack](https://www.heroku.com/github-students/signup)

## Create a new Heroku Project

Once signed in, create a new app. Choose a name for your app -- this name is part of the URL of your app. Click "Create app".

## Deploy to Heroku

There are several ways to deploy an app. We will use the Heroku CLI tools. We will create a new git repo, and push that repo to Heroku. 

1. Download and install the [Heroku CLI tools](https://devcenter.heroku.com/articles/heroku-command-line). 
2. Run `heroku login` to login. This will open a web browser.
3. Create a git repo in this directory with `git init`
4. Run `heroku git:remote -a appname`, where `appname` is the name that you used when you created the new app.
5. Configure the project with `heroku config:set USE_NPM_INSTALL=true NPM_CONFIG_PRODUCTION=false`. The default behavior of Heroku is to install only the "production" dependencies for NPM projects, and not the "devDependencies". For this project's build scripts, it is necessary to have the devDependencies installed - these settings will tell Heroku to use `npm install` instead of `npm ci`, and to avoid deleting the devDependencies.
6. Create a git commit, adding all of the files in this directory, and then push to heroku:
```
git add .
git commit -a -m "Initial commit"
git push heroku main
```

It may take minutes, you should see output on the console as it is making progress. The file [expectedBuildOutput.txt](expectedBuildOutput.txt) contains the expected output.


## Inspect deployed application

Once deployed, your app is publicly available at the address that you chose. To open it, click the "Open app" button in Heroku, or directly enter the address in your browser. For example, for our app named `transcript-demo`, it is at  [https://transcript-demo.herokuapp.com](https://transcript-demo.herokuapp.com).

The first time that you access the site, it takes a few seconds for it to load. This is because Heroku's free-tier doesn't run apps continuously, but only starts them on demand.

If you see an "Application error" in the browser, examine the logs by running the command `heroku logs`. If you see an error such as "concurently not found", it is likely the result of skipping step 5 above. Repeat step 5, make a minor change to some file to force Heroku to see that there was a "change", make a new commit, and push it again.

You can view the API documentation by appending `/docs` to the URL, such as: [https://transcript-demo.herokuapp.com/docs](https://transcript-demo.herokuapp.com/docs)

To view the log files for your running server, run the command `heroku logs --tail` in this directory.
