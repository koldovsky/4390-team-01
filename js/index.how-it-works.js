document.querySelectorAll('.how-it-works__step').forEach((step) => {
  const addHoverClass = () => step.classList.add('how-it-works__step--hovered');
  const removeHoverClass = () => step.classList.remove('how-it-works__step--hovered');
  step.addEventListener('mouseenter', addHoverClass);
  step.addEventListener('mouseleave', removeHoverClass);
  step.addEventListener('touchstart', addHoverClass);
  step.addEventListener('touchend', removeHoverClass);
  });
document.querySelectorAll('.how-it-works__contact').forEach((step) => {
  const addHoverClass = () => step.classList.add('how-it-works__contact--hovered');
  const removeHoverClass = () => step.classList.remove('how-it-works__contact--hovered');
  step.addEventListener('mouseenter', addHoverClass);
  step.addEventListener('mouseleave', removeHoverClass);
  step.addEventListener('touchstart', addHoverClass);
  step.addEventListener('touchend', removeHoverClass);
});