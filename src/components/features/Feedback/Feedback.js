import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Feedback.module.scss';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getFeedback } from '../../../redux/feedbackRadux';

const Feedback = () => {
  const clients = useSelector(state => getFeedback(state));

  return (
    <div className={'container ' + styles.main}>
      <div className='row'>
        <div className={'col ' + styles.title}>
          <h3>CLIENT FEEDBACK</h3>
        </div>
        <div className={'col-auto ' + styles.dots}>
          <ul>
            <li>
              <a className={styles.active}>page 1</a>
            </li>
            <li>
              <a>page 2</a>
            </li>
            <li>
              <a>page 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.font}>
        <FontAwesomeIcon icon={faQuoteRight} />
      </div>
      {clients.map(client => {
        return (
          <div key={client.name}>
            <div className={styles.content}>{client.content}</div>
            <div className={styles.author}>
              <div className={styles.image}>
                <img src={client.image} alt={client.name}></img>
              </div>
              <div className={styles.name}>
                <p>
                  <strong>{client.name}</strong>
                </p>
                <p>{client.title}</p>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Feedback;
