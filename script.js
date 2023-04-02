document.getElementById('submit-button').addEventListener('click', async function(event) {
  event.preventDefault();
  
  // 获取用户输入的文本
  const userInput = document.getElementById('user-input').value;
  
  // 准备API请求数据
  const data = {
    prompt: userInput,
    max_tokens: 150, // 您可以根据需求调整回应长度
    // 其他可选参数，如temperature等
  };
  
  // 发送请求到ChatGPT API
  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'Authorization': 'Bearer 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',
 // 替换为您的API密钥
    },
    body: JSON.stringify(data),
  });

  // 处理API返回的数据
  const jsonResponse = await response.json();
  const chatResponse = jsonResponse.choices[0].text;
  
  // 在页面上显示聊天回应
  document.getElementById('chat-response').innerHTML = chatResponse;
});
