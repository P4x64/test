// 这是 Vercel 部署的代码，专门用来转发请求
module.exports = async (req, res) => {
  const target = 'https://pi.hahaka.com/api/decode'; // 目标地址
  const response = await fetch(target, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.status(200).json(data);
};