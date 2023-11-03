import style from "./About.module.css";
export default function AboutUs() {
  return (
    <div>
      <section className={style.about}  id="about">
        <h1 className={style.heading}>
          <span>About Us</span>
        </h1>
          <div className={style.image}>
            <img src="images/flower hand.jpeg"/>
            <h3>best flower sellers</h3>
          </div>
          <div className={style.content}>
            <h3>why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              similique voluptatum dolore nesciunt ullam temporibus suscipit
              asperiores dolorem? Nesciunt quas quod quidem praesentium
              voluptatem vitae nihil, ullam labore officiis laborum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              porro nam, aspernatur pariatur tempore voluptatum necessitatibus
              nemo amet voluptatibus non.
            </p>
            <a href="#" className={style.btn}>
              learn more
            </a>
          </div>

      </section>
    </div>
  );
}
