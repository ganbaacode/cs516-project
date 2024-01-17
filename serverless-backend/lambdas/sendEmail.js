
const AWS = require('aws-sdk');

exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const payload = JSON.parse(event.body);

    const { name, phone, email, subject, message } = payload;

    const ses = new AWS.SES({ region: 'us-east-2' });

    const params = {
        Destination: {
            ToAddresses: ['ganbayar.tsogbadrakh@miu.edu'],
        },
        Message: {
            Body: {
                Text: { Data: `Name: ${name}\nPhone Number: ${phone}\nEmail: ${email}\nMessage: ${message}` },
            },
            Subject: { Data: subject }, // 
        },
        Source: 'ganbayar.plus@gmail.com',
    };

    try {
        await ses.sendEmail(params).promise();
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify('Message processed successfully'),
    };
    return response;
};
