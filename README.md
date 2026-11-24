# 👻 Ouija Debugger (Kiroween 2026 - Frankenstein)

A crashed service "speaks" through a seance board. Logs (CloudWatch) + an LLM
(Amazon Bedrock) + a haunted UI, stitched into one app and built with Kiro.

## Quick start
```bash
npm install            # root, installs workspaces
cd infra
npx cdk bootstrap      # once per account/region
npx cdk deploy         # prints ApiUrl
curl "$API_URL/hello"  # {"message":"The spirits are listening..."}
```

## Layout
- `.kiro/` steering docs, specs, hooks (required for submission)
- `infra/` AWS CDK (TypeScript)
- `services/` Lambda code (hello, ingest, diagnose, victim)
- `web/` React + Vite seance UI

## License
MIT
