const totalGroup = [
  { province: '浙江', city: '杭州', type: '笔', price: '1', cost: '0.5' },
  { province: '浙江', city: '杭州', type: '纸张', price: '2', cost: '1.5' },
  { province: '浙江', city: '舟山', type: '笔', price: '2', cost: '1.5' },
  { province: '浙江', city: '舟山', type: '纸张', price: '0.5', cost: '0.2' },
  { province: '吉林', city: '长春', type: '笔', price: '3', cost: '2' },
  { province: '吉林', city: '长春', type: '纸张', price: '2', cost: '1' },
  { province: '吉林', city: '白山', type: '笔', price: '4', cost: '3' },
  { province: '吉林', city: '白山', type: '纸张', price: '1', cost: '0.5' },
  { price: '15.5', cost: '10.2' },
  { province: '浙江', price: '5.5', cost: '3.7' },
  { province: '浙江', city: '杭州', price: '3', cost: '2' },
  { province: '浙江', city: '舟山', price: '2.5', cost: '1.7' },
  { province: '吉林', price: '10', cost: '6.5' },
  { province: '吉林', city: '长春', price: '5', cost: '3' },
  { province: '吉林', city: '白山', price: '5', cost: '3.5' },
  { type: '笔', price: '10', cost: '7' },
  { province: '浙江', type: '笔', price: '3', cost: '2' },
  { province: '吉林', type: '笔', price: '7', cost: '5' },
  { type: '纸张', price: '5.5', cost: '3.2' },
  { province: '浙江', type: '纸张', price: '2.5', cost: '1.7' },
  { province: '吉林', type: '纸张', price: '3', cost: '1.5' },
];

export default {
  'GET /api/v1/totalGroup': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: totalGroup },
      errorCode: 0,
    });
  },
};
