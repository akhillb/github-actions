const core = require('@actions/core');
const ActionInput = require('./actionInput');
const ActionState = require('./actionState');

/**
 * Entry point to initiate the Action.
 * 1. Triggers parsing of action input values
 * 2. Sets the environment variables required for BrowserStack
 */
const run = async () => {
  try {
    ActionState.markJobStarted();
    const inputParser = new ActionInput();
    inputParser.setEnvVariables();
  } catch (e) {
    core.setFailed(`Action Failed: ${e}`);
  }
};

const cleanup = async () => {
  core.info('Starting cleanup job');
  const { exitCode } = process;
  core.info(`Process exit code: ${exitCode}`);
  if (typeof exitCode === 'undefined' || exitCode === 0) {
    core.info('Status passed');
  } else {
    core.info('Status failed');
  }
};

if (!ActionState.isPostCleanupJob()) {
  run();
} else {
  cleanup();
}
