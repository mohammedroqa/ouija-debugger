# Log Ingest: Requirements

## Intro
Capture error-bearing logs from the victim service in CloudWatch, parse them into structured incidents, and store them in DynamoDB.

## Requirements

### 1. Receive logs
**User story:** As the system, I want to receive log events from CloudWatch in near real time so incidents appear without polling.
- WHEN a log event matching the error filter is written to the victim service log group THEN the ingest Lambda SHALL be invoked via a subscription filter.
- WHEN the payload is base64+gzip encoded (CloudWatch format) THEN the Lambda SHALL decode it before parsing.

### 2. Parse logs
**User story:** As the system, I want raw log lines normalized so the diagnosis step gets consistent input.
- WHEN a log line is JSON THEN the parser SHALL extract `level`, `message`, `timestamp`, and `stack` if present.
- WHEN a log line is plain text THEN the parser SHALL extract a best-effort `level`, `message`, and `timestamp`.
- WHEN a line is malformed, empty, or arbitrarily long THEN the parser SHALL NOT throw; it SHALL return a result with `parsed: false` and a truncated raw message (max 2,000 chars).

### 3. Group into incidents
- WHEN multiple error events arrive within a 60-second window for the same service THEN they SHALL be grouped into one incident.
- Each incident SHALL have `incidentId`, `service`, `firstSeen`, `lastSeen`, `events[]` (capped at 50), `status` (`new` | `diagnosed`).

### 4. Persist
- WHEN an incident is created or updated THEN it SHALL be written to the `ouija-incidents` DynamoDB table.
- WHEN a write fails THEN the Lambda SHALL log the error and rethrow so CloudWatch retries apply.

## Property-based test targets
- Parser never throws for any string input.
- Parser output message length is always <= 2,000 chars.
- Grouping is order-independent for events in the same window.
