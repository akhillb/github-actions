const core = require('@actions/core');

const isPost = !!core.getState('isPost');

module.exports = {
  isPost,
};
