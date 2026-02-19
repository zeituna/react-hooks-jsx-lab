function About({ image }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I am passionate about web development and enjoy building creative and
        user-friendly applications.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
