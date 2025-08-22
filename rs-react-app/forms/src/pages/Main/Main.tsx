import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../../components/ui/Modal/Modal';
import ControlledForm from '../../components/Form/controllers/Controlled/Controlled';
import UncontrolledForm from '../../components/Form/controllers/Uncontrolled/Uncontrolled';
import type { FormData } from '../../components/Form/Fields/FormFields';
import { selectSentFormData, addNewSubmit } from '../../shared/store/formSlice';
import styles from './Main.module.scss';

export default function MainPage() {
  const [showModal, setShowModal] = useState<
    'uncontrolled' | 'controlled' | null
  >(null);

  const [newSubmissionId, setNewSubmissionId] = useState<string | null>(null);
  const submissions = useSelector(selectSentFormData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (newSubmissionId) {
      const timer = setTimeout(() => {
        setNewSubmissionId(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [newSubmissionId]);

  const handleFormSubmit = (data: Omit<FormData, 'id'>) => {
    dispatch(addNewSubmit(data));
    setNewSubmissionId(
      submissions[submissions.length - 1]?.id || crypto.randomUUID()
    );
    setShowModal(null);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Form Submission Portal</h1>
      </header>

      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => setShowModal('controlled')}
          aria-label="Open controlled form"
        >
          Show Controlled Form
        </button>
        <button
          className={styles.button}
          onClick={() => setShowModal('uncontrolled')}
          aria-label="Open uncontrolled form"
        >
          Show Uncontrolled Form
        </button>
      </div>

      <Modal
        isOpen={showModal !== null}
        onClose={() => setShowModal(null)}
        showCloseButton={true}
      >
        {showModal && (
          <>
            <h2 className={styles.modalTitle}>
              {showModal === 'controlled'
                ? 'React Hook Form'
                : 'Uncontrolled Form'}
            </h2>
            {showModal === 'controlled' ? (
              <ControlledForm onSubmit={handleFormSubmit} />
            ) : (
              <UncontrolledForm onSubmit={handleFormSubmit} />
            )}
          </>
        )}
      </Modal>

      {submissions.length > 0 && (
        <div className={styles.submittedData}>
          <h2>Submitted Forms</h2>
          {submissions.map((data) => (
            <div
              key={data.id}
              className={`${styles.dataCard} ${data.id === newSubmissionId ? styles.highlightNew : ''}`}
            >
              <h3>Form Submission</h3>
              <p>
                <strong>Name:</strong> {data.name}
              </p>
              <p>
                <strong>Age:</strong> {data.age}
              </p>
              <p>
                <strong>Email:</strong> {data.email}
              </p>
              <p>
                <strong>Gender:</strong> {data.gender}
              </p>
              <p>
                <strong>Country:</strong> {data.country}
              </p>
              <p>
                <strong>T&C Accepted:</strong> {data.acceptedTC ? 'Yes' : 'No'}
              </p>
              {data.image && (
                <div>
                  <strong>Image:</strong>
                  <img
                    src={data.image}
                    alt="Uploaded"
                    className={styles.previewImage}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
