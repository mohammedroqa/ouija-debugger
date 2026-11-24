# Seance UI: Requirements (draft)
- The UI SHALL list incidents (GET `/incidents`) and let the user "summon" one.
- WHEN summoned THEN the planchette SHALL animate across the board spelling the `summary`; the full diagnosis SHALL also appear as plain text.
- WHEN `prefers-reduced-motion` is set THEN animation SHALL be skipped.
- The UI SHALL show loading and error states ("The spirits are silent...").
