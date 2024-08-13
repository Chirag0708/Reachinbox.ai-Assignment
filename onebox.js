// onebox.js
const threadList = document.getElementById('thread-list');
const replyBox = document.getElementById('reply-box');
const replyEditor = document.getElementById('reply-editor');

// Fetch data from /onebox/list endpoint
fetch('/onebox/list')
  .then(response => response.json())
  .then(data => {
    // Display thread list
    data.forEach(thread => {
      const threadItem = document.createElement('li');
      threadItem.textContent = thread.subject;
      threadList.appendChild(threadItem);
    });
  });

// Implement keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'd') {
    // Delete current thread
    const threadId = getThreadIdFromUrl();
    fetch(`/onebox/${threadId}`, { method: 'DELETE' });
  } else if (e.key === 'r') {
    // Open reply box
    replyBox.style.display = 'block';
  }
});

// Implement custom text editor
replyEditor.addEventListener('input', () => {
  // Add custom buttons to editor
  const saveBtn = document.getElementById('save-btn');
  const variablesBtn = document.getElementById('variables-btn');
  // ...
});

// Implement Reply
const sendBtn = document.getElementById('send-btn');
sendBtn.addEventListener('click', () => {
  const threadId = getThreadIdFromUrl();
  const replyData = {
    from: 'email',
    to: 'email',
    subject: '',
    body: '<html></html>'
  };
  fetch(`/reply/${threadId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(replyData)
  });
});

// Implement light and dark mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  // Toggle light and dark mode
  document.body.classList.toggle('dark-mode');
});