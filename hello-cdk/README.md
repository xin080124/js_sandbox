# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Useful commands test ok:

### source
`https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html`


### Create the app
```
mkdir hello-cdk
cd hello-cdk
cdk init app --language typescript
```
### Build the app
```
npm run build
```

### List the stacks in the app
```
cdk ls
```

### Synthesize an AWS CloudFormation template
```
cdk synth
or
cdk bootstrap
```

### Deploying the stack
```
cdk deploy
```

### then,you can modify the app
```
Update lib/hello-cdk-stack.ts. 
cdk diff
```

### then,redeploy
```
cdk deploy
```

### in the end, Destroying the app's resources
```
cdk destroy
```
