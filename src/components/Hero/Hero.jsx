import css from './Hero.module.css';

export const Hero = () => {
  return (
    <section id="about me" className={css.section_hero}>
      <div className={css.block}>
        <img src="/src/images/developer.png" width={500} alt="hero image" />
        <p className={css.name}>I am Karolina Zaiats - Frontend Developer</p>
      </div>
      <div className={css.opys}>
        <p>
          As a junior frontend developer, I am enthusiastic about beginning my
          journey in the world of web development. With a solid understanding of
          HTML, CSS, JavaScript and React, I am eager to apply my knowledge and
          learn from experienced professionals in the field.
        </p>
      </div>
    </section>
  );
};

export default Hero;
