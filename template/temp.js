//line Chart data

{
  title: { // 图表标题
    text: '', // 主标题
    subtext:''// 副标题
  },  
  xAxis: { // x 轴数据
    data: ['周一','周二','周三','周四','周五','周六','周日']
  },
  //系列列表 , 当只有一条折线时，series数组中，只有一个对象，
  // 多条折现时，series数组中有多个对象
	series: [  
    {       // 第一条折线
      name:'邮件营销', //系列名称
      type:'line',    //图表类型
      stack: '总量',  // 是否需要堆叠 ？
      data:[120, 132, 101, 134, 90, 230, 210]
    },
    {        // 第二条折线
      name:'邮件营销',  
      type:'line',      
      stack: '总量',
      data:[120, 132, 101, 134, 90, 230, 210]
    }
	]
}