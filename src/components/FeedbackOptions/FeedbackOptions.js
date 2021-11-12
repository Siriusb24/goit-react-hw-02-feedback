import PropTypes from 'prop-types';
import s from 'components/FeedbackOptions/Feedback.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  //console.log(Object.keys(options))
  return (
    <ul className={s.list}>
      {Object.keys(options).map(button => {
        return (
          <li key={button} className={s.item}>
            <button
              type="button"
              onClick={onLeaveFeedback}
              className={s.button}
            >
              {button}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
