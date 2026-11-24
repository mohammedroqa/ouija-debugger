---
inclusion: always
---
# AWS conventions
- Resource names: prefix `ouija-` (e.g. `ouija-incidents`, `ouija-ingest-fn`).
- Least privilege: use CDK `grant*` methods; never use `*` actions or `*` resources in IAM.
- DynamoDB: on-demand billing, `RemovalPolicy.DESTROY` is allowed (hackathon), PITR off.
- Lambdas: set `timeout` explicitly, `memorySize` 256 default, log retention 1 week, `reservedConcurrentExecutions` for any Bedrock-calling function (cost control).
- Env config via Lambda environment variables defined in CDK; no secrets in code or repo.
- Tag every stack with `project=ouija-debugger`.
- Never commit AWS credentials or account IDs. Region is taken from the CDK environment.
