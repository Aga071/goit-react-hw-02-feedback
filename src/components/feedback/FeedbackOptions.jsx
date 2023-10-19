import css from './feedback.module.css';
export default function FeedbackOptions({ onLeaveFeedback, options }) {
  const hendlerClick = () => {
    onLeaveFeedback(options);
  };
  return (
    <div className={css['container']}>
      <button className={css['button']} name={options} onClick={hendlerClick}>
        {options}
      </button>
    </div>
  );
}
