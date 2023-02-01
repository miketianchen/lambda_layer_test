export interface ClientParams {
  region: string;
  credentials?: {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken: string;
  };
  retryStrategy?: any;
}

export const HelloWorld = "Hello World";

export const TestFunction = () => {
  return "Hello World!";
};

export class S3Example {
  client;

  constructor() {
    this.client = "CLIENT";
  }

  async getAllBucketNames(): Promise<string[]> {
    const bucketNames: string[] = [];

    bucketNames.push("TEST");

    return bucketNames;
  }
}

export type TypeTest = "string";
