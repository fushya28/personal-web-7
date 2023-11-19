class Cont {

  constructor(author, massage, image){
    this.image = image,
    this.massage = massage,
    this.author = author
  }

  creatingCrateHTML(){
    return `
    <div class="testimonial-cont">
        <img class="image" src="${this.image}" alt="Image Description">
        <p>${this.massage}</p>
        <p>- ${this.author}</p>
      </div>
    `
  }
}

const testimonial1 = new Cont ("Razan", "WOW CUPU BANGEET","https://images.pexels.com/photos/7241294/pexels-photo-7241294.jpeg");
const testimonial2 = new Cont ("Pat", "WOW GANTENG BANGEET","https://images.pexels.com/photos/7047607/pexels-photo-7047607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
const testimonial3 = new Cont ("Nopal", "GGEZ","https://images.pexels.com/photos/7862360/pexels-photo-7862360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

const testimonials = [testimonial1, testimonial2, testimonial3];

testimonialHTML = ``
for(let i = 0; i < testimonials.length; i++){
  testimonialHTML += testimonials[i].creatingCrateHTML()
}

document.querySelector('.container-testimonial').innerHTML = testimonialHTML