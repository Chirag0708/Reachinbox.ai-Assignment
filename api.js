// api.js
const apiUrl = 'https://api.reachinbox.com';

// Fetch data from /onebox/list endpoint
export function getOneboxList() {
  return fetch(`${apiUrl}/onebox/list`)
    .then(response => response.json());
}

// Fetch data from /onebox/:thread_id endpoint
export function getOneboxThread(threadId) {
  return fetch(`${apiUrl}/onebox/${threadId}`)
    .then(response => response.json());
}

// Delete thread using /onebox/:thread_id DELETE endpoint
export function deleteOneboxThread(threadId) {
  return fetch(`${apiUrl}/onebox/${threadId}`, { method: 'DELETE' });
}

// Send reply using /reply/:thread_id POST endpoint
export function sendReply(threadId, replyData) {
  return fetch(`${apiUrl}/reply/${threadId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(replyData)
  });
}