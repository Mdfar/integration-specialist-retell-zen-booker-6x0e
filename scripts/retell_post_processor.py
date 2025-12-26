import json

def process_retell_metadata(payload): """ Parses Retell AI payload to identify if a booking was successful according to the conversation transcript. """ analysis = payload.get('call_analysis', {}) transcript = payload.get('transcript', '')

# Logic to detect booking intent and extract date
is_booked = analysis.get('booking_confirmed', False)
extracted_date = analysis.get('appointment_time', None)

return {
    "is_booked": is_booked,
    "date": extracted_date,
    "lead_name": payload.get('customer_name'),
    "summary": analysis.get('agent_summary')
}

This would run as a serverless function if custom logic is needed beyond Make.com