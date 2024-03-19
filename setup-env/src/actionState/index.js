const core = require('@actions/core');
const constants = require('../../config/constants');

const {
  ACTION_STATE_VARS,
} = constants;

class ActionState {
  static _getJobStartedState() {
    return core.getState(ACTION_STATE_VARS.SETUP_ENV_JOB_STARTED);
  }

  static markJobStarted() {
    core.saveState(ACTION_STATE_VARS.SETUP_ENV_JOB_STARTED, 'true');
  }

  static isPostCleanupJob() {
    return !!this._getJobStartedState();
  }
}

module.exports = ActionState;
