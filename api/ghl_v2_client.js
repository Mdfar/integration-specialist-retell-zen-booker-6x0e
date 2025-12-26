const axios = require('axios');

async function updateGHLOpportunity(contactId, callSummary, status) { const ghlToken = process.env.GHL_API_KEY;

const data = { pipelineId: 'PIPELINE_ID', locationId: 'LOCATION_ID', name: 'AI Voice Lead', status: status === 'booked' ? 'open' : 'lost', customFields: [ { id: 'summary_field_id', value: callSummary } ] };

try { const response = await axios.post( https://services.leadconnectorhq.com/opportunities/, data, { headers: { Authorization: Bearer ${ghlToken}, Version: '2021-07-15' } } ); return response.data; } catch (error) { console.error('Error updating GHL:', error); } }