const scrollHeaderClass = (
  options = {
    headerElement: document.createElement('header'), // html element to apply the class
    scrollClass: null, // string of the class to apply
    threshold: 100, // in pixels
    callBackFn: () => {}, // function to call when the threshold is reached
  }
) => {
  let { headerElement, scrollClass, threshold, callBackFn } = options;

  let isScrolled = false;

  window.addEventListener('scroll', () => {
    if (window.scrollY > threshold) {
      headerElement.classList.add(scrollClass);
      if (!isScrolled) {
        callBackFn();
      }
      isScrolled = true;
    } else {
      headerElement.classList.remove(scrollClass);
      isScrolled = false;
    }
  });
};
