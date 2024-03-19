const core = require('@actions/core');

export const IsPost = !!core.getState('isPost');
