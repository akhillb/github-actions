const core = require('@actions/core');
const ActionInput = require('./actionInput');
const http = require('@actions/http-client');

/**
 * Entry point to initiate the Action.
 * 1. Triggers parsing of action input values
 * 2. Sets the environment variables required for BrowserStack
 */
const run = async () => {
  try {
    const inputParser = new ActionInput();
    inputParser.setEnvVariables();
    const httpClient = new http.HttpClient('poc-set-env');
    const response = await httpClient.get('https://postman-echo.com/get');
    const body = await response.readBody();
    const obj = JSON.parse(body);
    core.info(JSON.stringify(obj));
  } catch (e) {
    core.setFailed(`Action Failed: ${e}`);
  }
};

run();
