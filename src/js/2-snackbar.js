import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
  position: "topRight",
  layout: 1,
});

const form = document.querySelector(".form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const formData = new FormData(this);
  const delay = formData.get("delay");
  const state = formData.get("state");

  const promise = new Promise((resolve, reject) => {
    if (state === "fulfilled") {
      setTimeout(() => resolve(delay), delay);
    } else if (state === "rejected") {
      setTimeout(() => reject(delay), delay);
    }
  });

  promise.then(
   
    (delay) => {
      iziToast.success({
        title: "Success",
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    },
  
    (delay) => {
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${delay}ms`,
      });
    }
  );
});
