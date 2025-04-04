let select = document.getElementById("select");
let list = document.getElementById("list");
let selectText = document.getElementById("selectText");
let options = document.querySelectorAll(".options");
let inputfield = document.getElementById("inputfield");

// Toggle dropdown menu
select.onclick = function () {
    list.classList.toggle("open");
};

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    if (!select.contains(event.target) && !list.contains(event.target)) {
        list.classList.remove("open");
    }
});

// Select option from dropdown
options.forEach(option => {
    option.onclick = function () {
        selectText.innerHTML = this.innerHTML;
        inputfield.placeholder = "Search In " + selectText.innerHTML;
        list.classList.remove("open");
    };
});

let intro = document.querySelector('.intro');
let logo =  document.querySelector('.logo-header');
let logospan = document.querySelectorAll('.helpon')

window.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{

    logospan.forEach((span,idx)=>{
    setTimeout(()=>
      {
        span.classList.add('active');
      },(idx+1)*400)
    });
    setTimeout(()=>{

      logospan.forEach((span,idx)=>{
      setTimeout(()=>
        {
          span.classList.remove('active');
          span.classList.add('fade');
        },(idx+1)*50)
      });
   
    },2000)

      setTimeout(() => {
        intro.style.left = '-210vh'
      }, 2300);
 
  })
})

