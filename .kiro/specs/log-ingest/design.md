# Log Ingest: Design

## Flow
Victim service -> CloudWatch Log Group -> Subscription Filter -> `ouija-ingest-fn` -> DynamoDB `ouija-incidents`

## Components
- `services/ingest/src/decode.ts`: decode CloudWatch payload (base64 + gunzip).
- `services/ingest/src/parse.ts`: pure function `parseLine(raw: string): ParsedEvent`.
- `services/ingest/src/group.ts`: pure function `groupEvents(events, windowSec)`.
- `services/ingest/src/handler.ts`: wires decode -> parse -> group -> DynamoDB.

## Data model (DynamoDB `ouija-incidents`)
- PK `incidentId` (string, ULID). GSI `byStatus`: PK `status`, SK `lastSeen`.
- Attributes: `service`, `firstSeen`, `lastSeen`, `events` (list), `status`, `diagnosis` (map, added later).

## Error handling
Parser is total (never throws). Handler rethrows only on persistence errors.
