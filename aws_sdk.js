/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/s3-example-creating-buckets.html.

Purpose:
s3_createbucket.js demonstrates how to create an Amazon S3 bucket.

Inputs (replace in code):
- BUCKET_NAME

Running the code:
nodes3_createbucket.js
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// snippet-start:[s3.JavaScript.buckets.createBucketV3]
// Get service clients module and commands using ES6 syntax.
import { CreateBucketCommand } from "@aws-sdk/client-s3";
import { S3Client } from "@aws-sdk/client-s3";
// import { s3Client } from "./libs/s3Client.js";

// Set the AWS Region.
const REGION = "ap-southeast-2";
// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });
export { s3Client };

// Set the bucket parameters.

export const bucketParams = { Bucket: "logshipper-230209a" };

// Create the Amazon S3 bucket.
export const run = async () => {
  try {
    const data = await s3Client.send(new CreateBucketCommand(bucketParams));
    console.log("Success", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};
run();
// snippet-end:[s3.JavaScript.buckets.createBucketV3]
// For unit tests only.
// module.exports ={run, bucketParams};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const AWS = require('aws-sdk');
// // Set the region
// // AWS.config.update({region: 'REGION'});
// // Create S3 service object
// const s3 = new AWS.S3({apiVersion: '2006-03-01'});
// const bucketParams = {
//    Bucket: 'nancyrequireawssdk'
// //    CreateBucketConfiguration: {
// //       LocationConstraint: 'REGION'
// //    }
// };

// // Create the bucket
// s3.createBucket(bucketParams, function(err, data) {
//    if (err) {
//       console.log("Error", err);
//    } else {
//       console.log("Success", data.Location);
//    }
// });