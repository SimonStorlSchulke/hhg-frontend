
## Start dev server locally
Requires a recent nodejs version to be installed.  
`npm i`  
`npm run start`

## Deploy latest source onto the server
1. ssh onto the server (ask Simon)
2. run `./deploy-prod.sh`
    - This will pull the latest source from github and build the project into `/var/www/html`