import AWS = require("aws-sdk");
import { config } from "./config/config";

const credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: "v4",
  region: config.aws_region,
  params: { Bucket: config.aws_bucket },
});

export function handleGetSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl("getObject", {
    Bucket: config.aws_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

export function handlePutSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl("putObject", {
    Bucket: config.aws_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}
