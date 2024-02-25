

export default {
  'POST /api/v1/upload': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: [] },
      errorCode: 0,
    });
  },
  
};
