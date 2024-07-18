'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = { optional: [
    'returnMetadataOnly',
    'exportFiles',
    'exportSurveyFields',
    'exportDataAccessGroups',
  ] };

  return function (params, callback) {
    var body = {  content: 'log',
                  format: 'json',
                  returnFormat: 'json',
                };

    if (typeof params != 'function') {
      var keys = utils.keyCheck (params, keySet);

      if (keys.valid === false) 
        return callback (new Error (keys.errmsg));

      body = Object.assign (body, keys.keys);
    }


    utils.post (body, callback);
  }
}
