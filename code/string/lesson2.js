export default str => {
  {
    let array = str.split(''), //将输入转化为数组方便处理
      pre = '', //对比前半部分
      next = '', //对比后半部分
      flag = 0, //01变化次数
      curNum = '', //当前比较数字
      count = 0; // 结果总数
    while (array.length) {
      let cur = array.shift();
      if (!curNum) {
        //初始化
        pre += cur;
        curNum = cur;
      }
      if (curNum == cur) {
        //当前位数字没有发生变化
        if (flag == 0) {
          //当前只有前半部分，例如00 0
          pre += cur;
        } else if (flag == 1) {
          //前后部分都有，例如0011 1
          next += cur;
        }
      } else {
        //当前位数字发生变化
        if (flag == 0) {
          //当前只有前半部分，例如00 1
          flag += 1;
          next = cur;
          curNum = cur;
        } else if (flag == 1) {
          //前后部分都有，例如0011 0
          count += Math.min(pre.length, next.length);
          pre = next;
          next = cur;
          curNum = cur;
        }
      }
    }
    return (count += Math.min(pre.length, next.length)); //处理下剩余部分 例如 001
  }
};
