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

## Create a new empty cdk project like hello-sdk

## Add cdk code

### Add fargate resource
- [aws cdk examples---fargate-service-with-auto-scaling](https://github.com/aws-samples/aws-cdk-examples/blob/master/typescript/ecs/fargate-service-with-auto-scaling/index.ts)
```
(example)
// Create a cluster
    const vpc = new ec2.Vpc(this, 'Vpc', { maxAzs: 2 });
    const cluster = new ecs.Cluster(this, 'fargate-service-autoscaling', { vpc });

    // Create Fargate Service
    const fargateService = new ecs_patterns.NetworkLoadBalancedFargateService(this, 'sample-app', {
      cluster,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample")
      },
    });

    // Setup AutoScaling policy
    const scaling = fargateService.service.autoScaleTaskCount({ maxCapacity: 2 });
    scaling.scaleOnCpuUtilization('CpuScaling', {
      targetUtilizationPercent: 50,
      scaleInCooldown: cdk.Duration.seconds(60),
      scaleOutCooldown: cdk.Duration.seconds(60)
    });

    new cdk.CfnOutput(this, 'LoadBalancerDNS', { value: fargateService.loadBalancer.loadBalancerDnsName });
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

### in the end, Destroying the app's resources
```
cdk destroy
```


