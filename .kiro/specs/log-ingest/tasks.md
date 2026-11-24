# Log Ingest: Tasks
- [ ] 1. Scaffold `services/ingest` (TS, Vitest, fast-check)
- [ ] 2. Implement `parseLine` + unit tests + PBT (never throws, length cap)
- [ ] 3. Implement `groupEvents` + tests (window grouping, 50-event cap)
- [ ] 4. Implement `decode` for CloudWatch payloads + tests
- [ ] 5. Implement handler + DynamoDB write (mock client in tests)
- [ ] 6. CDK: table, GSI, ingest Lambda, subscription filter, grants
- [ ] 7. Victim service that emits JSON error logs on demand
- [ ] 8. End-to-end check: trigger error -> incident row appears
