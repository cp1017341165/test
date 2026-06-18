// Cloudflare Pages Function - 祝福语 API
// 路径: /api/wishes

export async function onRequest(context) {
  const { request, env } = context;

  // CORS 头
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // 处理预检请求
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers });
  }

  // GET - 获取祝福语列表
  if (request.method === 'GET') {
    try {
      // 从 KV 获取祝福语
      const wishes = await env.WISHES.get('all', 'json') || [];
      return new Response(JSON.stringify(wishes), {
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    } catch (e) {
      console.error('获取祝福失败:', e);
      return new Response(JSON.stringify([]), {
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }
  }

  // POST - 添加祝福语
  if (request.method === 'POST') {
    try {
      const { name, content } = await request.json();

      // 验证
      if (!name || !content) {
        return new Response(JSON.stringify({ error: '请填写姓名和祝福语' }), {
          status: 400,
          headers: { ...headers, 'Content-Type': 'application/json' }
        });
      }

      // 获取现有祝福
      const wishes = await env.WISHES.get('all', 'json') || [];

      // 添加新祝福（最多保留 100 条）
      wishes.unshift({
        name: name.trim(),
        content: content.trim(),
        time: Date.now()
      });

      // 只保留最新 100 条
      if (wishes.length > 100) {
        wishes.length = 100;
      }

      // 保存到 KV
      await env.WISHES.put('all', JSON.stringify(wishes));

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    } catch (e) {
      console.error('添加祝福失败:', e);
      return new Response(JSON.stringify({ error: '服务器错误' }), {
        status: 500,
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }
  }

  return new Response('Method not allowed', { status: 405, headers });
}
