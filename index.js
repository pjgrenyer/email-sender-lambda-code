const package = require('./package.json');

exports.handler = async (event) => {
    console.log(event);
    const response = {
        statusCode: 200,
        body: JSON.stringify(event),
        version: package.version
    };
    return response;
};
