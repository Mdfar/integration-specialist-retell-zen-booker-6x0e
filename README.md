AI Voice Booking Integration Hub

Integrated workflow system connecting Retell AI (Voice), Zen Booker (Scheduling), and GoHighLevel (CRM).

Workflow Logic

Inbound/Outbound Call: Retell AI handles the voice conversation.

Webhook Trigger: Upon hangup, Retell sends the transcript and analysis metadata.

Availability Sync: Make.com verifies the extracted time slot with Zen Booker.

Booking: If valid, the appointment is created in Zen Booker.

CRM Update: Lead info, call summary, and booking status are synced to GoHighLevel to trigger nurture SMS/Emails.

Setup

Import make-scenario-v1.json into Make.com.

Replace YOUR_LOCATION_ID and API keys in the environment variables.

Configure Retell AI Post-Call Webhook to point to the Make.com URL.