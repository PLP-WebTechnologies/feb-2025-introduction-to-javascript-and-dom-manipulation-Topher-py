function changeText() {
    const message = document.getElementById('message');
    message.textContent = message.textContent === 'Hello, world!' 
      ? 'Fun fact: JavaScript was created in 10 days!'
      : 'Fun fact: Bananas are berries, but strawberries are not! 🍌🍓';
  }

  function changeStyle() {
    const box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'coral' 
      ? 'lightgreen' 
      : 'coral';
    box.style.borderRadius = box.style.borderRadius === '50%' 
      ? '0%' 
      : '50%';
  }

  function toggleElement() {
    const existing = document.getElementById('newElement');
    if (existing) {
      existing.remove();
    } else {
      const newElem = document.createElement('p');
      newElem.id = 'newElement';
      newElem.textContent = 'I am a new element!';
      document.body.appendChild(newElem);
    }
  }