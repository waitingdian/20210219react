const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);  // 衡量视觉稳定性。为了提供一个好的用户体验，CLS应该小于0.1。
      getFID(onPerfEntry);  // 衡量可交互性。为了提供一个好的用户体验，FID应该在100毫秒内。
      getFCP(onPerfEntry);  // 衡量加载性能。为了提供一个好的用户体验，LCP应该在2.5秒内。
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
