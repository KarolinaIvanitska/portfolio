import css from './Skills.module.css';

const Skills = () => {
  return (
    <section className={css.section_skills}>
      <div className={css.skills_container}>
        <h2 className={css.skills}> My skills</h2>
        <div className={css.skills_cards}>
          <div className={css.card}>
            <h3>HTML5</h3>
            <div className={css.overlay}>
              <p>
                Advanced knowledge of semantic HTML, accessibility best
                practices, and SEO optimization.
              </p>
            </div>
          </div>
          <div className={css.card}>
            <h3>CSS3</h3>
            <div className={css.overlay}>
              <p>Proficient in responsive design, Flexbox and CSS Grid.</p>
            </div>
          </div>
          <div className={css.card}>
            <h3>JavaScript</h3>
            <div className={css.overlay}>
              <p>
                Strong understanding of ES6+, DOM manipulation, and event-driven
                programming.
              </p>
            </div>
          </div>
          <div className={css.card}>
            <h3>React</h3>
            <div className={css.overlay}>
              {' '}
              <p>
                Experienced in building dynamic web applications using React
                hooks and state management.
              </p>
            </div>
          </div>
          <div className={css.card}>
            <h3>Git & GitHub</h3>
            <div className={css.overlay}>
              {' '}
              <p>
                Comfortable with version control, branching, and collaboration
                through GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
