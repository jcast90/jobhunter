import fetch from 'node-fetch';

export async function handler(event, context, callback) {
  return callback(null, {
    statusCode: 200,
    body: 'hello world'
  });
}
