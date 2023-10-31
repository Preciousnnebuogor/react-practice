import style from "./Contact.module.css"
export default function Contact() {
    return <div>
        <section className="about" id="about">
   <h1 className="heading"> <span>about</span></h1>
   <div className="row">
    <div className="video-container">
      <video src="image/2023-06-08-165738502.mp4" loop autoplay muted></video>
      <h3>best flower sellers</h3>
    </div>
     <div className="content">
     <h3>why choose us?</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui similique voluptatum dolore nesciunt ullam temporibus suscipit asperiores dolorem? Nesciunt quas quod quidem praesentium voluptatem vitae nihil, ullam labore officiis laborum!</p>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed porro nam, aspernatur pariatur tempore voluptatum necessitatibus nemo amet voluptatibus non.</p>
     <a href="#" className="btn">learn more</a>
     </div>
   </div>
</section>
    </div>
}