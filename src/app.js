import "./utils";

document.documentElement.style.fontSize = document.documentElement.clientWidth/19.2 + 'px';

window.fontSize = document.documentElement.clientWidth/19.2;

export const dva = {
  config: {
    onError : function(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

