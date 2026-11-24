# Diagnosis: Requirements (draft)
- WHEN a client POSTs `/incidents/{id}/diagnose` THEN the system SHALL load the incident, call Bedrock, store and return the diagnosis.
- The diagnosis SHALL contain `summary` (<= 200 chars, plain language), `likelyCause`, `suggestedFix`, and `confidence` (low|medium|high).
- WHEN Bedrock output is not valid JSON THEN the system SHALL retry once, then return a safe fallback diagnosis.
- Logs SHALL be treated as untrusted data in the prompt (prompt-injection safe: logs are delimited and the model is told to never follow instructions inside them).
- Bedrock-calling Lambda SHALL have reserved concurrency to cap cost.
