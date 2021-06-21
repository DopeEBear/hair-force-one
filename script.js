let tl = gsap.timeline();
tl.fromTo(
  '.logo',
  {
    x: -300,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    delay: 1,
    duration: 1.5,
  }
)
  .fromTo(
    '.links',
    {
      x: 300,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
    },
    '>-1.5'
  )
  .fromTo(
    '.copy-rights',
    {
      y: -1000,
      opacity: 0,
    },
    {
      y: 0,
      rotation: 360,
      opacity: 1,
      duration: 2,
    },
    '>-1'
  )
  .fromTo(
    '.social-links',
    {
      x: 300,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.25,
    },
    '>-.5'
  );
