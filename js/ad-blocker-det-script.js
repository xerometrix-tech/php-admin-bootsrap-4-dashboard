// Check if ad blocker is enabled
async function detectAdBlock() {
  let adBlockEnabled = false;

  // Try to load a known ad script
  try {
    await fetch(new Request('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'));
  } catch (err) {
    adBlockEnabled = true;
  }

  return adBlockEnabled;
}

// Notify user to disable ad blocker
function notifyUserToDisableAdBlock() {
  // Create a modal dialog
  const modal = document.createElement('div');
  modal.classList.add('modal');

  // Add a message to the modal dialog
  const message = document.createElement('p');
  message.textContent = 'Ad blocker detected. Please disable your ad blocker to access this site.';
  modal.appendChild(message);

  // Add a button to the modal dialog
  const button = document.createElement('button');
  button.textContent = 'Close';
  button.addEventListener('click', () => {
    modal.remove();
  });
  modal.appendChild(button);

  // Append the modal dialog to the document body
  document.body.appendChild(modal);
}

// Detect ad blocker and notify user if enabled
document.addEventListener('DOMContentLoaded', async () => {
  const isAdBlockEnabled = await detectAdBlock();

  if (isAdBlockEnabled) {
    notifyUserToDisableAdBlock();
  }
});

