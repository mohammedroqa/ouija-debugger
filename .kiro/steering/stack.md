---
inclusion: always
---
# Stack and conventions
- Language: TypeScript everywhere (strict mode). Node.js 24 on Lambda (nodejs20.x is deprecated).
- Infra: AWS CDK v2 (TypeScript) in `/infra`. No console click-ops; everything in CDK.
- Backend: Lambda + API Gateway HTTP API. Storage: DynamoDB (on-demand billing).
- AI: Amazon Bedrock via the AWS SDK v3 `@aws-sdk/client-bedrock-runtime`. Model ID comes from env var `BEDROCK_MODEL_ID`, never hardcoded.
- Frontend: React + Vite + TypeScript, Canvas 2D first. Hosted on Amplify or S3 + CloudFront.
- Tests: Vitest. Use fast-check (property-based) for parsers and anything taking arbitrary input.
- Keep Lambdas small, single-purpose, and pure-function-first so logic is unit-testable without AWS.
- Prefer small, reviewable changes. Run `npm test` and `npm run synth` before declaring a task done.
