document.addEventListener('DOMContentLoaded', function() {
  const barrages = document.querySelectorAll('.barrage');

  // 生成随机颜色
  function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  // 初始化每条弹幕
  barrages.forEach((barrage, index) => {
      console.log(index, 'index')
      if (index === 0 ) {
        barrage.style.transform = `translateX(0vw)`; // 设置不同的初始位置
      } else {
        barrage.style.transform = `translateX(100vw)`; // 设置不同的初始位置
      }
    //   barrage.style.transform = `translateX(100vw)`; // 设置不同的初始位置
      barrage.style.top = index * 30 + 'px'
      barrage.style.left = index * 50 + 'px'
      barrage.style.color = getRandomColor(); // 设置随机颜色
  });
});
