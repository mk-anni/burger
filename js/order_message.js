function ready() {

  const review = document.querySelectorAll(".reviews_item");
  const review_window = document.querySelector(".review_window");
  const close_review = document.querySelector(".close_review");


  for (const item of review) {
    var button = item.querySelector('.review_link');

    button.addEventListener('click', e => {
      const el = e.currentTarget;      
      console.log("review_window:", review_window);     
      review_window.classList.add('activeReview');

      //review_window.style.top = '200px';    
      

    });
  }

  
  close_review.addEventListener('click', e => {           
    review_window.classList.remove('activeReview');
    });

};
document.addEventListener("DOMContentLoaded", ready);