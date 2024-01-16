const AWS = require('aws-sdk');
const S3 = new AWS.S3();

const bucket = process.env.bucketName;

exports.handler = async (event) => {
    try {

        if (!event.pathParameters || !event.pathParameters.filename) {
            return {
                statusCode: 400,
                body: "Not found the parameter!"
            }
        }

        const filename = event.pathParameters.filename;

        const data = await S3.getObject({ Bucket: bucket, Key: filename }).promise();

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'Content-Disposition': 'attachment; filename=cv.docx',
            },
            isBase64Encoded: true,
            body: data.Body.toString('base64'),
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: error.statusCode || 400,
            body: error.message || JSON.stringify(error.message)
        }
    }
}

